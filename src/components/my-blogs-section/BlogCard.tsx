import React from 'react';

interface Blog {
    title: string;
    description: string;
    imageSrc: string;
    date: string;
    link:string
}

const BlogCard: React.FC<Blog> = ({ title, description, imageSrc, date ,link     }) => {
    return (
        <div className="bg-cardBlue rounded-lg overflow-hidden shadow-md">
            <img className="w-full hidden md:block md:h-52 object-cover" src={imageSrc} alt={title} />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mt-2">{date}</p>
                <p className="text-gray-700 mb-2 line-clamp-3">{description}</p>
                <a href={link} className="text-blue-500 hover:underline">Read More</a>
            </div>
        </div>
    );
};

export default BlogCard;
