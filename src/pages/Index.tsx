import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [gameScore, setGameScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const theoryTopics = [
    {
      title: 'Длина',
      icon: 'Ruler',
      description: 'Изучаем миллиметры, сантиметры, метры и километры',
      content: 'Длина — это расстояние от одной точки до другой. Мы измеряем длину линейкой или рулеткой.',
      examples: ['1 см = 10 мм', '1 м = 100 см', '1 км = 1000 м']
    },
    {
      title: 'Масса',
      icon: 'Scale',
      description: 'Граммы, килограммы, тонны',
      content: 'Масса показывает, насколько тяжёлый предмет. Измеряем весами.',
      examples: ['1 кг = 1000 г', '1 т = 1000 кг', '1 ц = 100 кг']
    },
    {
      title: 'Время',
      icon: 'Clock',
      description: 'Секунды, минуты, часы, дни',
      content: 'Время помогает понять, когда что-то происходит и сколько длится.',
      examples: ['1 мин = 60 сек', '1 час = 60 мин', '1 сутки = 24 часа']
    },
    {
      title: 'Объём',
      icon: 'Box',
      description: 'Миллилитры, литры',
      content: 'Объём — это сколько места занимает жидкость или сыпучее вещество.',
      examples: ['1 л = 1000 мл', '1 стакан ≈ 200 мл', '1 ведро ≈ 10 л']
    }
  ];

  const practiceProblems = [
    {
      level: 1,
      question: 'Сколько сантиметров в 3 метрах?',
      options: ['30 см', '300 см', '3000 см', '3 см'],
      correct: 1
    },
    {
      level: 2,
      question: 'Маша купила 2 кг яблок и 500 г груш. Сколько всего фруктов?',
      options: ['2500 г', '2050 г', '3 кг', '7 кг'],
      correct: 0
    },
    {
      level: 3,
      question: 'Урок длится 45 минут. Сколько это секунд?',
      options: ['450 сек', '2700 сек', '4500 сек', '270 сек'],
      correct: 1
    }
  ];

  const games = [
    {
      title: 'Сортировка величин',
      description: 'Расставь величины от меньшей к большей',
      icon: 'ArrowUpDown'
    },
    {
      title: 'Конвертер единиц',
      description: 'Преобразуй одни единицы в другие',
      icon: 'RefreshCw'
    },
    {
      title: 'Викторина',
      description: 'Ответь на вопросы и набери баллы',
      icon: 'Brain'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <header className="bg-white shadow-sm border-b-4 border-primary">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Icon name="Calculator" size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Олимпиада по математике</h1>
                <p className="text-sm text-gray-600">Величины для 1-4 классов</p>
              </div>
            </div>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Icon name="Trophy" size={20} className="mr-2" />
              Баллы: {gameScore}
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="theory" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 h-auto p-1 bg-white shadow-md">
            <TabsTrigger value="theory" className="flex flex-col gap-2 py-4">
              <Icon name="BookOpen" size={24} />
              <span className="text-sm font-semibold">Теория</span>
            </TabsTrigger>
            <TabsTrigger value="practice" className="flex flex-col gap-2 py-4">
              <Icon name="PenTool" size={24} />
              <span className="text-sm font-semibold">Практика</span>
            </TabsTrigger>
            <TabsTrigger value="games" className="flex flex-col gap-2 py-4">
              <Icon name="Gamepad2" size={24} />
              <span className="text-sm font-semibold">Игры</span>
            </TabsTrigger>
            <TabsTrigger value="parents" className="flex flex-col gap-2 py-4">
              <Icon name="Users" size={24} />
              <span className="text-sm font-semibold">Родителям</span>
            </TabsTrigger>
            <TabsTrigger value="teachers" className="flex flex-col gap-2 py-4">
              <Icon name="GraduationCap" size={24} />
              <span className="text-sm font-semibold">Учителям</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="theory" className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {theoryTopics.map((topic, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Icon name={topic.icon} size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{topic.title}</CardTitle>
                        <CardDescription className="text-base">{topic.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">{topic.content}</p>
                    <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                      <p className="font-semibold text-primary mb-2">Примеры соотношений:</p>
                      {topic.examples.map((example, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-accent" />
                          <span className="text-gray-800">{example}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="practice" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Практические задания</CardTitle>
                <CardDescription>Выбери уровень сложности и реши задачи</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[1, 2, 3].map((level) => (
                    <Button
                      key={level}
                      variant={selectedLevel === level ? 'default' : 'outline'}
                      size="lg"
                      onClick={() => setSelectedLevel(level)}
                      className="h-20 text-lg font-bold"
                    >
                      Уровень {level}
                    </Button>
                  ))}
                </div>

                {selectedLevel && (
                  <div className="space-y-6 animate-scale-in">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">Задача {currentQuestion + 1} из {practiceProblems.length}</h3>
                      <Progress value={(currentQuestion / practiceProblems.length) * 100} className="w-1/3" />
                    </div>

                    <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-secondary">
                      <CardContent className="pt-6">
                        <p className="text-xl font-medium mb-6">{practiceProblems[currentQuestion].question}</p>
                        <div className="grid gap-3">
                          {practiceProblems[currentQuestion].options.map((option, idx) => (
                            <Button
                              key={idx}
                              variant="outline"
                              className="h-14 justify-start text-left text-lg hover:bg-white hover:border-secondary"
                              onClick={() => {
                                if (idx === practiceProblems[currentQuestion].correct) {
                                  setGameScore(gameScore + 10);
                                }
                                setCurrentQuestion((currentQuestion + 1) % practiceProblems.length);
                              }}
                            >
                              {String.fromCharCode(65 + idx)}. {option}
                            </Button>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="games" className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6">
              {games.map((game, idx) => (
                <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-accent">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mx-auto mb-4">
                      <Icon name={game.icon} size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-center text-xl">{game.title}</CardTitle>
                    <CardDescription className="text-center">{game.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                      Начать игру
                      <Icon name="Play" size={20} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="parents" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Icon name="Heart" size={28} className="text-red-500" />
                  Рекомендации для родителей
                </CardTitle>
                <CardDescription>Как помочь ребёнку подготовиться к олимпиаде</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      Как организовать занятия дома?
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-gray-700 space-y-3">
                      <p>• Выделяйте 20-30 минут ежедневно для изучения величин</p>
                      <p>• Используйте реальные предметы: линейку, весы, часы</p>
                      <p>• Превращайте обучение в игру: взвешивайте продукты, измеряйте мебель</p>
                      <p>• Хвалите за успехи, поддерживайте при трудностях</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      Практические упражнения в быту
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-gray-700 space-y-3">
                      <p>• На кухне: измеряйте объём жидкостей, взвешивайте продукты</p>
                      <p>• В магазине: сравнивайте массу товаров, считайте деньги</p>
                      <p>• На прогулке: измеряйте расстояния шагами, засекайте время</p>
                      <p>• Дома: измеряйте рост ребёнка, длину комнаты</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      Как мотивировать ребёнка?
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-gray-700 space-y-3">
                      <p>• Используйте систему наград за выполненные задания</p>
                      <p>• Показывайте практическую пользу знаний о величинах</p>
                      <p>• Решайте задачи вместе, создавайте атмосферу сотрудничества</p>
                      <p>• Отмечайте прогресс ребёнка графиками и таблицами</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teachers" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Icon name="BookMarked" size={28} className="text-primary" />
                  Методические материалы для учителей
                </CardTitle>
                <CardDescription>Планы уроков и рекомендации по подготовке к олимпиаде</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-2 border-blue-200 bg-blue-50/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="FileText" size={24} className="text-primary" />
                        План урока: Длина и её измерение
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-gray-700">
                      <p><strong>Класс:</strong> 2-3</p>
                      <p><strong>Время:</strong> 45 минут</p>
                      <p><strong>Цель:</strong> Научить детей переводить единицы длины</p>
                      <Button variant="outline" className="w-full mt-4">
                        <Icon name="Download" size={18} className="mr-2" />
                        Скачать план
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-200 bg-green-50/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Target" size={24} className="text-accent" />
                        Олимпиадные задачи
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-gray-700">
                      <p><strong>Уровень:</strong> 3-4 класс</p>
                      <p><strong>Количество:</strong> 50 задач с решениями</p>
                      <p><strong>Темы:</strong> Все виды величин</p>
                      <Button variant="outline" className="w-full mt-4">
                        <Icon name="Download" size={18} className="mr-2" />
                        Скачать сборник
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-orange-200 bg-orange-50/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Lightbulb" size={24} className="text-secondary" />
                        Игровые методики
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-gray-700">
                      <p><strong>Формат:</strong> Интерактивные занятия</p>
                      <p><strong>Возраст:</strong> 1-4 класс</p>
                      <p><strong>Содержание:</strong> 15 обучающих игр</p>
                      <Button variant="outline" className="w-full mt-4">
                        <Icon name="Download" size={18} className="mr-2" />
                        Скачать методику
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-purple-200 bg-purple-50/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="BarChart" size={24} className="text-purple-600" />
                        Система оценивания
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-gray-700">
                      <p><strong>Тип:</strong> Критерии и рубрики</p>
                      <p><strong>Применение:</strong> Проверка знаний</p>
                      <p><strong>Формат:</strong> Таблицы и шаблоны</p>
                      <Button variant="outline" className="w-full mt-4">
                        <Icon name="Download" size={18} className="mr-2" />
                        Скачать материалы
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-gray-900 text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Icon name="Trophy" size={24} className="text-yellow-400" />
            <p className="text-lg font-semibold">Удачи на олимпиаде!</p>
          </div>
          <p className="text-gray-400">Образовательная платформа для подготовки к математической олимпиаде</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
