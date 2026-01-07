import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'hi';
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    en: {
      description: 'Expert virtual care for women navigating midlife. Insurance-covered consultations, personalized prescriptions, and science-backed supplements.',
      conditions: 'Conditions',
      conditionsList: ['Perimenopause', 'Menopause', 'Weight Management', 'Mood & Memory', 'Sexual Wellness'],
      company: 'Company',
      companyList: ['About Us', 'Our Clinicians', 'Careers', 'Press'],
      resources: 'Resources',
      resourcesList: ['Blog', 'FAQs', 'Research', 'Testimonials'],
      legal: 'Legal',
      legalList: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
      copyright: '© 2025 Sakhi Health. All rights reserved.',
      tagline: 'Made with care in India 🇮🇳',
    },
    hi: {
      description: 'मध्य जीवन में महिलाओं के लिए विशेषज्ञ वर्चुअल देखभाल। बीमा-कवर परामर्श, व्यक्तिगत प्रिस्क्रिप्शन, और विज्ञान-समर्थित सप्लीमेंट्स।',
      conditions: 'स्थितियाँ',
      conditionsList: ['पेरीमेनोपॉज', 'मेनोपॉज', 'वजन प्रबंधन', 'मूड और याददाश्त', 'यौन स्वास्थ्य'],
      company: 'कंपनी',
      companyList: ['हमारे बारे में', 'हमारे चिकित्सक', 'करियर', 'प्रेस'],
      resources: 'संसाधन',
      resourcesList: ['ब्लॉग', 'सामान्य प्रश्न', 'शोध', 'प्रशंसापत्र'],
      legal: 'कानूनी',
      legalList: ['गोपनीयता नीति', 'सेवा की शर्तें', 'कुकी नीति'],
      copyright: '© 2025 साखी हेल्थ। सर्वाधिकार सुरक्षित।',
      tagline: 'भारत में प्यार से बनाया गया 🇮🇳',
    },
  };

  const t = content[language];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding !pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">Sakhi</span>
            </div>
            <p className="text-background/70 mb-6 max-w-sm leading-relaxed">
              {t.description}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Conditions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">{t.conditions}</h4>
            <ul className="space-y-2">
              {t.conditionsList.map((item) => (
                <li key={item}>
                  <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">{t.company}</h4>
            <ul className="space-y-2">
              {t.companyList.map((item) => (
                <li key={item}>
                  <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">{t.resources}</h4>
            <ul className="space-y-2 mb-6">
              {t.resourcesList.map((item) => (
                <li key={item}>
                  <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold mb-4">{t.legal}</h4>
            <ul className="space-y-2">
              {t.legalList.map((item) => (
                <li key={item}>
                  <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">{t.copyright}</p>
          <p className="text-background/50 text-sm">{t.tagline}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
