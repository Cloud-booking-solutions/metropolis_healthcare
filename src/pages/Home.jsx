import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Clock, MapPin, Phone } from "lucide-react";

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const featuredPackages = [
    {
      id: "heart-tests",
      title: "Heart Tests",
      description: "Comprehensive cardiac health assessment including ECG, stress tests, and more",
      // price: 2999,
      // originalPrice: 4999,
      image: "/lovable-uploads/8c1b1564-fc42-445f-a275-58cdbb1bd64e.png",
    },
    {
      id: "liver-tests",
      title: "Liver Tests",
      description: "Complete liver function tests to assess liver health and function",
      // price: 1999,
      // originalPrice: 3499,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    },
    {
      id: "thyroid-tests",
      title: "Thyroid Tests",
      description: "Comprehensive thyroid profile including T3, T4, and TSH",
      // price: 1499,
      // originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1631815589068-dc42d26d69ea",
    }
  ];

  const services = [
    {
      title: "Full Body Checkup",
      description: "Comprehensive screening of all major body systems to assess your overall health status.",
      icon: <CheckCircle className="w-10 h-10 text-healthcare-green" />,
    },
    {
      title: "Specialized Tests",
      description: "Targeted diagnostic tests for specific health concerns or conditions.",
      icon: <CheckCircle className="w-10 h-10 text-healthcare-green" />,
    },
    {
      title: "Home Collection",
      description: "Convenient sample collection from the comfort of your home by trained professionals.",
      icon: <CheckCircle className="w-10 h-10 text-healthcare-green" />,
    },
    {
      title: "Quick Results",
      description: "Fast and accurate test results delivered securely online or in person.",
      icon: <CheckCircle className="w-10 h-10 text-healthcare-green" />,
    },
  ];

  const testimonials = [
    {
      name: "Sophia Williams",
      role: "Regular Patient",
      testimonial: "The comprehensive health checkup package provided detailed insights into my health status. The staff was professional and the entire process was smooth and efficient.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
      name: "James Thompson",
      role: "Corporate Client",
      testimonial: "We've been using HealthGlow's corporate wellness packages for our employees. The convenience of on-site testing and detailed reports has made health monitoring seamless for our organization.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Emma Rodriguez",
      role: "Healthcare Professional",
      testimonial: "As a healthcare professional, I appreciate the accuracy and reliability of HealthGlow's diagnostic tests. I confidently refer my patients for specialized testing.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
    },
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-healthcare-green-light to-white py-16">
        <div className="healthcare-container">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-1/2 mt-8 md:mt-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold text-healthcare-green mb-4">
                Your Health Is Our Priority
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Comprehensive health checkup packages and diagnostic services to help you stay ahead of health concerns.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-healthcare-green hover:bg-healthcare-green-dark text-white">
                  <Link to="/packages">View Our Packages</Link>
                </Button>
                <Button variant="outline" className="border-healthcare-green text-healthcare-green hover:bg-healthcare-green hover:text-white">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-healthcare-green mr-2" />
                  <span className="text-gray-700">Accurate Results</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-healthcare-green mr-2" />
                  <span className="text-gray-700">Advanced Technology</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-healthcare-green mr-2" />
                  <span className="text-gray-700">Trusted Experts</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://harcourthealth.com/wp-content/uploads/2019/10/technology-in-healthcare.jpg"
                alt="Healthcare Professional"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Health Packages */}
      <section className="py-16 bg-white">
        <div className="healthcare-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-healthcare-green">Our Featured Health Packages</h2>
            <p className="text-gray-600 mt-4">
              Choose from our comprehensive range of health checkup packages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, index) => (
              <div key={index} className="package-card relative">
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-healthcare-green text-white text-xs font-bold px-2 py-1 rounded">
                    Popular
                  </div>
                )}
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline mb-4">
                    {/* <span className="text-healthcare-green text-2xl font-bold">₹{pkg.price}</span> */}
                    {/* <span className="text-gray-400 line-through ml-2">₹{pkg.originalPrice}</span> */}
                  </div>
                  <Link to={`/packages/${pkg.id}`}>
                    <Button className="w-full bg-healthcare-green hover:bg-healthcare-green-dark">
                      View Details <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/packages">
              <Button variant="outline" className="border-healthcare-green text-healthcare-green hover:bg-healthcare-green hover:text-white">
                View All Packages <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="healthcare-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-healthcare-green">Our Services</h2>
            <p className="text-gray-600 mt-4">
              Comprehensive healthcare solutions for your wellbeing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-center">
                <div className="mr-4 flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="healthcare-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-healthcare-green">What Our Patients Say</h2>
            <p className="text-gray-600 mt-4">
              Read testimonials from our satisfied clients
            </p>
          </div>
          
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-3 h-3 rounded-full ${activeTab === index ? 'bg-healthcare-green' : 'bg-gray-300'}`}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                    <img 
                      src={testimonials[activeTab].image} 
                      alt={testimonials[activeTab].name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/4 md:pl-6">
                    <blockquote className="text-gray-700 italic mb-4">"{testimonials[activeTab].testimonial}"</blockquote>
                    <div className="font-semibold">{testimonials[activeTab].name}</div>
                    <div className="text-sm text-gray-500">{testimonials[activeTab].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-healthcare-green text-white">
        <div className="healthcare-container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Prioritize Your Health?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your health checkup today and take the first step towards a healthier life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/packages">
              <Button className="bg-white text-healthcare-green hover:bg-gray-100">
                View Packages
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-healthcare-green">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Quick Contact Info */}
      <section className="py-12 bg-white">
        <div className="healthcare-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center p-6 bg-gray-50 rounded-lg">
              <Phone className="w-10 h-10 text-healthcare-green mr-4" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                <p className="text-gray-700">7410764696</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-gray-50 rounded-lg">
              <Clock className="w-10 h-10 text-healthcare-green mr-4" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Working Hours</h3>
                <p className="text-gray-700"> 7:30 AM - 9:00 PM</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-gray-50 rounded-lg">
              <MapPin className="w-10 h-10 text-healthcare-green mr-4" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                <p className="text-gray-700"> Shop no 2, Ground floor, Skyline society, Phoenix Millennium Mall Road Wakad, Pune</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
