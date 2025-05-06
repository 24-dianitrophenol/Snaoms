import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, GraduationCap as Graduation } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-600 text-white">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-2 rounded-full shadow flex items-center justify-center w-14 h-14">
                <img src="images/logo.png" alt="School Logo" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="font-display font-bold text-xl">Snoams</h3>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-gray-200">
            The school was founded in 1993 by the Christians of Njeru-Nile sub-parish in Mbikko parish with the help of Mil Hill missionaries who run the Mbikko parish. It was founded with the aim of enhancing spiritual, moral, intellectual growth and social growth and development as well as uniting the community of the area.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="inline-block py-1 hover:text-accent-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="inline-block py-1 hover:text-accent-300 transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="inline-block py-1 hover:text-accent-300 transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/school-life" className="inline-block py-1 hover:text-accent-300 transition-colors">
                  School Life
                </Link>
              </li>
              <li>
                <Link to="/alumni" className="inline-block py-1 hover:text-accent-300 transition-colors">
                  Alumni
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-block py-1 hover:text-accent-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Mbikko Parish, Njeru-Buikwe District, Uganda</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+256 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>info@stnoamawagali.edu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent-400">Newsletter</h3>
            <p className="mb-3 text-sm">Subscribe to our newsletter for updates on school events and news.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <button
                type="submit"
                className="w-full bg-accent-500 hover:bg-accent-600 py-2 px-4 rounded transition-colors duration-300 font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-300">
          <p>&copy; {currentYear} St. Noa Mawagali S.S.S. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-accent-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent-300 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;