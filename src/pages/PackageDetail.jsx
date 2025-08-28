import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Heart, HeartPulse, Droplet, Package, Phone } from "lucide-react";

// Package data
const packagesData = {
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
      phone: "7410764696"
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
      phone: "7410764696"
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
      phone: "7410764696"
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
      phone: "7410764696"
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
      phone: "7410764696"
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
      precautions: "- No alcohol 24 hours before test\n- Fast for 8 hours\n- Bring medical records",
      category: "healthConditions",
      phone: "7410764696"
    },
    {
      id: "allergy",
      title: "Allergy",
      description: "Comprehensive allergy assessment",
      // price: 1999,
      // originalPrice: 3499,
      image: "http://www.healthline.com/hlcmsresource/images/imce/allergy-testing_thumb.jpg",
      overview: "Complete allergy profile and sensitivity testing",
      precautions: "Standard precautions apply",
      category: "healthConditions",
      phone: "7410764696"
    },
    {
      id: "anemia",
      title: "Anemia",
      description: "Complete blood count and iron studies",
      // price: 1499,
      // originalPrice: 2499,
      image: "https://img.freepik.com/free-vector/blood-test-with-anemia-infographic_1284-64325.jpg?w=1800&t=st=1688056117~exp=1688056717~hmac=d78d364ef9abd29430febf82797bc12aa0f4b58f2fcb18d05d411afbedc77638",
      overview: "Comprehensive anemia assessment",
      precautions: "Standard precautions apply",
      category: "healthConditions",
      phone: "7410764696"
    },
    {
      id: "arthritis",
      title: "Arthritis",
      description: "Comprehensive arthritis assessment",
      // price: 2499,
      // originalPrice: 3999,
      image: "https://static.vecteezy.com/system/resources/previews/021/966/246/large_2x/blood-sample-tube-for-analysis-of-arthritis-ra-profile-test-in-laboratory-rheumatoid-arthritis-photo.jpg",
      overview: "Comprehensive arthritis assessment",
      precautions: "Standard precautions apply",
      category: "healthConditions",
      phone: "7410764696"
    },
    {
      id: "cancer",
      title: "Cancer",
      description: "Comprehensive cancer assessment",
      // price: 3499,
      // originalPrice: 5999,
      image: "https://wallpapercave.com/wp/wp11734644.jpg",
      overview: "Comprehensive cancer assessment",
      precautions: "Standard precautions apply",
      category: "healthConditions",
      phone: "7410764696"
    },
    {
      id: "diabetes",
      title: "Diabetes",
      description: "Comprehensive diabetes assessment",
      // price: 4499,
      // originalPrice: 6999,
      image: "https://vitat.com.br/wp-content/uploads/2022/03/shutterstock_1921373294-min-scaled.jpg",
      overview: "Comprehensive diabetes assessment",
      precautions: "Standard precautions apply",
      category: "healthConditions",
      phone: "7410764696"
    },
    {
      id: "fever",
      title: "Fever",
      description: "Comprehensive fever assessment",
      // price: 5499,
      // originalPrice: 7999,
      image: "https://static.toiimg.com/photo/80480272.cms",
      overview: "Comprehensive fever assessment",
      precautions: "Standard precautions apply",
      category: "healthConditions",
      phone: "7410764696"
    },
    {
      id: "hepatitis",
      title: "Hepatitis",
      description: "Comprehensive hepatitis assessment",
      // price: 6499,
      // originalPrice: 8999,
      image: "https://www.hepatitisaustralia.com/images/c441027d-6933-49dc-bfc4-c2aff534458c/cropped?width=1200&height=630",
      overview: "Comprehensive hepatitis assessment",
      precautions: "Standard precautions apply",
      category: "healthConditions",
      phone: "7410764696"
    },
    {
      id: "hormones",
      title: "Hormones",
      description: "Comprehensive hormones assessment",
      // price: 7499,
      // originalPrice: 9999,
      image: "https://hrtguru.com/wp-content/uploads/2019/02/hormone_stimulation_test.jpg",
      overview: "Comprehensive hormones assessment",
      precautions: "Standard precautions apply",
      category: "healthConditions",
      phone: "7410764696"
    },
    {
      id: "hypertension",
      title: "Hypertension",
      description: "Comprehensive hypertension assessment",
      // price: 8499,
      // originalPrice: 10999,
      image: "https://res.cloudinary.com/grohealth/image/upload/f_auto,fl_lossy,q_auto/v1583843670/DCUK/Content/iStock-926093506.jpg",
      overview: "Comprehensive hypertension assessment",
      precautions: "Standard precautions apply",
      category: "healthConditions",
      phone: "7410764696"
    },
    {
      id: "obesity",
      title: "Obesity",
      description: "Comprehensive obesity assessment",
      // price: 9499,
      // originalPrice: 11999,
      image: "https://famhealth.in/wp-content/uploads/2019/11/effects-of-obesity.jpg",
      overview: "Comprehensive obesity assessment",
      precautions: "Standard precautions apply",
      category: "healthConditions",
      phone: "7410764696"
    },
    {
      id: "pregnancy",
      title: "Pregnancy",
      description: "Comprehensive pregnancy assessment",
      // price: 10499,
      // originalPrice: 12999,
      image: "https://static.tuasaude.com/media/article/ci/qp/home-pregnancy-test_37715.jpg",
      overview: "Comprehensive pregnancy assessment",
      precautions: "Standard precautions apply",
      category: "healthConditions",
      phone: "7410764696"
    },
    {
      id: "std",
      title: "STD",
      description: "Comprehensive STD assessment",
      // price: 11499,
      // originalPrice: 13999,
      image: "https://c8.alamy.com/comp/2B82P8C/std-swab-test-2B82P8C.jpg",
      overview: "Comprehensive STD assessment",
      precautions: "Standard precautions apply",
      category: "healthConditions",
      phone: "7410764696"
    },
    {
      id: "vitamins",
      title: "Vitamins",
      description: "Comprehensive vitamins assessment",
      // price: 12499,
      // originalPrice: 14999,
      image: "https://thumbs.dreamstime.com/b/doctor-holding-test-blood-sample-tube-vitamins-minerals-273576244.jpg",
      overview: "Comprehensive vitamins assessment",
      precautions: "Standard precautions apply",
      category: "healthConditions",
      phone: "7410764696"
    }
  ],
  bloodTests: [
    {
      id: "food-intolerance",
      title: "Food Intolerance Test",
      description: "Comprehensive food sensitivity assessment",
      // price: 4999,
      // originalPrice: 7999,
      image: "https://horsforthhealthhub.com/wp-content/uploads/2023/03/Food-Intolerances-1080x675.png",
      overview: "Complete food sensitivity analysis",
      precautions: "Standard precautions apply",
      category: "bloodTests",
      phone: "7410764696"
    },
    {
      id: "cbc-test",
      title: "CBC Test",
      description: "Complete Blood Count Test",
      // price: 1999,
      // originalPrice: 3499,
      image: "https://precisionlabtesting.com/wp-content/uploads/2021/07/cbc-test.jpeg",
      overview: "Comprehensive blood count analysis",
      precautions: "Standard precautions apply",
      category: "bloodTests",
      phone: "7410764696"
    },
    {
      id: "lipid-profile-test",
      title: "Lipid Profile Test",
      description: "Comprehensive lipid profile analysis",
      // price: 2999,
      // originalPrice: 4499,
      image: "https://awamilab.com/wp-content/uploads/2018/09/lipid-profile-blood-test.jpg",
      overview: "Comprehensive lipid profile analysis",
      precautions: "Standard precautions apply",
      category: "bloodTests",
      phone: "7410764696"
    },
    {
      id: "allergy-panel-test",
      title: "Allergy Panel Test",
      description: "Comprehensive allergy panel analysis",
      // price: 3999,
      // originalPrice: 5499,
      image: "https://tse1.mm.bing.net/th?id=OIP._1LrzhLBJByE-9yaZu2cdwHaE7&pid=Api&P=0&h=220",
      overview: "Comprehensive allergy panel analysis",
      precautions: "Standard precautions apply",
      category: "bloodTests",
      phone: "7410764696"
    },
    {
      id: "vitamin-d-blood-test",
      title: "Vitamin D Blood Test",
      description: "Comprehensive vitamin D blood analysis",
      // price: 4999,
      // originalPrice: 6499,
      image: "https://lifecarediagnostic.com/wp-content/uploads/2022/08/vitamin-d-blood-test-1200x744.jpg",
      overview: "Comprehensive vitamin D blood analysis",
      precautions: "Standard precautions apply",
      category: "bloodTests",
      phone: "7410764696"
    },
    {
      id: "thyroid-test",
      title: "Thyroid Test",
      description: "Comprehensive thyroid analysis",
      // price: 5999,
      // originalPrice: 7499,
      image: "https://www.londongpclinic.co.uk/storage/cms/posts/QzVQoyWwkMicFfpLhPryiHgxPIl3gEBBdOsLliOn.webp",
      overview: "Comprehensive thyroid analysis",
      precautions: "Standard precautions apply",
      category: "bloodTests",
      phone: "7410764696"
    },
    {
      id: "hba1c-test",
      title: "HbA1C Test Or Glycated Haemoglobin Test",
      description: "Comprehensive HbA1C analysis",
      // price: 6999,
      // originalPrice: 8499,
      image: "https://www.diabetes.co.uk/wp-content/uploads/2019/01/iStock-987670332.jpg",
      overview: "Comprehensive HbA1C analysis",
      precautions: "Standard precautions apply",
      category: "bloodTests",
      phone: "7410764696"
    },
    {
      id: "thrombophilia-profile-test",
      title: "Thrombophilia Profile Test",
      description: "Comprehensive thrombophilia profile analysis",
      // price: 7999,
      // originalPrice: 9499,
      image: "https://www.bedayahospitals.com/stream?thumbnail=900&image=/uploads/images/thrombophilia_profile_test-66a8a01163c2c.jpg",
      overview: "Comprehensive thrombophilia profile analysis",
      precautions: "Standard precautions apply",
      category: "bloodTests",
      phone: "7410764696"
    }
  ],
  truehealthPackages: [
    {
      id: "truehealth-vital",
      title: "Truehealth Vital",
      description: "Essential health screening package",
      // price: 3999,
      // originalPrice: 6999,
      image: "https://m.media-amazon.com/images/I/71vS+gvt+oL._SX466_.jpg",
      overview: "Basic health screening package",
      precautions: "Standard precautions apply",
      category: "truehealthPackages",
      phone: "7410764696"
    },
    {
      id: "truehealth-vital-plus",
      title: "Truehealth Vital Plus",
      description: "Enhanced health screening package",
      // price: 5999,
      // originalPrice: 8999,
      image: "https://www.postshop.se/wp-content/uploads/VitalPlus_Produkt4.png",
      overview: "Enhanced health screening with additional tests",
      precautions: "Standard precautions apply",
      category: "truehealthPackages",
      phone: "7410764696"
    },
    {
      id: "truehealth-active-male",
      title: "Truehealth Active Male",
      description: "Health screening package for active males",
      // price: 6999,
      // originalPrice: 9999,
      image: "https://shop.trudiagnostic.com/cdn/shop/files/image_9dbef083-18b9-4d65-9f9c-5cdc888312f8_1800x1800.png?v=1730231277",
      overview: "Health screening package for active males",
      precautions: "Standard precautions apply",
      category: "truehealthPackages",
      phone: "7410764696"
    },
    {
      id: "truehealth-active-female",
      title: "Truehealth Active Female",
      description: "Health screening package for active females",
      // price: 7999,
      // originalPrice: 10999,
      image: "https://shop.trudiagnostic.com/cdn/shop/files/image_983ada1d-d001-43be-9d2a-c19a0365c1fc.png?v=1730381555&width=900",
      overview: "Health screening package for active females",
      precautions: "Standard precautions apply",
      category: "truehealthPackages",
      phone: "7410764696"
    },
    {
      id: "truehealth-pro-active-male",
      title: "Truehealth Pro-Active Male",
      description: "Pro-active health screening package for males",
      // price: 8999,
      // originalPrice: 11999,
      image: "https://donorchildemmagroenbaek.com/wp-content/uploads/2021/10/ExSeed-Test-2-scaled.jpg",
      overview: "Pro-active health screening package for males",
      precautions: "Standard precautions apply",
      category: "truehealthPackages",
      phone: "7410764696"
    },
    {
      id: "truehealth-pro-active-female",
      title: "Truehealth Pro-Active Female",
      description: "Pro-active health screening package for females",
      // price: 9999,
      // originalPrice: 12999,
      image: "https://storage.googleapis.com/cig-shared/prod/bmd/main/web/2023/03/9adadacc-be-proactive-1080x720px.jpg",
      overview: "Pro-active health screening package for females",
      precautions: "Standard precautions apply",
      category: "truehealthPackages",
      phone: "7410764696"
    },
    {
      id: "truehealth-expert-male",
      title: "Truehealth Expert Male",
      description: "Expert health screening package for males",
      // price: 10999,
      // originalPrice: 13999,
      image: "https://www.mainlinehealth.org/-/media/images/blog/2023/07/blood-test.jpg",
      overview: "Expert health screening package for males",
      precautions: "Standard precautions apply",
      category: "truehealthPackages",
      phone: "7410764696"
    },
    {
      id: "truehealth-expert-female",
      title: "Truehealth Expert Female",
      description: "Expert health screening package for females",
      // price: 11999,
      // originalPrice: 14999,
      image: "https://www.thestatesman.com/wp-content/uploads/2018/12/women%E2%80%99s-health.jpg",
      overview: "Expert health screening package for females",
      precautions: "Standard precautions apply",
      category: "truehealthPackages",
      phone: "7410764696"
    }
  ]
};

