import React from 'react';
import { Baby, User, Users } from 'lucide-react';
import { AgeGroup } from '../../types/health';

interface AgeGroupSelectorProps {
  selectedAge: AgeGroup | null;
  onAgeSelect: (age: AgeGroup) => void;
  className?: string;
}

const AgeGroupSelector: React.FC<AgeGroupSelectorProps> = ({
  selectedAge,
  onAgeSelect,
  className = ''
}) => {
  const ageGroups = [
    {
      key: 'children' as AgeGroup,
      label: '儿童',
      icon: Baby,
      description: '0-12岁',
      color: 'from-blue-500 to-blue-600'
    },
    {
      key: 'adult' as AgeGroup,
      label: '成人',
      icon: User,
      description: '13-64岁',
      color: 'from-health-green-500 to-health-green-600'
    },
    {
      key: 'elderly' as AgeGroup,
      label: '老年人',
      icon: Users,
      description: '65岁以上',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}>
      {ageGroups.map((group) => {
        const Icon = group.icon;
        const isSelected = selectedAge === group.key;
        
        return (
          <button
            key={group.key}
            onClick={() => onAgeSelect(group.key)}
            className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
              isSelected
                ? 'border-health-green-400 bg-health-green-50 shadow-lg'
                : 'border-gray-200 bg-white hover:border-health-green-300 hover:shadow-md'
            }`}
          >
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${group.color} flex items-center justify-center`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {group.label}
              </h3>
              <p className="text-sm text-gray-600">
                {group.description}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default AgeGroupSelector;