import {FC, memo} from 'react';

import {AcademicCapIcon} from '@heroicons/react/24/outline';

import {TeachingItem, TeachingSection} from '../../data/dataDef';
import Section from '../Layout/Section';

const TeachingExperience: FC<{data: TeachingSection}> = memo(({data}) => {
  const {sectionName, description, items} = data;

  const undergrad = items.filter(item => item.level === 'Undergraduate');
  const grad = items.filter(item => item.level.includes('Graduate'));
  const doctoral = items.filter(item => item.level === 'Doctoral');

  return (
    <Section className="bg-gradient-to-b from-neutral-100 to-neutral-50" sectionId="teaching">
      <div className="flex flex-col">
        <div className="pb-8">
          <div className="flex items-center gap-3">
            <AcademicCapIcon className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-neutral-800">{sectionName}</h2>
          </div>
          {description && <p className="mt-3 max-w-3xl text-base text-gray-600">{description}</p>}
        </div>

        <div className="space-y-8">
          {undergrad.length > 0 && <TeachingLevel color="blue" items={undergrad} title="Undergraduate Level" />}
          {grad.length > 0 && <TeachingLevel color="purple" items={grad} title="Graduate Level (MBA Programs)" />}
          {doctoral.length > 0 && <TeachingLevel color="green" items={doctoral} title="Doctoral Level" />}
        </div>
      </div>
    </Section>
  );
});

TeachingExperience.displayName = 'TeachingExperience';
export default TeachingExperience;

const TeachingLevel: FC<{
  color: 'blue' | 'purple' | 'green';
  items: TeachingItem[];
  title: string;
}> = memo(({title, items, color}) => {
  const colorClasses = {
    blue: 'border-blue-200 bg-blue-50',
    green: 'border-green-200 bg-green-50',
    purple: 'border-purple-200 bg-purple-50',
  };

  const badgeColors = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
  };

  return (
    <div className={`rounded-lg border-2 p-6 ${colorClasses[color]}`}>
      <h3 className="mb-4 text-xl font-semibold text-neutral-800">{title}</h3>
      <div className="space-y-6">
        {items.map((item, index) => (
          <EnhancedTeachingItem badgeColor={badgeColors[color]} item={item} key={`${item.title}-${index}`} />
        ))}
      </div>
    </div>
  );
});

TeachingLevel.displayName = 'TeachingLevel';

const EnhancedTeachingItem: FC<{
  badgeColor: string;
  item: TeachingItem;
}> = memo(({item, badgeColor}) => {
  const {date, location, title, course, duties} = item;

  return (
    <div className="rounded-md bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <h4 className="text-lg font-bold text-neutral-900">{course}</h4>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${badgeColor}`}>
              {title}
            </span>
            <span className="text-sm text-gray-600">{location}</span>
          </div>
        </div>
        <div className="whitespace-nowrap text-sm font-medium text-gray-500 md:text-right">{date}</div>
      </div>

      <ul className="space-y-2">
        {duties.map((duty, idx) => (
          <li className="flex items-start text-sm text-gray-700" key={idx}>
            <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
            <span>{duty}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

EnhancedTeachingItem.displayName = 'EnhancedTeachingItem';