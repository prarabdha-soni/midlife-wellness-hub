import { motion } from 'framer-motion';
import { Info, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EducationBannerProps {
  language: 'en' | 'hi';
}

const EducationBanner = ({ language }: EducationBannerProps) => {
  const content = {
    en: {
      tag: 'Education',
      title: 'Understanding Hormone Therapy',
      subtitle: 'Learn about the science behind testosterone and how it can help with energy, mood, and vitality during menopause.',
      cta: 'Read the Guide',
    },
    hi: {
      tag: 'शिक्षा',
      title: 'हार्मोन थेरेपी को समझना',
      subtitle: 'टेस्टोस्टेरोन के पीछे के विज्ञान के बारे में जानें और यह मेनोपॉज के दौरान ऊर्जा, मूड और जीवन शक्ति में कैसे मदद कर सकता है।',
      cta: 'गाइड पढ़ें',
    },
  };

  const t = content[language];

  return (
    <section className="bg-foreground section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Info className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-1 block">
                {t.tag}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-background mb-2">
                {t.title}
              </h3>
              <p className="text-background/70 max-w-xl">
                {t.subtitle}
              </p>
            </div>
          </div>

          <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-6 rounded-full font-semibold flex items-center gap-2 group">
            {t.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationBanner;
