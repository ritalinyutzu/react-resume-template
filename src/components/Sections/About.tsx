import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import aboutBackground from '../../images/about-background.webp';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  return (
    <Section noPadding sectionId={SectionId.About}>
      <div className="relative w-full overflow-hidden">
        <Image
          alt="about-background"
          className="absolute z-0 h-full w-full object-cover"
          placeholder="blur"
          src={aboutBackground}
        />
        <div className="absolute inset-0 z-0 bg-neutral-900/60" />
        <div className="relative z-10 px-4 py-16 md:py-24 lg:px-8">
          <div className="mx-auto max-w-screen-lg">
            <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
              {!!profileImageSrc && (
                <div className="col-span-1 flex justify-center md:justify-start">
                  <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
                    <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
                  </div>
                </div>
              )}
              <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
                <div className="flex flex-col gap-y-2">
                  <h2 className="text-2xl font-bold text-white">About me</h2>
                  <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
                </div>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {aboutItems.map(({label, text, Icon}, idx) => (
                    <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                      {Icon && <Icon className="h-5 w-5 text-white" />}
                      <span className="text-sm font-bold text-white">{label}:</span>
                      <span className=" text-sm text-gray-300">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
