import type { Project, SkillCategory, EducationItem, Certification } from './types';

export const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Education', id: 'education' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Contact', id: 'contact' },
];

export const PROJECTS: Project[] = [
  {
    name: 'Juta Medical & Dental Centre',
    date: '04/2024',
    description: 'Website & mobile app (Android) for a clinic. Features: booking forms, contact listing, responsive UI, basic auth, and user-role docs. Implemented with Android Studio & responsive front-end; used Git & Trello for project workflow.',
    technologies: ['Android Studio', 'HTML/CSS', 'Git', 'UI/UX'],
    githubUrl: 'https://github.com/katlegoxoxo',
    imageUrl: 'https://picsum.photos/seed/juta/800/600',
  },
  {
    name: 'Image Gen AI',
    date: '08/2025',
    description: 'Created an AI-powered image generation app using modern JS and APIs for creative automation.',
    technologies: ['HTML', 'JavaScript', 'APIs'],
    githubUrl: 'https://github.com/katlegoxoxo/image-gen-xo.git',
    imageUrl: 'public/images/slatt.png',
  },
  {
    name: 'AI Fundamentals Chatbot',
    date: '08/2025',
    description: 'Created an AI-powered chatbot using no-code tools, demonstrating an understanding of conversational AI principles and rapid prototyping.',
    technologies: ['No-Code AI', 'Chatbot Design'],
    githubUrl: 'https://github.com/katlegoxoxo',
    imageUrl: 'https://picsum.photos/seed/chatbot/800/600',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming & Data',
    skills: [
      { name: 'Java', icon: 'fab fa-java' },
      { name: 'C#', icon: 'fas fa-code' },
      { name: 'Python (basic)', icon: 'fab fa-python' },
      { name: 'SQL', icon: 'fas fa-database' },
      { name: 'HTML & CSS', icon: 'fab fa-html5' },
      { name: 'TypeScript', icon: 'fas fa-code' },
    ],
  },
  {
    title: 'Tools & Cloud',
    skills: [
      { name: 'Git & GitHub', icon: 'fab fa-github' },
      { name: 'Android Studio', icon: 'fab fa-android' },
      { name: 'VS Code', icon: 'fas fa-code' },
      { name: 'Power BI (basic)', icon: 'fas fa-chart-line' },
      { name: 'Google Cloud & AI', icon: 'fab fa-google' },
      { name: 'Trello', icon: 'fab fa-trello' },
    ],
  },
];

export const EDUCATION: EducationItem[] = [
    { 
        degree: 'Diploma in Software Development', 
        institution: 'IIE Rosebank College', 
        dateRange: '2022-2024',
        certificateUrl: 'https://picsum.photos/seed/diploma-cert/800/1120'
    }
];

export const CERTIFICATIONS: Certification[] = [
    { name: 'Introduction to Generative AI', imageUrl: 'https://picsum.photos/seed/genai/100/100', verifyUrl: 'https://www.cloudskillsboost.google/public_profiles/28ea05c6-984f-4824-9941-2e9a745a386e/badges/8636638' },
    { name: 'Innovating with Google Cloud AI', imageUrl: 'https://picsum.photos/seed/gcai/100/100', verifyUrl: '#' },
    { name: 'Java & Python Certificates', imageUrl: 'https://picsum.photos/seed/javacert/100/100', verifyUrl: '#' },
];