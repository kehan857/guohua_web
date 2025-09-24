import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, Utensils, Calculator, Users, Heart, Star, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import Button from '../components/ui/button';

const Home: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: '疾病预防库',
      description: '全面的常见疾病预防知识，按年龄分组提供针对性建议',
      link: '/prevention',
      color: 'from-health-green-500 to-health-green-600',
      highlights: ['分年龄段指导', '科学预防方案', '专业医学建议']
    },
    {
      icon: AlertTriangle,
      title: '急救指南',
      description: '关键时刻的生命救助技能，包含视频演示和详细步骤',
      link: '/emergency',
      color: 'from-red-500 to-red-600',
      highlights: ['视频演示教学', '分步骤指导', '紧急情况处理']
    },
    {
      icon: Utensils,
      title: '饮食建议',
      description: '个性化的营养搭配方案，适合不同人群和健康状况',
      link: '/diet',
      color: 'from-orange-500 to-orange-600',
      highlights: ['个性化方案', '营养均衡搭配', '健康饮食指导']
    },
    {
      icon: Calculator,
      title: '健康自测',
      description: '科学的健康指标测试，了解身体状况并获得专业建议',
      link: '/selftest',
      color: 'from-blue-500 to-blue-600',
      highlights: ['科学测试方法', '专业结果分析', '个性化建议']
    }
  ];

  const stats = [
    { label: '预防知识条目', value: '200+', icon: Shield },
    { label: '急救技能', value: '50+', icon: AlertTriangle },
    { label: '饮食方案', value: '100+', icon: Utensils },
    { label: '健康测试', value: '20+', icon: Calculator }
  ];

  const ageGroups = [
    {
      title: '儿童健康',
      description: '0-12岁儿童的健康管理指导',
      icon: '👶',
      features: ['生长发育监测', '疫苗接种指南', '营养搭配建议', '常见病预防']
    },
    {
      title: '成人健康',
      description: '13-64岁成人的健康维护',
      icon: '👨‍💼',
      features: ['慢性病预防', '职场健康管理', '运动健身指导', '心理健康关怀']
    },
    {
      title: '老年健康',
      description: '65岁以上老年人的健康关怀',
      icon: '👴',
      features: ['老年病预防', '康复护理指导', '营养补充建议', '安全防护措施']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-health-green-50 via-white to-green-50" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-health-green-100 text-health-green-700 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              <span>专业 · 科学 · 贴心</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              全家庭
              <span className="bg-gradient-to-r from-health-green-600 to-health-green-700 bg-clip-text text-transparent">
                健康管理
              </span>
              平台
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              为您和家人提供专业的健康管理服务，涵盖疾病预防、急救指南、饮食建议和健康自测，
              让健康管理变得简单易行
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/prevention">
              <Button variant="health" size="lg" className="w-full sm:w-auto">
                开始健康管理
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/emergency">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                学习急救技能
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-health-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              核心功能模块
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              四大核心模块，全方位守护您和家人的健康
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mr-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {feature.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center">
                          <Star className="w-4 h-4 text-health-green-500 mr-2" />
                          <span className="text-sm text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={feature.link}>
                      <Button variant="health" className="w-full group-hover:shadow-lg transition-all">
                        立即体验
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-health-green-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-health-green-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                分人群健康管理
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              针对不同年龄段的特点，提供个性化的健康管理方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="text-6xl mb-4">{group.icon}</div>
                  <CardTitle className="text-xl mb-2">{group.title}</CardTitle>
                  <p className="text-gray-600">{group.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {group.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center">
                        <div className="w-2 h-2 bg-health-green-400 rounded-full mr-3" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-health-green-500 to-health-green-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              开始您的健康管理之旅
            </h2>
            <p className="text-xl mb-8 opacity-90">
              立即体验我们的健康管理平台，为您和家人的健康保驾护航
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/prevention">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-health-green-600 border-white hover:bg-gray-50">
                  疾病预防指南
                </Button>
              </Link>
              <Link to="/selftest">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-health-green-600 border-white hover:bg-gray-50">
                  健康状况自测
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;