import { motion } from 'framer-motion';
import { Award, GraduationCap, Heart } from 'lucide-react';

interface CliniciansSectionProps {
  language: 'en' | 'hi';
}

const CliniciansSection = ({ language }: CliniciansSectionProps) => {
  const content = {
    en: {
      title: 'Meet Your Care Team',
      subtitle: 'Board-certified specialists dedicated to women\'s midlife health',
      features: [
        { icon: Award, title: 'Board Certified', desc: 'All clinicians are certified in women\'s health and menopause care' },
        { icon: GraduationCap, title: 'Expert Training', desc: 'Specialized training in hormone therapy and integrative medicine' },
        { icon: Heart, title: 'Compassionate Care', desc: 'Empathetic approach that prioritizes your comfort and well-being' },
      ],
      cta: 'Meet Our Team',
    },
    hi: {
      title: 'अपनी देखभाल टीम से मिलें',
      subtitle: 'महिलाओं के मध्य जीवन स्वास्थ्य के लिए समर्पित बोर्ड-प्रमाणित विशेषज्ञ',
      features: [
        { icon: Award, title: 'बोर्ड प्रमाणित', desc: 'सभी चिकित्सक महिला स्वास्थ्य और मेनोपॉज देखभाल में प्रमाणित हैं' },
        { icon: GraduationCap, title: 'विशेषज्ञ प्रशिक्षण', desc: 'हार्मोन थेरेपी और एकीकृत चिकित्सा में विशेष प्रशिक्षण' },
        { icon: Heart, title: 'करुणामयी देखभाल', desc: 'सहानुभूतिपूर्ण दृष्टिकोण जो आपके आराम को प्राथमिकता देता है' },
      ],
      cta: 'हमारी टीम से मिलें',
    },
  };

  const t = content[language];

  return (
    <section id="clinicians" className="bg-powder section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.subtitle}
            </p>

            <div className="space-y-6">
              {t.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Clinician Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Dr. Priya Sharma', specialty: 'Menopause Specialist', initials: 'PS' },
                { name: 'Dr. Anita Verma', specialty: 'Hormone Therapy', initials: 'AV' },
                { name: 'Dr. Kavita Rao', specialty: 'Integrative Medicine', initials: 'KR' },
                { name: 'Dr. Sunita Gupta', specialty: 'Women\'s Health', initials: 'SG' },
              ].map((clinician, index) => (
                <motion.div
                  key={clinician.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-background rounded-2xl p-5 shadow-sm border border-border text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-sage-light mx-auto mb-3 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">{clinician.initials}</span>
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">{clinician.name}</h4>
                  <p className="text-xs text-muted-foreground">{clinician.specialty}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CliniciansSection;
