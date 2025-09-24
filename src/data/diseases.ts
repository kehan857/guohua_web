import { Disease } from '../types/health';

export const diseases: Disease[] = [
  {
    id: 'common-cold',
    name: '普通感冒',
    category: '呼吸系统',
    symptoms: ['流鼻涕', '打喷嚏', '咳嗽', '轻微发热', '喉咙痛'],
    prevention: [
      '勤洗手，使用肥皂和流水洗手至少20秒',
      '避免用手触摸眼睛、鼻子和嘴巴',
      '保持室内空气流通',
      '均衡饮食，多吃富含维生素C的食物',
      '保证充足睡眠，增强免疫力',
      '适度运动，提高身体抵抗力'
    ],
    riskFactors: ['免疫力低下', '疲劳过度', '气候变化', '人群密集场所'],
    ageGroups: ['children', 'adult', 'elderly'],
    severity: 'low',
    description: '普通感冒是由病毒感染引起的上呼吸道疾病，通常症状较轻，7-10天可自愈。'
  },
  {
    id: 'hypertension',
    name: '高血压',
    category: '心血管系统',
    symptoms: ['头痛', '头晕', '心悸', '胸闷', '视力模糊'],
    prevention: [
      '控制盐分摄入，每日不超过6克',
      '保持健康体重，BMI控制在正常范围',
      '规律运动，每周至少150分钟中等强度运动',
      '戒烟限酒，避免过量饮酒',
      '保持心情愉快，学会压力管理',
      '定期监测血压'
    ],
    riskFactors: ['遗传因素', '高盐饮食', '肥胖', '缺乏运动', '压力过大', '年龄增长'],
    ageGroups: ['adult', 'elderly'],
    severity: 'medium',
    description: '高血压是指血压持续升高的慢性疾病，需要长期管理和治疗。'
  },
  {
    id: 'diabetes',
    name: '糖尿病',
    category: '内分泌系统',
    symptoms: ['多饮', '多尿', '多食', '体重下降', '疲乏无力'],
    prevention: [
      '控制体重，维持健康BMI',
      '合理饮食，控制糖分和总热量摄入',
      '规律运动，提高胰岛素敏感性',
      '定期体检，监测血糖水平',
      '避免久坐，保持活跃生活方式',
      '戒烟限酒，保持良好生活习惯'
    ],
    riskFactors: ['遗传因素', '肥胖', '缺乏运动', '不良饮食习惯', '年龄因素'],
    ageGroups: ['adult', 'elderly'],
    severity: 'high',
    description: '糖尿病是一组以高血糖为特征的代谢性疾病，需要终身管理。'
  },
  {
    id: 'osteoporosis',
    name: '骨质疏松',
    category: '骨骼系统',
    symptoms: ['腰背疼痛', '身高变矮', '驼背', '易骨折'],
    prevention: [
      '充足钙质摄入，每日1000-1200mg',
      '补充维生素D，促进钙质吸收',
      '适度负重运动，如散步、慢跑',
      '戒烟限酒，避免影响骨质',
      '避免长期卧床，保持活动',
      '定期骨密度检查'
    ],
    riskFactors: ['年龄增长', '女性绝经后', '缺乏运动', '钙质不足', '吸烟饮酒'],
    ageGroups: ['elderly'],
    severity: 'medium',
    description: '骨质疏松是以骨量减少、骨质量下降为特征的骨骼疾病。'
  },
  {
    id: 'childhood-obesity',
    name: '儿童肥胖',
    category: '营养代谢',
    symptoms: ['体重超标', '活动能力下降', '呼吸困难', '自信心不足'],
    prevention: [
      '合理膳食，控制高热量食物',
      '增加蔬菜水果摄入',
      '规律运动，每天至少1小时',
      '限制屏幕时间，减少久坐',
      '培养良好饮食习惯',
      '家庭共同参与健康生活'
    ],
    riskFactors: ['不良饮食习惯', '缺乏运动', '遗传因素', '环境因素'],
    ageGroups: ['children'],
    severity: 'medium',
    description: '儿童肥胖是指儿童体重超过同年龄、同身高正常儿童标准体重的疾病。'
  }
];