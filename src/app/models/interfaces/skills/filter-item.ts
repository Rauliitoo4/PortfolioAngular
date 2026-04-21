import { SkillCategory } from "../../skill";

export interface FilterItem {
    value: SkillCategory | 'all';
    label: string;
}