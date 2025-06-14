
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold">Village Assistant</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted companion for finding emergency services in unknown villages.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Theme:</span>
              <ThemeToggle />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/directory" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Directory
                </Link>
              </li>
              <li>
                <Link to="/add-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Add Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/emergency" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Emergency Help
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Languages
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">help@villageassistant.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-HELP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Village Assistant. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              Built with ❤️ for rural communities
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
