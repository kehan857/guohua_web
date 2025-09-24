import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import HealthSelfTest from '../components/features/HealthSelfTest';
import SymptomMatcher from '../components/features/SymptomMatcher';

const SelfTest: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Tabs defaultValue="selftest" className="w-full">
        <div className="bg-gradient-to-r from-health-green-50 to-green-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">健康评估中心</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                通过科学的测试和智能匹配，了解您的健康状况
              </p>
            </div>
            
            <div className="flex justify-center">
              <TabsList className="bg-white shadow-lg">
                <TabsTrigger value="selftest" className="px-6 py-3">
                  健康指标自测
                </TabsTrigger>
                <TabsTrigger value="symptom-matcher" className="px-6 py-3">
                  症状匹配处理
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
        </div>

        <TabsContent value="selftest">
          <HealthSelfTest />
        </TabsContent>

        <TabsContent value="symptom-matcher">
          <SymptomMatcher />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SelfTest;