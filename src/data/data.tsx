import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Rita Lin's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Rita Lin.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Taipei based <strong className="text-stone-100">Senior AI Engineer</strong>, currently working
        at <strong className="text-stone-100"> a technology company </strong> helping build a AI LLM related model, writing agile management projeccts, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">MMA</strong>,
        Bouldering <strong className="text-stone-100">Music Festival</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Taiwan</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `As a Senior AI Engineer at Advantech, I apply my expertise in GAN and recommender systems to create innovative solutions for various industries. I collaborate with cross-functional teams to deliver high-quality products that meet the needs and expectations of our clients.
Previously, I was a Senior Data Scientist at Gamania Digital Entertainment, where I analyzed the profitability data of mobile games and provided data-driven insights for business decisions. I also reduced the costs of using App Annie by web crawling the metadata from API resources using R or Python and PostgreSQL. I have a Master's degree in MBA from National Sun Yat-Sen University, where I developed my skills in data science, data visualization, and Spanish. I am passionate about machine learning, artificial neural networks, and statistics, and I enjoy creating and selling my own paintings on OpenSea.`,
  aboutItems: [
    {label: 'Location', text: 'Taiwan, Taipei', Icon: MapIcon},
    {label: 'Age', text: '30', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Taiwan / Taiwanese', Icon: FlagIcon},
    {label: 'Interests', text: 'Music Festival, Boxing, Boulding', Icon: SparklesIcon},
    {label: 'Study', text: 'National Sun-Yat-Sen University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Technology Company', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Programming Language',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'SQL',
        level: 9,
      },
      {
        name: 'R',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 4,
      },
      {
        name: 'Yark',
        level: 3,
      },
      {
        name: 'Golang',
        level: 3,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 3,
      },
      {
        name: 'Flutter',
        level: 3,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
// 移除所有 portfolioImageX 匯入，因為 portfolioItems 陣列是空的
export const portfolioItems: PortfolioItem[] = [
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2019',
    location: 'Taiwan, Kaohsiung',
    title: 'Masters of Business Administration, Master',
    content: (
      <p>
        GPA 4.09 <br/>
        Thesis: An analysis of features of the total revenue of the concerts based on Machine Learning (Support Vector Machine)
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2025 - Present',
    location: 'See U Tech Co., Ltd',
    title: 'Project Manager',
    content: (
      <p>
        ●Executed the Ministry of Digital Affairs Innovation Subsidy Project.
        <br/>●Built an intelligent exam question bank using Python.
        <br/>●Implemented process management by automating scheduling across the examination system.
      </p>
    ),
  },
  {
    date: 'March 2022 - March 2024',
    location: 'Advantech Co., Ltd',
    title: 'Senior AI Engineer',
    content: (
      <p>
        ● Al Recommendation ToolDeployment – Utilized unsupervised learning techniquessuch asthe PCA model, Collaborative Filtering,
        and Cosine Similarity, to establish a cloud ETL pipeline in Microsoft Azure ML Studio to support the Al recommendation system
        for Advantech's PaaS e-commerce platform.
        <br/>● Pricing Strategy Optimization – Worked as a project owner to research and develop a model to evaluate the bargaining power
        between customers and company. Cooperated with the pricing team to set appropriate prices or discounts and maximize our
        business and revenue growth.
        <br/>● Project coordinator in the Al Strategy Group – As a core member and the project coordinator in the AI strategic group, worked
        with the management team on AI-related projects and was responsible for all the projects within the AI domain.
        <br/>● IT Vocal for Data visualization – As an IT department vocal, I cooperated with the data team to establish a data visualization platform, enabling better insights and decision-making across the organization.
      </p>
    ),
  },
  {
    date: "August 2021 - January 2022",
    location: "Gamania Co., Ltd",
    title: "Senior Data Scientist",
    content: (
      <p>
        ●API Integration and Data Reshaping – Used R and Python for web crawling to retrieve data from APIs and then used PostgreSQL
        to clean and reshape the data, determining which games are the most profitable in our company and assisting the business team
        on decision making
        <br />● Feature Extraction from Low-Quality Images – Used a machine learning GAN model to extract features from low-quality images,
        allowing us to identify player preferences and enhance the gaming experience.
      </p>
    ),
  },
  {
    date: "April 2021 - August 2021",
    location: "Taiwan Semiconductor Manufacturing Company, Ltd",
    title: "Supervisor",
    content: (
      <p>
        ●Process Improvement and Quality Control – Produced daily wafer quality reports to track yield, identify rework causes, and
        improve overall process consistency.
        <br />● Team Management and Performance Evaluation – Supervised 80 employees with regular performance reviews and coaching,
        earning recognition with the Best Newcomer, Rising Star, and Plant Manager Awards.
      </p>
    ),
  },
  {
    date: "July 2019 - March 2021",
    location: "CTBC Financial Holding Co., Ltd",
    title: "Management Associate (Data Engineer)",
    content: (
      <p>
        ● Smile Check-in Project – As the project developer, we used the Yolo V4 model to capture facial expressions, specifically focusing
        on smiles. This enabled our employees to check in quickly at headquarters by smiling at the camera.
        <br />● Dress Detection System Development – Collaborated with HR teams to develop a machine learning system that automatically
        inspects employees' attire as they pass by the camera to ensure compliance with company standards.
        <br />● Credit Card Fraud Detection Project – Used a machine learning program with six algorithms to identify potential fraudulent credit
        card transactions. This approach saved manual review costs and reduced client inconvenience from unnecessary customer service
        calls.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Reach out to Rita Lin.',
  items: [
    {
      type: ContactType.Email,
      text: 'msmile09@hotmail.com',
      href: 'mailto:msmile09@hotmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Taiwan, Taipei',
      href: 'https://www.google.ca/maps/place/Taipei,+Taiwan/@25.0330,121.5654,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@ritalinyutzu',
      href: 'https://www.instagram.com/ritalinyutzu/',
    },
    {
      type: ContactType.Github,
      text: 'ritalinyutzu',
      href: 'https://github.com/ritalinyutzu',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ritalinyutzu'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ritalinyutzu/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ritalinyutzu/'},
];
