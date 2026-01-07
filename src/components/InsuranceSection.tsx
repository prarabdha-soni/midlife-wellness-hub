import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface InsuranceSectionProps {
  language: 'en' | 'hi';
}

const InsuranceSection = ({ language }: InsuranceSectionProps) => {
  const content = {
    en: {
      tagline: 'RELIEF WITHIN REACH',
      title: "We've Got Your Care Covered",
      subtitle: 'Sakhi Health is available pan-India, with insurance coverage for virtual visits and prescriptions.',
      checkCoverage: 'Check Your Coverage',
      andMore: 'and more...',
    },
    hi: {
      tagline: 'राहत आपकी पहुंच में',
      title: 'आपकी देखभाल हमारी जिम्मेदारी',
      subtitle: 'साखी हेल्थ पूरे भारत में उपलब्ध है, वर्चुअल विज़िट और प्रिस्क्रिप्शन के लिए बीमा कवरेज के साथ।',
      checkCoverage: 'कवरेज जांचें',
      andMore: 'और भी...',
    },
  };

  const t = content[language];

  const insurers = [
    { name: 'Star Health', color: 'text-primary' },
    { name: 'HDFC ERGO', color: 'text-rose-600' },
    { name: 'ICICI Lombard', color: 'text-orange-600' },
    { name: 'Max Bupa', color: 'text-blue-700' },
    { name: 'Bajaj Allianz', color: 'text-blue-600' },
    { name: 'New India', color: 'text-green-700' },
  ];

  return (
    <section className="py-16 md:py-24 bg-sage-light/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4 block">
              {t.tagline}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {t.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              {t.subtitle}
            </p>
            <Button className="btn-hero-primary">
              {t.checkCoverage}
            </Button>
          </motion.div>

          {/* Right - Insurance Logos Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          >
            {insurers.map((insurer, index) => (
              <motion.div
                key={insurer.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-center p-4 md:p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className={`text-lg md:text-xl font-bold ${insurer.color}`}>
                  {insurer.name}
                </span>
              </motion.div>
            ))}
            
            {/* And More */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex items-center justify-center p-4 md:p-6 col-span-2 md:col-span-1"
            >
              <span className="text-xl md:text-2xl font-serif italic text-muted-foreground">
                {t.andMore}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
