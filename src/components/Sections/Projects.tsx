import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Projects: FC = memo(() => {
  const projects = [
    {
      title: '智慧命題系統 2.0',
      description: '使用 Lasso Regression + Perplexity + Low Temperature 的科學化題目生成與品質控制系統',
      image: '/images/portfolio/intelligent-question-system.jpg',
      tags: ['Python', 'Machine Learning', 'NLP', 'Lasso Regression'],
      github: 'https://github.com/ritalinyutzu/intelligent-question-system',
      demo: 'https://intelligent-question-sys-5rb4j89.gamma.site/',
      highlights: [
        '相較傳統方法降低 60% API 成本',
        '題目通過率 40-50%（困惑度 < 50）',
        '平均品質分數 7.5-8.5 / 10',
        '生成速度提升 3-5 倍',
      ],
      features: ['Lasso 迴歸特徵選擇', '困惑度分析品質控制', '低溫生成策略確保穩定性', '自動篩選高品質題目'],
    },
    {
      title: 'AI 作文批改系統',
      description: '基於機器學習與 OCR 的中文作文自動評分系統',
      image: '/images/portfolio/ai-essay-grading.jpg',
      tags: ['Python', 'OCR', 'Machine Learning', 'NLP', 'Computer Vision'],
      github: 'https://github.com/ritalinyutzu/ai-essay-grading-system',
      demo: 'https://ai-zuowen-pigai-3idi1ae.gamma.site/',
      highlights: ['OCR 準確率 90-95%', '處理速度 10-30 秒/篇', '批次處理 50+ 篇作文', '評分一致性 95%+'],
      features: [
        'Tesseract OCR 圖片文字識別',
        '智能圖片旋轉校正',
        '多維度評分（內容、結構、文法、用詞）',
        '機器學習模型訓練與預測',
      ],
    },
  ];

  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-black">專案作品</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:scale-105"
              key={index}>
              {/* 專案圖片 */}
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.description}</p>
                  </div>
                </div>
              </div>

              {/* 專案內容 */}
              <div className="flex flex-col gap-4 p-6">
                {/* 標籤 */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800"
                      key={tagIndex}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 核心功能 */}
                <div>
                  <h4 className="mb-2 font-semibold text-gray-900">核心功能</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {project.features.map((feature, featureIndex) => (
                      <li className="flex items-start" key={featureIndex}>
                        <span className="mr-2 text-blue-500">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 專案成果 */}
                <div>
                  <h4 className="mb-2 font-semibold text-gray-900">專案成果</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li className="flex items-start" key={highlightIndex}>
                        <span className="mr-2 text-green-500">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 連結按鈕 */}
                <div className="mt-auto flex gap-3 pt-4">
                  <a
                    className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700"
                    href={project.demo}
                    rel="noopener noreferrer"
                    target="_blank">
                    查看簡報
                  </a>
                  <a
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
