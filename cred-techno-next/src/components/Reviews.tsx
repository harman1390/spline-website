import { useEffect, useState } from 'react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Cred Techno transformed our mobile app with their exceptional Android development skills. The team delivered beyond our expectations with clean code and on-time delivery.',
    rating: 5,
    platform: 'Android',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager, InnovateX',
    content: 'Their iOS development expertise helped us launch our app successfully on the App Store. The attention to detail and user experience was outstanding.',
    rating: 5,
    platform: 'iOS',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'CTO, Enterprise Solutions',
    content: 'The cross-platform solution they built for us works seamlessly across all devices. Their team was professional, communicative, and delivered high-quality code.',
    rating: 4,
    platform: 'Cross-Platform',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Founder, StartupHub',
    content: 'Incredible work on our Windows application. The performance optimizations they implemented made a huge difference in user experience.',
    rating: 5,
    platform: 'Windows',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    id: 5,
    name: 'Priya Patel',
    role: 'Product Owner, FinTech Plus',
    content: 'Their backend development services provided us with a robust and scalable infrastructure. The team was always available to address our concerns.',
    rating: 4,
    platform: 'Backend',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'CEO, AI Ventures',
    content: 'The AI integration they implemented has given us a significant competitive edge. Their expertise in machine learning is truly impressive.',
    rating: 5,
    platform: 'AI/ML',
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg'
  }
];

const Reviews = () => {
  const [isVisible, setIsVisible] = useState<boolean[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsVisible(Array(reviews.length).fill(false));
    
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        reviews.forEach((_, index) => {
          const element = document.getElementById(`review-${index}`);
          if (element) {
            const rect = element.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
            if (isInView) {
              setIsVisible(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          }
        });
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const getPlatformBadgeClass = (platform: string) => {
    const platformClasses: { [key: string]: string } = {
      'Android': 'bg-green-100 text-green-800',
      'iOS': 'bg-gray-100 text-gray-800',
      'Windows': 'bg-blue-100 text-blue-800',
      'Cross-Platform': 'bg-purple-100 text-purple-800',
      'Backend': 'bg-yellow-100 text-yellow-800',
      'AI/ML': 'bg-red-100 text-red-800'
    };
    return platformClasses[platform] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              id={`review-${index}`}
              className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-md sm:shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              style={{
                opacity: isClient ? (isVisible[index] ? 1 : 0) : 1,
                transform: isClient ? (isVisible[index] ? 'translateY(0)' : 'translateY(30px)') : 'none',
                transitionProperty: isClient ? 'opacity, transform, box-shadow' : 'none',
                transitionDuration: isClient ? '0.5s, 0.5s, 0.3s' : '0s',
                transitionTimingFunction: isClient ? 'ease, ease, ease' : 'ease',
                transitionDelay: isClient ? (isVisible[index] ? `${index * 0.1}s` : '0s') : '0s',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                  />
                  <div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{review.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{review.role}</p>
                    </div>
                  </div>
                </div>
                <span className={`text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ${getPlatformBadgeClass(review.platform)}`}>
                  {review.platform}
                </span>
              </div>
              
              <div className="flex mb-3 sm:mb-4">
                {renderStars(review.rating)}
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 italic leading-relaxed">"{review.content}"</p>
              
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                <div className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs sm:text-sm text-gray-500">Verified Project</span>
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">
                  {review.platform} • {isClient ? (Math.floor((review.id * 7) % 12) + 1) : '0'}m ago
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Temporarily hidden
        <div className="mt-12 sm:mt-16 text-center">
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors">
            View All Testimonials
          </button>
        </div>
        */}
      </div>
    </section>
  );
};

export default Reviews;
