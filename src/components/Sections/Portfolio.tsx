import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {FC, memo} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
        <div className="flex justify-center w-full">
          <div className="w-full max-w-2xl">
            {portfolioItems.map((item, index) => {
              const {title, image, description, url} = item;
              return (
                <div className="pb-8" key={`${title}-${index}`}>
                  <a className="block" href={url} rel="noopener noreferrer" target="_blank">
                    <div className="overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl">
                      <Image alt={title} className="h-full w-full object-cover" placeholder="blur" src={image} />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-center gap-2">
                        {title}
                        <ArrowTopRightOnSquareIcon className="h-5 w-5 text-white/70" />
                      </h3>
                      <p className="text-sm text-white/80 leading-relaxed px-4">{description}</p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
