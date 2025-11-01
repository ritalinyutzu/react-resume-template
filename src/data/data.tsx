import {
  AcademicCapIcon,
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
import artwork1 from '../images/portfolio/artwork/artwork-01.jpg';
import artwork2 from '../images/portfolio/artwork/artwork-02.jpg';
import artwork3 from '../images/portfolio/artwork/artwork-03.jpg';
import artwork4 from '../images/portfolio/artwork/artwork-04.jpg';
import artwork5 from '../images/portfolio/artwork/artwork-05.jpg';
import artwork6 from '../images/portfolio/artwork/artwork-06.jpg';
import artwork7 from '../images/portfolio/artwork/artwork-07.jpg';
import artwork8 from '../images/portfolio/artwork/artwork-08.jpg';
import artwork9 from '../images/portfolio/artwork/artwork-09.jpg';
import artwork10 from '../images/portfolio/artwork/artwork-10.jpg';
import artwork11 from '../images/portfolio/artwork/artwork-11.jpg';
import artwork12 from '../images/portfolio/artwork/artwork-12.jpg';
import artwork13 from '../images/portfolio/artwork/artwork-13.jpg';
import artwork14 from '../images/portfolio/artwork/artwork-14.jpg';
import artwork15 from '../images/portfolio/artwork/artwork-15.jpg';
import artwork16 from '../images/portfolio/artwork/artwork-16.jpg';
import artwork17 from '../images/portfolio/artwork/artwork-17.jpg';
import lusiveImage from '../images/portfolio/lusive-workshop.png';
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
  TeachingSection,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Rita Lin Portfolio',
  description: 'Senior AI Engineer and Project Manager',
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
  Teaching: 'teaching',
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
        I'm a Taipei based <strong className="text-stone-100">Senior AI Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">a technology company</strong> helping build AI LLM related models, writing
        agile management projects, domain registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me training in <strong className="text-stone-100">MMA</strong>,{' '}
        <strong className="text-stone-100">Bouldering</strong>,{' '}
        <strong className="text-stone-100">Music Festival</strong>,{' '}
        <strong className="text-stone-100">Free Diving</strong>, <strong className="text-stone-100">Surfing</strong>,{' '}
        <strong className="text-stone-100">Skateboarding</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: true,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a Senior AI Engineer at a technology company, where I design, develop, and deploy artificial intelligence solutions for various domains and applications. 
I collaborate with cross-functional teams to deliver high-quality products that meet the needs and expectations of our clients.
Previously, I was a Senior Data Scientist at Gamania Digital Entertainment, where I analyzed the profitability data of mobile games and provided data-driven insights for business decisions. I also reduced the costs of using App Annie by web crawling the metadata from API resources using R or Python and PostgreSQL. I have a Master's degree in MBA from National Sun Yat-Sen University, where I developed my skills in data science, data visualization, and Spanish. I am passionate about machine learning, artificial neural networks, and statistics, and I enjoy creating and selling my own paintings on OpenSea.`,
  aboutItems: [
    {label: 'Location', text: 'Taiwan, Taipei', Icon: MapIcon},
    {label: 'Age', text: 'Forever 18', Icon: CalendarIcon},
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
        level: 6,
      },
      {
        name: 'PHP',
        level: 6,
      },
      {
        name: 'Java',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Html',
        level: 7,
      },
      {
        name: 'CSS',
        level: 6,
      },
      {
        name: 'React',
        level: 6,
      },
    ],
  },
  {
    name: 'Design Tools',
    skills: [
      {
        name: 'Adobe Photoshop',
        level: 10,
      },
      {
        name: 'Adobe Illustrator',
        level: 10,
      },
      {
        name: 'Procreate',
        level: 10,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Lusive Workshop Official Website',
    description:
      'Designed and developed the official website for Lusive Workshop brand (2023-Present). Full-stack web development including HTML/CSS design, deployment, maintenance, and payment gateway integration. The clothing designs from this website were featured and worn at BlackPink concert in Kaohsiung.',
    url: 'http://www.lusive-workshop.com',
    image: lusiveImage,
  },
  {
    title: 'Intelligent Question Generation System 2.0',
    description:
      'An intelligent test question generation and quality control system using Lasso Regression + Perplexity + Low Temperature technology. Implements Lasso regression for feature selection, perplexity analysis for quality control, low-temperature generation strategies to ensure stability, and automatic filtering of high-quality questions. Reduces API costs by 60% compared to traditional methods, achieves question pass rate of 40-50%, maintains average quality score of 7.5-8.5/10, and improves generation speed by 3-5x.',
    url: 'https://intelligent-question-sys-5rb4j89.gamma.site/',
    image: artwork1,
  },
  {
    title: 'AI Essay Grading System',
    description:
      'An AI-powered automatic essay grading system for Chinese compositions, built on machine learning and OCR technology. Features include Tesseract OCR for text recognition from images, intelligent image rotation correction, multi-dimensional scoring (content, structure, grammar, and vocabulary), and machine learning model training and inference. Achieves OCR accuracy of 90-95%, processing speed of 10-30 seconds per essay, batch processing capacity of 50+ essays, and scoring consistency of 95%+.',
    url: 'https://ai-zuowen-pigai-3idi1ae.gamma.site/',
    image: artwork2,
  },
  {
    title: 'Mobile Reviews Sentiment Analysis',
    description:
      'An AI-powered sentiment analysis system for mobile phone reviews that automatically analyzes user sentiment trends and provides data visualization with deep insights. Utilizing Natural Language Processing (NLP) techniques to understand real consumer feedback on different mobile brands and models. The system employs advanced machine learning algorithms to accurately identify positive, negative, and neutral sentiments, helping businesses better understand market trends and customer needs. Built with Python, implementing state-of-the-art NLP models for comprehensive sentiment analysis and real-time data processing.',
    url: 'https://mobile-reviews-sentiment-whmqxyj.gamma.site/',
    image: artwork3,
  },
    {
    title: 'Semiconductor Manufacturing Defect Prediction',
    description:
      'A comprehensive machine learning project for predicting semiconductor manufacturing defects with 91.4% accuracy. Analyzes 590 production parameters from 1,567 manufacturing records using KNN, XGBoost, Random Forest, and other algorithms. Features include PCA dimensionality reduction (440 to 135 features), handling imbalanced datasets (14.07:1 ratio), ROC curve analysis, and confusion matrix visualization. Complete end-to-end ML pipeline from data preprocessing to model deployment.',
    url: 'https://semiconductor-defect-pre-onoprbx.gamma.site/',
    image: artwork3,
  },
  {
    title: 'Digital Art Collection - Surfing Girl',
    description: 'Original digital artwork created with Procreate. A girl surfing at Zhongjiao Bay.',
    url: 'https://opensea.io/ritalinyutzu',
    image: artwork1,
  },
  {
    title: 'Digital Art Collection - Reunion with my friend',
    description:
      'Original digital artwork created with Procreate. My first digital drawing is a group photo of me and my friends.',
    url: 'https://opensea.io/ritalinyutzu',
    image: artwork2,
  },
  {
    title: 'Digital Art Collection - Park Park Rock - Music Festival',
    description:
      'Original digital artwork created with Procreate. When I was drunk, I climbed on top of someone elses car.',
    url: 'https://opensea.io/ritalinyutzu',
    image: artwork3,
  },
  {
    title: 'Digital Art Collection - Girl in Bikini',
    description: 'Original digital artwork created with Procreate. 30-second sketch.',
    url: 'https://opensea.io/ritalinyutzu',
    image: artwork4,
  },
  {
    title: 'Digital Art Collection - Commencement',
    description:
      'Original digital artwork created with Procreate. With my best friend Alice, this is our commencement.',
    url: 'https://opensea.io/ritalinyutzu',
    image: artwork5,
  },
  {
    title: 'Digital Art Collection - Girl',
    description: 'Original digital artwork created with Procreate. 30-second sketch.',
    url: 'https://opensea.io/ritalinyutzu',
    image: artwork6,
  },
  {
    title: 'Digital Art Collection - Girl',
    description: 'Original digital artwork created with Procreate. 30-second sketch ',
    url: 'https://opensea.io/ritalinyutzu',
    image: artwork7,
  },
  {
    title: 'Digital Art Collection - Love Enviroment',
    description:
      'Original digital artwork created with Procreate. A girl in Australia who loves the environment and the Earth.',
    url: 'https://opensea.io/ritalinyutzu',
    image: artwork8,
  },
  {
    title: 'Digital Art Collection - Boy with his lovely doggy',
    description: 'Original digital artwork created with Procreate. A boy and his favorite Shiba Inu.',
    url: 'https://opensea.io/ritalinyutzu',
    image: artwork9,
  },
  {
    title: 'Digital Art Collection - bouldering ',
    description: 'Original digital artwork created with Procreate. My first bouldering experience.',
    url: 'https://opensea.io/ritalinyutzu',
    image: artwork10,
  },
  {
    title: 'Digital Art Collection - Shopping Day',
    description: 'Original digital artwork created with Procreate. Lets take a selfie in front of the mirror.',
    url: 'https://opensea.io/ritalinyutzu',
    image: artwork11,
  },
  {
    title: 'Digital Art Collection - Rita Lin',
    description: 'Original digital artwork created with Procreate. My self-portrait.',
    url: 'https://opensea.io/ritalinyutzu',
    image: artwork12,
  },
  {
    title: 'Digital Art Collection - Drinking',
    description: 'Original digital artwork created with Procreate. A girl drinking rye beer.',
    url: 'https://opensea.io/ritalinyutzu',
    image: artwork13,
  },
  {
    title: 'Digital Art Collection - One of the Best Day',
    description: 'Original digital artwork created with Procreate. Lets take a trip to Liuqiu together.',
    url: 'https://opensea.io/ritalinyutzu',
    image: artwork14,
  },
  {
    title: 'Digital Art Collection - Megaport Festival',
    description:
      'Original digital artwork created with Procreate. My friends and I attended the 2022 Megaport Festival.',
    url: 'https://opensea.io/ritalinyutzu',
    image: artwork15,
  },
  {
    title: 'Digital Art Collection - Rita Lin',
    description: 'Original digital artwork created with Procreate. My self-portrait.',
    url: 'https://opensea.io/ritalinyutzu',
    image: artwork16,
  },
  {
    title: 'Digital Art Collection - Rita Lin',
    description: 'Original digital artwork created with Procreate. My self-portrait.',
    url: 'https://opensea.io/ritalinyutzu',
    image: artwork17,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2019',
    location: 'Taiwan, Kaohsiung',
    title: 'Masters of Business Administration, Master',
    content: (
      <p>
        GPA 4.09 <br />
        Thesis: An analysis of features of the total revenue of the concerts based on Machine Learning (Support Vector
        Machine)
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2025 - Present',
    location: 'See U Tech Co., Ltd',
    title: 'Project Manager / AI Engineer',
    content: (
      <p>
        ● Executed the Ministry of Digital Affairs Innovation Subsidy Project.
        <br />● Built an intelligent exam question bank using Python.
        <br />● Implemented process management by automating scheduling across the examination system.
      </p>
    ),
  },
  {
    date: 'June 2025 - September 2025',
    location: 'Leyan Co., Ltd',
    title: 'Project Manager / Quality Assurance Engineer',
    content: (
      <p>
        ● SST AI Image Recognition: Leading the implementation of an AI image recognition system, automating dental
        image labeling and optimizing clinical workflows.
        <br />● Applied Science and Technology Union AI Image Recognition: Coordinate cross-functional teams to build an
        AI-based medical image recognition system supporting dental diagnostics and clinical applications.
        <br />● Clinic Profile Data Import for Allied Clinics: Planning and executing clinic profile data import
        processes, enabling rapid system onboarding across multiple allied clinics.
        <br />● WebHIS Billing Module Development and Data Management: Driving the development and testing of the WebHIS
        billing module, improving healthcare cost settlement efficiency and accuracy, and leading the implementation of
        the master data management module, enhancing clinic operations and patient data integrity.
        <br />● Software Testing Plan – Unit Testing and Integration Testing: Designing and executing unit test plans to
        ensure functional accuracy and quality consistency across system modules, also conduct integration testing and
        prepare test reports, validating cross-system stability and reducing release risks.
      </p>
    ),
  },
  {
    date: 'March 2022 - March 2024',
    location: 'Advantech Co., Ltd',
    title: 'Senior AI Engineer / Project Manager',
    content: (
      <p>
        ● Al Recommendation ToolDeployment – Utilized unsupervised learning techniquessuch asthe PCA model,
        Collaborative Filtering, and Cosine Similarity, to establish a cloud ETL pipeline in Microsoft Azure ML Studio
        to support the Al recommendation system for Advantech's PaaS e-commerce platform.
        <br />● Pricing Strategy Optimization – Worked as a project owner to research and develop a model to evaluate
        the bargaining power between customers and company. Cooperated with the pricing team to set appropriate prices
        or discounts and maximize our business and revenue growth.
        <br />● Project coordinator in the Al Strategy Group – As a core member and the project coordinator in the AI
        strategic group, worked with the management team on AI-related projects and was responsible for all the projects
        within the AI domain.
        <br />● IT Vocal for Data visualization – As an IT department vocal, I cooperated with the muti-functional team
        to develop Power Bl and Tableau reports, helping them to make better business decisions.
      </p>
    ),
  },
  {
    date: 'August 2021 - January 2022',
    location: 'Gamania Co., Ltd',
    title: 'Senior Data Scientist',
    content: (
      <p>
        ● API Integration and Data Reshaping – Used R and Python for web crawling to retrieve data from APIs and then
        used PostgreSQL to clean and reshape the data, determining which games are the most profitable in our company
        and assisting the business team on decision making.
        <br />● Feature Extraction from Low-Quality Images – Used a machine learning GAN model to extract features from
        low-quality images, allowing us to identify player preferences and enhance the gaming experience.
      </p>
    ),
  },
  {
    date: 'April 2021 - August 2021',
    location: 'Taiwan Semiconductor Manufacturing Company, Ltd',
    title: 'Supervisor',
    content: (
      <p>
        ● Process Improvement and Quality Control – Produced daily wafer quality reports to track yield, identify rework
        causes, and improve overall process consistency.
        <br />● Team Management and Performance Evaluation – Supervised 80 employees with regular performance reviews
        and coaching, earning recognition with the Best Newcomer, Rising Star, and Plant Manager Awards.
      </p>
    ),
  },
  {
    date: 'July 2019 - March 2021',
    location: 'CTBC Financial Holding Co., Ltd',
    title: 'Management Associate / Data Engineer ',
    content: (
      <p>
        ● Smile Check-in Project – As the project developer, we used the Yolo V4 model to capture facial expressions,
        specifically focusing on smiles. This enabled our employees to check in quickly at headquarters by smiling at
        the camera.
        <br />● Dress Detection System Development – Collaborated with HR teams to develop a machine learning system
        that automatically inspects employees' attire as they pass by the camera to ensure compliance with company
        standards.
        <br />● Credit Card Fraud Detection Project – Used a machine learning program with six algorithms to identify
        potential fraudulent credit card transactions. This approach saved manual review costs and reduced client
        inconvenience from unnecessary customer service calls.
      </p>
    ),
  },
];

/**
 * Teaching Experience section
 */
export const teaching: TeachingSection = {
  sectionName: 'Teaching Experience',
  description:
    'Extensive teaching and mentoring experience across multiple levels and disciplines at National Sun Yat-sen University.',
  items: [
    {
      date: '2017 - 2019',
      location: 'National Sun Yat-sen University',
      title: 'Teaching Assistant',
      level: 'Undergraduate',
      course: 'Economics',
      duties: [
        'Conducted lectures and led discussion sections for undergraduate economics courses',
        'Developed and graded assignments, quizzes, and examinations',
        'Provided office hours and one-on-one tutoring to support student learning',
        'Assisted professor with course material preparation and curriculum development',
      ],
    },
    {
      date: '2017 - 2019',
      location: 'National Sun Yat-sen University',
      title: 'Teaching Assistant',
      level: 'Undergraduate',
      course: 'Statistics',
      duties: [
        'Led weekly lab sessions demonstrating statistical software and data analysis techniques',
        'Explained complex statistical concepts and probability theory to undergraduate students',
        'Graded homework assignments and provided detailed feedback on problem-solving approaches',
        'Held regular office hours to assist students with coursework and exam preparation',
      ],
    },
    {
      date: '2017 - 2019',
      location: 'National Sun Yat-sen University',
      title: 'Teaching Assistant',
      level: 'Undergraduate',
      course: 'Calculus',
      duties: [
        'Conducted problem-solving sessions and reviewed key calculus concepts',
        'Assisted students in understanding differentiation, integration, and limit theories',
        'Graded exams and homework while ensuring consistent and fair evaluation standards',
        'Provided supplementary materials and practice problems for exam preparation',
      ],
    },
    {
      date: '2017 - 2019',
      location: 'National Sun Yat-sen University',
      title: 'Teaching Assistant',
      level: 'Graduate (EMBA)',
      course: 'Managerial Economics',
      duties: [
        'Supported executive MBA students with advanced economic concepts and business applications',
        'Facilitated case study discussions and real-world business scenario analyses',
        'Provided insights on applying economic theory to strategic business decisions',
        'Integrated real-world business scenarios and current economic issues into coursework',
      ],
    },
    {
      date: '2017 - 2019',
      location: 'National Sun Yat-sen University',
      title: 'Teaching Assistant',
      level: 'Graduate (IBMBA)',
      course: 'Managerial Economics',
      duties: [
        'Conducted all lectures entirely in English for international MBA students',
        'Developed culturally diverse teaching materials appropriate for global context',
        'Managed cross-cultural classroom dynamics and facilitated international discussions',
        'Provided comprehensive academic support to students from various countries and backgrounds',
      ],
    },
    {
      date: '2017 - 2019',
      location: 'National Sun Yat-sen University',
      title: 'Private Tutor',
      level: 'Doctoral',
      course: 'Game Theory',
      duties: [
        'Provided intensive individualized instruction in advanced game theory concepts',
        'Assisted doctoral candidates with dissertation research and complex problem-solving',
        'Reviewed and provided critical feedback on academic papers and research proposals',
        'Prepared students comprehensively for doctoral qualifying examinations',
      ],
    },
  ],
};

/**
 * Certification section
 */
export const certifications: TimelineItem[] = [
  {
    date: 'September 2025',
    location: 'Google / Coursera',
    title: 'Google Project Management Professional Certificate',
    content: (
      <p>
        Completed 7-course professional certificate covering foundations, initiation, planning, execution, and agile
        project management
        <br />
        Credential ID: ZVO1YI29336N
        <br />
        Skills: Traditional & Agile Project Management, Project Planning, Risk Management
      </p>
    ),
  },
  {
    date: 'September 2025',
    location: 'Google for Education',
    title: 'Gemini Certified Educator',
    content: (
      <p>
        Certified in using Google AI (Gemini) in education
        <br />
        Valid through: September 2028
        <br />
        Demonstrated knowledge, skills, and competencies needed to use Google AI in education
      </p>
    ),
  },
  {
    date: '2024',
    location: 'Olympic Fine Arts Competition',
    title: 'Olympic Fine Arts Bronze Medal',
    content: (
      <p>
        Awarded Bronze Medal in the Olympic Fine Arts Competition for outstanding artistic achievement
        <br />
        Recognition for excellence in digital art and creative expression
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
      name: 'Friedrich Nietzsche',
      text: 'What is great in man is that he is a bridge and not an end.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Friedrich Nietzsche',
      text: 'You must be ready to burn yourself in your own flame; how could you rise anew if you have not first become ashes?',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Friedrich Nietzsche',
      text: 'One repays a teacher badly if one always remains nothing but a pupil.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in Touch',
  description: 'Reach out to Rita Lin Now!',
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
