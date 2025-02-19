import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { 
  GraduationCap, 
  Globe2, 
  ClipboardList, 
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  User,
  Award,
  BookOpen,
  Building2,
  Users,
  Stethoscope,
  DollarSign
} from 'lucide-react';

// Initialize GA4 at the component level
ReactGA.initialize('G-XXXXXXXXXX'); // Replace with your GA4 measurement ID

interface Country {
  name: string;
  imageUrl: string;
  description: string;
  features: string[];
  universities: string[];
  fees: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
}

const countries: Country[] = [
  {
    name: "Russia",
    imageUrl: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=2000",
    description: "World-renowned medical universities with modern facilities and rich cultural heritage",
    features: [
      "6-Year MBBS Program",
      "WHO & MCI Recognized",
      "English Medium",
      "Advanced Research Facilities"
    ],
    universities: [
      "First Moscow State Medical University",
      "Kazan State Medical University",
      "Russian National Research Medical University"
    ],
    fees: "$4,000 - $7,000 per year"
  },
  {
    name: "Uzbekistan",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=2000",
    description: "Quality education at affordable costs with state-of-the-art medical facilities",
    features: [
      "6-Year MD Program",
      "Globally Recognized Degree",
      "Clinical Training",
      "Modern Infrastructure"
    ],
    universities: [
      "Tashkent Medical Academy",
      "Samarkand State Medical University",
      "Bukhara State Medical Institute"
    ],
    fees: "$3,500 - $5,000 per year"
  },
  {
    name: "Kazakhstan",
    imageUrl: "https://images.unsplash.com/photo-1558588942-930faae5a389?auto=format&fit=crop&q=80&w=2000",
    description: "Advanced medical infrastructure and extensive research opportunities",
    features: [
      "5-Year MBBS Program",
      "International Recognition",
      "Research Focus",
      "Modern Hospitals"
    ],
    universities: [
      "Kazakh National Medical University",
      "Astana Medical University",
      "South Kazakhstan Medical Academy"
    ],
    fees: "$4,500 - $6,500 per year"
  },
  {
    name: "Philippines",
    imageUrl: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=2000",
    description: "English-medium instruction with extensive clinical exposure",
    features: [
      "4-Year MD Program",
      "US-Style Education",
      "USMLE Preparation",
      "Clinical Rotations"
    ],
    universities: [
      "University of Santo Tomas",
      "Davao Medical School",
      "AMA School of Medicine"
    ],
    fees: "$5,000 - $8,000 per year"
  },
  {
    name: "Georgia",
    imageUrl: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&q=80&w=2000",
    description: "European standard medical education with modern facilities",
    features: [
      "6-Year MD Program",
      "EU Recognition",
      "Clinical Practice",
      "Modern Campus"
    ],
    universities: [
      "Tbilisi State Medical University",
      "Batumi Shota Rustaveli State University",
      "David Tvildiani Medical University"
    ],
    fees: "$4,000 - $7,000 per year"
  },
  {
    name: "Kyrgyzstan",
    imageUrl: "https://images.unsplash.com/photo-1569531955323-33c6b2dca44b?auto=format&fit=crop&q=80&w=2000",
    description: "Recognized medical programs with practical training opportunities",
    features: [
      "5-Year MBBS Program",
      "WHO Listed",
      "Practical Focus",
      "Affordable Living"
    ],
    universities: [
      "Osh State University",
      "Kyrgyz State Medical Academy",
      "International School of Medicine"
    ],
    fees: "$3,000 - $5,000 per year"
  },
  {
    name: "Egypt",
    imageUrl: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=2000",
    description: "Rich medical heritage with modern education systems",
    features: [
      "5-Year MBBS Program",
      "Historical Excellence",
      "Clinical Training",
      "Research Options"
    ],
    universities: [
      "Cairo University",
      "Ain Shams University",
      "Alexandria University"
    ],
    fees: "$3,500 - $6,000 per year"
  }
];

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    country: "Russia Graduate",
    text: "Studying MBBS in Russia was a life-changing experience. The clinical exposure and practical training I received were exceptional.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300"
  },
  {
    name: "Dr. Michael Chen",
    country: "Philippines Graduate",
    text: "The US-style medical education in the Philippines prepared me perfectly for my medical career in America.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300"
  },
  {
    name: "Dr. Emma Williams",
    country: "Georgia Graduate",
    text: "Georgia offered me high-quality European medical education at an affordable cost. The modern facilities were impressive.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300"
  }
];

