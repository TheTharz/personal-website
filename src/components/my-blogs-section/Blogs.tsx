import BlogCard from './BlogCard'; // Import the BlogCard component

const Blogs = () => {
  const blogs = [
    {
      title: 'Building Robust and Scalable MERN Backends: A Practical Guide',
      description:
        'In the world of making websites and apps work smoothly, how we organize things behind the scenes is super important. Think of it like having a well-organized kitchen — it makes cooking (or coding) much easier! Because when the kitchen grows and it starts cooking more things(more features) it is very important to have a scalable file and folder structure',
      imageSrc:
        'https://miro.medium.com/v2/resize:fit:828/format:webp/1*DVPL6-3HJJ7Y85z6hZbrKw.jpeg',
      date: 'January 1, 2024',
      link: 'https://medium.com/@tharinduimalka915/building-robust-and-scalable-mern-backends-a-practical-guide-3bf4889c21ad',
    },
    {
      title: 'Understanding Object-Oriented Programming (OOP) Concepts in Java',
      description:
        'Object-Oriented Programming (OOP) is a paradigm widely used in modern software development for building robust, scalable, and maintainable applications. Java, as a popular programming language, fully supports OOP principles, making it essential for developers to have a solid understanding of OOP concepts. In this introductory article, we’ll explore the classes and object and how they are implemented in Java.',
      imageSrc:
        'https://miro.medium.com/v2/resize:fit:786/format:webp/0*wbkgIFrqoJdB3rXv.jpg',
      date: 'February 16, 2024',
      link: 'https://medium.com/@tharinduimalka915/understanding-object-oriented-programming-oop-concepts-in-java-9d6c0420a31f',
    },
    {
      title: 'Exploring Object-Oriented Programming (OOP) Concepts in Java',
      description:
        'In the previous article, we discussed the fundamental concepts of classes and objects in Java, the building blocks of object-oriented programming (OOP). Now, let’s delve deeper into four essential OOP concepts: Inheritance, Encapsulation, Polymorphism, and Abstraction. We’ll explore each concept with examples in Java to understand their significance in modern software development.',
      imageSrc:
        'https://miro.medium.com/v2/resize:fit:786/format:webp/1*YvXulP5aJa5hByv-8uazcA.png',
      date: 'February 17, 2024',
      link: 'https://medium.com/@tharinduimalka915/exploring-object-oriented-programming-oop-concepts-in-java-5e8133bd6f4d',
    },
  ];
  return (
    <section className='min-h-screen md:py-8' id='blogs'>
      <div className='container md:mx-auto px-4 '>
        <h2 className='mb-16 md:text-4xl text-xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white p-2'>
          LATEST BLOGS
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              description={blog.description}
              imageSrc={blog.imageSrc}
              date={blog.date}
              link={blog.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
