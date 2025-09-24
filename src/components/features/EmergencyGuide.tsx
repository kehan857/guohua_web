import React, { useState } from 'react';
import { AlertTriangle, Clock, Shield, Search } from 'lucide-react';
import { EmergencyStep } from '../../types/health';
import { emergencySteps } from '../../data/emergency';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import Badge from '../ui/badge';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

const EmergencyGuide: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const categories = [...new Set(emergencySteps.map(step => step.category))];

  const filteredSteps = emergencySteps.filter(step => {
    const matchesSearch = step.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         step.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || step.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: EmergencyStep['category']) => {
    switch (category) {
      case 'basic': return 'success';
      case 'advanced': return 'warning';
      case 'critical': return 'danger';
      default: return 'default';
    }
  };

  const getCategoryText = (category: EmergencyStep['category']) => {
    switch (category) {
      case 'basic': return '轻度并发症';
      case 'advanced': return '中度并发症';
      case 'critical': return '严重并发症';
      default: return '未知';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">糖尿病并发症预防</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          了解糖尿病并发症的预防和应急处理，保护您的健康
        </p>
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
          <p className="text-red-700 font-medium">
            ⚠️ 出现严重并发症请立即就医，本指南仅供参考学习
          </p>
        </div>
      </div>

      {/* 搜索和筛选 */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="搜索并发症预防方法..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === ''
                ? 'bg-red-100 text-red-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            所有类别
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-red-100 text-red-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {getCategoryText(category)}
            </button>
          ))}
        </div>
      </div>

      {/* 急救步骤列表 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSteps.map(step => (
          <Card key={step.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex items-start justify-between mb-3">
                <CardTitle className="text-xl">{step.title}</CardTitle>
                <Badge variant={getCategoryColor(step.category)}>
                  {getCategoryText(step.category)}
                </Badge>
              </div>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <Clock className="w-4 h-4 mr-1" />
                <span>{step.duration}</span>
              </div>
            </CardHeader>

            <CardContent>
              {/* 操作步骤 */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-health-green-500" />
                  预防措施
                </h4>
                <div className="space-y-3">
                  {step.steps.map((stepItem, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-health-green-100 text-health-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 leading-relaxed">{stepItem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 注意事项 */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2 text-red-500" />
                  注意事项
                </h4>
                <div className="space-y-2">
                  {step.warnings.map((warning, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">{warning}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 详细指导按钮 */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    查看详细指导
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl m-4">
                  <DialogHeader>
                    <DialogTitle>{step.title} - 详细指导</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">详细预防措施</h4>
                      <div className="space-y-4">
                        {step.steps.map((stepItem, index) => (
                          <div key={index} className="p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center mb-2">
                              <div className="w-6 h-6 bg-health-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">
                                {index + 1}
                              </div>
                              <span className="font-medium">措施 {index + 1}</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{stepItem}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">重要提醒</h4>
                      <ul className="space-y-1">
                        {step.warnings.map((warning, index) => (
                          <li key={index} className="text-red-700 text-sm">• {warning}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EmergencyGuide;