const PackageDetail = () => {
  const { id } = useParams();
  const [packageItem, setPackageItem] = useState(null);

  useEffect(() => {
    const findPackage = () => {
      for (const category in packagesData) {
        const foundPackage = packagesData[category].find(item => item.id === id);
        if (foundPackage) {
          setPackageItem(foundPackage);
          return;
        }
      }
      setPackageItem(null);
    };

    findPackage();
  }, [id]);

  if (!packageItem) {
    return (
      <div className="healthcare-container py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Package Not Found</h1>
          <p className="text-gray-600">The requested package does not exist.</p>
          <Link to="/packages" className="text-healthcare-green hover:underline">
            &larr; Back to Packages
          </Link>
        </div>
      </div>
    );
  }

   const { title, description, price, originalPrice, image, overview, precautions, category, phone } = packageItem;

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

  const handleCallBooking = () => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <>
      <div className="bg-gray-50 py-4">
        <div className="healthcare-container">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-gray-500 hover:text-healthcare-green">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/packages" className="text-gray-500 hover:text-healthcare-green">Health Packages</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-healthcare-green">{title}</span>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="healthcare-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src={image}
                alt={title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                {getCategoryIcon(category)}
                <h1 className="text-3xl font-bold text-healthcare-green">{title}</h1>
              </div>
              <p className="text-gray-700 mb-6">{description}</p>

              <div className="flex items-baseline mb-6">
                {/* <span className="text-healthcare-green text-3xl font-bold">₹{price}</span> */}
                {/* <span className="text-gray-400 line-through ml-2">₹{originalPrice}</span> */}
              </div>

              <Button 
                onClick={handleCallBooking}
                className="w-full bg-healthcare-green hover:bg-healthcare-green-dark flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call to Book Appointment
              </Button>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
            <p className="text-gray-700 mb-6">{overview}</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Precautions</h2>
            <ul className="list-disc list-inside text-gray-700">
              {precautions.split('\n').map((precaution, index) => (
                <li key={index}>{precaution}</li>
              ))}
            </ul>
          </div>

          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <div className="flex items-center gap-4">
              <Phone className="text-gray-500 w-5 h-5" />
              <a href={`tel:${phone}`} className="text-healthcare-green hover:underline">{phone}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackageDetail;
