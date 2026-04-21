export type SkillCategory = 'frontend' | 'backend' | 'database';

export const SKILL_CATEGORIES: SkillCategory[] = ['frontend', 'backend', 'database'];

export interface Skill {
    id: number;
    name: string;
    level: number;
    category: SkillCategory;
    icon: string;
}

