// TechyStack blog posts.
// Content is stored locally for now — later this can be fetched from MongoDB
// through a REST API. Each post has a `slug` used by the /blog/:slug route.
//
// Content block types:
//   { type: 'p', text }
//   { type: 'h2', text }
//   { type: 'h3', text }
//   { type: 'ul', items: [...] }
//   { type: 'quote', text }
//   { type: 'code', code }

export const blogCategories = [
  'All',
  'Technology',
  'Web Development',
  'Artificial Intelligence',
  'IT Solutions',
  'Digital Transformation',
  'UI/UX Design',
];

export const blogPosts = [
  {
    slug: 'future-of-web-development-2026',
    title: 'The Future of Web Development in 2026',
    excerpt: 'From edge computing to AI-assisted coding, explore the trends reshaping how modern web applications are built and shipped.',
    category: 'Web Development',
    author: 'Rahul Verma',
    authorRole: 'Lead Full-Stack Developer',
    authorImage: 'https://i.pravatar.cc/150?img=33',
    date: '2026-11-05',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/webdev2026/1200/675',
    featured: true,
    content: [
      { type: 'p', text: 'Web development is evolving faster than ever. What took a team of five engineers five years ago can now be prototyped in an afternoon — but shipping production-grade software at scale remains a craft that demands deep expertise.' },
      { type: 'h2', text: 'AI-Assisted Development Is Here to Stay' },
      { type: 'p', text: 'Tools like GitHub Copilot, Cursor and modern LLM APIs are not replacing developers — they are amplifying them. The engineers who thrive will be those who learn to direct AI effectively, review generated code rigorously, and focus on architecture and product thinking.' },
      { type: 'quote', text: 'AI writes the boilerplate. Engineers own the outcomes.' },
      { type: 'h2', text: 'The Edge Becomes the Default' },
      { type: 'p', text: 'With edge runtimes maturing, latency-sensitive logic is moving closer to users. Frameworks like Next.js, Astro and SvelteKit now support edge deployment natively, making global performance achievable without complex infrastructure.' },
      { type: 'h3', text: 'What this means for your business' },
      { type: 'ul', items: [
        'Faster page loads directly improve conversion rates and SEO rankings.',
        'Reduced server costs as compute shifts to distributed edge networks.',
        'Better resilience — applications degrade gracefully during regional outages.',
      ]},
      { type: 'p', text: 'At TechyStack, we design architectures that take advantage of these shifts without over-engineering. The best technology is the one your team can actually maintain.' },
    ],
  },
  {
    slug: 'ai-transforming-enterprise-it',
    title: 'How AI Is Transforming Enterprise IT',
    excerpt: 'From intelligent automation to predictive maintenance, AI is quietly rewriting the economics of enterprise infrastructure.',
    category: 'Artificial Intelligence',
    author: 'Kavya Reddy',
    authorRole: 'AI/ML Engineer',
    authorImage: 'https://i.pravatar.cc/150?img=44',
    date: '2026-10-28',
    readTime: '8 min read',
    image: 'https://picsum.photos/seed/ai-IT/1200/675',
    featured: false,
    content: [
      { type: 'p', text: 'Enterprise IT has historically been a cost centre. AI is changing that equation — turning infrastructure into a source of insight, automation and competitive advantage.' },
      { type: 'h2', text: 'Predictive Operations' },
      { type: 'p', text: 'Modern observability platforms now ingest logs, metrics and traces to predict failures before they happen. Teams report up to 40% reductions in unplanned downtime after adopting ML-driven anomaly detection.' },
      { type: 'h2', text: 'Intelligent Automation' },
      { type: 'p', text: 'Routine operational tasks — ticket triage, capacity planning, access reviews — are increasingly handled by AI agents with human oversight. The result is faster resolution times and happier on-call engineers.' },
      { type: 'code', code: '// Simplified example: anomaly score on API latency\nconst score = model.predict({ p50, p95, errorRate, region });\nif (score > threshold) pageOnCall(score);' },
      { type: 'p', text: 'The organisations winning with AI share one trait: they start with a narrow, high-value use case and expand deliberately rather than chasing moonshots.' },
    ],
  },
  {
    slug: 'building-scalable-react-apps',
    title: 'Building Scalable React Applications: Best Practices',
    excerpt: 'Architecture patterns, state management strategies and performance techniques for React apps that grow with your business.',
    category: 'Web Development',
    author: 'Rahul Verma',
    authorRole: 'Lead Full-Stack Developer',
    authorImage: 'https://i.pravatar.cc/150?img=33',
    date: '2026-10-20',
    readTime: '7 min read',
    image: 'https://picsum.photos/seed/reactscale/1200/675',
    featured: false,
    content: [
      { type: 'p', text: 'React is easy to start with and famously easy to make a mess of. Scale demands discipline around boundaries, state and rendering.' },
      { type: 'h2', text: 'Component Architecture' },
      { type: 'p', text: 'Keep components focused on a single responsibility. Feature-based folder structures scale better than type-based ones as teams grow.' },
      { type: 'h2', text: 'State Management Without the Drama' },
      { type: 'p', text: 'Server state belongs in a query cache, not in Redux. Local UI state belongs in React. Global client state is rare — reach for it only when you truly need it.' },
      { type: 'ul', items: [
        'Colocate state as close to where it is used as possible.',
        'Prefer composition over prop drilling and giant context objects.',
        'Code-split routes and heavy components aggressively.',
      ]},
      { type: 'p', text: 'Performance is a feature. Profile before optimising, memoise deliberately, and let the framework do its job.' },
    ],
  },
  {
    slug: 'digital-transformation-roadmap',
    title: 'A Practical Digital Transformation Roadmap',
    excerpt: 'Skip the consulting-deck clichés. Here is the phased approach we use with clients to modernise operations without halting the business.',
    category: 'Digital Transformation',
    author: 'Aarav Sharma',
    authorRole: 'Chief Executive Officer',
    authorImage: 'https://i.pravatar.cc/150?img=12',
    date: '2026-10-12',
    readTime: '9 min read',
    image: 'https://picsum.photos/seed/digitalroad/1200/675',
    featured: false,
    content: [
      { type: 'p', text: 'Most digital transformation programmes fail not because of technology, but because of sequencing. You cannot modernise everything at once — and you should not try.' },
      { type: 'h2', text: 'Phase 1: Foundation' },
      { type: 'p', text: 'Audit your systems, data and workflows. Identify the pain points that cost the most money or time. Quick wins here build the credibility needed for bigger moves.' },
      { type: 'h2', text: 'Phase 2: Core Modernisation' },
      { type: 'p', text: 'Replace or wrap legacy systems that touch revenue. Prioritise customer-facing journeys — they deliver visible ROI fastest.' },
      { type: 'quote', text: 'Transformation is a series of small, confident bets — not one giant leap.' },
      { type: 'h2', text: 'Phase 3: Intelligence' },
      { type: 'p', text: 'Once data flows cleanly through modern systems, layer on analytics and AI. This is where transformation compounds into genuine competitive advantage.' },
    ],
  },
  {
    slug: 'design-systems-that-scale',
    title: 'Design Systems That Actually Scale',
    excerpt: 'Lessons from building component libraries used by dozens of engineers — tokens, documentation and governance that stick.',
    category: 'UI/UX Design',
    author: 'Sneha Iyer',
    authorRole: 'UI/UX Design Lead',
    authorImage: 'https://i.pravatar.cc/150?img=45',
    date: '2026-10-03',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/designsys/1200/675',
    featured: false,
    content: [
      { type: 'p', text: 'A design system is not a Figma file. It is a living contract between design and engineering — and it only works if both sides treat it that way.' },
      { type: 'h2', text: 'Start With Tokens' },
      { type: 'p', text: 'Design tokens — colour, spacing, typography scales — are the atoms of consistency. Define them once and let every component inherit.' },
      { type: 'h2', text: 'Documentation Is the Product' },
      { type: 'p', text: 'Every component needs usage guidelines, do/don\'t examples and accessibility notes. Undocumented components get misused — and then forked.' },
      { type: 'p', text: 'Governance matters too: a lightweight RFC process for new components prevents the library from becoming a dumping ground.' },
    ],
  },
  {
    slug: 'cloud-cost-optimization-guide',
    title: 'Cloud Cost Optimisation: A Practical Guide',
    excerpt: 'Rightsizing, reserved capacity and FinOps practices that typically cut cloud bills by 25–40% without touching performance.',
    category: 'IT Solutions',
    author: 'Arjun Mehta',
    authorRole: 'DevOps & Cloud Engineer',
    authorImage: 'https://i.pravatar.cc/150?img=59',
    date: '2026-09-24',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/cloudcost/1200/675',
    featured: false,
    content: [
      { type: 'p', text: 'Cloud spend creeps. A resource here, a forgotten snapshot there — and suddenly the monthly bill is 30% higher than it needs to be.' },
      { type: 'h2', text: 'Measure Before You Cut' },
      { type: 'p', text: 'Tag everything by team and project from day one. You cannot optimise what you cannot attribute.' },
      { type: 'h2', text: 'The Quick Wins' },
      { type: 'ul', items: [
        'Rightsize instances — most workloads run comfortably at 60–70% of provisioned capacity.',
        'Delete unattached EBS volumes, old AMIs and unused load balancers.',
        'Move steady-state workloads to reserved instances or savings plans.',
      ]},
      { type: 'p', text: 'FinOps is not a one-time cleanup — it is a cultural practice of shared accountability for cloud spend across engineering and finance.' },
    ],
  },
  {
    slug: 'seo-in-the-age-of-ai-search',
    title: 'SEO in the Age of AI Search',
    excerpt: 'Search is changing. How to keep your brand visible as AI assistants and answer engines reshape discovery.',
    category: 'Technology',
    author: 'Ananya Bose',
    authorRole: 'Digital Marketing Manager',
    authorImage: 'https://i.pravatar.cc/150?img=25',
    date: '2026-09-15',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/aiseo/1200/675',
    featured: false,
    content: [
      { type: 'p', text: 'Generative search experiences are changing how people discover information. The brands that adapt will capture attention; the ones that do not will become invisible.' },
      { type: 'h2', text: 'What Is Changing' },
      { type: 'p', text: 'AI assistants synthesise answers instead of listing links. This compresses the top of the funnel — but it also rewards authoritative, well-structured content that models can confidently cite.' },
      { type: 'h2', text: 'The Playbook' },
      { type: 'ul', items: [
        'Double down on genuinely useful, original content — thin SEO pages are being filtered out.',
        'Structure articles with clear headings, definitions and FAQs that AI can parse.',
        'Build entity authority: consistent branding, citations and digital PR.',
        'Monitor AI-referred traffic as a new channel alongside classic organic search.',
      ]},
      { type: 'p', text: 'SEO is not dead — it is maturing into generative engine optimisation. The fundamentals of quality still win.' },
    ],
  },
  {
    slug: 'zero-trust-security-for-smes',
    title: 'Zero-Trust Security for Growing Businesses',
    excerpt: 'You do not need an enterprise budget to adopt zero-trust principles. Here is a pragmatic starting point for SMEs.',
    category: 'IT Solutions',
    author: 'Priya Nair',
    authorRole: 'Chief Technology Officer',
    authorImage: 'https://i.pravatar.cc/150?img=47',
    date: '2026-09-06',
    readTime: '7 min read',
    image: 'https://picsum.photos/seed/zerotrust/1200/675',
    featured: false,
    content: [
      { type: 'p', text: 'The perimeter is gone. Employees work from anywhere, apps live in the cloud, and attackers no longer need to breach your network — they phish a credential and walk in.' },
      { type: 'h2', text: 'What Zero Trust Actually Means' },
      { type: 'p', text: 'Never trust, always verify. Every access request is authenticated, authorised and encrypted — regardless of where it originates.' },
      { type: 'h2', text: 'A Pragmatic Rollout' },
      { type: 'ul', items: [
        'Enforce MFA everywhere — this single step blocks the vast majority of account takeovers.',
        'Adopt single sign-on with conditional access policies.',
        'Segment access: people should only reach the systems their role requires.',
        'Log everything and review anomalies weekly.',
      ]},
      { type: 'p', text: 'Zero trust is a journey, not a product purchase. Start with identity, then expand outward.' },
    ],
  },
];

export const getPostBySlug = (slug) => blogPosts.find(p => p.slug === slug);

export const getRelatedPosts = (post, count = 3) =>
  blogPosts
    .filter(p => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 0) - (b.category === post.category ? -1 : 0))
    .slice(0, count);