function App() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    country: ''
  });
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  useEffect(() => {
    // Track page view
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Track form submission
    ReactGA.event({
      category: "Form",
      action: "Submit",
      label: "Application Form"
    });
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', country: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=2000"
            alt="Medical students"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your Journey to Medical Excellence Starts Here
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful medical professionals who started their career with our guided MBBS programs abroad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#apply"
              onClick={() => ReactGA.event({
                category: "CTA",
                action: "Click",
                label: "Apply Now Hero"
              })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Apply Now
            </a>
            <a 
              href="#countries"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Explore Countries
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-600">15+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-600">10,000+</p>
              <p className="text-gray-600">Students Placed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-600">50+</p>
              <p className="text-gray-600">Partner Universities</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-600">98%</p>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study MBBS Abroad */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us for MBBS Abroad?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We provide comprehensive support throughout your medical education journey, ensuring your success every step of the way
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Award className="w-8 h-8" />, title: "Global Recognition", desc: "Degrees recognized by WHO, MCI, and international medical councils" },
              { icon: <BookOpen className="w-8 h-8" />, title: "Quality Education", desc: "World-class medical curriculum with practical training" },
              { icon: <Building2 className="w-8 h-8" />, title: "Modern Facilities", desc: "State-of-the-art laboratories and teaching hospitals" },
              { icon: <DollarSign className="w-8 h-8" />, title: "Affordable Fees", desc: "Quality education at 70% lower cost than private medical colleges" },
              { icon: <Users className="w-8 h-8" />, title: "Student Support", desc: "Dedicated mentorship and career guidance throughout" },
              { icon: <Stethoscope className="w-8 h-8" />, title: "Clinical Experience", desc: "Extensive hands-on training in affiliated hospitals" }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Countries */}
      <section id="countries" className="bg-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Top Destinations for MBBS</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Choose from our carefully selected partner universities in these prestigious medical education destinations
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedCountry(country)}
              >
                <img 
                  src={country.imageUrl} 
                  alt={country.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{country.name}</h3>
                  <p className="text-gray-600 mb-4">{country.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold">Key Features:</p>
                    <ul className="list-disc list-inside text-gray-600">
                      {country.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <p className="font-semibold text-blue-600">
                      Average Tuition: {country.fees}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Success Stories</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Hear from our alumni who are now successful medical professionals around the world
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.country}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Your Path to Medical Excellence</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Eligibility Criteria</h3>
              <ul className="space-y-4">
                {[
                  "Minimum 50% in PCB (Physics, Chemistry, Biology)",
                  "NEET Qualification",
                  "Age: 17-25 years",
                  "Good academic record",
                  "English proficiency",
                  "Valid passport"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Simple Application Process</h3>
              <ol className="space-y-6">
                {[
                  "Complete our online application form",
                  "Document verification by our experts",
                  "University admission letter processing",
                  "Visa assistance and guidance",
                  "Pre-departure orientation"
                ].map((step, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">
                      {index + 1}
                    </span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-4">Begin Your Medical Journey</h2>
          <p className="text-center text-gray-600 mb-8">
            Fill out the form below and our counselors will guide you through the next steps
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Preferred Country</label>
              <select
                id="country"
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select a country</option>
                {countries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              onClick={() => ReactGA.event({
                category: "Form",
                action: "Submit",
                label: "Application Form"
              })}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  +1 234 567 890
                </p>
                <p className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  info@universityinsights.com
                </p>
                <p className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  123 Education Street, City
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#countries" className="hover:text-blue-400">Countries</a></li>
                <li><a href="#apply" className="hover:text-blue-400">Apply Now</a></li>
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">Subscribe to our newsletter for updates and opportunities</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 p-2 rounded-l-lg text-gray-900"
                />
                <button className="bg-blue-600 px-4 rounded-r-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2025 University Insights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;