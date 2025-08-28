import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, HeartPulse, Droplet, Package } from "lucide-react";

const Packages = () => {
  const [selectedCategory, setSelectedCategory] = useState('healthRisks');

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'healthRisks':
        return <Heart className="w-5 h-5" />;
      case 'healthConditions':
        return <HeartPulse className="w-5 h-5" />;
      case 'bloodTests':
        return <Droplet className="w-5 h-5" />;
      case 'truehealthPackages':
        return <Package className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const packages = {
    healthRisks: [
      {
        id: "heart-tests",
        title: "Heart Tests",
        description: "Comprehensive cardiac health assessment including ECG, stress tests, and more",
        // price: 2999,
        // originalPrice: 4999,
        image: "https://d1zxene68j3keg.cloudfront.net/sites/default/files/Resouces/images/Which%20Cardiac%20Test%20Is%20relevant.jpg",
        overview: "Our comprehensive Heart Tests package is designed to evaluate your cardiovascular health through a series of specialized tests.",
        precautions: "- Fast for 8-12 hours before the test\n- Avoid caffeine and smoking for 24 hours\n- Wear comfortable clothing",
        category: "healthRisks",
        phone: "+1234567890"
      },
      {
        id: "liver-tests",
        title: "Liver Tests",
        description: "Complete liver function tests to assess liver health and function",
        // price: 1999,
        // originalPrice: 3499,
        image: "https://cdn.kitsune.tools/v1/5af95cd90d7188052cd04e91/liver-function-test-5bc96f5fd866490001fcd03f.jpg",
        overview: "Our Liver Tests package includes a comprehensive set of liver function tests.",
        precautions: "- Fast for 8-12 hours before the test\n- Avoid caffeine and smoking for 24 hours\n- Wear comfortable clothing",
        category: "healthRisks",
        phone: "+1234567890"
      },
      {
        id: "thyroid-tests",
        title: "Thyroid Tests",
        description: "Comprehensive thyroid profile including T3, T4, and TSH",
        // price: 1499,
        // originalPrice: 2499,
        image: "https://www.niddk.nih.gov/-/media/Images/Health-Information/Diagnostic-Tests/thyroid-TW_Card_July_1200x630_02.jpg",
        overview: "Our Thyroid Tests package provides a complete evaluation of thyroid function.",
        precautions: "- Fast for 8-12 hours before the test\n- Avoid caffeine and smoking for 24 hours\n- Wear comfortable clothing",
        category: "healthRisks",
        phone: "+1234567890"
      },
      {
        id: "kidney-tests",
        title: "Kidney Tests",
        description: "Complete renal function assessment",
        // price: 2499,
        // originalPrice: 3999,
        image: "https://www.secondmedic.com/lab/asset/site_images/package/366658package_image.jpg",
        overview: "Our Kidney Tests package includes comprehensive kidney function assessment.",
        precautions: "- Fast for 8-12 hours before the test\n- Avoid caffeine and smoking for 24 hours\n- Wear comfortable clothing",
        category: "healthRisks",
        phone: "+1234567890"
      },
      {
        id: "bone-joint-tests",
        title: "Bone and Joint Tests",
        description: "Comprehensive bone density and joint health assessment",
        // price: 3499,
        // originalPrice: 5999,
        image: "https://umbrella-scientific.us/wp-content/uploads/rheumatoid-arthritis-test-panel-kit.jpg",
        overview: "Our Bone and Joint Tests package includes bone density and joint health evaluation.",
        precautions: "- Wear comfortable clothing\n- Bring any previous joint reports\n- Inform about medications",
        category: "healthRisks",
        phone: "+1234567890"
      }
    ],
    healthConditions: [
      {
        id: "alcoholism",
        title: "Alcoholism",
        description: "Comprehensive alcohol dependency assessment",
        // price: 2999,
        // originalPrice: 4999,
        image: "https://breathalysers-australia.com.au/wp-content/uploads/2022/10/alcohol-test-police.jpg",
        overview: "Complete assessment of alcohol-related health impacts",
        precautions: "- No alcohol consumption for 24 hours before the test\n- Fast for 8-12 hours\n- Regular medications can be taken as prescribed",
        category: "healthConditions",
        phone: "+1234567890"
      },
      {
        id: "allergy",
        title: "Allergy",
        description: "Comprehensive allergy assessment and sensitivity testing",
        // price: 1999,
        // originalPrice: 3499,
        image: "http://www.healthline.com/hlcmsresource/images/imce/allergy-testing_thumb.jpg",
        overview: "Complete allergy profile and sensitivity testing package",
        precautions: "- Avoid antihistamines for 7 days prior\n- Report all current medications\n- Fast for 8 hours",
        category: "healthConditions",
        phone: "+1234567890"
      },
      {
        id: "anemia",
        title: "Anemia",
        description: "Complete blood count and iron studies",
        // price: 1499,
        // originalPrice: 2499,
        image: "https://img.freepik.com/free-vector/blood-test-with-anemia-infographic_1284-64325.jpg?w=1800&t=st=1688056117~exp=1688056717~hmac=d78d364ef9abd29430febf82797bc12aa0f4b58f2fcb18d05d411afbedc77638",
        overview: "Comprehensive anemia assessment including iron studies",
        precautions: "- Fast for 8-12 hours\n- Continue prescribed medications\n- Report any supplements",
        category: "healthConditions",
        phone: "+1234567890"
      },
      {
        id: "arthritis",
        title: "Arthritis",
        description: "Complete joint health and inflammation assessment",
        // price: 2499,
        // originalPrice: 3999,
        image: "https://static.vecteezy.com/system/resources/previews/021/966/246/large_2x/blood-sample-tube-for-analysis-of-arthritis-ra-profile-test-in-laboratory-rheumatoid-arthritis-photo.jpg",
        overview: "Comprehensive arthritis evaluation including joint assessment",
        precautions: "- Wear loose clothing\n- Report current pain medications\n- Bring previous X-rays",
        category: "healthConditions",
        phone: "+1234567890"
      },
      {
        id: "cancer",
        title: "Cancer",
        description: "Comprehensive cancer screening and risk assessment",
        // price: 3499,
        // originalPrice: 5999,
        image: "https://wallpapercave.com/wp/wp11734644.jpg",
        overview: "Complete cancer screening package with multiple markers",
        precautions: "- Fast for 12 hours\n- Report family history\n- Bring previous reports",
        category: "healthConditions",
        phone: "+1234567890"
      },
      {
        id: "diabetes",
        title: "Diabetes",
        description: "Complete diabetes screening and management assessment",
        // price: 1999,
        // originalPrice: 3499,
        image: "https://vitat.com.br/wp-content/uploads/2022/03/shutterstock_1921373294-min-scaled.jpg",
        overview: "Comprehensive diabetes evaluation including HbA1c",
        precautions: "- Fast for 12 hours\n- Continue prescribed medications\n- Bring glucose records",
        category: "healthConditions",
        phone: "+1234567890"
      },
      {
        id: "fever",
        title: "Fever",
        description: "Complete fever investigation package",
        // price: 1499,
        // originalPrice: 2499,
        image: "https://static.toiimg.com/photo/80480272.cms",
        overview: "Comprehensive fever investigation including infection markers",
        precautions: "- Report current medications\n- No need to fast\n- Bring temperature records",
        category: "healthConditions",
        phone: "+1234567890"
      },
      {
        id: "hepatitis",
        title: "Hepatitis",
        description: "Complete hepatitis screening package",
        // price: 2999,
        // originalPrice: 4999,
        image: "https://www.hepatitisaustralia.com/images/c441027d-6933-49dc-bfc4-c2aff534458c/cropped?width=1200&height=630",
        overview: "Comprehensive hepatitis screening for all types",
        precautions: "- Fast for 8 hours\n- Continue medications\n- Report risk factors",
        category: "healthConditions",
        phone: "+1234567890"
      },
      {
        id: "hormones",
        title: "Hormones",
        description: "Complete hormonal profile assessment",
        // price: 2499,
        // originalPrice: 3999,
        image: "https://hrtguru.com/wp-content/uploads/2019/02/hormone_stimulation_test.jpg",
        overview: "Comprehensive hormonal evaluation package",
        precautions: "- Fast for 12 hours\n- Report menstrual history\n- Morning sample preferred",
        category: "healthConditions",
        phone: "+1234567890"
      },
      {
        id: "hypertension",
        title: "Hypertension",
        description: "Complete blood pressure and cardiovascular assessment",
        // price: 1999,
        // originalPrice: 3499,
        image: "https://res.cloudinary.com/grohealth/image/upload/f_auto,fl_lossy,q_auto/v1583843670/DCUK/Content/iStock-926093506.jpg",
        overview: "Comprehensive hypertension evaluation package",
        precautions: "- Continue medications\n- Avoid caffeine\n- Bring BP records",
        category: "healthConditions",
        phone: "+1234567890"
      },
      {
        id: "obesity",
        title: "Obesity",
        description: "Complete metabolic and body composition assessment",
        // price: 2499,
        // originalPrice: 3999,
        image: "https://famhealth.in/wp-content/uploads/2019/11/effects-of-obesity.jpg",
        overview: "Comprehensive obesity evaluation package",
        precautions: "- Fast for 12 hours\n- Wear loose clothing\n- Bring diet records",
        category: "healthConditions",
        phone: "+1234567890"
      },
      {
        id: "pregnancy",
        title: "Pregnancy",
        description: "Complete pregnancy screening package",
        // price: 2999,
        // originalPrice: 4999,
        image: "https://static.tuasaude.com/media/article/ci/qp/home-pregnancy-test_37715.jpg",
        overview: "Comprehensive pregnancy evaluation package",
        precautions: "- Morning sample preferred\n- Light breakfast allowed\n- Bring previous reports",
        category: "healthConditions",
        phone: "+1234567890"
      },
      {
        id: "std",
        title: "STD",
        description: "Complete sexually transmitted diseases screening",
        // price: 3499,
        // originalPrice: 5999,
        image: "https://c8.alamy.com/comp/2B82P8C/std-swab-test-2B82P8C.jpg",
        overview: "Comprehensive STD screening package",
        precautions: "- Fast for 8 hours\n- Confidential testing\n- Report symptoms",
        category: "healthConditions",
        phone: "+1234567890"
      },
      {
        id: "vitamins",
        title: "Vitamins",
        description: "Complete vitamin deficiency assessment",
        // price: 1999,
        // originalPrice: 3499,
        image: "https://thumbs.dreamstime.com/b/doctor-holding-test-blood-sample-tube-vitamins-minerals-273576244.jpg",
        overview: "Comprehensive vitamin levels evaluation",
        precautions: "- Fast for 8 hours\n- Report supplements\n- Morning sample preferred",
        category: "healthConditions",
        phone: "+1234567890"
      }
    ],
    bloodTests: [
      {
        id: "food-intolerance",
        title: "Food Intolerance Test",
        description: "Complete food sensitivity and intolerance assessment",
        // price: 4999,
        // originalPrice: 7999,
        image: "https://horsforthhealthhub.com/wp-content/uploads/2023/03/Food-Intolerances-1080x675.png",
        overview: "Comprehensive food intolerance testing package",
        precautions: "- Fast for 12 hours\n- Report food diary\n- Continue medications",
        category: "bloodTests",
        phone: "+1234567890"
      },
      {
        id: "cbc-test",
        title: "CBC Test",
        description: "Complete Blood Count Test",
        // price: 999,
        // originalPrice: 1999,
        image: "https://precisionlabtesting.com/wp-content/uploads/2021/07/cbc-test.jpeg",
        overview: "Comprehensive blood count analysis",
        precautions: "- Fast for 8 hours\n- Morning sample preferred\n- Report medications",
        category: "bloodTests",
        phone: "+1234567890"
      },
      {
        id: "lipid-profile",
        title: "Lipid Profile Test",
        description: "Complete cholesterol and lipid assessment",
        // price: 1499,
        // originalPrice: 2499,
        image: "https://awamilab.com/wp-content/uploads/2018/09/lipid-profile-blood-test.jpg",
        overview: "Comprehensive lipid profile analysis",
        precautions: "- Fast for 12 hours\n- Avoid fatty foods\n- Report medications",
        category: "bloodTests",
        phone: "+1234567890"
      },
      {
        id: "allergy-panel",
        title: "Allergy Panel Test",
        description: "Comprehensive allergy screening",
        // price: 3999,
        // originalPrice: 5999,
        image: "https://tse1.mm.bing.net/th?id=OIP._1LrzhLBJByE-9yaZu2cdwHaE7&pid=Api&P=0&h=220",
        overview: "Complete allergy panel testing",
        precautions: "- Stop antihistamines\n- Report allergies\n- Morning sample preferred",
        category: "bloodTests",
        phone: "+1234567890"
      },
      {
        id: "vitamin-d",
        title: "Vitamin D Blood Test",
        description: "Complete vitamin D level assessment",
        // price: 1999,
        // originalPrice: 2999,
        image: "https://lifecarediagnostic.com/wp-content/uploads/2022/08/vitamin-d-blood-test-1200x744.jpg",
        overview: "Comprehensive vitamin D analysis",
        precautions: "- No fasting required\n- Report supplements\n- Morning preferred",
        category: "bloodTests",
        phone: "+1234567890"
      },
      {
        id: "thyroid-blood",
        title: "Thyroid Test",
        description: "Complete thyroid function assessment",
        // price: 1799,
        // originalPrice: 2999,
        image: "https://www.londongpclinic.co.uk/storage/cms/posts/QzVQoyWwkMicFfpLhPryiHgxPIl3gEBBdOsLliOn.webp",
        overview: "Comprehensive thyroid profile",
        precautions: "- Morning sample\n- Fast for 8 hours\n- Report medications",
        category: "bloodTests",
        phone: "+1234567890"
      },
      {
        id: "hba1c",
        title: "HbA1C Test",
        description: "Glycated Haemoglobin Test for diabetes monitoring",
        // price: 1299,
        // originalPrice: 2499,
        image: "https://www.diabetes.co.uk/wp-content/uploads/2019/01/iStock-987670332.jpg",
        overview: "Complete HbA1C analysis",
        precautions: "- No fasting required\n- Continue medications\n- Report diabetes history",
        category: "bloodTests",
        phone: "+1234567890"
      },
      {
        id: "thrombophilia",
        title: "Thrombophilia Profile Test",
        description: "Complete blood clotting disorder assessment",
        // price: 5999,
        // originalPrice: 8999,
        image: "https://www.bedayahospitals.com/stream?thumbnail=900&image=/uploads/images/thrombophilia_profile_test-66a8a01163c2c.jpg",
        overview: "Comprehensive thrombophilia evaluation",
        precautions: "- Fast for 8 hours\n- Report blood thinners\n- Morning sample",
        category: "bloodTests",
        phone: "+1234567890"
      }
    ],
    truehealthPackages: [
      {
        id: "truehealth-vital",
        title: "Truehealth Vital",
        description: "Essential health screening package",
        // price: 2999,
        // originalPrice: 4999,
        image: "https://m.media-amazon.com/images/I/71vS+gvt+oL._SX466_.jpg",
        overview: "Basic comprehensive health screening",
        precautions: "- Fast for 12 hours\n- Morning appointment\n- Wear comfortable clothing",
        category: "truehealthPackages",
        phone: "+1234567890"
      },
      {
        id: "truehealth-vital-plus",
        title: "Truehealth Vital Plus",
        description: "Advanced health screening package",
        // price: 4999,
        // originalPrice: 7999,
        image: "https://www.postshop.se/wp-content/uploads/VitalPlus_Produkt4.png",
        overview: "Enhanced health screening package",
        precautions: "- Fast for 12 hours\n- Morning appointment\n- Bring previous reports",
        category: "truehealthPackages",
        phone: "+1234567890"
      },
      {
        id: "truehealth-active-male",
        title: "Truehealth Active Male",
        description: "Comprehensive male health package",
        // price: 5999,
        // originalPrice: 8999,
        image: "https://shop.trudiagnostic.com/cdn/shop/files/image_9dbef083-18b9-4d65-9f9c-5cdc888312f8_1800x1800.png?v=1730231277",
        overview: "Complete male health evaluation",
        precautions: "- Fast for 12 hours\n- Morning appointment\n- Report medications",
        category: "truehealthPackages",
        phone: "+1234567890"
      },
      {
        id: "truehealth-active-female",
        title: "Truehealth Active Female",
        description: "Comprehensive female health package",
        // price: 5999,
        // originalPrice: 8999,
        image: "https://shop.trudiagnostic.com/cdn/shop/files/image_983ada1d-d001-43be-9d2a-c19a0365c1fc.png?v=1730381555&width=900",
        overview: "Complete female health evaluation",
        precautions: "- Fast for 12 hours\n- Morning appointment\n- Report medications",
        category: "truehealthPackages",
        phone: "+1234567890"
      },
      {
        id: "truehealth-proactive-male",
        title: "Truehealth Pro-Active Male",
        description: "Premium male health package",
        // price: 7999,
        // originalPrice: 11999,
        image: "https://donorchildemmagroenbaek.com/wp-content/uploads/2021/10/ExSeed-Test-2-scaled.jpg",
        overview: "Advanced male health screening",
        precautions: "- Fast for 12 hours\n- Morning appointment\n- Bring medical history",
        category: "truehealthPackages",
        phone: "+1234567890"
      },
      {
        id: "truehealth-proactive-female",
        title: "Truehealth Pro-Active Female",
        description: "Premium female health package",
        // price: 7999,
        // originalPrice: 11999,
        image: "https://storage.googleapis.com/cig-shared/prod/bmd/main/web/2023/03/9adadacc-be-proactive-1080x720px.jpg",
        overview: "Advanced female health screening",
        precautions: "- Fast for 12 hours\n- Morning appointment\n- Bring medical history",
        category: "truehealthPackages",
        phone: "+1234567890"
      },
      {
        id: "truehealth-expert-male",
        title: "Truehealth Expert Male",
        description: "Executive male health package",
        // price: 9999,
        // originalPrice: 14999,
        image: "https://www.mainlinehealth.org/-/media/images/blog/2023/07/blood-test.jpg",
        overview: "Premium male health evaluation",
        precautions: "- Fast for 12 hours\n- Early morning appointment\n- Complete health history",
        category: "truehealthPackages",
        phone: "+1234567890"
      },
      {
        id: "truehealth-expert-female",
        title: "Truehealth Expert Female",
        description: "Executive female health package",
        // price: 9999,
        // originalPrice: 14999,
        image: "https://www.thestatesman.com/wp-content/uploads/2018/12/women%E2%80%99s-health.jpg",
        overview: "Premium female health evaluation",
        precautions: "- Fast for 12 hours\n- Early morning appointment\n- Complete health history",
        category: "truehealthPackages",
        phone: "+1234567890"
      }
    ]
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="healthcare-container">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-gray-500 hover:text-healthcare-green">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-healthcare-green">Health Packages</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-healthcare-green-light">
        <div className="healthcare-container">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-healthcare-green mb-4">Our Health Packages</h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Choose from our comprehensive range of health checkup packages designed to meet your specific needs
            </p>
          </div>
        </div>
      </section>

      {/* Packages Filter */}
      <section className="py-8">
        <div className="healthcare-container">
          <div className="flex justify-center space-x-4 mb-8">
            <Button
              variant={selectedCategory === 'healthRisks' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('healthRisks')}
              className="bg-healthcare-green hover:bg-healthcare-green-dark flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Health Risks
            </Button>
            <Button
              variant={selectedCategory === 'healthConditions' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('healthConditions')}
              className="bg-healthcare-green hover:bg-healthcare-green-dark flex items-center gap-2"
            >
              <HeartPulse className="w-5 h-5" />
              Health Conditions
            </Button>
            <Button
              variant={selectedCategory === 'bloodTests' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('bloodTests')}
              className="bg-healthcare-green hover:bg-healthcare-green-dark flex items-center gap-2"
            >
              <Droplet className="w-5 h-5" />
              Blood Tests
            </Button>
            <Button
              variant={selectedCategory === 'truehealthPackages' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('truehealthPackages')}
              className="bg-healthcare-green hover:bg-healthcare-green-dark flex items-center gap-2"
            >
              <Package className="w-5 h-5" />
              Truehealth Packages
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages[selectedCategory].map((test) => (
              <Card key={test.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={test.image}
                    alt={test.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {getCategoryIcon(selectedCategory)}
                    <h3 className="text-xl font-semibold">{test.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{test.description}</p>
                  <div className="flex items-baseline mb-4">
                    {/* <span className="text-healthcare-green text-2xl font-bold">₹{test.price}</span> */}
                    {/* <span className="text-gray-400 line-through ml-2">₹{test.originalPrice}</span> */}
                  </div>
                  <Link to={`/packages/${test.id}`}>
                    <Button className="w-full bg-healthcare-green hover:bg-healthcare-green-dark">
                      View Details
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-healthcare-green text-white mt-12">
        <div className="healthcare-container text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Package?</h2>
          <p className="mb-8">
            Our healthcare experts are here to help you select the most suitable health package for your needs.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-healthcare-green">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Packages;
