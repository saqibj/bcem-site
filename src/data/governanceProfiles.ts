export type GovernanceProfile = {
  slug: string;
  name: string;
  role: string;
  summary: string;
  focus: string[];
};

export const boardMembers: GovernanceProfile[] = [
  {
    slug: 'muneer-kamal',
    name: 'Muneer Kamal',
    role: 'Chairman',
    summary:
      'Provides strategic leadership and oversight for BCEM, guiding governance priorities and long-term value creation.',
    focus: ['Board leadership', 'Strategic oversight', 'Stakeholder stewardship'],
  },
  {
    slug: 'razi-ur-rahman-khan',
    name: 'Razi-Ur-Rahman Khan',
    role: 'Independent Director',
    summary:
      'Supports independent oversight with a focus on governance discipline and transparent decision-making.',
    focus: ['Independent oversight', 'Governance standards', 'Risk review'],
  },
  {
    slug: 'rabiya-javeri',
    name: 'Rabiya Javeri',
    role: 'Independent Director',
    summary:
      'Provides independent perspective on strategy, compliance, and stakeholder interests.',
    focus: ['Compliance', 'Strategy review', 'Stakeholder engagement'],
  },
  {
    slug: 'hasan-reza-ur-rahim',
    name: 'Hasan Reza Ur Rahim',
    role: 'Independent Director',
    summary:
      'Brings governance expertise with a focus on sustainable portfolio growth and accountability.',
    focus: ['Portfolio governance', 'Performance oversight', 'Sustainability'],
  },
  {
    slug: 'farrukh-zaman',
    name: 'Farrukh Zaman',
    role: 'Non-Executive Director',
    summary:
      'Advises on strategic initiatives and ensures execution aligns with board objectives.',
    focus: ['Strategic guidance', 'Operational alignment', 'Governance support'],
  },
  {
    slug: 'saad-uz-zaman',
    name: 'Saad Uz Zaman',
    role: 'Executive Director',
    summary:
      'Oversees execution of board priorities with focus on operational delivery and growth.',
    focus: ['Execution leadership', 'Operational strategy', 'Growth initiatives'],
  },
  {
    slug: 'saleem-uz-zaman',
    name: 'Saleem uz Zaman',
    role: 'Executive Director',
    summary:
      'Leads governance-aligned operations and supports portfolio performance initiatives.',
    focus: ['Operational governance', 'Portfolio performance', 'Business planning'],
  },
  {
    slug: 'nabeel-malik-board',
    name: 'Nabeel Malik',
    role: 'Chief Executive',
    summary:
      'Connects board priorities with execution, guiding the organization’s strategic direction.',
    focus: ['Executive leadership', 'Strategy execution', 'Organizational performance'],
  },
];

export const managementTeam: GovernanceProfile[] = [
  {
    slug: 'nabeel-malik',
    name: 'Nabeel Malik',
    role: 'Chief Executive',
    summary:
      'Leads the organization with a focus on performance, growth, and stakeholder value.',
    focus: ['Executive leadership', 'Strategic growth', 'Stakeholder value'],
  },
  {
    slug: 'talha-ameer',
    name: 'Talha Ameer',
    role: 'MD Investments',
    summary:
      'Guides investment strategy, underwriting, and portfolio optimization initiatives.',
    focus: ['Investment strategy', 'Due diligence', 'Portfolio optimization'],
  },
  {
    slug: 'azam-farooq',
    name: 'Azam Farooq',
    role: 'Chief Financial Officer',
    summary:
      'Oversees finance, reporting, and capital management for BCEM.',
    focus: ['Financial reporting', 'Capital management', 'Risk controls'],
  },
  {
    slug: 'wahab-ali',
    name: 'Wahab Ali',
    role: 'Technical Head',
    summary:
      'Leads technical delivery and operational performance across the project portfolio.',
    focus: ['Technical delivery', 'Operational performance', 'Asset reliability'],
  },
];
