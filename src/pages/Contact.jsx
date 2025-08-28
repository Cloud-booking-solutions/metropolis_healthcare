import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Phone number should be 10 digits';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would send this data to your backend
      console.log('Contact form submitted:', formData);
      
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We will get back to you shortly.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="healthcare-container">
          <div className="flex items-center text-sm">
            <a href="/" className="text-gray-500 hover:text-healthcare-green">Home</a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-healthcare-green">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-healthcare-green-light">
        <div className="healthcare-container">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-healthcare-green mb-4">Contact Us</h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Have questions about our services or need to book an appointment?
              Get in touch with us and we'll be happy to help.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-12">
        <div className="healthcare-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a 
              href="tel:7410764696"
              className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center p-3 bg-healthcare-green-light rounded-full mb-4">
                <Phone className="h-6 w-6 text-healthcare-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">7410764696</p>
              <p className="text-gray-600">7410764696</p>
            </a>
            
            <a 
              href="mailto:info@healthglow.com"
              className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center p-3 bg-healthcare-green-light rounded-full mb-4">
                <Mail className="h-6 w-6 text-healthcare-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@healthglow.com</p>
              <p className="text-gray-600">support@healthglow.com</p>
            </a>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center p-3 bg-healthcare-green-light rounded-full mb-4">
                <Clock className="h-6 w-6 text-healthcare-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
              <p className="text-gray-600">Mon-Fri: 8:00 AM - 8:00 PM</p>
              <p className="text-gray-600">Sat-Sun: 8:00 AM - 5:00 PM</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center p-3 bg-healthcare-green-light rounded-full mb-4">
                <MapPin className="h-6 w-6 text-healthcare-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-600">Shop no 2, Ground floor, Skyline society, Phoenix Millennium Mall Road Wakad, Pune</p>
              {/* <p className="text-gray-600">Medical Center, City - 123456</p> */}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={formErrors.name ? "border-red-500" : ""}
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={formErrors.email ? "border-red-500" : ""}
                    />
                    {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className={formErrors.phone ? "border-red-500" : ""}
                    />
                    {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here"
                    rows={5}
                    className={formErrors.message ? "border-red-500" : ""}
                  />
                  {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                </div>
                
                <Button type="submit" className="bg-healthcare-green hover:bg-healthcare-green-dark">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>
            
            {/* Map */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
              
              <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3781.3216638297863!2d73.75607047519365!3d18.60459638250533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM2JzE2LjYiTiA3M8KwNDUnMzEuMSJF!5e0!3m2!1sen!2sin!4v1745320517343!5m2!1sen!2sin" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-healthcare-green-light p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Main Center</h3>
                  <p className="text-gray-700"> Shop no 2, Ground floor, Skyline society, Phoenix Millennium Mall Road Wakad, Pune</p>
                </div>
                
                <div className="bg-healthcare-green-light p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Service Areas</h3>
                  <p className="text-gray-700">Wakad, Hinjewadi, Tathawade, Ravet, Punawale, Marunji, Pimple Saudagar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="healthcare-container">
          <h2 className="text-2xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto divide-y">
            <div className="py-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">How do I book an appointment?</h3>
              <p className="text-gray-600">
                You can book an appointment through our website, by calling our customer care number, or by visiting any of our diagnostic centers. Our home collection service is also available for most tests.
              </p>
            </div>
            
            <div className="py-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">What are your payment options?</h3>
              <p className="text-gray-600">
                We accept all major credit/debit cards, net banking, UPI, and cash payments at our centers. For home collections, our phlebotomists carry card machines for your convenience.
              </p>
            </div>
            
            <div className="py-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">How can I get my test reports?</h3>
              <p className="text-gray-600">
                Test reports are available online through our patient portal and mobile app. You can also request a physical copy at our centers or have it emailed to you.
              </p>
            </div>
            
            <div className="py-5">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Do you have multiple branches?</h3>
              <p className="text-gray-600">
                Yes, we have multiple diagnostic centers across the city and country. You can find your nearest center using the 'Find a Center' option on our website or by calling our customer care.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-10 bg-healthcare-green text-white">
        <div className="healthcare-container text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Quick Assistance?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our customer care team is available to help you 24/7.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="tel:7410764696" 
              className="inline-flex items-center px-6 py-3 bg-white text-healthcare-green rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
            <a 
              href="mailto:info@healthglow.com"
              className="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-healthcare-green rounded-md font-medium transition-colors"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
