import {FC, memo} from 'react';

import type {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex flex-col items-center justify-center gap-x-2 md:flex-row md:justify-start">
          <span className="text-sm font-normal">{location}</span>
          <span className="hidden md:inline">•</span>
          <span className="text-sm font-normal">{date}</span>
        </div>
      </div>
      <div className="text-sm md:text-base">{content}</div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
