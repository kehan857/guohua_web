import React, { useState } from 'react';
import { Calculator, CheckCircle, AlertCircle, BarChart3 } from 'lucide-react';
import { HealthTest, Question, AgeGroup } from '../../types/health';
import { healthTests } from '../../data/selftest';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import Badge from '../ui/badge';
import Button from '../ui/button';
import Progress from '../ui/progress';
import AgeGroupSelector from './AgeGroupSelector';

interface TestAnswer {
  questionId: string;
  value: string | number | string[];
}

const HealthSelfTest: React.FC = () => {
  const [selectedAge, setSelectedAge] = useState<AgeGroup | null>(null);
  const [currentTest, setCurrentTest] = useState<HealthTest | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<TestAnswer[]>([]);
  const [testResult, setTestResult] = useState<any>(null);

  const filteredTests = healthTests.filter(test => 
    !selectedAge || test.ageGroups.includes(selectedAge)
  );

  const startTest = (test: HealthTest) => {
    setCurrentTest(test);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setTestResult(null);
  };

  const handleAnswer = (value: string | number | string[]) => {
    const newAnswers = [...answers];
    const existingIndex = newAnswers.findIndex(a => a.questionId === currentTest!.questions[currentQuestionIndex].id);
    
    if (existingIndex >= 0) {
      newAnswers[existingIndex].value = value;
    } else {
      newAnswers.push({
        questionId: currentTest!.questions[currentQuestionIndex].id,
        value
      });
    }
    
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < currentTest!.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult();
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateResult = () => {
    if (!currentTest) return;

    let totalScore = 0;

    // 计算总分
    answers.forEach(answer => {
      const question = currentTest.questions.find(q => q.id === answer.questionId);
      if (!question) return;

      if (question.type === 'single') {
        const option = question.options?.find(opt => opt.value === answer.value);
        if (option) totalScore += option.score;
      } else if (question.type === 'multiple') {
        const selectedValues = answer.value as string[];
        selectedValues.forEach(value => {
          const option = question.options?.find(opt => opt.value === value);
          if (option) totalScore += option.score;
        });
      } else if (question.type === 'scale' || question.type === 'numeric') {
        // 对于BMI测试的特殊处理
        if (currentTest.id === 'bmi-test') {
          const heightAnswer = answers.find(a => a.questionId === 'height');
          const weightAnswer = answers.find(a => a.questionId === 'weight');
          
          if (heightAnswer && weightAnswer) {
            const height = Number(heightAnswer.value) / 100; // 转换为米
            const weight = Number(weightAnswer.value);
            totalScore = weight / (height * height); // BMI计算
          }
        } else {
          totalScore += Number(answer.value);
        }
      }
    });

    // 找到对应的评分范围
    const scoring = currentTest.scoring.find(s => 
      totalScore >= s.range[0] && totalScore < s.range[1]
    ) || currentTest.scoring[currentTest.scoring.length - 1];

    // 找到对应的解释
    const interpretation = currentTest.interpretation.find(i => i.level === scoring.level);

    setTestResult({
      score: totalScore,
      level: scoring.level,
      description: scoring.description,
      interpretation
    });
  };

  const resetTest = () => {
    setCurrentTest(null);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setTestResult(null);
  };

  const getCurrentAnswer = () => {
    return answers.find(a => a.questionId === currentTest!.questions[currentQuestionIndex].id)?.value;
  };

  const renderQuestion = (question: Question) => {
    const currentAnswer = getCurrentAnswer();

    switch (question.type) {
      case 'single':
        return (
          <div className="space-y-3">
            {question.options?.map(option => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                  currentAnswer === option.value
                    ? 'border-health-green-500 bg-health-green-50'
                    : 'border-gray-200 hover:border-health-green-300'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        );

      case 'multiple':
        return (
          <div className="space-y-3">
            {question.options?.map(option => {
              const selectedValues = (currentAnswer as string[]) || [];
              const isSelected = selectedValues.includes(option.value as string);
              
              return (
                <button
                  key={option.value}
                  onClick={() => {
                    const newValues = isSelected
                      ? selectedValues.filter(v => v !== option.value)
                      : [...selectedValues, option.value as string];
                    handleAnswer(newValues);
                  }}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                    isSelected
                      ? 'border-health-green-500 bg-health-green-50'
                      : 'border-gray-200 hover:border-health-green-300'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded border-2 mr-3 ${
                      isSelected ? 'bg-health-green-500 border-health-green-500' : 'border-gray-300'
                    }`}>
                      {isSelected && <CheckCircle className="w-3 h-3 text-white m-0.5" />}
                    </div>
                    {option.label}
                  </div>
                </button>
              );
            })}
          </div>
        );

      case 'scale':
        return (
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>{question.min}</span>
              <span>{question.max}</span>
            </div>
            <input
              type="range"
              min={question.min}
              max={question.max}
              value={currentAnswer as number || question.min}
              onChange={(e) => handleAnswer(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-center">
              <span className="text-2xl font-bold text-health-green-600">
                {currentAnswer || question.min}
              </span>
            </div>
          </div>
        );

      case 'numeric':
        return (
          <div className="space-y-4">
            <input
              type="number"
              min={question.min}
              max={question.max}
              value={currentAnswer as number || ''}
              onChange={(e) => handleAnswer(Number(e.target.value))}
              placeholder={`请输入${question.unit ? `(${question.unit})` : ''}`}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-health-green-500 focus:outline-none text-center text-xl"
            />
            {question.unit && (
              <div className="text-center text-gray-600">
                单位: {question.unit}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  if (testResult && currentTest) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="text-center">
          <CardHeader>
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-health-green-500 to-health-green-600 rounded-full flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">{currentTest.name} - 测试结果</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-health-green-50 to-green-50 rounded-2xl">
                <div className="text-4xl font-bold text-health-green-600 mb-2">
                  {currentTest.id === 'bmi-test' ? testResult.score.toFixed(1) : testResult.score}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {testResult.description}
                </div>
                {testResult.interpretation && (
                  <div className={`text-base ${testResult.interpretation.color}`}>
                    {testResult.interpretation.title}
                  </div>
                )}
              </div>

              {testResult.interpretation && (
                <div className="text-left space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">结果说明</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {testResult.interpretation.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">建议措施</h3>
                    <div className="space-y-2">
                      {testResult.interpretation.recommendations.map((rec: string, index: number) => (
                        <div key={index} className="flex items-start">
                          <div className="w-6 h-6 bg-health-green-100 text-health-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-gray-700 leading-relaxed">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={resetTest}>
                  返回测试列表
                </Button>
                <Button variant="health" onClick={() => startTest(currentTest)}>
                  重新测试
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentTest) {
    const progress = ((currentQuestionIndex + 1) / currentTest.questions.length) * 100;
    const question = currentTest.questions[currentQuestionIndex];
    const currentAnswer = getCurrentAnswer();
    const canProceed = currentAnswer !== undefined && 
      (question.type !== 'multiple' || (currentAnswer as string[]).length > 0);

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <CardTitle className="text-xl">{currentTest.name}</CardTitle>
              <Badge variant="info">
                {currentQuestionIndex + 1} / {currentTest.questions.length}
              </Badge>
            </div>
            <Progress value={progress} className="mb-4" />
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {question.text}
                </h3>
                {renderQuestion(question)}
              </div>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={prevQuestion}
                  disabled={currentQuestionIndex === 0}
                >
                  上一题
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={resetTest}>
                    退出测试
                  </Button>
                  <Button
                    variant="health"
                    onClick={nextQuestion}
                    disabled={!canProceed}
                  >
                    {currentQuestionIndex === currentTest.questions.length - 1 ? '查看结果' : '下一题'}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Calculator className="w-8 h-8 text-health-green-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">血糖指标监测</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          通过科学的血糖监测方法，了解您的血糖控制状况并获得专业管理建议
        </p>
      </div>

      {/* 年龄组选择 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">选择适用人群</h2>
        <AgeGroupSelector
          selectedAge={selectedAge}
          onAgeSelect={setSelectedAge}
        />
        {selectedAge && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setSelectedAge(null)}
              className="text-health-green-600 hover:text-health-green-700 text-sm"
            >
              显示所有测试
            </button>
          </div>
        )}
      </div>

      {/* 测试列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTests.map(test => (
          <Card key={test.id} className="hover:shadow-xl transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-start justify-between mb-3">
                <CardTitle className="text-lg">{test.name}</CardTitle>
                <Badge variant="info">{test.category}</Badge>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {test.ageGroups.map(age => (
                  <Badge key={age} variant="default" size="sm">
                    {age === 'children' ? '儿童' : age === 'adult' ? '成人' : '老年人'}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-600">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  <span>{test.questions.length} 个问题</span>
                </div>
                <Button
                  variant="health"
                  className="w-full"
                  onClick={() => startTest(test)}
                >
                  开始测试
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTests.length === 0 && (
        <div className="text-center py-12">
          <Calculator className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">暂无适合的测试</h3>
          <p className="text-gray-600">请选择其他年龄组查看更多测试</p>
        </div>
      )}
    </div>
  );
};

export default HealthSelfTest;