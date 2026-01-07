import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTAFooterProps {
  language: 'en' | 'hi';
}

const CTAFooter = ({ language }: CTAFooterProps) => {
  const content = {
    en: {
      title: 'Ready For Relief?',
      subtitle: 'Take the first step toward feeling like yourself again. Book a virtual consultation today.',
      cta: 'Book Your Visit',
      secondary: 'Check Insurance Coverage',
    },
    hi: {
      title: 'राहत के लिए तैयार हैं?',
      subtitle: 'फिर से खुद जैसा महसूस करने की दिशा में पहला कदम उठाएं। आज ही वर्चुअल परामर्श बुक करें।',
      cta: 'अपॉइंटमेंट बुक करें',
      secondary: 'बीमा कवरेज जांचें',
    },
  };

  const t = content[language];

  return (
    <section className="bg-gradient-to-br from-primary to-sage-dark section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <Heart className="w-12 h-12 text-primary-foreground/80 mx-auto mb-6" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {t.title}
          </h2>
          
          <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-6 rounded-full font-semibold text-lg flex items-center justify-center gap-2 group">
              {t.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 rounded-full font-semibold text-lg">
              {t.secondary}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAFooter;
