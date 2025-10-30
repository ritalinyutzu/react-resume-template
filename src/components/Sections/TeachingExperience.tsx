import {FC, memo} from 'react';

import {TeachingSection, TeachingItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const TeachingExperience: FC<{data: TeachingSection}> = memo(({data}) => {
  const {sectionName, description, items} = data;

  return (
    <Section className="bg-neutral-100" sectionId="teaching">
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <div className="pb-6">
          <h2 className="text-2xl font-bold">{sectionName}</h2>
          {description && <p className="mt-2 text-sm text-neutral-600">{description}</p>}
        </div>
        <div className="flex flex-col gap-y-8 py-8">
          {items.map((item, index) => (
            <TeachingItem key={index} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
});

TeachingExperience.displayName = 'TeachingExperience';
export default TeachingExperience;

const TeachingItem: FC<{item: TeachingItem}> = memo(({item}) => {
  const {date, location, title, level, course, duties} = item;

  return (
    <div className="flex flex-col gap-y-2 text-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-x-2">
            <span className="font-semibold text-neutral-700">{title}</span>
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800">{level}</span>
          </div>
          <div className="text-base font-bold text-black">{course}</div>
        </div>
        <div className="text-right">
          <div className="font-medium text-neutral-500">{location}</div>
          <div className="text-neutral-400">{date}</div>
        </div>
      </div>
      <ul className="ml-4 list-disc space-y-1 text-neutral-600">
        {duties.map((duty, i) => (
          <li key={i}>{duty}</li>
        ))}
      </ul>
    </div>
  );
});

TeachingItem.displayName = 'TeachingItem';
