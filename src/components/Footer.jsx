import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left space-y-4">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Dank Alert. All rights reserved.</p>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-gray-400">This website is made by</span>
              <a
                href="https://github.com/plabewe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                Plabew
                <FaGithub className="text-lg" />
              </a>
            </div>
          </div>
          <div className="text-center space-x-6">
            <a
              href="https://discord.gg/your-invite-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Join Support Server
            </a>
          </div>
          <div className="text-center md:text-right">
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors mr-6">
              Terms of Service
            </a>
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;