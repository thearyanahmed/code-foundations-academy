
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      content: "The fundamentals course completely transformed my understanding of programming. I went from struggling with basic concepts to confidently solving complex problems. Now I'm working at my dream company!",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Full Stack Developer at Stripe",
      content: "I've taken many programming courses, but this one stands out. The focus on fundamentals gave me the confidence to tackle any new technology. The system design course was particularly valuable.",
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Senior Developer at Microsoft",
      content: "As someone who was self-taught, I had gaps in my knowledge. This course filled those gaps perfectly. The OOP principles I learned here helped me write much cleaner, more maintainable code.",
      avatar: "EJ"
    },
    {
      name: "David Park",
      role: "Tech Lead at Amazon",
      content: "The instructor's approach to teaching complex topics is incredible. Everything is broken down into digestible pieces. I recommend this to anyone serious about becoming a better programmer.",
      avatar: "DP"
    },
    {
      name: "Lisa Thompson",
      role: "Software Architect at Netflix",
      content: "After 5 years of coding, I thought I knew it all. This course showed me how much I was missing. The system design concepts I learned here directly helped me get promoted to architect level.",
      avatar: "LT"
    },
    {
      name: "Alex Kumar",
      role: "Backend Engineer at Uber",
      content: "The best investment I've made in my career. The fundamentals I learned here have made me a more confident developer and helped me excel in technical interviews.",
      avatar: "AK"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how mastering the fundamentals has transformed careers of our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
