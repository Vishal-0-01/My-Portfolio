// Mock data — used when Sanity is not yet connected.
// Replace with real Sanity data by configuring .env.local

export const mockCaseStudies = [
  {
    _id: '1',
    title: 'Flexi-Cap Portfolio Optimization',
    slug: 'flexi-cap-portfolio-optimization',
    summary: 'Monte Carlo simulation + Sharpe/Sortino optimization across 4 AMC risk scenarios.',
    tags: ['Finance', 'Investment', 'Valuation'],
    date: '2024-03-15',
    featured: true,
  },
  {
    _id: '2',
    title: "Botanic Garden Revenue Strategy",
    slug: 'botanic-garden-strategy',
    summary: 'Revenue diversification and 3-year demand forecasting for a public-facing institution.',
    tags: ['Strategy', 'Operations'],
    date: '2024-01-10',
    featured: true,
  },
  {
    _id: '3',
    title: 'AMC Active Share Analysis',
    slug: 'amc-active-share-analysis',
    summary: 'Quantifying true active management across large-cap mutual funds in India.',
    tags: ['Finance', 'Investment'],
    date: '2023-11-20',
    featured: true,
  },
  {
    _id: '4',
    title: 'IS-LM Policy Simulation',
    slug: 'is-lm-policy-simulation',
    summary: 'Applied IS-LM and Mundell-Fleming to assess RBI monetary policy under external shocks.',
    tags: ['Macro', 'Finance'],
    date: '2023-09-05',
    featured: false,
  },
]

export const mockInsights = [
  {
    _id: '1',
    title: "Why Most 'Active' Funds Are Just Expensive Index Funds",
    slug: 'active-funds-index-replication',
    date: '2024-04-01',
    readTime: 5,
    excerpt: 'Active share below 60% is a red flag. Here\'s how to measure it and what it tells you about fund managers.',
    tags: ['Investment', 'Finance'],
  },
  {
    _id: '2',
    title: 'Nifty 50 P/E as a Market Signal: A Data-Driven View',
    slug: 'nifty-pe-market-signal',
    date: '2024-03-10',
    readTime: 7,
    excerpt: 'Using historical P/E and P/B bands to determine market valuation zones for systematic entry/exit.',
    tags: ['Macro', 'Valuation'],
  },
  {
    _id: '3',
    title: 'The McKinsey Problem-Structuring Framework, Simplified',
    slug: 'mckinsey-problem-structuring',
    date: '2024-02-14',
    readTime: 4,
    excerpt: 'MECE, hypothesis trees, and issue maps — applied to real business decisions, not consulting decks.',
    tags: ['Strategy'],
  },
]

export const mockTools = [
  {
    _id: '1',
    name: 'Flexi-Cap Portfolio Optimizer',
    slug: 'flexi-cap-optimizer',
    description: 'A React-based Monte Carlo simulation engine for Indian AMC flexi-cap mutual funds. Generates optimized weights across 4 risk-constrained scenarios with Sharpe/Sortino/Alpha metrics.',
    whyItMatters: 'Most retail investors allocate to funds based on past returns. This tool shows you risk-adjusted returns and how different allocations behave under simulated market conditions.',
    link: '/tools/flexi-cap-optimizer',
    status: 'live',
    tags: ['Finance', 'Investment'],
  },
  {
    _id: '2',
    name: 'Nifty Valuation Dashboard',
    slug: 'nifty-valuation',
    description: 'Tracks Nifty 50 P/E and P/B ratios against historical percentile bands to generate a market valuation signal.',
    whyItMatters: 'Valuation context is the single most underused tool in retail investing. This makes it visible.',
    link: '/tools/nifty-valuation',
    status: 'in-progress',
    tags: ['Macro', 'Valuation'],
  },
]

export const mockJourney = [
  {
    _id: '1',
    title: 'MBAFT — Faculty of Management Studies, Delhi University',
    date: '2023-07-01',
    type: 'experience',
    description: 'Postgraduate program in management. Coursework spanning macroeconomics, financial analysis, strategy, and operations. Applied quantitative methods to real business problems.',
    organization: 'FMS, Delhi University',
  },
  {
    _id: '2',
    title: 'Built Flexi-Cap Portfolio Optimizer',
    date: '2024-03-01',
    type: 'project',
    description: 'Designed and built a full-stack React application with Monte Carlo simulation, efficient frontier visualization, and 4-scenario risk optimization for Indian equity mutual funds.',
    organization: 'Independent',
  },
  {
    _id: '3',
    title: 'AMC Active Share Research',
    date: '2024-01-15',
    type: 'project',
    description: 'Analyzed 20+ large-cap Indian mutual funds for active share against benchmark. Built a quantitative framework to identify genuine active management vs. closet indexing.',
    organization: 'Independent',
  },
  {
    _id: '4',
    title: 'Macroeconomics Exam — IS-LM & Mundell-Fleming',
    date: '2023-10-01',
    type: 'achievement',
    description: 'Produced a 13-graph analytical report applying IS-LM, AD-AS, and Mundell-Fleming frameworks to monetary policy scenarios. Automated in Python with matplotlib.',
    organization: 'FMS, Delhi University',
  },
]
