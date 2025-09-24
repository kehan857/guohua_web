export interface Disease {
  id: string;
  name: string;
  category: string;
  symptoms: string[];
  prevention: string[];
  riskFactors: string[];
  ageGroups: AgeGroup[];
  severity: 'low' | 'medium' | 'high';
  description: string;
}

export interface EmergencyStep {
  id: string;
  title: string;
  description: string;
  steps: string[];
  warnings: string[];
  videoUrl?: string;
  category: 'basic' | 'advanced' | 'critical';
  duration: string;
}

export interface DietPlan {
  id: string;
  name: string;
  ageGroup: AgeGroup;
  condition?: string;
  meals: {
    breakfast: string[];
    lunch: string[];
    dinner: string[];
    snacks: string[];
  };
  nutrients: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
  };
  tips: string[];
}

export interface HealthTest {
  id: string;
  name: string;
  category: string;
  questions: Question[];
  scoring: ScoringRule[];
  interpretation: Interpretation[];
  ageGroups: AgeGroup[];
}

export interface Question {
  id: string;
  text: string;
  type: 'single' | 'multiple' | 'scale' | 'numeric';
  options?: Option[];
  min?: number;
  max?: number;
  unit?: string;
}

export interface Option {
  value: string | number;
  label: string;
  score: number;
}

export interface ScoringRule {
  range: [number, number];
  level: 'excellent' | 'good' | 'fair' | 'poor' | 'critical';
  description: string;
}

export interface Interpretation {
  level: string;
  title: string;
  description: string;
  recommendations: string[];
  color: string;
}

export type AgeGroup = 'children' | 'adult' | 'elderly';

export interface Symptom {
  id: string;
  name: string;
  category: string;
  severity: 'mild' | 'moderate' | 'severe';
  treatments: Treatment[];
}

export interface Treatment {
  id: string;
  name: string;
  description: string;
  steps: string[];
  type: 'immediate' | 'home' | 'medical';
  effectiveness: number;
}