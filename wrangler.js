const GITHUB_AUTHORIZE_URL = 'https://github.com/login/oauth/authorize';
const GITHUB_TOKEN_URL = 'https://github.com/login/oauth/access_token';

const getEnvValue = (env, key, fallback = '') => {
  const value = env[key];
  return value && typeof value === 'string' ? value : fallback;
};

const buildRedirectUri = (request, env) => {
  const baseUrl = getEnvValue(env, 'OAUTH_BASE_URL', '');
  if (baseUrl) {
    return `${baseUrl.replace(/\/$/, '')}/callback`;
  }
  const url = new URL(request.url);
  return `${url.origin}/callback`;
};

const jsonResponse = (message, status = 400) =>
  new Response(JSON.stringify({ error: message }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const parseFormEncoded = (body) => {
  const params = new URLSearchParams(body);
  return Object.fromEntries(params.entries());
};

const buildAuthUrl = (request, env) => {
  const url = new URL(request.url);
  const scope = url.searchParams.get('scope') || url.searchParams.get('scopes') || 'repo';
  const clientId = getEnvValue(env, 'GITHUB_CLIENT_ID');
  if (!clientId) return null;

  const redirectUri = buildRedirectUri(request, env);
  const state = crypto.randomUUID();
  const authUrl = new URL(GITHUB_AUTHORIZE_URL);
  authUrl.searchParams.set('client_id', clientId);
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('scope', scope);
  authUrl.searchParams.set('state', state);
  return authUrl.toString();
};

const handleAuth = (request, env) => {
  const authUrl = buildAuthUrl(request, env);
  if (!authUrl) {
    return jsonResponse('Missing GITHUB_CLIENT_ID.');
  }
  return Response.redirect(authUrl, 302);
};

const handleCallback = async (request, env) => {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  if (error) {
    return jsonResponse(`OAuth error: ${error}`);
  }
  if (!code) {
    return jsonResponse('Missing OAuth code.');
  }

  const clientId = getEnvValue(env, 'GITHUB_CLIENT_ID');
  const clientSecret = getEnvValue(env, 'GITHUB_CLIENT_SECRET');
  if (!clientId || !clientSecret) {
    return jsonResponse('Missing GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET.');
  }

  const redirectUri = buildRedirectUri(request, env);
  const tokenResponse = await fetch(GITHUB_TOKEN_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri,
    }),
  });

  const raw = await tokenResponse.text();
  const payload = raw.includes('access_token=') ? parseFormEncoded(raw) : JSON.parse(raw);

  if (!payload.access_token) {
    return jsonResponse('Failed to obtain access token.', 500);
  }

  const responseHtml = `<!DOCTYPE html>
<html>
  <body>
    <script>
      (function () {
        var message = 'authorization:github:success:' + JSON.stringify({ token: ${JSON.stringify(payload.access_token)} });
        if (window.opener) {
          window.opener.postMessage(message, '*');
        }
        window.close();
      })();
    </script>
  </body>
</html>`;

  return new Response(responseHtml, {
    headers: { 'Content-Type': 'text/html' },
  });
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/auth')) {
      return handleAuth(request, env);
    }
    if (url.pathname.startsWith('/callback')) {
      return handleCallback(request, env);
    }
    return new Response('Not Found', { status: 404 });
  },
};
