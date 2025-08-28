import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="healthcare-container">
          <div className="flex items-center text-sm">
            <a href="/" className="text-gray-500 hover:text-healthcare-green">Home</a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-healthcare-green">About Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="healthcare-container">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-healthcare-green mb-4">About Us</h1>
            <div className="w-20 h-1 bg-healthcare-green mx-auto mb-4"></div>
          </div>
        </div>
      </section>
      
      {/* Tabs Navigation for About Sections */}
      <section className="pb-16">
        <div className="healthcare-container">
          <Tabs defaultValue="about-us" className="w-full">
            <TabsList className="flex justify-center mb-8 border-b w-full overflow-x-auto">
              <TabsTrigger value="about-us" className="px-6">About Us</TabsTrigger>
              <TabsTrigger value="brand" className="px-6">The Brand</TabsTrigger>
              <TabsTrigger value="team" className="px-6">Team</TabsTrigger>
              <TabsTrigger value="services" className="px-6">Services</TabsTrigger>
              <TabsTrigger value="quality" className="px-6">Quality Assurance</TabsTrigger>
              <TabsTrigger value="csr" className="px-6">CSR</TabsTrigger>
            </TabsList>
            
            {/* About Us Tab Content */}
            <TabsContent value="about-us">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold text-healthcare-green mb-6">About Us</h2>
                  <div className="prose max-w-none text-gray-700">
                    <p className="mb-4">
                      HealthGlow Healthcare Limited is one of leading and renowned Indian diagnostics companies. 
                      The Company owns a chain of diagnostic centers across India, South Asia, Africa and the Middle East. 
                      Over the years, HealthGlow has carved a niche for itself.
                    </p>
                    <p className="mb-4">
                      The Company enjoys a loyal customer base, reflecting its strength as a brand offering superior diagnostic tests and services.
                    </p>
                    <p className="mb-4">
                      With its widespread operational network, HealthGlow offers a comprehensive range of clinical laboratory tests and profiles. 
                      These tests and profiles are used for prediction, early detection, diagnostic screening, confirmation and/or monitoring of the disease.
                    </p>
                    <p className="mb-4">
                      HealthGlow plays a pivotal role in raising the bar of diagnostic accuracy, technological equipment, customer experience and research-driven empathetic service in the industry.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <img 
                    src="https://rscarolus.or.id/wp-content/uploads/2023/06/5bb34993a65721538476435.jpg"
                    alt="Healthcare Professionals Team"
                    className="rounded-lg shadow-lg max-w-full h-auto"
                  />
                </div>
              </div>

              {/* Company Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                <div className="bg-healthcare-green-light p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-healthcare-green mb-2">30+</div>
                  <div className="text-gray-700">Years of Experience</div>
                </div>
                <div className="bg-healthcare-green-light p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-healthcare-green mb-2">1000+</div>
                  <div className="text-gray-700">Diagnostic Centers</div>
                </div>
                <div className="bg-healthcare-green-light p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-healthcare-green mb-2">5000+</div>
                  <div className="text-gray-700">Healthcare Professionals</div>
                </div>
                <div className="bg-healthcare-green-light p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-healthcare-green mb-2">10M+</div>
                  <div className="text-gray-700">Satisfied Patients</div>
                </div>
              </div>
            </TabsContent>

            {/* The Brand Tab */}
            <TabsContent value="brand">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-healthcare-green mb-6">The Brand</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    The HealthGlow brand stands for trust, reliability, and excellence in healthcare diagnostics. Since our inception, we have been committed to delivering accurate results and exceptional customer service.
                  </p>
                  <p className="mb-4">
                    Our brand values center around:
                  </p>
                  <ul className="list-disc pl-5 mb-4">
                    <li><strong>Quality:</strong> Maintaining the highest standards in diagnostic testing and reporting</li>
                    <li><strong>Innovation:</strong> Continuously updating our technology and methodologies</li>
                    <li><strong>Integrity:</strong> Conducting our operations with transparency and ethical practices</li>
                    <li><strong>Customer-centricity:</strong> Putting our patients' needs first in everything we do</li>
                  </ul>
                  <p>
                    The HealthGlow logo, with its distinctive green color, symbolizes health, growth, and vitality – reflecting our mission to promote wellness through accurate diagnostics and preventive healthcare.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Team Tab */}
            <TabsContent value="team">
              <h2 className="text-2xl font-bold text-healthcare-green mb-6 text-center">Our Leadership Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2" 
                      alt="Dr. Sarah Johnson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Dr. Sarah Johnson</h3>
                  <p className="text-healthcare-green mb-2">Chief Medical Officer</p>
                  <p className="text-gray-600 text-sm">
                    Leading our medical operations with over 20 years of experience in laboratory medicine and diagnostics.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
                      alt="Dr. Michael Chen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Dr. Michael Chen</h3>
                  <p className="text-healthcare-green mb-2">Director of Research</p>
                  <p className="text-gray-600 text-sm">
                    Spearheading innovative diagnostic research and development initiatives.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                      alt="Dr. Emily Martinez"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Dr. Emily Martinez</h3>
                  <p className="text-healthcare-green mb-2">Head of Clinical Operations</p>
                  <p className="text-gray-600 text-sm">
                    Ensuring excellence in patient care and diagnostic services delivery.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Services Tab */}
            <TabsContent value="services">
              <h2 className="text-2xl font-bold text-healthcare-green mb-6">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Diagnostic Testing</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-healthcare-green mr-2">•</span>
                      <span>Routine Blood Tests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-healthcare-green mr-2">•</span>
                      <span>Advanced Biochemistry</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-healthcare-green mr-2">•</span>
                      <span>Hematology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-healthcare-green mr-2">•</span>
                      <span>Immunology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-healthcare-green mr-2">•</span>
                      <span>Molecular Diagnostics</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Preventive Health Checkups</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-healthcare-green mr-2">•</span>
                      <span>Basic Health Packages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-healthcare-green mr-2">•</span>
                      <span>Comprehensive Health Packages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-healthcare-green mr-2">•</span>
                      <span>Women's Wellness Packages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-healthcare-green mr-2">•</span>
                      <span>Men's Wellness Packages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-healthcare-green mr-2">•</span>
                      <span>Senior Citizen Packages</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Specialized Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-healthcare-green mr-2">•</span>
                      <span>Home Collection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-healthcare-green mr-2">•</span>
                      <span>Corporate Wellness Programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-healthcare-green mr-2">•</span>
                      <span>Online Reports</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-healthcare-green mr-2">•</span>
                      <span>Doctor Consultations</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Advanced Imaging</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-healthcare-green mr-2">•</span>
                      <span>X-Ray</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-healthcare-green mr-2">•</span>
                      <span>Ultrasound</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-healthcare-green mr-2">•</span>
                      <span>CT Scan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-healthcare-green mr-2">•</span>
                      <span>MRI</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* Quality Assurance Tab */}
            <TabsContent value="quality">
              <h2 className="text-2xl font-bold text-healthcare-green mb-6">Quality Assurance</h2>
              <div className="max-w-3xl mx-auto">
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    At HealthGlow Healthcare, quality is not just a commitment but a way of life. Our laboratories follow stringent quality control processes to ensure accurate and reliable test results.
                  </p>
                  <h3 className="text-xl font-semibold mt-6 mb-3">Our Quality Certifications</h3>
                  <ul className="list-disc pl-5 mb-4">
                    <li>ISO 15189:2012 - Medical laboratories</li>
                    <li>NABL (National Accreditation Board for Testing and Calibration Laboratories)</li>
                    <li>CAP (College of American Pathologists) accreditation</li>
                    <li>ISO 9001:2015 - Quality Management Systems</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Quality Control Measures</h3>
                  <p className="mb-4">
                    Our multi-level quality control system ensures accuracy at every step:
                  </p>
                  <ol className="list-decimal pl-5 mb-4">
                    <li>Pre-analytical quality control - proper specimen collection and transport</li>
                    <li>Analytical quality control - internal quality checks during testing</li>
                    <li>Post-analytical quality control - verification of results before reporting</li>
                    <li>External Quality Assurance - participation in international proficiency testing programs</li>
                  </ol>
                  
                  <p>
                    Our state-of-the-art technology combined with highly skilled laboratory professionals ensures that we deliver nothing but the best quality diagnostic services to our patients.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* CSR Tab */}
            <TabsContent value="csr">
              <h2 className="text-2xl font-bold text-healthcare-green mb-6">Corporate Social Responsibility</h2>
              <div className="max-w-3xl mx-auto">
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    HealthGlow Healthcare is committed to giving back to the communities we serve. Our CSR initiatives focus on improving healthcare access, promoting health education, and supporting underprivileged communities.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Key CSR Initiatives</h3>
                  
                  <h4 className="text-lg font-medium mt-4 mb-2">Health Awareness Camps</h4>
                  <p className="mb-4">
                    We regularly conduct free health check-up camps in underserved communities, providing essential healthcare services and raising awareness about preventive health measures.
                  </p>
                  
                  <h4 className="text-lg font-medium mt-4 mb-2">Education Support</h4>
                  <p className="mb-4">
                    Our scholarship programs support deserving students pursuing medical and healthcare education, fostering the next generation of healthcare professionals.
                  </p>
                  
                  <h4 className="text-lg font-medium mt-4 mb-2">Environmental Sustainability</h4>
                  <p className="mb-4">
                    We are committed to environmentally sustainable practices across our operations, including proper waste management, energy conservation, and reducing our carbon footprint.
                  </p>
                  
                  <h4 className="text-lg font-medium mt-4 mb-2">Employee Volunteering</h4>
                  <p className="mb-4">
                    Our employees actively participate in community service activities, contributing their time and skills to make a positive difference in society.
                  </p>
                  
                  <p>
                    Through these initiatives, we strive to create a healthier and more equitable society, reflecting our core values of compassion, responsibility, and service.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-healthcare-green text-white">
        <div className="healthcare-container text-center">
          <h2 className="text-3xl font-bold mb-4">Do you have any queries?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded font-medium transition-colors">
              Get a call back now!
            </button>
            <div className="flex items-center">
              <span className="mr-2">or Call us now at</span>
              <a href="tel:7410764696" className="bg-white text-healthcare-green px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
              7410764696
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
