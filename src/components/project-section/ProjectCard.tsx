import React from 'react';

interface Project {
    title: string;
    description: string;
    imageSrc: string;
    techUsed: string[];
    date: string;
}

const ProjectCard: React.FC<Project> = ({ title, description, imageSrc, techUsed, date }) => {
    return (
        <div className="max-w-80 rounded-3xl overflow-hidden shadow-lg bg-cardBlue z-20 h-fit hover:scale-110 transform transition-transform cursor-pointer">
            <img className="w-full h-64 object-cover" src={imageSrc} alt={title} />
            <div className="px-6 py-4">

                <div className="font-bold text-xl mb-2">{title}</div>
                <span
                    className="inline-block rounded-full py-1 text-sm font-semibold text-gray-700">{date}</span>

                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 py-4">
                {techUsed.map((tech, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
