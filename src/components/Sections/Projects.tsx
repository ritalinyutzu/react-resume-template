import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Projects: FC = memo(() => {
  const projects = [
    {
      title: 'Intelligent Question Generation System 2.0',
      description: 'An intelligent test question generation and quality control system using Lasso Regression + Perplexity + Low Temperature technology',
      tags: ['Python', 'Machine Learning', 'NLP', 'Lasso Regression'],
      github: 'https://github.com/ritalinyutzu/intelligent-question-system',
      demo: 'https://intelligent-question-sys-5rb4j89.gamma.site/',
      highlights: [
        'Reduces API costs by 60% compared to traditional methods',
        'Question pass rate 40-50% (perplexity < 50)',
        'Average quality score 7.5-8.5/10',
        'Generation speed improved 3-5x',
      ],
      features: [
        'Lasso regression for feature selection',
        'Perplexity analysis for quality control',
        'Low-temperature generation strategies to ensure stability',
        'Automatic filtering of high-quality questions',
      ],
    },
    {
      title: 'AI Essay Grading System',
      description: 'An AI-powered automatic essay grading system for Chinese compositions, built on machine learning and OCR technology',
      tags: ['Python', 'OCR', 'Machine Learning', 'NLP', 'Computer Vision'],
      github: 'https://github.com/ritalinyutzu/ai-essay-grading-system',
      demo: 'https://ai-zuowen-pigai-3idi1ae.gamma.site/',
      highlights: [
        'OCR accuracy 90-95%',
        'Processing speed 10-30 seconds per essay',
        'Batch processing capacity 50+ essays',
        'Scoring consistency 95%+',
      ],
      features: [
        'Tesseract OCR for text recognition from images',
        'Intelligent image rotation correction',
        'Multi-dimensional scoring (content, structure, grammar, vocabulary)',
        'Machine learning model training and inference',
      ],
    },
    {
      title: 'Mobile Reviews Sentiment Analysis',
      description: 'An AI-powered sentiment analysis system that automatically analyzes user sentiment trends and provides data visualization with deep insights',
      tags: ['Python', 'NLP', 'Machine Learning', 'Data Visualization'],
      github: 'https://github.com/ritalinyutzu/mobile-reviews-sentiment',
      demo: 'https://mobile-reviews-sentiment-whmqxyj.gamma.site/',
      highlights: [
        'Real-time sentiment classification',
        'Support for multiple mobile brands',
        'Interactive data visualization',
        'Comprehensive trend analysis',
      ],
      features: [
        'Natural Language Processing (NLP) techniques',
        'Advanced machine learning algorithms',
        'Positive, negative, and neutral sentiment identification',
        'Market trends and customer needs analysis',
      ],
    },
    {
      title: 'Semiconductor Manufacturing Defect Prediction',
      description: 'A comprehensive machine learning project for predicting semiconductor manufacturing defects with 91.4% accuracy',
      tags: ['Python', 'Machine Learning', 'XGBoost', 'Data Science'],
      github: 'https://github.com/ritalinyutzu/semiconductor-defect-prediction',
      demo: 'https://semiconductor-defect-pre-onoprbx.gamma.site/',
      highlights: [
        'Prediction accuracy: 91.4%',
        'Analyzes 590 production parameters',
        'Processes 1,567 manufacturing records',
        'Complete end-to-end ML pipeline',
      ],
      features: [
        'KNN, XGBoost, Random Forest algorithms',
        'PCA dimensionality reduction (440 to 135 features)',
        'Handles imbalanced datasets (14.07:1 ratio)',
        'ROC curve analysis and confusion matrix visualization',
      ],
    },
    {
      title: 'Credit Card Fraud Detection System',
      description: 'An advanced machine learning system for detecting fraudulent credit card transactions, utilizing ensemble methods and imbalanced learning techniques',
      tags: ['Python', 'Machine Learning', 'XGBoost', 'LightGBM', 'SMOTE', 'Data Science'],
      github: 'https://github.com/ritalinyutzu/creditcard-fraud-detection',
      demo: 'https://creditcard-fraud-detecti-959i3jb.gamma.site/',
      highlights: [
        'F1-Score 86.56% (exceeds industry benchmark)',
        'Fraud detection rate 87.72%',
        'Evaluated 15 model configurations',
        'ROI 598% with comprehensive analysis',
      ],
      features: [
        'K-Means undersampling, SMOTE, and SMOTE+Tomek Links strategies',
        '5 algorithms: Logistic Regression, Decision Tree, Random Forest, XGBoost, LightGBM',
        'Handles severe class imbalance (577:1 ratio)',
        'Complete confusion matrix analysis and business impact assessment',
      ],
    },
  ];

  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-black">Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:scale-105"
              key={index}>
              {/* Project Header */}
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center text-white px-6">
                    <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.description}</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex flex-col gap-4 p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800"
                      key={tagIndex}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Core Features */}
                <div>
                  <h4 className="mb-2 font-semibold text-gray-900">Core Features</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {project.features.map((feature, featureIndex) => (
                      <li className="flex items-start" key={featureIndex}>
                        <span className="mr-2 text-blue-500">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Results */}
                <div>
                  <h4 className="mb-2 font-semibold text-gray-900">Key Results</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li className="flex items-start" key={highlightIndex}>
                        <span className="mr-2 text-green-500">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex gap-3 pt-4">
                  <a // <-- 修正點 1：補上 <a> 標籤開頭
                    className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700"
                    href={project.demo}
                    rel="noopener noreferrer"
                    target="_blank">
                    View Demo
                  </a>
                  <a // <-- 修正點 2：補上 <a> 標籤開頭
                    className="flex-1 rounded-lg border-2 border-gray-300 px-4 py-2 text-center text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50"
                    href={project.github}
                    rel="noopener noreferrer"
                    target="_blank">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});

Projects.displayName = 'Projects';
export default Projects;
