export interface SkillData {
    title: string;
    skills: string[];
}

export const skillsData: SkillData[] = [
    {
        title: 'Backend Development',
        skills: ['NodeJS', 'Express', 'Spring Boot']
    },
    {
        title: 'Frontend Development',
        skills: ['React', 'Tailwind', 'Material UI']
    },
    {
        title: 'Mobile Development',
        skills: ['Flutter', 'Dart', 'GetX']
    },
    {
        title: 'DevOps',
        skills: ['Kubernetes', 'Docker', 'AWS']
    }
];
