import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

interface ContactSectionProps {
  language: 'en' | 'hi';
}

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  phone: z.string().trim().min(10, 'Valid phone number required').max(15, 'Phone must be less than 15 characters'),
  message: z.string().trim().min(1, 'Message is required').max(1000, 'Message must be less than 1000 characters'),
});

const ContactSection = ({ language }: ContactSectionProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const content = {
    en: {
      title: 'Get In Touch',
      subtitle: 'Have questions? We\'re here to help you on your journey.',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      phonePlaceholder: 'Phone Number',
      messagePlaceholder: 'How can we help you?',
      submit: 'Send Message',
      successMessage: 'Thank you! We\'ll be in touch soon.',
      contactInfo: [
        { icon: Phone, label: 'Call Us', value: '+91 124 456 7890' },
        { icon: Mail, label: 'Email', value: 'care@sakhi.health' },
        { icon: MapPin, label: 'Location', value: 'Gurugram, Haryana' },
      ],
    },
    hi: {
      title: 'संपर्क करें',
      subtitle: 'कोई सवाल है? हम आपकी यात्रा में मदद करने के लिए यहां हैं।',
      namePlaceholder: 'आपका नाम',
      emailPlaceholder: 'ईमेल पता',
      phonePlaceholder: 'फोन नंबर',
      messagePlaceholder: 'हम आपकी कैसे मदद कर सकते हैं?',
      submit: 'संदेश भेजें',
      successMessage: 'धन्यवाद! हम जल्द ही संपर्क करेंगे।',
      contactInfo: [
        { icon: Phone, label: 'कॉल करें', value: '+91 124 456 7890' },
        { icon: Mail, label: 'ईमेल', value: 'care@sakhi.health' },
        { icon: MapPin, label: 'स्थान', value: 'गुरुग्राम, हरियाणा' },
      ],
    },
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    toast({
      title: language === 'en' ? 'Message Sent!' : 'संदेश भेजा गया!',
      description: t.successMessage,
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section className="bg-warm-gray section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t.title}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`bg-background border-border h-12 ${errors.name ? 'border-destructive' : ''}`}
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <Input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`bg-background border-border h-12 ${errors.email ? 'border-destructive' : ''}`}
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder={t.phonePlaceholder}
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={`bg-background border-border h-12 ${errors.phone ? 'border-destructive' : ''}`}
                />
                {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <Textarea
                  placeholder={t.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className={`bg-background border-border min-h-[120px] ${errors.message ? 'border-destructive' : ''}`}
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>

              <Button type="submit" className="btn-primary w-full h-12 flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                {t.submit}
              </Button>
            </form>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              {t.contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 bg-background p-5 rounded-xl border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-8 bg-sage-light rounded-2xl h-48 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="w-10 h-10 text-primary mx-auto mb-2" />
                <p className="text-primary font-medium">Gurugram, Haryana</p>
                <p className="text-sm text-muted-foreground">Virtual Care Available Pan-India</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
