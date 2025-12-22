import { motion } from 'framer-motion';

const workExamples = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online shopping platform with payment integration and inventory management.',
    category: 'Web Development',
    image: '/work/ecommerce.jpg'
  },
  {
    id: 2,
    title: 'Fitness Mobile App',
    description: 'A cross-platform fitness application with workout tracking and progress analytics.',
    category: 'Mobile Development',
    image: '/work/fitness-app.jpg'
  },
  {
    id: 3,
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time data visualization and predictive analytics for business intelligence.',
    category: 'AI/ML Solutions',
    image: '/work/analytics-dashboard.jpg'
  },
  {
    id: 4,
    title: 'Smart Home Control System',
    description: 'IoT solution for home automation with mobile and voice control integration.',
    category: 'IoT Development',
    image: '/work/smart-home.jpg'
  },
  {
    id: 5,
    title: 'Healthcare Management System',
    description: 'Comprehensive platform for patient records, appointments, and telemedicine.',
    category: 'Enterprise Solutions',
    image: '/work/healthcare.jpg'
  },
  {
    id: 6,
    title: 'Blockchain Wallet',
    description: 'Secure cryptocurrency wallet with multi-chain support and DeFi integration.',
    category: 'Blockchain',
    image: '/work/wallet.jpg'
  }
];

const WorkSection = () => {
  return (
    <section id="work" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Work</h2>
          <p className="text-lg sm:text-xl text-gray-600">Explore our portfolio of successful projects</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {workExamples.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg sm:shadow-lg sm:hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center text-gray-400 p-4 text-center">
                  {project.title}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
