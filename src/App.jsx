import "./App.css";

import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-[#f9fafb] text-gray-800 font-sans w-full">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-[#acd4c3] to-[#14746f] text-white text-center px-6">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold"
          >
            Welcome to GenAnalyser
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg max-w-xl mx-auto"
          >
            Genetic insights made accessible. Analyze and understand with precision.
          </motion.p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          We are a cutting-edge team of bioinformaticians, researchers, and engineers dedicated to building tools that
          simplify and empower genetic analysis workflows, especially in rare diseases like SMA.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[#e8f0ee] text-center">
        <h2 className="text-3xl font-bold mb-10">Key Features</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Phenotype Mapping</h3>
            <p>Connect clinical features to the most relevant HPO terms automatically.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Real-time Insights</h3>
            <p>Get immediate results and interactive reports.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">User-friendly Interface</h3>
            <p>No need to be a bioinformatics expert — our platform guides you through.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-[#0b5351] text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg">📧 Email: support@genanalyser.com</p>
        <p className="text-lg mt-2">📞 Phone: +1 (555) 123-4567</p>
      </section>

      {/* Footer */}
      <footer className="bg-[#023436] text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} GenAnalyser. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
