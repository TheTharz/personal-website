import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaCode } from "react-icons/fa6";

interface Competition {
    title: string;
    subtitle: string;
    date: string;
    description: string;
    image: string | null;
}

interface Props {
    competition: Competition;
}

const CompetitionTimelineElement: React.FC<Props> = ({ competition }) => {
    const { title, subtitle, date, description, image } = competition;

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#001933', color: '#fff',borderRadius: '20px'}}
            contentArrowStyle={{ borderRight: '7px solid  #001933' }}
            date={date}
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#001933' }}
            icon={<FaCode />}
        >
            <h3 className="vertical-timeline-element-title font-bold text-3xl">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle text-sm pb-2">{subtitle}</h4>
            {image && <img src={image} alt={title} className='h-64 object-contain w-full'/>}
            <p>{description}</p>
        </VerticalTimelineElement>
    );
}

export default CompetitionTimelineElement;
