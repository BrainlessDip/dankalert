import { useEffect, useState } from 'react';
import { animate } from 'motion';

const StatCard = ({ title, value, className = '' }) => (
  <div className={`bg-gray-800 rounded-lg p-6 text-center ${className}`}>
    <h3 className="text-lg text-gray-300 mb-2">{title}</h3>
    <p className="text-3xl font-bold text-white stat-value">{value}</p>
  </div>
);

const Stats = () => {
  const [stats, setStats] = useState(null);
  const [uptime, setUptime] = useState('');

  useEffect(() => {
    fetch('https://54254.site.bot-hosting.net/api/stats')
      .then(response => response.json())
      .then(data => {
        setStats(data);
        // Initialize uptime
        setUptime(calculateUptime(data.timestamp));
        
        const elements = document.querySelectorAll('.stat-value');
        elements.forEach(element => {
          // Skip animation for uptime which is already formatted
          if (element.parentElement.querySelector('h3').textContent === 'Uptime') return;
          
          const value = parseInt(element.textContent.replace(/[^0-9]/g, ''));
          animate(element, { innerHTML: [0, value] }, {
            duration: 1.5,
            easing: 'ease-out',
            onUpdate: latest => {
              element.textContent = latest.toLocaleString();
            }
          });
        });
      });
  }, []);

  // Update uptime every second
  useEffect(() => {
    if (!stats) return;
    
    const timer = setInterval(() => {
      setUptime(calculateUptime(stats.timestamp));
    }, 1000);
    
    return () => clearInterval(timer);
  }, [stats]);

  if (!stats) return null;

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(2)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(2)}K`;
    return num.toLocaleString();
  };

  const calculateUptime = (timestamp) => {
    const now = Math.floor(Date.now() / 1000);
    const diff = now - timestamp;
    const days = Math.floor(diff / 86400);
    const hours = Math.floor((diff % 86400) / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = diff % 60;
    return `${days}d:${hours}h:${minutes}m:${seconds}s`;
  };

  return (
    <section id="stats" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Stats
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <StatCard title="Total Servers" value={stats.guilds.toLocaleString()} />
          <StatCard title="Total Users" value={stats.users.toLocaleString()} />
          <StatCard title="Uptime" value={uptime} />
        </div>

        <h3 className="text-2xl font-bold text-white mb-8 text-center">Bot Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Global XP Boost Detected" value={formatNumber(stats.totalGlobal)} />
          <StatCard title="Scratch Detected" value={formatNumber(stats.totalScratch)} />
          <StatCard title="Fishing Event Detected" value={formatNumber(stats.totalFishEvent)} />
          <StatCard title="Fishing Reminder" value={formatNumber(stats.totalFishingReminder)} />
        </div>
      </div>
    </section>
  );
};

export default Stats;