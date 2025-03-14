import { useEffect } from 'react';
import { animate } from 'motion';

const UtilityFeature = ({ title, items }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 utility-card">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      {items && (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-gray-300 flex items-center">
              <span className="mr-2">•</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Utility = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.utility-card');
    cards.forEach((card, index) => {
      animate(card, 
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.5, delay: index * 0.1 }
      );
    });
  }, []);

  const utilities = [
    {
      title: 'Calculators',
      items: [
        'Automatic Trending Game Popup',
        'Automatic Prestige Calculator',
        'XP Calculator'
      ]
    },
    {
      title: 'Reminders',
      items: [
        'Fishing Reminder',
        'Prestige Reminder',
        'Travel Reminder',
        'Boosted Bundles Reminder',
        'Farming Reminder',
        'Pet Feeding Reminder',
        'Giveaway Reminder',
        'Adventure Reminder'
      ]
    }
  ];

  return (
    <section id="utility" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Other Utility
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {utilities.map((utility, index) => (
            <UtilityFeature key={index} {...utility} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Utility;