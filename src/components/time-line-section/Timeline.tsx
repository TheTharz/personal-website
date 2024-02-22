import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import CompetitionTimelineElement from './CompetitionTimelineElement';
import competitionsData from './competitionsData.js';

const Timeline: React.FC = () => {
  return (
    <section className='flex flex-row justify-evenly gap-8 mt-16' id='timeline'>
      <div className='no-scrollbar w-full'>
        <h1 className='mb-16 md:text-4xl text-xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white p-2'>
          UNVEILING MY JOURNY THROUGH COMPETITIONS
        </h1>
        <VerticalTimeline>
          {competitionsData.map((competition, index) => (
            <CompetitionTimelineElement key={index} competition={competition} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Timeline;
