
export interface Project {
    title: string;
    description: string;
    imageSrc: string;
    techUsed: string[];
    date: string;
}
const projects: Project[] = [
    {
        title: "TutorHub",
        description: "\n" +
            "TutorHub is a mobile application built using Flutter, aimed at facilitating the search for home tutors in a user-friendly manner.  ",
        imageSrc: "https://media.licdn.com/dms/image/D562DAQHGk3iUrsmKyQ/profile-treasury-image-shrink_1920_1920/0/1706068030652?e=1708866000&v=beta&t=Ri6uZlgb7mW_x--3xoTXzvfE7SlKOZog61hOe7AKol8",
        techUsed: ["Flutter", "Dart", "Firebase", "GetX"],
        date: "Dec 2023 - Present"
    },
    {
        title: "DesignFlow",
        description: "DesignFlow empowers designers with user-friendly tools for collaboration and showcasing work, fostering connections within the digital design community.",
        imageSrc: "https://media.licdn.com/dms/image/sync/D4E27AQE6PWMmaA8xvg/articleshare-shrink_800/0/1707808784067?e=1708866000&v=beta&t=PMRQaoOvlBRCkCUwMhaeK0to5sqxiFBMojGV-5eBa2U",
        techUsed: ["React", "ExpressJS", "NodeJS", "MongoDB", "TailwindCSS"],
        date: "July 2023 - Sep 2023"
    },
    {
        title: "Student Management System",
        description: "Streamlined student record management with CRUD operations, built using WPF and C#.",
        imageSrc: "https://img.freepik.com/free-vector/student-graduation-cap-using-computer-desk_1262-21421.jpg?size=626&ext=jpg&ga=GA1.2.79614261.1705226691&semt=ais",
        techUsed: ["WPF", "C#", "CRUD","MVVM"],
        date: "Apr 2023 - May 2023"
    },
    {
        title: "Malware Detection In Network Traffic Data",
        description: "In collaboration with Chandula Jayathilake, We developed a machine learning model for detecting malware traffic utilizing Support Vector Machine(SVM) and Naive Bayes classifiers. ",
        imageSrc: "https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37368.jpg?size=626&ext=jpg&ga=GA1.2.79614261.1705226691&semt=sph",
        techUsed: ["Python", "Scikit learn", "Pandas", "Numpy"],
        date: "Jan 2024"
    },

    {
        title: "Trafalgar Clone Landing Page",
        description: "This project was a clone of the Trafalgar Landing Page which was a initial step to learn web development.",
        imageSrc: "https://thetharz.github.io/trafalgarclone/static/media/hero.7ef37fcd72d49793fb43.png",
        techUsed: ["React", "Tailwind", "Responsive"],
        date: "Jan 2022"
    },
    {
        title: "Console Based Music Player",
        description: "This project was created to depict the usage of different data structures in various scenarios",
        imageSrc: "https://img.freepik.com/free-vector/laptop-with-binary-code-screen_1308-114319.jpg?size=626&ext=jpg&ga=GA1.2.79614261.1705226691&semt=ais",
        techUsed: ["C++", "Data Structures", "Algorithms" ,"OOP"],
        date: "Oct 2022 - Jan 2023"
    },
    {
        title: "Markdown Converter",
        description: "This project was created to convert HTML to Markdown, this is still at initial phase",
        imageSrc: "https://img.freepik.com/free-vector/documents-concept-illustration_114360-230.jpg?size=626&ext=jpg&ga=GA1.1.79614261.1705226691&semt=ais",
        techUsed: ["React", "MarkDown", "Idea"],
        date: "Present"
    },


];
export default projects;