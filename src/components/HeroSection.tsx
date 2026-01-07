import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-woman.jpg';

interface HeroSectionProps {
  language: 'en' | 'hi';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    en: {
      title: 'Built From Care.',
      titleHighlight: 'Made For Results.',
      subtitle: 'Expert virtual care for women navigating midlife. Insurance-covered consultations, personalized prescriptions, and science-backed supplements—all from the comfort of home.',
      checkCoverage: 'Check Coverage',
      bookVisit: 'Book Visit',
      insuranceBadge: 'Available pan-India via major insurers',
      trustStats: '200K+ women trust us',
    },
    hi: {
      title: 'देखभाल से निर्मित।',
      titleHighlight: 'परिणामों के लिए बनाया गया।',
      subtitle: 'मध्य जीवन में महिलाओं के लिए विशेषज्ञ वर्चुअल देखभाल। बीमा-कवर परामर्श, व्यक्तिगत प्रिस्क्रिप्शन, और विज्ञान-समर्थित सप्लीमेंट्स—सब कुछ घर बैठे।',
      checkCoverage: 'कवरेज जांचें',
      bookVisit: 'अपॉइंटमेंट बुक करें',
      insuranceBadge: 'प्रमुख बीमा कंपनियों के माध्यम से पूरे भारत में उपलब्ध',
      trustStats: '2 लाख+ महिलाएं हम पर भरोसा करती हैं',
    },
  };

  const t = content[language];

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-powder via-background to-sage-light pt-20 relative overflow-hidden">
      {/* Background Image - Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <img 
          src={heroImage} 
          alt="Confident woman representing midlife wellness" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container-custom section-padding relative z-20">
        <div className="max-w-2xl">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            {t.title}
            <br />
            <span className="text-primary">{t.titleHighlight}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
          >
            {t.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button className="btn-hero-primary">
              {t.checkCoverage}
            </Button>
            <Button className="btn-hero-secondary">
              {t.bookVisit}
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            {/* Insurance Badge */}
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-5 py-3 rounded-full border border-border shadow-sm">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{t.insuranceBadge}</span>
            </div>

            {/* Trust Stats */}
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-5 py-3 rounded-full border border-border shadow-sm">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{t.trustStats}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="lg:hidden absolute bottom-0 right-0 w-full h-64 opacity-30"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
        <img 
          src={heroImage} 
          alt="" 
          className="w-full h-full object-cover object-top"
          aria-hidden="true"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
