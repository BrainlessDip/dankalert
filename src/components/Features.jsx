import { useEffect, useState } from 'react';
import { animate } from 'motion';

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
      <div className="w-full">
        <img src={image} alt={title} className="w-full h-full object-cover object-center" />
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 flex-grow">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await fetch('https://54254.site.bot-hosting.net/api/features');
        if (!response.ok) {
          throw new Error('Failed to fetch features');
        }
        const data = await response.json();
        setFeatures(data.map(feature => ({
          title: feature.name,
          description: feature.description,
          image: feature.imageURL
        })));
        setLoading(false);
      } catch (err) {
        console.error('Error fetching features:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  useEffect(() => {
    if (!loading) {
      const cards = document.querySelectorAll('.feature-card');
      cards.forEach((card, index) => {
        animate(card, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, delay: index * 0.1 });
      });
    }
  }, [loading]);

  if (loading) {
    return (
      <section id="features" className="py-20 bg-gray-900">
        <div className="max-w-full mx-auto px-5 sm:px-10 lg:px-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Features
          </h2>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="features" className="py-20 bg-gray-900">
        <div className="max-w-full mx-auto px-5 sm:px-10 lg:px-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Features
          </h2>
          <div className="text-center text-red-500">
            <p>Error loading features: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="w-full mx-auto px-10 sm:px-20 lg:px-50">
        <h2 className="text-4xl font-bold text-center text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card h-full">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;