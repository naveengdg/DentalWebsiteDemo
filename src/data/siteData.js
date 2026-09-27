/**
 * Lumora Dental & Aesthetics — Centralized Demo Data
 * 
 * All content is fictional and created for demonstration purposes.
 * To customize for a real clinic, replace this data file.
 */

export const clinicInfo = {
  name: 'Lumora Dental & Aesthetics',
  shortName: 'Lumora',
  tagline: 'Modern dentistry. Confident smiles.',
  description: 'Modern dental care designed around healthier smiles and confident experiences.',
  phone: '+91 90000 00000',
  email: 'hello@lumoradental.example',
  whatsapp: '+919000000000',
  address: {
    line1: '24 Wellness Avenue',
    city: 'Krishnagiri',
    state: 'Tamil Nadu',
    country: 'India',
    full: '24 Wellness Avenue, Krishnagiri, Tamil Nadu',
  },
  hours: {
    weekdays: '9:00 AM – 7:00 PM',
    saturday: '9:00 AM – 4:00 PM',
    sunday: 'Closed',
  },
  social: {
    instagram: '#',
    facebook: '#',
    youtube: '#',
  },
};

export const heroContent = {
  headline: 'A healthier smile.\nA more confident you.',
  subtext:
    'Personalized dental and cosmetic care designed around your comfort, confidence, and long-term oral health.',
  primaryCTA: 'Book an Appointment',
  secondaryCTA: 'Explore Treatments',
};

export const trustItems = [
  {
    icon: 'Heart',
    title: 'Patient-First Care',
    description: 'Every decision starts with your comfort and well-being.',
  },
  {
    icon: 'Cpu',
    title: 'Modern Technology',
    description: 'Digital tools for precise diagnosis and treatment.',
  },
  {
    icon: 'Fingerprint',
    title: 'Personalized Treatment',
    description: 'Plans tailored to your unique dental needs.',
  },
  {
    icon: 'Shield',
    title: 'Comfort-Focused',
    description: 'A calm environment designed for easier visits.',
  },
];

export const treatments = [
  {
    id: 'cosmetic-dentistry',
    icon: 'Star',
    title: 'Cosmetic Smile Design',
    category: 'Cosmetic',
    benefit: 'Custom porcelain veneers & smile contouring for a natural, harmonious look.',
    duration: '2 visits',
    highlight: '3D Preview',
    image: '/images/smile-cosmetic.jpg',
  },
  {
    id: 'teeth-whitening',
    icon: 'Sun',
    title: 'Laser Teeth Whitening',
    category: 'Cosmetic',
    benefit: 'Brighten teeth up to 6 shades in under 45 minutes with zero enamel damage.',
    duration: '45 mins',
    highlight: 'Instant Results',
    image: '/images/smile-whitening.jpg',
  },
  {
    id: 'dental-implants',
    icon: 'Puzzle',
    title: 'Dental Implants',
    category: 'Surgical',
    benefit: 'Permanent tooth replacement with biological titanium root that feels 100% natural.',
    duration: 'Lifetime Fix',
    highlight: 'Precision 3D Guided',
    image: '/images/service-implants.jpg',
  },
  {
    id: 'orthodontics',
    icon: 'AlignCenter',
    title: 'Clear Invisible Aligners',
    category: 'Orthodontics',
    benefit: 'Straighten your smile discreetly without unsightly metal brackets or wires.',
    duration: 'From 4 months',
    highlight: '100% Removable',
    image: '/images/smile-aligners.jpg',
  },
  {
    id: 'dental-cleaning',
    icon: 'Sparkles',
    title: 'Deep Ultrasonic Cleaning',
    category: 'Preventive',
    benefit: 'Gentle ultrasonic plaque & tartar removal, stain polishing, and gum protection.',
    duration: '30 mins',
    highlight: 'Pain-Free Clean',
    image: '/images/service-cleaning.jpg',
  },
  {
    id: 'root-canal',
    icon: 'Activity',
    title: 'Microscope Root Canal',
    category: 'Restorative',
    benefit: 'Single-visit painless therapy that saves your natural tooth using microscopic optics.',
    duration: 'Single Visit',
    highlight: 'Immediate Relief',
    image: '/images/service-rootcanal.jpg',
  },
  {
    id: 'pediatric-dentistry',
    icon: 'Baby',
    title: 'Gentle Kids Dentistry',
    category: 'Family',
    benefit: 'Warm, fun, and fear-free dental visits designed so your children love the dentist.',
    duration: '30 mins',
    highlight: 'Child Friendly',
    image: '/images/service-pediatric.jpg',
  },
  {
    id: 'restorative-dentistry',
    icon: 'Stethoscope',
    title: 'Crowns & Composite Restorations',
    category: 'Restorative',
    benefit: 'Tooth-colored durable aesthetic crowns and fillings that match your natural tooth shade.',
    duration: 'Same-day Scan',
    highlight: 'Natural Finish',
    image: '/images/smile-restorative.jpg',
  },
  {
    id: 'emergency-care',
    icon: 'Zap',
    title: 'Emergency Dental Relief',
    category: 'Urgent',
    benefit: 'Immediate priority care for severe toothaches, broken teeth, or sports trauma.',
    duration: 'Same-Day Priority',
    highlight: 'Immediate Care',
    image: '/images/dental-tech.jpg',
  },
];

