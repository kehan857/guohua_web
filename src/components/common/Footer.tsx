import React from 'react';
import { Heart, Shield, Users, Stethoscope } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-health-green-50 to-green-50 border-t border-health-green-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-health-green-500 to-health-green-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-health-green-700">
                全家健康管理平台
              </span>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              专为全家庭打造的健康管理科普平台，提供专业的疾病预防知识、急救指南、饮食建议和健康自测服务。
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-health-green-600">
                <Shield className="w-4 h-4 mr-2" />
                <span>专业可靠</span>
              </div>
              <div className="flex items-center text-sm text-health-green-600">
                <Users className="w-4 h-4 mr-2" />
                <span>全家适用</span>
              </div>
              <div className="flex items-center text-sm text-health-green-600">
                <Stethoscope className="w-4 h-4 mr-2" />
                <span>科学权威</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">主要功能</h3>
            <ul className="space-y-2 text-gray-600">
              <li>常见病预防库</li>
              <li>家庭急救指南</li>
              <li>饮食搭配建议</li>
              <li>健康指标自测</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">适用人群</h3>
            <ul className="space-y-2 text-gray-600">
              <li>儿童健康管理</li>
              <li>成人健康维护</li>
              <li>老年人健康关怀</li>
              <li>家庭健康教育</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-health-green-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            @2025 全家健康管理平台
          </p>
          <p className="text-sm text-gray-500 mt-2">
            本平台提供的信息仅供参考，不能替代专业医疗建议，如有疾病请及时就医
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;