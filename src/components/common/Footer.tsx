import React from 'react';
import { Heart, Activity, Phone, Mail, MapPin, Clock } from 'lucide-react';

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
                糖尿病健康管理平台
              </span>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              专业的糖尿病慢病调理管理平台，提供科学的血糖控制方案、并发症预防指导、控糖饮食建议和血糖监测服务，助您重获健康生活。
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-health-green-600">
                <Activity className="w-4 h-4 mr-2" />
                <span>专业管理</span>
              </div>
              <div className="flex items-center text-sm text-health-green-600">
                <Heart className="w-4 h-4 mr-2" />
                <span>慢病调理</span>
              </div>
              <div className="flex items-center text-sm text-health-green-600">
                <Phone className="w-4 h-4 mr-2" />
                <span>专家指导</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">核心服务</h3>
            <ul className="space-y-2 text-gray-600">
              <li>糖尿病分型管理</li>
              <li>并发症预防指导</li>
              <li>控糖饮食方案</li>
              <li>血糖监测指导</li>
              <li>个性化调理计划</li>
              <li>专家团队咨询</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">联系我们</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-health-green-600" />
                <span>400-123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-health-green-600" />
                <span>diabetes@health.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-health-green-600" />
                <span>北京市朝阳区健康大厦</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-health-green-600" />
                <span>周一至周日 8:00-20:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-health-green-200 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <p className="text-gray-600">
                2025 糖尿病健康管理平台
              </p>
              <p className="text-sm text-gray-500 mt-1">
                专业的慢病调理服务，科学管理糖尿病
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-sm text-gray-500">
                本平台提供的信息仅供参考，不能替代专业医疗建议
              </p>
              <p className="text-sm text-gray-500 mt-1">
                如有疾病请及时就医，遵循医生指导
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;