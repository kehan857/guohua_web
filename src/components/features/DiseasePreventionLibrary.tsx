import React, { useState } from 'react';
import { Search, AlertCircle, Shield, Users } from 'lucide-react';
import { Disease, AgeGroup } from '../../types/health';
import { diseases } from '../../data/diseases';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import Badge from '../ui/badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion';
import AgeGroupSelector from './AgeGroupSelector';

const DiseasePreventionLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAge, setSelectedAge] = useState<AgeGroup | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const categories = [...new Set(diseases.map(d => d.category))];

  const filteredDiseases = diseases.filter(disease => {
    const matchesSearch = disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         disease.symptoms.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesAge = !selectedAge || disease.ageGroups.includes(selectedAge);
    const matchesCategory = !selectedCategory || disease.category === selectedCategory;
    
    return matchesSearch && matchesAge && matchesCategory;
  });

  const getSeverityColor = (severity: Disease['severity']) => {
    switch (severity) {
      case 'low': return 'success';
      case 'medium': return 'warning';
      case 'high': return 'danger';
      default: return 'default';
    }
  };

  const getSeverityText = (severity: Disease['severity']) => {
    switch (severity) {
      case 'low': return '轻度';
      case 'medium': return '中度';
      case 'high': return '重度';
      default: return '未知';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Shield className="w-8 h-8 text-health-green-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">常见病预防库</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          了解常见疾病的预防知识，为您和家人的健康保驾护航
        </p>
      </div>

      {/* 年龄组选择 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2 text-health-green-600" />
          选择适用人群
        </h2>
        <AgeGroupSelector
          selectedAge={selectedAge}
          onAgeSelect={setSelectedAge}
        />
        {selectedAge && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setSelectedAge(null)}
              className="text-health-green-600 hover:text-health-green-700 text-sm"
            >
              显示所有人群
            </button>
          </div>
        )}
      </div>

      {/* 搜索和筛选 */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="搜索疾病名称或症状..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-health-green-500 focus:border-health-green-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === ''
                ? 'bg-health-green-100 text-health-green-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            所有分类
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-health-green-100 text-health-green-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 疾病列表 */}
      <div className="space-y-6">
        {filteredDiseases.length === 0 ? (
          <div className="text-center py-12">
            <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">未找到相关疾病</h3>
            <p className="text-gray-600">请尝试调整搜索条件或筛选选项</p>
          </div>
        ) : (
          filteredDiseases.map(disease => (
            <Card key={disease.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{disease.name}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="info">{disease.category}</Badge>
                      <Badge variant={getSeverityColor(disease.severity)}>
                        {getSeverityText(disease.severity)}
                      </Badge>
                      {disease.ageGroups.map(age => (
                        <Badge key={age} variant="default">
                          {age === 'children' ? '儿童' : age === 'adult' ? '成人' : '老年人'}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{disease.description}</p>
              </CardHeader>

              <CardContent>
                <Accordion type="multiple">
                  <AccordionItem value="symptoms">
                    <AccordionTrigger>
                      <span className="flex items-center">
                        <AlertCircle className="w-4 h-4 mr-2 text-red-500" />
                        主要症状
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {disease.symptoms.map((symptom, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-3" />
                            <span className="text-gray-700">{symptom}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="prevention">
                    <AccordionTrigger>
                      <span className="flex items-center">
                        <Shield className="w-4 h-4 mr-2 text-health-green-500" />
                        预防措施
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        {disease.prevention.map((measure, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-6 h-6 bg-health-green-100 text-health-green-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                              {index + 1}
                            </div>
                            <span className="text-gray-700 leading-relaxed">{measure}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="risk-factors">
                    <AccordionTrigger>
                      <span className="flex items-center">
                        <AlertCircle className="w-4 h-4 mr-2 text-orange-500" />
                        危险因素
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {disease.riskFactors.map((factor, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                            <span className="text-gray-700">{factor}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default DiseasePreventionLibrary;