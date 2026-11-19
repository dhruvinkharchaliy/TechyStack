import member1 from '../assets/team-member-1.jpg';
import member2 from '../assets/team-member-2.jpg';
import member3 from '../assets/team-member-3.jpg';
import member4 from '../assets/team-member-4.jpg';
import member5 from '../assets/team-member-5.jpg';
import member6 from '../assets/team-member-6.jpg';
import member7 from '../assets/team-member-7.jpg';
import member8 from '../assets/team-member-8.jpg';

export const teamMembers = [
  {
    id: 1,
    name: 'Aarav Sharma',
    role: 'Chief Executive Officer',
    bio: 'Visionary leader with 15+ years in IT consulting and digital transformation across enterprise clients.',
    image: member1,
    linkedin: 'https://www.linkedin.com',
    twitter: 'https://twitter.com',
    email: 'aarav.sharma@techystack.com',
    skills: ['Strategy', 'Leadership', 'Enterprise IT'],
    experience: '15+ years',
  },
  {
    id: 2,
    name: 'Priya Nair',
    role: 'Chief Technology Officer',
    bio: 'Full-stack architect specialising in scalable cloud platforms, AI integrations and modern web systems.',
    image: member2,
    linkedin: 'https://www.linkedin.com',
    twitter: 'https://twitter.com',
    email: 'priya.nair@techystack.com',
    skills: ['Cloud Architecture', 'AI/ML', 'System Design'],
    experience: '12+ years',
  },
  {
    id: 3,
    name: 'Rahul Verma',
    role: 'Lead Full-Stack Developer',
    bio: 'React, Node.js and TypeScript expert who has shipped products used by millions of users worldwide.',
    image: member3,
    linkedin: 'https://www.linkedin.com',
    github: 'https://github.com',
    email: 'rahul.verma@techystack.com',
    skills: ['React', 'Node.js', 'TypeScript'],
    experience: '9 years',
  },
  {
    id: 4,
    name: 'Sneha Iyer',
    role: 'UI/UX Design Lead',
    bio: 'Award-winning designer crafting intuitive, accessible interfaces that users love to interact with.',
    image: member4,
    linkedin: 'https://www.linkedin.com',
    dribbble: 'https://dribbble.com',
    email: 'sneha.iyer@techystack.com',
    skills: ['Product Design', 'Design Systems', 'User Research'],
    experience: '8 years',
  },
  {
    id: 5,
    name: 'Arjun Mehta',
    role: 'DevOps & Cloud Engineer',
    bio: 'AWS and Kubernetes specialist ensuring our infrastructure is resilient, observable and cost-efficient.',
    image: member5,
    linkedin: 'https://www.linkedin.com',
    github: 'https://github.com',
    email: 'arjun.mehta@techystack.com',
    skills: ['AWS', 'Kubernetes', 'CI/CD'],
    experience: '7 years',
  },
  {
    id: 6,
    name: 'Kavya Reddy',
    role: 'AI/ML Engineer',
    bio: 'Builds production-grade machine learning systems, from LLM integrations to recommendation engines.',
    image: member6,
    linkedin: 'https://www.linkedin.com',
    email: 'kavya.reddy@techystack.com',
    skills: ['Python', 'LLMs', 'MLOps'],
    experience: '6 years',
  },
  {
    id: 7,
    name: 'Vikram Singh',
    role: 'QA & Automation Lead',
    bio: 'Champions quality engineering with automated test suites that keep releases fast and bug-free.',
    image: member7,
    linkedin: 'https://www.linkedin.com',
    email: 'vikram.singh@techystack.com',
    skills: ['Selenium', 'Cypress', 'Test Strategy'],
    experience: '10 years',
  },
  {
    id: 8,
    name: 'Ananya Bose',
    role: 'Digital Marketing Manager',
    bio: 'Drives growth through SEO, performance marketing and data-led brand storytelling for our clients.',
    image: member8,
    linkedin: 'https://www.linkedin.com',
    twitter: 'https://twitter.com',
    email: 'ananya.bose@techystack.com',
    skills: ['SEO', 'Paid Media', 'Analytics'],
    experience: '7 years',
  },
];

export const departments = [...new Set(teamMembers.map(m => m.role.split(' ')[0]))];
