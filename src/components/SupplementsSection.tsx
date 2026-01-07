import { motion } from 'framer-motion';
import { Sparkles, Brain, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SupplementsSectionProps {
  language: 'en' | 'hi';
}

const SupplementsSection = ({ language }: SupplementsSectionProps) => {
  const products = [
    {
      icon: Zap,
      nameEn: 'MetaBoost Pro',
      nameHi: 'मेटाबूस्ट प्रो',
      descEn: 'Advanced metabolism support for sustainable weight management. Clinically proven ingredients.',
      descHi: 'स्थायी वजन प्रबंधन के लिए उन्नत मेटाबॉलिज्म सहायता। चिकित्सकीय रूप से सिद्ध सामग्री।',
      tagEn: 'Best Seller',
      tagHi: 'बेस्ट सेलर',
      color: 'from-coral to-coral-light',
    },
    {
      icon: Brain,
      nameEn: 'ClarityMind',
      nameHi: 'क्लैरिटीमाइंड',
      descEn: 'Cognitive support for mental clarity, focus, and memory. Combat brain fog naturally.',
      descHi: 'मानसिक स्पष्टता, फोकस और याददाश्त के लिए संज्ञानात्मक समर्थन।',
      tagEn: 'New',
      tagHi: 'नया',
      color: 'from-primary to-sage-dark',
    },
    {
      icon: Sparkles,
      nameEn: 'RadianceGlow',
      nameHi: 'रेडियंस ग्लो',
      descEn: 'Nourish your skin and hair from within. Biotin, collagen, and essential vitamins.',
      descHi: 'अपनी त्वचा और बालों को अंदर से पोषण दें। बायोटिन, कोलेजन और आवश्यक विटामिन।',
      tagEn: 'Popular',
      tagHi: 'लोकप्रिय',
      color: 'from-powder-dark to-powder',
    },
  ];

  const sectionTitle = language === 'en' ? 'Science-Backed Supplements' : 'विज्ञान-समर्थित सप्लीमेंट्स';
  const sectionSubtitle = language === 'en'
    ? 'Formulated specifically for women in midlife, recommended by our expert clinicians'
    : 'मध्य जीवन में महिलाओं के लिए विशेष रूप से तैयार, हमारे विशेषज्ञ चिकित्सकों द्वारा अनुशंसित';
  const viewDetails = language === 'en' ? 'View Details' : 'विवरण देखें';
  const shopAll = language === 'en' ? 'Shop All Supplements' : 'सभी सप्लीमेंट्स खरीदें';

  return (
    <section id="supplements" className="bg-background section-padding">
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.nameEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden card-hover"
            >
              {/* Product Image Area */}
              <div className={`h-48 bg-gradient-to-br ${product.color} relative flex items-center justify-center`}>
                <product.icon className="w-20 h-20 text-background/80" />
                <span className="absolute top-4 right-4 bg-background/90 text-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {language === 'en' ? product.tagEn : product.tagHi}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {language === 'en' ? product.nameEn : product.nameHi}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {language === 'en' ? product.descEn : product.descHi}
                </p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {viewDetails}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shop All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button className="btn-hero-secondary">
            {shopAll}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SupplementsSection;
