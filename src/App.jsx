import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MobileStickyBar from './components/MobileStickyBar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import TrustStrip from './sections/TrustStrip';
import Treatments from './sections/Treatments';
import FeaturedTreatment from './sections/FeaturedTreatment';
import WhyChooseUs from './sections/WhyChooseUs';
import PatientJourney from './sections/PatientJourney';
import DoctorProfile from './sections/DoctorProfile';
import TechnologySection from './sections/TechnologySection';
import SmileGallery from './sections/SmileGallery';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import AppointmentForm from './sections/AppointmentForm';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Treatments />
        <FeaturedTreatment />
        <WhyChooseUs />
        <PatientJourney />
        <DoctorProfile />
        <TechnologySection />
        <SmileGallery />
        <Testimonials />
        <FAQ />
        <AppointmentForm />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </div>
  );
}