export const featuredTreatment = {
  title: 'Transform your smile with confidence',
  description:
    'Cosmetic dentistry combines modern techniques with personalized treatment planning to help you achieve a smile that feels natural and looks like you.',
  points: [
    'Personalized treatment planning',
    'Natural-looking results',
    'Modern techniques and materials',
    'Comfortable, guided experience',
  ],
  cta: 'Explore Cosmetic Dentistry',
};

export const whyChooseUs = [
  {
    icon: 'Compass',
    title: 'Clear Guidance',
    description: 'Understand your treatment options before making a decision.',
  },
  {
    icon: 'CloudSun',
    title: 'Comfortable Experience',
    description: 'A calm environment designed to make every visit easier.',
  },
  {
    icon: 'Monitor',
    title: 'Modern Technology',
    description: 'Digital tools that support precise diagnosis and treatment planning.',
  },
  {
    icon: 'UserCheck',
    title: 'Personalized Care',
    description: 'Treatment recommendations based on individual needs.',
  },
];

export const patientJourney = [
  {
    step: '01',
    title: 'Book',
    description: 'Choose a convenient appointment.',
  },
  {
    step: '02',
    title: 'Consult',
    description: 'Discuss your concerns with your dentist.',
  },
  {
    step: '03',
    title: 'Plan',
    description: 'Understand your options and personalized treatment plan.',
  },
  {
    step: '04',
    title: 'Treat',
    description: 'Receive care designed around your needs.',
  },
  {
    step: '05',
    title: 'Smile',
    description: 'Continue with guidance for long-term oral health.',
  },
];

export const doctors = [
  {
    name: 'Dr. Ananya Rao',
    credentials: 'BDS, MDS — Cosmetic & Restorative Dentistry',
    bio: 'Dr. Ananya Rao believes that great dentistry begins with listening. Her approach combines evidence-based treatment, modern technology and a strong focus on patient comfort.',
    specialties: ['Cosmetic Dentistry', 'Smile Design', 'Restorative Care', 'Implant Dentistry'],
    image: '/images/doctor-ananya.jpg',
  },
];

export const technologyItems = [
  {
    icon: 'ScanLine',
    title: 'Digital Diagnostics',
    description: 'Advanced imaging for accurate assessment and early detection.',
  },
  {
    icon: 'LayoutDashboard',
    title: 'Digital Treatment Planning',
    description: 'Visualize your treatment journey before it begins.',
  },
  {
    icon: 'Camera',
    title: 'Intraoral Imaging',
    description: 'Detailed views that support precise treatment decisions.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Modern Sterilization',
    description: 'Rigorous hygiene protocols for patient safety.',
  },
  {
    icon: 'MonitorPlay',
    title: 'Patient Education',
    description: 'Visual tools that help you understand your treatment.',
  },
];

