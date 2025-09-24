import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Search, Target, CheckCircle } from 'lucide-react';
import { Symptom, Treatment } from '../../types/health';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import Badge from '../ui/badge';

// 模拟症状和治疗数据
const symptoms: Symptom[] = [
  {
    id: 'headache',
    name: '头痛',
    category: '神经系统',
    severity: 'mild',
    treatments: [
      {
        id: 'rest',
        name: '充分休息',
        description: '在安静的环境中休息，避免强光和噪音',
        steps: ['找一个安静的房间', '关闭灯光', '平躺休息30分钟'],
        type: 'home',
        effectiveness: 70
      },
      {
        id: 'cold-compress',
        name: '冷敷',
        description: '用冷毛巾敷在前额',
        steps: ['准备冷毛巾', '敷在前额10-15分钟', '可重复2-3次'],
        type: 'home',
        effectiveness: 60
      }
    ]
  },
  {
    id: 'fever',
    name: '发热',
    category: '全身症状',
    severity: 'moderate',
    treatments: [
      {
        id: 'physical-cooling',
        name: '物理降温',
        description: '用温水擦拭身体降温',
        steps: ['准备温水', '用毛巾擦拭四肢和躯干', '保持通风'],
        type: 'home',
        effectiveness: 80
      },
      {
        id: 'hydration',
        name: '补充水分',
        description: '多喝温开水',
        steps: ['准备温开水', '小口慢饮', '每小时200ml'],
        type: 'home',
        effectiveness: 70
      }
    ]
  },
  {
    id: 'cough',
    name: '咳嗽',
    category: '呼吸系统',
    severity: 'mild',
    treatments: [
      {
        id: 'honey-water',
        name: '蜂蜜水',
        description: '温蜂蜜水润喉止咳',
        steps: ['准备温开水', '加入一勺蜂蜜', '慢慢饮用'],
        type: 'home',
        effectiveness: 65
      },
      {
        id: 'steam-inhalation',
        name: '蒸汽吸入',
        description: '吸入热蒸汽缓解咳嗽',
        steps: ['准备热水', '用毛巾覆盖头部', '吸入蒸汽5-10分钟'],
        type: 'home',
        effectiveness: 70
      }
    ]
  }
];

interface DragItem {
  type: string;
  id: string;
  symptom?: Symptom;
  treatment?: Treatment;
}

interface SymptomCardProps {
  symptom: Symptom;
}

const SymptomCard: React.FC<SymptomCardProps> = ({ symptom }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'symptom',
    item: { type: 'symptom', id: symptom.id, symptom },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const getSeverityColor = (severity: Symptom['severity']) => {
    switch (severity) {
      case 'mild': return 'success';
      case 'moderate': return 'warning';
      case 'severe': return 'danger';
      default: return 'default';
    }
  };

  return (
    <div
      ref={drag}
      className={`drag-item p-4 bg-white border-2 border-gray-200 rounded-xl cursor-move transition-all ${
        isDragging ? 'opacity-50 scale-95' : 'hover:border-health-green-300 hover:shadow-md'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-900">{symptom.name}</h3>
        <Badge variant={getSeverityColor(symptom.severity)} size="sm">
          {symptom.severity === 'mild' ? '轻度' : symptom.severity === 'moderate' ? '中度' : '重度'}
        </Badge>
      </div>
      <p className="text-sm text-gray-600">{symptom.category}</p>
    </div>
  );
};

interface TreatmentCardProps {
  treatment: Treatment;
  onSelect: (treatment: Treatment) => void;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment, onSelect }) => {
  const getTypeColor = (type: Treatment['type']) => {
    switch (type) {
      case 'immediate': return 'danger';
      case 'home': return 'success';
      case 'medical': return 'warning';
      default: return 'default';
    }
  };

  const getTypeText = (type: Treatment['type']) => {
    switch (type) {
      case 'immediate': return '紧急处理';
      case 'home': return '家庭护理';
      case 'medical': return '就医治疗';
      default: return '未知';
    }
  };

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-semibold text-gray-900">{treatment.name}</h4>
        <Badge variant={getTypeColor(treatment.type)} size="sm">
          {getTypeText(treatment.type)}
        </Badge>
      </div>
      <p className="text-sm text-gray-600 mb-3">{treatment.description}</p>
      <div className="flex items-center justify-between">
        <div className="text-sm text-health-green-600">
          有效性: {treatment.effectiveness}%
        </div>
        <button
          onClick={() => onSelect(treatment)}
          className="px-3 py-1 bg-health-green-100 text-health-green-700 rounded-lg text-sm hover:bg-health-green-200 transition-colors"
        >
          查看详情
        </button>
      </div>
    </div>
  );
};

interface DropZoneProps {
  onDrop: (symptom: Symptom) => void;
  selectedSymptom: Symptom | null;
}

const DropZone: React.FC<DropZoneProps> = ({ onDrop, selectedSymptom }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'symptom',
    drop: (item: DragItem) => {
      if (item.symptom) {
        onDrop(item.symptom);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`drop-zone p-8 border-2 border-dashed rounded-2xl transition-all ${
        isOver
          ? 'border-health-green-400 bg-health-green-50'
          : selectedSymptom
          ? 'border-health-green-300 bg-health-green-25'
          : 'border-gray-300 bg-gray-50'
      }`}
    >
      <div className="text-center">
        {selectedSymptom ? (
          <div>
            <CheckCircle className="w-12 h-12 text-health-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              已选择症状: {selectedSymptom.name}
            </h3>
            <p className="text-gray-600">
              查看下方推荐的处理方法
            </p>
          </div>
        ) : (
          <div>
            <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              拖拽症状到这里
            </h3>
            <p className="text-gray-600">
              将您的症状拖拽到此区域，获取对应的处理建议
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const SymptomMatcher: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSymptom, setSelectedSymptom] = useState<Symptom | null>(null);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const filteredSymptoms = symptoms.filter(symptom =>
    symptom.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    symptom.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSymptomDrop = (symptom: Symptom) => {
    setSelectedSymptom(symptom);
    setSelectedTreatment(null);
  };

  const handleTreatmentSelect = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Target className="w-8 h-8 text-health-green-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">症状匹配处理</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          通过拖拽操作，快速找到症状对应的处理方法
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 症状列表 */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">常见症状</h2>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="搜索症状..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-health-green-500 focus:border-health-green-500"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredSymptoms.map(symptom => (
              <SymptomCard key={symptom.id} symptom={symptom} />
            ))}
          </div>
        </div>

        {/* 拖拽区域和处理方法 */}
        <div className="lg:col-span-2 space-y-6">
          <DropZone
            onDrop={handleSymptomDrop}
            selectedSymptom={selectedSymptom}
          />

          {selectedSymptom && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                推荐处理方法
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedSymptom.treatments.map(treatment => (
                  <TreatmentCard
                    key={treatment.id}
                    treatment={treatment}
                    onSelect={handleTreatmentSelect}
                  />
                ))}
              </div>
            </div>
          )}

          {selectedTreatment && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-health-green-500" />
                  {selectedTreatment.name} - 详细步骤
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">{selectedTreatment.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">操作步骤</h4>
                    <div className="space-y-3">
                      {selectedTreatment.steps.map((step, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-8 h-8 bg-health-green-100 text-health-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-gray-700 leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>注意：</strong>如果症状持续加重或出现其他严重症状，请及时就医。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default SymptomMatcher;