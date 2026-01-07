import { motion } from 'framer-motion';
import { 
  Flame, 
  Scale, 
  Brain, 
  Heart, 
  Sparkles, 
  Moon, 
  Leaf, 
  Zap, 
  Droplets,
  Sun
} from 'lucide-react';

interface ConditionsGridProps {
  language: 'en' | 'hi';
}

const ConditionsGrid = ({ language }: ConditionsGridProps) => {
  const conditions = [
    {
      icon: Flame,
      titleEn: 'Perimenopause',
      titleHi: 'पेरीमेनोपॉज',
      descEn: 'Navigate the transition with expert guidance',
      descHi: 'विशेषज्ञ मार्गदर्शन के साथ संक्रमण को नेविगेट करें',
    },
    {
      icon: Leaf,
      titleEn: 'Menopause',
      titleHi: 'मेनोपॉज',
      descEn: 'Comprehensive care for lasting relief',
      descHi: 'स्थायी राहत के लिए व्यापक देखभाल',
    },
    {
      icon: Scale,
      titleEn: 'Weight Management',
      titleHi: 'वजन प्रबंधन',
      descEn: 'Sustainable approaches that work',
      descHi: 'टिकाऊ दृष्टिकोण जो काम करते हैं',
    },
    {
      icon: Brain,
      titleEn: 'Mood & Memory',
      titleHi: 'मूड और याददाश्त',
      descEn: 'Clarity and emotional balance',
      descHi: 'स्पष्टता और भावनात्मक संतुलन',
    },
    {
      icon: Heart,
      titleEn: 'Sexual Wellness',
      titleHi: 'यौन स्वास्थ्य',
      descEn: 'Reclaim intimacy and vitality',
      descHi: 'अंतरंगता और जीवन शक्ति पुनः प्राप्त करें',
    },
    {
      icon: Sparkles,
      titleEn: 'Hair & Skin',
      titleHi: 'बाल और त्वचा',
      descEn: 'Radiance from the inside out',
      descHi: 'अंदर से बाहर तक चमक',
    },
    {
      icon: Moon,
      titleEn: 'Sleep',
      titleHi: 'नींद',
      descEn: 'Restore restful, quality sleep',
      descHi: 'आरामदायक, गुणवत्तापूर्ण नींद बहाल करें',
    },
    {
      icon: Zap,
      titleEn: 'Energy & Fatigue',
      titleHi: 'ऊर्जा और थकान',
      descEn: 'Revitalize your daily energy',
      descHi: 'अपनी दैनिक ऊर्जा को पुनर्जीवित करें',
    },
    {
      icon: Droplets,
      titleEn: 'Hot Flashes',
      titleHi: 'हॉट फ्लैशेस',
      descEn: 'Effective relief strategies',
      descHi: 'प्रभावी राहत रणनीतियाँ',
    },
    {
      icon: Sun,
      titleEn: 'Bone Health',
      titleHi: 'हड्डी स्वास्थ्य',
      descEn: 'Strengthen and protect',
      descHi: 'मजबूत और सुरक्षित करें',
    },
  ];

  const sectionTitle = language === 'en' ? 'What We Treat' : 'हम क्या इलाज करते हैं';
  const sectionSubtitle = language === 'en' 
    ? 'Comprehensive care for every aspect of midlife health'
    : 'मध्य जीवन स्वास्थ्य के हर पहलू के लिए व्यापक देखभाल';
  const learnMore = language === 'en' ? 'Learn More' : 'और जानें';

  return (
    <section id="conditions" className="bg-background section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {conditions.map((condition, index) => (
            <motion.div
              key={condition.titleEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-card border border-border rounded-2xl p-6 card-hover cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-sage-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <condition.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {language === 'en' ? condition.titleEn : condition.titleHi}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">
                {language === 'en' ? condition.descEn : condition.descHi}
              </p>

              {/* Learn More Link */}
              <a 
                href="#" 
                className="text-sm font-medium text-primary hover:text-sage-dark transition-colors inline-flex items-center gap-1"
              >
                {learnMore}
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsGrid;
