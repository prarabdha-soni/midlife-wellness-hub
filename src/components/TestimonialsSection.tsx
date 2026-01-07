import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  language: 'en' | 'hi';
}

const TestimonialsSection = ({ language }: TestimonialsSectionProps) => {
  const testimonials = [
    { name: 'Priya S.', location: 'Gurugram', quote: 'Lost 8 kgs in 3 months! The personalized plan finally worked for my metabolism.', quoteHi: '3 महीने में 8 किलो वजन कम किया! व्यक्तिगत योजना ने मेरे मेटाबॉलिज्म के लिए काम किया।' },
    { name: 'Anita M.', location: 'Delhi', quote: 'Hot flashes reduced by 80% within weeks. I can finally sleep through the night.', quoteHi: 'हॉट फ्लैशेस हफ्तों में 80% कम हो गए। मैं अब रात भर सो सकती हूं।' },
    { name: 'Kavita R.', location: 'Noida', quote: 'My energy levels are back to what they were 10 years ago. Incredible!', quoteHi: 'मेरी ऊर्जा का स्तर 10 साल पहले जैसा हो गया है। अविश्वसनीय!' },
    { name: 'Sunita K.', location: 'Gurugram', quote: 'The brain fog lifted completely. I feel sharp and focused again.', quoteHi: 'दिमाग की धुंध पूरी तरह साफ हो गई। मैं फिर से तेज और केंद्रित महसूस करती हूं।' },
    { name: 'Meera P.', location: 'Mumbai', quote: 'Finally found doctors who understand midlife changes. Game changer!', quoteHi: 'आखिरकार ऐसे डॉक्टर मिले जो मध्य जीवन के बदलाव समझते हैं।' },
    { name: 'Deepa L.', location: 'Bangalore', quote: 'Insurance covered everything. Affordable care without compromising quality.', quoteHi: 'बीमा ने सब कुछ कवर किया। गुणवत्ता से समझौता किए बिना सस्ती देखभाल।' },
    { name: 'Rekha T.', location: 'Pune', quote: 'The supplements made such a difference in my daily energy and mood.', quoteHi: 'सप्लीमेंट्स ने मेरी दैनिक ऊर्जा और मूड में बहुत फर्क किया।' },
    { name: 'Shalini G.', location: 'Gurugram', quote: 'Virtual consultations are so convenient. No more traffic stress!', quoteHi: 'वर्चुअल परामर्श बहुत सुविधाजनक हैं। अब ट्रैफिक का तनाव नहीं!' },
    { name: 'Nandini S.', location: 'Hyderabad', quote: 'My skin and hair have never looked better. Thank you Sakhi!', quoteHi: 'मेरी त्वचा और बाल कभी इतने अच्छे नहीं दिखे। धन्यवाद साखी!' },
    { name: 'Pooja A.', location: 'Chennai', quote: 'The hormone therapy changed my life. I wish I started sooner.', quoteHi: 'हार्मोन थेरेपी ने मेरी जिंदगी बदल दी। काश मैंने पहले शुरू किया होता।' },
    { name: 'Rashmi V.', location: 'Jaipur', quote: 'Sleep quality improved dramatically. Waking up refreshed again!', quoteHi: 'नींद की गुणवत्ता में नाटकीय सुधार हुआ। फिर से तरोताजा जाग रही हूं!' },
    { name: 'Geeta N.', location: 'Ahmedabad', quote: 'Weight loss felt natural this time. No crash diets, just real results.', quoteHi: 'इस बार वजन घटाना स्वाभाविक लगा। कोई क्रैश डाइट नहीं, बस असली परिणाम।' },
    { name: 'Uma D.', location: 'Lucknow', quote: 'The care team is incredibly supportive and understanding.', quoteHi: 'देखभाल टीम अविश्वसनीय रूप से सहायक और समझदार है।' },
    { name: 'Lalitha B.', location: 'Kolkata', quote: 'Finally, healthcare that treats the whole woman, not just symptoms.', quoteHi: 'आखिरकार, स्वास्थ्य देखभाल जो पूरी महिला का इलाज करती है।' },
    { name: 'Padma K.', location: 'Chandigarh', quote: 'The Hindi support made it so much easier to understand my treatment.', quoteHi: 'हिंदी सहायता ने मेरे उपचार को समझना बहुत आसान बना दिया।' },
    { name: 'Kamala R.', location: 'Gurugram', quote: 'Mood swings are gone. My family noticed the difference too!', quoteHi: 'मूड स्विंग्स खत्म हो गए। मेरे परिवार ने भी फर्क महसूस किया!' },
    { name: 'Saroja M.', location: 'Indore', quote: 'Joint pain reduced significantly with the right supplements.', quoteHi: 'सही सप्लीमेंट्स से जोड़ों का दर्द काफी कम हो गया।' },
    { name: 'Vasundhara S.', location: 'Coimbatore', quote: 'The personalized approach makes all the difference.', quoteHi: 'व्यक्तिगत दृष्टिकोण सारा फर्क लाता है।' },
    { name: 'Janaki P.', location: 'Vadodara', quote: 'Six months in and I feel like myself again. So grateful!', quoteHi: 'छह महीने हो गए और मैं फिर से खुद जैसी महसूस कर रही हूं।' },
    { name: 'Bhavana T.', location: 'Surat', quote: 'Best decision I made for my health this year. Highly recommend!', quoteHi: 'इस साल मेरे स्वास्थ्य के लिए सबसे अच्छा निर्णय।' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const visibleCount = 3;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], key: `${index}-${currentIndex}` });
    }
    return visible;
  };

  const sectionTitle = language === 'en' ? 'Real Stories, Real Results' : 'असली कहानियां, असली परिणाम';
  const sectionSubtitle = language === 'en' 
    ? 'Join thousands of women who transformed their midlife journey'
    : 'उन हजारों महिलाओं में शामिल हों जिन्होंने अपनी मध्य जीवन यात्रा को बदला';

  return (
    <section className="bg-sage-light section-padding overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 w-12 h-12 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 w-12 h-12 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 md:px-12">
            <AnimatePresence mode="popLayout">
              {getVisibleTestimonials().map((testimonial, idx) => (
                <motion.div
                  key={testimonial.key}
                  initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-background rounded-2xl p-6 md:p-8 shadow-sm border border-border"
                >
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  <p className="text-foreground text-lg leading-relaxed mb-6">
                    "{language === 'en' ? testimonial.quote : testimonial.quoteHi}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center">
                      <span className="text-primary font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.slice(0, 10).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex % 10 ? 'bg-primary w-6' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
