import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, Utensils, Calculator, Users, Heart, Star, ArrowRight, Activity, Award, BookOpen, Phone, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import Button from '../components/ui/button';

const Home: React.FC = () => {
  const features = [
    {
      icon: Activity,
      title: '糖尿病管理',
      description: '全面的糖尿病知识库，提供1型、2型糖尿病的专业管理指导',
      link: '/prevention',
      color: 'from-health-green-500 to-health-green-600',
      highlights: ['分型管理指导', '科学控糖方案', '专业医学建议']
    },
    {
      icon: AlertTriangle,
      title: '并发症预防',
      description: '糖尿病并发症的预防和处理，包含详细的预防措施和应急处理',
      link: '/emergency',
      color: 'from-red-500 to-red-600',
      highlights: ['并发症识别', '预防措施指导', '应急处理方案']
    },
    {
      icon: Utensils,
      title: '控糖饮食',
      description: '专业的糖尿病饮食指导，低GI食谱和个性化营养搭配方案',
      link: '/diet',
      color: 'from-orange-500 to-orange-600',
      highlights: ['低GI食谱', '营养均衡搭配', '血糖友好食物']
    },
    {
      icon: Calculator,
      title: '血糖监测',
      description: '血糖监测指导和健康指标评估，帮助您更好地管理血糖水平',
      link: '/selftest',
      color: 'from-blue-500 to-blue-600',
      highlights: ['血糖监测技巧', '数据分析解读', '个性化建议']
    }
  ];

  const stats = [
    { label: '糖尿病知识条目', value: '200+', icon: Activity },
    { label: '并发症预防方案', value: '50+', icon: AlertTriangle },
    { label: '控糖食谱', value: '100+', icon: Utensils },
    { label: '监测指标', value: '20+', icon: Calculator }
  ];

  const diabetesTypes = [
    {
      title: '1型糖尿病',
      description: '胰岛素依赖型糖尿病管理',
      icon: '💉',
      features: ['胰岛素治疗指导', '血糖监测方案', '饮食计划制定', '运动安全指南']
    },
    {
      title: '2型糖尿病',
      description: '成人发病型糖尿病管理',
      icon: '📊',
      features: ['生活方式干预', '药物治疗配合', '体重管理指导', '并发症预防']
    },
    {
      title: '妊娠糖尿病',
      description: '孕期血糖管理和母婴健康',
      icon: '🤱',
      features: ['孕期血糖控制', '营养需求平衡', '胎儿健康监护', '产后恢复指导']
    }
  ];

  const experts = [
    {
      name: '李明华',
      title: '内分泌科主任医师',
      specialty: '糖尿病慢病管理专家',
      experience: '20年',
      achievements: ['国家级糖尿病防治专家', '发表SCI论文50余篇', '主持国家自然科学基金项目'],
      avatar: '👨‍⚕️'
    },
    {
      name: '王雅琳',
      title: '营养科副主任医师',
      specialty: '糖尿病营养治疗专家',
      experience: '15年',
      achievements: ['中国营养学会糖尿病营养分会委员', '糖尿病饮食指南编写专家', '临床营养治疗经验丰富'],
      avatar: '👩‍⚕️'
    },
    {
      name: '张建国',
      title: '内分泌科副主任医师',
      specialty: '糖尿病并发症防治专家',
      experience: '18年',
      achievements: ['糖尿病足病防治专家', '糖尿病肾病诊疗专家', '多项科研成果获奖'],
      avatar: '👨‍⚕️'
    }
  ];

  const successCases = [
    {
      patient: '张先生',
      age: 45,
      type: '2型糖尿病',
      duration: '3个月管理',
      results: {
        hba1c: { before: '9.2%', after: '6.8%' },
        weight: { before: '85kg', after: '78kg' },
        bloodPressure: { before: '150/95', after: '130/80' }
      },
      testimonial: '通过专业的慢病调理方案，我的血糖控制得到了显著改善，体重也减轻了7公斤，整个人精神状态都好了很多。'
    },
    {
      patient: '李女士',
      age: 38,
      type: '妊娠糖尿病',
      duration: '孕期全程管理',
      results: {
        hba1c: { before: '7.8%', after: '6.2%' },
        weight: { before: '孕期合理增重', after: '母婴健康' },
        bloodPressure: { before: '正常范围', after: '稳定控制' }
      },
      testimonial: '在专家团队的指导下，我成功控制了孕期血糖，宝宝健康出生，产后血糖也恢复正常。'
    },
    {
      patient: '王先生',
      age: 62,
      type: '2型糖尿病合并高血压',
      duration: '6个月综合管理',
      results: {
        hba1c: { before: '8.5%', after: '6.9%' },
        weight: { before: '92kg', after: '84kg' },
        bloodPressure: { before: '160/100', after: '135/85' }
      },
      testimonial: '综合的慢病调理让我不仅血糖达标，血压也稳定了，并发症风险大大降低。'
    }
  ];

  const knowledgeArticles = [
    {
      title: '糖尿病患者的日常血糖监测指南',
      category: '血糖管理',
      readTime: '5分钟',
      summary: '详细介绍血糖监测的时间点、频率和注意事项，帮助患者科学监测血糖。'
    },
    {
      title: '低GI饮食：糖尿病患者的最佳选择',
      category: '饮食管理',
      readTime: '8分钟',
      summary: '深入解析低血糖指数食物的选择原则，提供实用的饮食搭配建议。'
    },
    {
      title: '糖尿病运动处方：安全有效的运动指导',
      category: '运动管理',
      readTime: '6分钟',
      summary: '针对不同类型糖尿病患者的运动建议，包括运动强度、时间和注意事项。'
    },
    {
      title: '糖尿病并发症早期识别与预防',
      category: '并发症预防',
      readTime: '10分钟',
      summary: '全面介绍糖尿病常见并发症的早期症状和预防措施。'
    }
  ];

  const serviceProcess = [
    {
      step: 1,
      title: '健康评估',
      description: '专业医师进行全面的健康状况评估，制定个性化管理方案',
      icon: '📋'
    },
    {
      step: 2,
      title: '方案制定',
      description: '根据评估结果，制定包括饮食、运动、用药的综合管理计划',
      icon: '📝'
    },
    {
      step: 3,
      title: '执行指导',
      description: '专业团队提供一对一指导，确保管理方案的有效执行',
      icon: '👥'
    },
    {
      step: 4,
      title: '定期随访',
      description: '定期监测血糖等指标，及时调整管理方案，确保最佳效果',
      icon: '📈'
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
              糖尿病
              <span className="bg-gradient-to-r from-health-green-600 to-health-green-700 bg-clip-text text-transparent">
                慢病调理
              </span>
              管理平台
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              专业的糖尿病健康管理服务，涵盖血糖控制、并发症预防、控糖饮食和血糖监测，
              让糖尿病管理变得科学规范，助您重获健康生活
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/prevention">
              <Button variant="health" size="lg" className="w-full sm:w-auto">
                开始糖尿病管理
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Phone className="w-5 h-5 mr-2" />
              专家咨询热线：400-123-4567
            </Button>
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
              核心服务模块
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              四大核心模块，全方位守护糖尿病患者的健康，提供个性化的慢病调理方案
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

      {/* Expert Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-health-green-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-health-green-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                专家团队
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              汇聚国内顶尖的糖尿病管理专家，为您提供最专业的慢病调理服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="text-6xl mb-4">{expert.avatar}</div>
                  <CardTitle className="text-xl mb-2">{expert.name}</CardTitle>
                  <p className="text-health-green-600 font-medium">{expert.title}</p>
                  <p className="text-gray-600">{expert.specialty}</p>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-3 py-1 bg-health-green-100 text-health-green-700 rounded-full text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      从业 {expert.experience}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {expert.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-health-green-500 mr-2" />
                        <span className="text-sm text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-health-green-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                成功案例
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              真实的慢病调理成功案例，见证专业管理带来的健康改善
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successCases.map((case_, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-lg">{case_.patient}</CardTitle>
                      <p className="text-gray-600">{case_.age}岁 · {case_.type}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-health-green-600 font-medium">{case_.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 p-4 bg-health-green-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">糖化血红蛋白</div>
                        <div className="text-lg font-bold text-red-600">{case_.results.hba1c.before}</div>
                        <div className="text-xs text-gray-500">调理前</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">糖化血红蛋白</div>
                        <div className="text-lg font-bold text-health-green-600">{case_.results.hba1c.after}</div>
                        <div className="text-xs text-gray-500">调理后</div>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 italic border-l-4 border-health-green-400 pl-4">
                      "{case_.testimonial}"
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-health-green-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-health-green-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                科普知识专区
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              权威的糖尿病管理知识，帮助您更好地了解和管理糖尿病
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {knowledgeArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                    <span className="text-xs text-health-green-600 bg-health-green-100 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{article.summary}</p>
                  <Button variant="outline" className="mt-4 w-full">
                    阅读全文
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              服务流程
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              科学规范的服务流程，确保每位患者都能获得最适合的慢病调理方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {serviceProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-health-green-500 to-health-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{process.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-health-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diabetes Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-health-green-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-health-green-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                分型糖尿病管理
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              针对不同类型糖尿病的特点，提供个性化的管理方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diabetesTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="text-6xl mb-4">{type.icon}</div>
                  <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                  <p className="text-gray-600">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
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
              开始您的糖尿病管理之旅
            </h2>
            <p className="text-xl mb-8 opacity-90">
              立即体验我们的糖尿病管理平台，科学控糖，健康生活
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/prevention">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-health-green-600 border-white hover:bg-gray-50">
                  糖尿病管理指南
                </Button>
              </Link>
              <Link to="/selftest">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-health-green-600 border-white hover:bg-gray-50">
                  血糖监测指导
                </Button>
              </Link>
            </div>
            <div className="text-center">
              <p className="text-lg mb-2">专家咨询热线</p>
              <p className="text-2xl font-bold">400-123-4567</p>
              <p className="text-sm opacity-80">工作时间：周一至周日 8:00-20:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;