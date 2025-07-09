import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/webbybutter-600x110.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft py-3" : "bg-transparent py-6"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              {/* <div className="w-8 h-8 bg-gradient-to-br from-orange to-orange-hover rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span> 
              </div>
              <span className="font-heading font-bold text-xl text-navy">AI Data Solutions</span> */}
              <img 
                src={logo} 
                alt="Logo" 
                className="h-8 w-auto dark:invert transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-navy hover:text-orange transition-colors">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border border-border shadow-card">
                  <DropdownMenuItem asChild>
                    <Link to="/services/ai-consulting" className="w-full">AI Consulting</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/big-data-consulting" className="w-full">Big-Data Consulting</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/generative-ai" className="w-full">Generative-AI Consulting</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/mlops" className="w-full">MLOps</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-navy hover:text-orange transition-colors">
                  <span>Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border border-border shadow-card">
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/technologies" className="w-full">Technologies</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/solutions/industries" className="w-full">Industries</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-navy hover:text-orange transition-colors">
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border border-border shadow-card">
                  <DropdownMenuItem asChild>
                    <Link to="/blog" className="w-full">Blog</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/case-studies" className="w-full">Case Studies</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/whitepapers" className="w-full">White Papers</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/about" className="text-navy hover:text-orange transition-colors">
                About
              </Link>
              <Link to="/careers" className="text-navy hover:text-orange transition-colors">
                Careers
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <Button asChild className="bg-orange hover:bg-orange-hover text-white rounded-full px-6 shadow-button uppercase font-semibold tracking-wide">
                <Link to="/contact">Let's Talk</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-navy"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-6 pb-6 border-t border-border pt-6 animate-fade-in-up">
              <nav className="space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold text-navy">Services</p>
                  <div className="pl-4 space-y-2">
                    <Link to="/services/ai-consulting" className="block text-muted-foreground hover:text-orange">AI Consulting</Link>
                    <Link to="/services/big-data-consulting" className="block text-muted-foreground hover:text-orange">Big-Data Consulting</Link>
                    <Link to="/services/generative-ai" className="block text-muted-foreground hover:text-orange">Generative-AI Consulting</Link>
                    <Link to="/services/mlops" className="block text-muted-foreground hover:text-orange">MLOps</Link>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-navy">Solutions</p>
                  <div className="pl-4 space-y-2">
                    <Link to="/solutions/technologies" className="block text-muted-foreground hover:text-orange">Technologies</Link>
                    <Link to="/solutions/industries" className="block text-muted-foreground hover:text-orange">Industries</Link>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-navy">Resources</p>
                  <div className="pl-4 space-y-2">
                    <Link to="/blog" className="block text-muted-foreground hover:text-orange">Blog</Link>
                    <Link to="/case-studies" className="block text-muted-foreground hover:text-orange">Case Studies</Link>
                    <Link to="/whitepapers" className="block text-muted-foreground hover:text-orange">White Papers</Link>
                  </div>
                </div>
                <Link to="/about" className="block text-navy hover:text-orange font-semibold">About</Link>
                <Link to="/careers" className="block text-navy hover:text-orange font-semibold">Careers</Link>
                <Button asChild className="bg-orange hover:bg-orange-hover text-white rounded-full px-6 shadow-button uppercase font-semibold tracking-wide w-full">
                  <Link to="/contact">Let's Talk</Link>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-orange transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-orange transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-orange transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-orange transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services/ai-consulting" className="hover:text-orange transition-colors">AI Consulting</Link></li>
                <li><Link to="/services/big-data-consulting" className="hover:text-orange transition-colors">Big-Data Consulting</Link></li>
                <li><Link to="/services/generative-ai" className="hover:text-orange transition-colors">Generative-AI</Link></li>
                <li><Link to="/services/mlops" className="hover:text-orange transition-colors">MLOps</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><Link to="/solutions/technologies" className="hover:text-orange transition-colors">Technologies</Link></li>
                <li><Link to="/solutions/industries" className="hover:text-orange transition-colors">Industries</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/blog" className="hover:text-orange transition-colors">Blog</Link></li>
                <li><Link to="/case-studies" className="hover:text-orange transition-colors">Case Studies</Link></li>
                <li><Link to="/whitepapers" className="hover:text-orange transition-colors">White Papers</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70">© 2024 AI Data Solutions. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-white/70 hover:text-orange transition-colors">LinkedIn</a>
              <a href="#" className="text-white/70 hover:text-orange transition-colors">Twitter</a>
              <a href="#" className="text-white/70 hover:text-orange transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;