
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  const courses = [
    {
      title: "Programming Fundamentals",
      description: "Master the core concepts of programming, data structures, and algorithms that form the foundation of software engineering.",
      duration: "8 weeks",
      level: "Beginner",
      price: "$299",
      features: [
        "Variables, Functions & Control Flow",
        "Data Structures (Arrays, Lists, Maps)",
        "Algorithm Complexity & Big O",
        "Problem-Solving Strategies",
        "20+ Coding Exercises"
      ]
    },
    {
      title: "Object-Oriented Programming",
      description: "Learn OOP principles, design patterns, and how to write maintainable, scalable code using industry best practices.",
      duration: "6 weeks",
      level: "Intermediate",
      price: "$399",
      features: [
        "Classes, Objects & Inheritance",
        "Encapsulation & Polymorphism",
        "Design Patterns (Factory, Observer, etc.)",
        "SOLID Principles",
        "Real-world Projects"
      ]
    },
    {
      title: "System Design Basics",
      description: "Understand how to design scalable systems, databases, and APIs. Essential knowledge for senior engineering roles.",
      duration: "10 weeks",
      level: "Advanced",
      price: "$599",
      features: [
        "System Architecture Patterns",
        "Database Design & Optimization",
        "API Design & REST Principles",
        "Caching & Load Balancing",
        "Case Studies from Big Tech"
      ]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our structured curriculum takes you from absolute beginner to job-ready developer. 
            Each course builds upon the previous one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={course.level === 'Beginner' ? 'default' : course.level === 'Intermediate' ? 'secondary' : 'destructive'}>
                    {course.level}
                  </Badge>
                  <span className="text-sm text-gray-600">{course.duration}</span>
                </div>
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {course.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="flex flex-col gap-4">
                <div className="flex justify-between items-center w-full">
                  <span className="text-3xl font-bold text-blue-600">{course.price}</span>
                  <span className="text-sm text-gray-500">One-time payment</span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
