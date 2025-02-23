// @ts-ignore
import { motion } from "framer-motion";
import Button from "./ui/Button";

const Home = () => {
  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20"
      >
        <img
          src="/yellow-dahlia-logo.png"
          alt="Mida-Supplement Plus"
          className="w-40 mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-green-700">
          Mida-Supplement Plus
        </h1>
        <p className="text-lg text-gray-700 mt-4 max-w-lg mx-auto">
          A breakthrough herbal supplement that aids in the disappearance of
          tumors in the gall bladder, colon polyps, and supports liver health.
        </p>
        <Button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md">
          Learn More
        </Button>
      </motion.div>

      {/* Benefits Section */}
      <div className="bg-white w-full py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-green-700">
          Why Choose Mida-Supplement Plus?
        </h2>
        <div className="flex flex-wrap justify-center mt-8 gap-8">
          <div className="max-w-xs p-6 bg-yellow-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-700">
              Gall Bladder Health
            </h3>
            <p className="text-gray-600 mt-2">
              Supports natural cleansing and promotes the disappearance of gall
              bladder concerns.
            </p>
          </div>
          <div className="max-w-xs p-6 bg-yellow-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-700">Colon Polyps</h3>
            <p className="text-gray-600 mt-2">
              Clinically tested to aid in the reduction of polyps with herbal
              efficiency.
            </p>
          </div>
          <div className="max-w-xs p-6 bg-yellow-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-700">
              Liver & Hepatitis Support
            </h3>
            <p className="text-gray-600 mt-2">
              Enhances liver function and provides herbal support for
              Hepatitis-related conditions.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-10 text-center">
        <h2 className="text-2xl font-semibold text-green-700">
          Experience the Power of Herbal Healing
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto mt-3">
          Join thousands who have experienced remarkable results with
          Mida-Supplement Plus.
        </p>
        <Button className="mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md">
          Get Started Today
        </Button>
      </div>
    </div>
  );
};

export default Home;
