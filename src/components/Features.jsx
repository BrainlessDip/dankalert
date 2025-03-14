import { useEffect } from 'react';
import { animate } from 'motion';

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
      <div className="w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
      animate(card, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, delay: index * 0.1 });
    });
  }, []);

  const features = [
    {
      title: 'Fishing Reminder',
      description: 'Notifies users when it\'s time to fish again in Dank Memer by reaction, saving them time and preventing button spamming',
      image: '/src/assets/fishing-reminder.jpg'
    },
    {
      title: 'Scratch Notifier',
      description: 'Alerts users about scratch events, ensuring they never miss out on opportunities to participate and potentially win rewards',
      image: '/src/assets/scratch-notifier.jpg'
    },
    {
      title: 'Global Boost Notifier',
      description: 'Notifies users about global boosts in Dank Memer, keeping them updated on any enhancements to their gaming experience',
      image: '/src/assets/global-boost-notifier.jpg'
    },
    {
      title: 'Fishing Event Notifier',
      description: 'Informs users about upcoming fishing events in Dank Memer, allowing them to prepare and participate for a chance to earn rewards or compete',
      image: '/src/assets/fishing-event-notifier.jpg'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-full mx-auto px-5 sm:px-10 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;