export const smileTransformations = [
  {
    id: 1,
    title: 'Cosmetic Smile Enhancement',
    category: 'Cosmetic',
    label: 'Demo Case',
    image: '/images/smile-cosmetic.jpg',
  },
  {
    id: 2,
    title: 'Professional Teeth Whitening',
    category: 'Whitening',
    label: 'Demo Case',
    image: '/images/smile-whitening.jpg',
  },
  {
    id: 3,
    title: 'Orthodontic Alignment',
    category: 'Alignment',
    label: 'Demo Case',
    image: '/images/smile-aligners.jpg',
  },
  {
    id: 4,
    title: 'Restorative Treatment',
    category: 'Restorative',
    label: 'Demo Case',
    image: '/images/smile-restorative.jpg',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Priya M.',
    text: 'The entire experience felt calm and easy to understand. I finally knew exactly what my treatment involved.',
    treatment: 'Cosmetic Dentistry',
    label: 'Demo Testimonial',
  },
  {
    id: 2,
    name: 'Arjun K.',
    text: 'I appreciated the clear explanation before every step. It made a dental visit feel genuinely comfortable for the first time.',
    treatment: 'Dental Implants',
    label: 'Demo Testimonial',
  },
  {
    id: 3,
    name: 'Meera S.',
    text: 'My daughter actually looks forward to her dental appointments now. The team made everything so gentle and welcoming.',
    treatment: 'Pediatric Dentistry',
    label: 'Demo Testimonial',
  },
];

export const faqItems = [
  {
    question: 'How do I book an appointment?',
    answer:
      'You can book an appointment through our website, by calling our clinic directly, or by sending us a WhatsApp message. We will confirm your appointment within 24 hours.',
  },
  {
    question: 'What happens during the first consultation?',
    answer:
      'During your first visit, the dentist will review your dental history, perform a thorough examination, discuss any concerns you may have, and recommend a personalized treatment plan.',
  },
  {
    question: 'Do you provide emergency dental care?',
    answer:
      'Yes, we offer support for urgent dental concerns. If you are experiencing severe pain, swelling, or a dental injury, please contact us immediately so we can accommodate you as quickly as possible.',
  },
  {
    question: 'How often should I have a dental check-up?',
    answer:
      'We generally recommend a dental check-up every six months. However, your dentist may suggest a different schedule based on your individual oral health needs.',
  },
  {
    question: 'Is teeth whitening suitable for everyone?',
    answer:
      'Professional teeth whitening is suitable for most adults. During your consultation, the dentist will assess your teeth and gums to determine if whitening is the right option for you.',
  },
  {
    question: 'How long does dental implant treatment take?',
    answer:
      'The dental implant process typically takes several months from start to finish, as it involves placement, healing time, and the final restoration. Your dentist will provide a detailed timeline during your consultation.',
  },
  {
    question: 'Do you treat children?',
    answer:
      'Yes, we provide gentle dental care for children. Our pediatric dental services include routine check-ups, preventive care, and age-appropriate treatment in a comfortable environment.',
  },
  {
    question: 'What should I bring to my first appointment?',
    answer:
      'Please bring a valid photo ID, any relevant dental records or X-rays, a list of current medications, and your dental insurance details if applicable.',
  },
];

export const treatmentOptions = [
  'General Consultation',
  'Dental Cleaning',
  'Root Canal Treatment',
  'Dental Implants',
  'Cosmetic Dentistry',
  'Teeth Whitening',
  'Orthodontics',
  'Pediatric Dentistry',
  'Emergency Care',
  'Other',
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'About', href: '#about' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];
