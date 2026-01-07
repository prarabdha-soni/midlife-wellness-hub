import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import InsuranceSection from '@/components/InsuranceSection';
import ConditionsGrid from '@/components/ConditionsGrid';
import TestimonialsSection from '@/components/TestimonialsSection';
import SupplementsSection from '@/components/SupplementsSection';
import CliniciansSection from '@/components/CliniciansSection';
import EducationBanner from '@/components/EducationBanner';
import ContactSection from '@/components/ContactSection';
import CTAFooter from '@/components/CTAFooter';
import Footer from '@/components/Footer';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const seoContent = {
    en: {
      title: 'Sakhi Health | Expert Midlife Care for Women in India',
      description: 'Virtual consultations for perimenopause, menopause, weight management, and more. Insurance-covered care from board-certified specialists in Gurugram and pan-India.',
      keywords: 'menopause treatment India, perimenopause care, women health Gurugram, hormone therapy, midlife wellness, telehealth India, femtech',
    },
    hi: {
      title: 'साखी हेल्थ | भारत में महिलाओं के लिए विशेषज्ञ मध्य जीवन देखभाल',
      description: 'पेरीमेनोपॉज, मेनोपॉज, वजन प्रबंधन और अधिक के लिए वर्चुअल परामर्श। गुरुग्राम और पूरे भारत में बोर्ड-प्रमाणित विशेषज्ञों से बीमा-कवर देखभाल।',
      keywords: 'मेनोपॉज उपचार भारत, पेरीमेनोपॉज देखभाल, महिला स्वास्थ्य गुरुग्राम, हार्मोन थेरेपी, मध्य जीवन कल्याण',
    },
  };

  const seo = seoContent[language];

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === 'en' ? 'en_IN' : 'hi_IN'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <link rel="canonical" href="https://sakhi.health" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            "name": "Sakhi Health",
            "description": seo.description,
            "url": "https://sakhi.health",
            "areaServed": "India",
            "medicalSpecialty": ["Gynecology", "Endocrinology"],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Gurugram",
              "addressRegion": "Haryana",
              "addressCountry": "IN"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header language={language} onLanguageToggle={toggleLanguage} />
        <main>
          <HeroSection language={language} />
          <InsuranceSection language={language} />
          <ConditionsGrid language={language} />
          <TestimonialsSection language={language} />
          <SupplementsSection language={language} />
          <CliniciansSection language={language} />
          <EducationBanner language={language} />
          <ContactSection language={language} />
          <CTAFooter language={language} />
        </main>
        <Footer language={language} />
      </div>
    </>
  );
};

export default Index;
