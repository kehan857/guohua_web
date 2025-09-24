import { HealthTest } from '../types/health';

export const healthTests: HealthTest[] = [
  {
    id: 'bmi-test',
    name: 'BMI体重指数测试',
    category: '体重健康',
    questions: [
      {
        id: 'height',
        text: '请输入您的身高（厘米）',
        type: 'numeric',
        min: 100,
        max: 250,
        unit: 'cm'
      },
      {
        id: 'weight',
        text: '请输入您的体重（公斤）',
        type: 'numeric',
        min: 30,
        max: 200,
        unit: 'kg'
      }
    ],
    scoring: [
      { range: [0, 18.5], level: 'poor', description: '体重过轻' },
      { range: [18.5, 24], level: 'excellent', description: '体重正常' },
      { range: [24, 28], level: 'fair', description: '体重超重' },
      { range: [28, 100], level: 'critical', description: '肥胖' }
    ],
    interpretation: [
      {
        level: 'poor',
        title: '体重过轻',
        description: '您的体重低于正常范围，可能存在营养不良的风险。',
        recommendations: [
          '增加营养摄入，选择高蛋白、高热量食物',
          '规律进餐，少量多餐',
          '适度运动，增强体质',
          '如持续体重过轻，建议咨询医生'
        ],
        color: 'text-yellow-600'
      },
      {
        level: 'excellent',
        title: '体重正常',
        description: '恭喜！您的体重在健康范围内。',
        recommendations: [
          '保持现有的健康饮食习惯',
          '继续规律运动',
          '定期监测体重变化',
          '保持健康的生活方式'
        ],
        color: 'text-green-600'
      },
      {
        level: 'fair',
        title: '体重超重',
        description: '您的体重略高于正常范围，需要注意控制。',
        recommendations: [
          '控制总热量摄入',
          '增加运动量，每周至少150分钟中等强度运动',
          '多吃蔬菜水果，减少高热量食物',
          '建立健康的饮食和运动习惯'
        ],
        color: 'text-orange-600'
      },
      {
        level: 'critical',
        title: '肥胖',
        description: '您的体重明显超标，存在健康风险。',
        recommendations: [
          '制定科学的减重计划',
          '寻求专业营养师指导',
          '增加有氧运动和力量训练',
          '建议咨询医生，排查相关疾病风险'
        ],
        color: 'text-red-600'
      }
    ],
    ageGroups: ['adult', 'elderly']
  },
  {
    id: 'sleep-quality',
    name: '睡眠质量评估',
    category: '睡眠健康',
    questions: [
      {
        id: 'sleep-duration',
        text: '您平均每晚睡眠时间是多少？',
        type: 'single',
        options: [
          { value: 1, label: '少于5小时', score: 1 },
          { value: 2, label: '5-6小时', score: 2 },
          { value: 3, label: '7-8小时', score: 4 },
          { value: 4, label: '9小时以上', score: 3 }
        ]
      },
      {
        id: 'sleep-quality',
        text: '您觉得自己的睡眠质量如何？',
        type: 'single',
        options: [
          { value: 1, label: '很差', score: 1 },
          { value: 2, label: '较差', score: 2 },
          { value: 3, label: '一般', score: 3 },
          { value: 4, label: '较好', score: 4 },
          { value: 5, label: '很好', score: 5 }
        ]
      },
      {
        id: 'fall-asleep',
        text: '您通常需要多长时间才能入睡？',
        type: 'single',
        options: [
          { value: 1, label: '超过1小时', score: 1 },
          { value: 2, label: '30-60分钟', score: 2 },
          { value: 3, label: '15-30分钟', score: 4 },
          { value: 4, label: '少于15分钟', score: 5 }
        ]
      },
      {
        id: 'night-waking',
        text: '您夜间醒来的频率如何？',
        type: 'single',
        options: [
          { value: 1, label: '经常醒来（3次以上）', score: 1 },
          { value: 2, label: '偶尔醒来（1-2次）', score: 3 },
          { value: 3, label: '很少醒来', score: 4 },
          { value: 4, label: '一觉到天亮', score: 5 }
        ]
      },
      {
        id: 'morning-feeling',
        text: '早晨醒来时您的感觉如何？',
        type: 'single',
        options: [
          { value: 1, label: '非常疲惫', score: 1 },
          { value: 2, label: '有些疲惫', score: 2 },
          { value: 3, label: '一般', score: 3 },
          { value: 4, label: '比较精神', score: 4 },
          { value: 5, label: '非常精神', score: 5 }
        ]
      }
    ],
    scoring: [
      { range: [5, 12], level: 'poor', description: '睡眠质量差' },
      { range: [13, 18], level: 'fair', description: '睡眠质量一般' },
      { range: [19, 23], level: 'good', description: '睡眠质量良好' },
      { range: [24, 25], level: 'excellent', description: '睡眠质量优秀' }
    ],
    interpretation: [
      {
        level: 'poor',
        title: '睡眠质量差',
        description: '您的睡眠存在明显问题，可能影响日常生活和健康。',
        recommendations: [
          '建立规律的作息时间',
          '创造良好的睡眠环境',
          '避免睡前使用电子设备',
          '如问题持续，建议咨询医生'
        ],
        color: 'text-red-600'
      },
      {
        level: 'fair',
        title: '睡眠质量一般',
        description: '您的睡眠质量有待改善。',
        recommendations: [
          '保持规律的睡眠时间',
          '睡前进行放松活动',
          '避免咖啡因和酒精',
          '适度运动但避免睡前剧烈运动'
        ],
        color: 'text-orange-600'
      },
      {
        level: 'good',
        title: '睡眠质量良好',
        description: '您的睡眠质量不错，继续保持。',
        recommendations: [
          '维持现有的良好睡眠习惯',
          '注意睡眠环境的舒适度',
          '保持规律的作息',
          '适当调整以进一步改善'
        ],
        color: 'text-green-600'
      },
      {
        level: 'excellent',
        title: '睡眠质量优秀',
        description: '恭喜！您拥有优质的睡眠。',
        recommendations: [
          '继续保持优秀的睡眠习惯',
          '可以分享经验帮助他人',
          '定期评估睡眠质量',
          '注意生活变化对睡眠的影响'
        ],
        color: 'text-green-600'
      }
    ],
    ageGroups: ['adult', 'elderly']
  },
  {
    id: 'stress-level',
    name: '压力水平评估',
    category: '心理健康',
    questions: [
      {
        id: 'work-stress',
        text: '您感受到的工作/学习压力程度如何？',
        type: 'scale',
        min: 1,
        max: 10
      },
      {
        id: 'life-stress',
        text: '您感受到的生活压力程度如何？',
        type: 'scale',
        min: 1,
        max: 10
      },
      {
        id: 'stress-symptoms',
        text: '您是否经常出现以下症状？',
        type: 'multiple',
        options: [
          { value: 'headache', label: '头痛', score: 2 },
          { value: 'insomnia', label: '失眠', score: 3 },
          { value: 'anxiety', label: '焦虑', score: 3 },
          { value: 'fatigue', label: '疲劳', score: 2 },
          { value: 'irritability', label: '易怒', score: 2 },
          { value: 'appetite', label: '食欲变化', score: 2 }
        ]
      },
      {
        id: 'coping-ability',
        text: '您觉得自己应对压力的能力如何？',
        type: 'single',
        options: [
          { value: 1, label: '很差', score: 5 },
          { value: 2, label: '较差', score: 4 },
          { value: 3, label: '一般', score: 3 },
          { value: 4, label: '较好', score: 2 },
          { value: 5, label: '很好', score: 1 }
        ]
      }
    ],
    scoring: [
      { range: [0, 15], level: 'excellent', description: '压力水平低' },
      { range: [16, 25], level: 'good', description: '压力水平适中' },
      { range: [26, 35], level: 'fair', description: '压力水平较高' },
      { range: [36, 50], level: 'critical', description: '压力水平很高' }
    ],
    interpretation: [
      {
        level: 'excellent',
        title: '压力水平低',
        description: '您的压力水平很低，心理状态良好。',
        recommendations: [
          '继续保持良好的心态',
          '保持现有的压力管理方法',
          '适当挑战自己，保持成长',
          '帮助他人管理压力'
        ],
        color: 'text-green-600'
      },
      {
        level: 'good',
        title: '压力水平适中',
        description: '您的压力在可控范围内。',
        recommendations: [
          '学习更多压力管理技巧',
          '保持工作生活平衡',
          '定期进行放松活动',
          '与朋友家人分享感受'
        ],
        color: 'text-green-600'
      },
      {
        level: 'fair',
        title: '压力水平较高',
        description: '您承受的压力较大，需要注意调节。',
        recommendations: [
          '学习放松技巧如深呼吸、冥想',
          '合理安排时间，避免过度承诺',
          '寻求社会支持',
          '考虑专业心理咨询'
        ],
        color: 'text-orange-600'
      },
      {
        level: 'critical',
        title: '压力水平很高',
        description: '您的压力水平过高，可能影响身心健康。',
        recommendations: [
          '立即采取减压措施',
          '寻求专业心理帮助',
          '调整生活和工作安排',
          '必要时考虑药物治疗'
        ],
        color: 'text-red-600'
      }
    ],
    ageGroups: ['adult', 'elderly']
  }
];