import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Hero: FC = memo(() => {
  const {name} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center bg-neutral-900">
        <h1 className="whitespace-nowrap px-4 text-[length:clamp(1.1rem,4.2vw,3rem)] font-bold text-white">{name}</h1>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
