import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {name} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center bg-neutral-900">
        <div className="flex flex-col items-center gap-y-3 px-4 text-center">
          <h1 className="whitespace-nowrap text-[length:clamp(1.1rem,4.2vw,3rem)] font-bold text-white">{name}</h1>
          <p className="text-[length:clamp(0.875rem,2vw,1.25rem)] text-neutral-300">
            Currently taking on freelance projects
          </p>
          <div className="mt-2 flex gap-x-4 text-neutral-100">
            <Socials />
          </div>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
