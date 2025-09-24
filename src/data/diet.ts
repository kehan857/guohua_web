import { DietPlan } from '../types/health';

export const dietPlans: DietPlan[] = [
  {
    id: 'children-balanced',
    name: '儿童均衡营养餐',
    ageGroup: 'children',
    meals: {
      breakfast: [
        '全麦面包2片 + 牛奶200ml',
        '鸡蛋1个 + 新鲜水果',
        '燕麦粥 + 坚果碎'
      ],
      lunch: [
        '米饭100g + 瘦肉50g',
        '蔬菜炒制 + 豆腐汤',
        '鱼肉 + 绿叶蔬菜'
      ],
      dinner: [
        '小米粥 + 蒸蛋',
        '蔬菜面条 + 肉丸',
        '紫薯 + 蔬菜沙拉'
      ],
      snacks: [
        '酸奶 + 水果',
        '坚果少量',
        '全麦饼干'
      ]
    },
    nutrients: {
      calories: 1800,
      protein: 70,
      carbs: 250,
      fat: 60,
      fiber: 25
    },
    tips: [
      '保证每天摄入5种不同颜色的蔬果',
      '限制糖分和加工食品摄入',
      '鼓励孩子参与食物准备过程',
      '建立规律的用餐时间',
      '充足饮水，少喝含糖饮料'
    ]
  },
  {
    id: 'adult-healthy',
    name: '成人健康饮食',
    ageGroup: 'adult',
    meals: {
      breakfast: [
        '燕麦片 + 牛奶 + 坚果',
        '全麦土司 + 牛油果 + 鸡蛋',
        '豆浆 + 全麦包子 + 蔬菜'
      ],
      lunch: [
        '糙米饭 + 鸡胸肉 + 蔬菜',
        '藜麦沙拉 + 三文鱼',
        '全麦面条 + 瘦肉 + 青菜'
      ],
      dinner: [
        '蒸红薯 + 清蒸鱼 + 蔬菜汤',
        '小米粥 + 豆腐 + 凉拌菜',
        '玉米 + 鸡肉 + 绿叶蔬菜'
      ],
      snacks: [
        '坚果一小把',
        '新鲜水果',
        '无糖酸奶'
      ]
    },
    nutrients: {
      calories: 2000,
      protein: 80,
      carbs: 250,
      fat: 65,
      fiber: 30
    },
    tips: [
      '控制总热量摄入，维持健康体重',
      '增加膳食纤维，促进肠道健康',
      '适量摄入优质蛋白质',
      '减少饱和脂肪和反式脂肪',
      '保持水分充足，每天8杯水'
    ]
  },
  {
    id: 'elderly-nutrition',
    name: '老年人营养餐',
    ageGroup: 'elderly',
    meals: {
      breakfast: [
        '小米粥 + 鸡蛋羹 + 咸菜',
        '牛奶 + 软面包 + 果酱',
        '豆浆 + 蒸蛋 + 青菜'
      ],
      lunch: [
        '软米饭 + 炖肉 + 蒸蛋',
        '面条 + 鱼肉 + 蔬菜汤',
        '粥类 + 豆腐 + 青菜'
      ],
      dinner: [
        '小米粥 + 蒸蛋 + 凉拌菜',
        '软面条 + 肉丸 + 青菜',
        '红薯粥 + 豆腐脑'
      ],
      snacks: [
        '温牛奶',
        '软水果',
        '坚果粉'
      ]
    },
    nutrients: {
      calories: 1600,
      protein: 65,
      carbs: 200,
      fat: 50,
      fiber: 20
    },
    tips: [
      '食物要软烂易消化',
      '少量多餐，避免过饱',
      '补充钙质和维生素D',
      '适量摄入优质蛋白',
      '注意食品安全和新鲜度'
    ]
  },
  {
    id: 'diabetes-diet',
    name: '糖尿病饮食',
    ageGroup: 'adult',
    condition: '糖尿病',
    meals: {
      breakfast: [
        '燕麦片 + 无糖豆浆',
        '全麦面包 + 鸡蛋 + 黄瓜',
        '小米粥 + 蒸蛋 + 青菜'
      ],
      lunch: [
        '糙米饭 + 清蒸鱼 + 绿叶菜',
        '荞麦面 + 鸡胸肉 + 西兰花',
        '藜麦 + 豆腐 + 苦瓜'
      ],
      dinner: [
        '蒸红薯 + 瘦肉 + 菠菜汤',
        '玉米 + 鱼肉 + 冬瓜汤',
        '小米粥 + 豆腐 + 芹菜'
      ],
      snacks: [
        '坚果5-10颗',
        '黄瓜条',
        '无糖酸奶'
      ]
    },
    nutrients: {
      calories: 1800,
      protein: 90,
      carbs: 180,
      fat: 50,
      fiber: 35
    },
    tips: [
      '控制碳水化合物摄入量',
      '选择低升糖指数食物',
      '定时定量进餐',
      '增加膳食纤维摄入',
      '避免高糖高脂食物'
    ]
  },
  {
    id: 'hypertension-diet',
    name: '高血压饮食',
    ageGroup: 'adult',
    condition: '高血压',
    meals: {
      breakfast: [
        '燕麦粥 + 香蕉 + 核桃',
        '全麦面包 + 牛油果',
        '豆浆 + 红薯 + 青菜'
      ],
      lunch: [
        '糙米饭 + 清蒸鱼 + 芹菜',
        '藜麦 + 鸡胸肉 + 菠菜',
        '荞麦面 + 豆腐 + 冬瓜'
      ],
      dinner: [
        '小米粥 + 瘦肉 + 苦瓜',
        '玉米 + 鱼肉 + 海带汤',
        '红薯 + 鸡蛋 + 绿叶菜'
      ],
      snacks: [
        '无盐坚果',
        '新鲜水果',
        '低脂酸奶'
      ]
    },
    nutrients: {
      calories: 1900,
      protein: 85,
      carbs: 230,
      fat: 55,
      fiber: 30
    },
    tips: [
      '严格控制钠盐摄入，每日不超过6g',
      '增加钾、镁、钙的摄入',
      '多吃新鲜蔬果',
      '选择低脂肪食物',
      '戒烟限酒，保持健康生活方式'
    ]
  }
];