import React, { useState } from 'react';
import { Utensils, Users, Heart, Info } from 'lucide-react';
import { AgeGroup } from '../../types/health';
import { dietPlans } from '../../data/diet';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import Badge from '../ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import AgeGroupSelector from './AgeGroupSelector';

const DietRecommendations: React.FC = () => {
  const [selectedAge, setSelectedAge] = useState<AgeGroup | null>(null);
  const [selectedCondition, setSelectedCondition] = useState<string>('');

  const conditions = [...new Set(dietPlans.filter(plan => plan.condition).map(plan => plan.condition!))];

  const filteredPlans = dietPlans.filter(plan => {
    const matchesAge = !selectedAge || plan.ageGroup === selectedAge;
    const matchesCondition = !selectedCondition || plan.condition === selectedCondition;
    return matchesAge && matchesCondition;
  });

  const getNutrientColor = (type: string) => {
    if (type === 'calories') return 'text-blue-600';
    if (type === 'protein') return 'text-red-600';
    if (type === 'carbs') return 'text-yellow-600';
    if (type === 'fat') return 'text-purple-600';
    if (type === 'fiber') return 'text-green-600';
    return 'text-gray-600';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Utensils className="w-8 h-8 text-health-green-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">饮食搭配建议</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          根据不同年龄段和健康状况，为您提供科学的饮食搭配方案
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

      {/* 健康状况筛选 */}
      {conditions.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Heart className="w-5 h-5 mr-2 text-red-500" />
            特殊健康状况
          </h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCondition('')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCondition === ''
                  ? 'bg-health-green-100 text-health-green-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              健康人群
            </button>
            {conditions.map(condition => (
              <button
                key={condition}
                onClick={() => setSelectedCondition(condition)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCondition === condition
                    ? 'bg-health-green-100 text-health-green-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {condition}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 饮食方案列表 */}
      <div className="space-y-8">
        {filteredPlans.length === 0 ? (
          <div className="text-center py-12">
            <Utensils className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">暂无匹配的饮食方案</h3>
            <p className="text-gray-600">请尝试调整筛选条件</p>
          </div>
        ) : (
          filteredPlans.map(plan => (
            <Card key={plan.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="info">
                      {plan.ageGroup === 'children' ? '儿童' : plan.ageGroup === 'adult' ? '成人' : '老年人'}
                    </Badge>
                    {plan.condition && (
                      <Badge variant="warning">{plan.condition}</Badge>
                    )}
                  </div>
                </div>

                {/* 营养成分概览 */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 bg-health-green-50 rounded-xl">
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${getNutrientColor('calories')}`}>
                      {plan.nutrients.calories}
                    </div>
                    <div className="text-sm text-gray-600">千卡</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${getNutrientColor('protein')}`}>
                      {plan.nutrients.protein}g
                    </div>
                    <div className="text-sm text-gray-600">蛋白质</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${getNutrientColor('carbs')}`}>
                      {plan.nutrients.carbs}g
                    </div>
                    <div className="text-sm text-gray-600">碳水化合物</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${getNutrientColor('fat')}`}>
                      {plan.nutrients.fat}g
                    </div>
                    <div className="text-sm text-gray-600">脂肪</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${getNutrientColor('fiber')}`}>
                      {plan.nutrients.fiber}g
                    </div>
                    <div className="text-sm text-gray-600">膳食纤维</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <Tabs defaultValue="meals">
                  <TabsList className="mb-6">
                    <TabsTrigger value="meals">三餐搭配</TabsTrigger>
                    <TabsTrigger value="tips">饮食建议</TabsTrigger>
                  </TabsList>

                  <TabsContent value="meals">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2" />
                          早餐
                        </h4>
                        <div className="space-y-2">
                          {plan.meals.breakfast.map((item, index) => (
                            <div key={index} className="p-3 bg-yellow-50 rounded-lg text-sm">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          <div className="w-3 h-3 bg-orange-400 rounded-full mr-2" />
                          午餐
                        </h4>
                        <div className="space-y-2">
                          {plan.meals.lunch.map((item, index) => (
                            <div key={index} className="p-3 bg-orange-50 rounded-lg text-sm">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          <div className="w-3 h-3 bg-blue-400 rounded-full mr-2" />
                          晚餐
                        </h4>
                        <div className="space-y-2">
                          {plan.meals.dinner.map((item, index) => (
                            <div key={index} className="p-3 bg-blue-50 rounded-lg text-sm">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          <div className="w-3 h-3 bg-green-400 rounded-full mr-2" />
                          加餐
                        </h4>
                        <div className="space-y-2">
                          {plan.meals.snacks.map((item, index) => (
                            <div key={index} className="p-3 bg-green-50 rounded-lg text-sm">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="tips">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <Info className="w-5 h-5 mr-2 text-health-green-500" />
                        专业建议
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {plan.tips.map((tip, index) => (
                          <div key={index} className="p-4 bg-health-green-50 rounded-lg">
                            <div className="flex items-start">
                              <div className="w-6 h-6 bg-health-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                                {index + 1}
                              </div>
                              <span className="text-gray-700 leading-relaxed">{tip}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default DietRecommendations;