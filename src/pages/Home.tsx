import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Database, Cpu, ChevronRight, Star, Users, Target, Zap, Shield, TrendingUp, Globe, MessageCircle } from "lucide-react";
import { useEffect, useRef } from "react";
// import heroImage from "@/assets/hero-bg.jpg";
// import heroVideo from "@/assets/herovideo.mp4";

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const splineRef = useRef<any>(null);

  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.24/build/spline-viewer.js';
    
    // Add mouse interaction for Spline viewer
    script.onload = () => {
      setTimeout(() => {
        const splineViewer = document.querySelector('spline-viewer');
        if (splineViewer) {
          const handleSplineMouseMove = (e: MouseEvent) => {
            const rect = splineViewer.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            // Send mouse position to Spline viewer
            splineViewer.dispatchEvent(new CustomEvent('mousemove', {
              detail: { x, y }
            }));
          };

          splineViewer.addEventListener('mousemove', handleSplineMouseMove);
        }
      }, 1000); // Wait for Spline to fully load
    };
    
    document.head.appendChild(script);


    // Canvas animation code
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Sphere parameters
    const POINTS = 1200; // Number of dots
    const RADIUS = Math.min(window.innerWidth, window.innerHeight) * 0.25;
    let spherePoints: { x: number; y: number; z: number }[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let rotX = 0;
    let rotY = 0;

    // Generate points on a sphere
    function createSpherePoints() {
      spherePoints = [];
      for (let i = 0; i < POINTS; i++) {
        const phi = Math.acos(-1 + (2 * i) / POINTS);
        const theta = Math.sqrt(POINTS * Math.PI) * phi;
        spherePoints.push({
          x: RADIUS * Math.cos(theta) * Math.sin(phi),
          y: RADIUS * Math.sin(theta) * Math.sin(phi),
          z: RADIUS * Math.cos(phi),
        });
      }
    }
    createSpherePoints();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth * 0.75;
      const cy = window.innerHeight / 2;
      mouseX = (e.clientX - cx) / (window.innerWidth / 2);
      mouseY = (e.clientY - cy) / (window.innerHeight / 2);
      targetRotY = mouseX * Math.PI * 0.5;
      targetRotX = mouseY * Math.PI * 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Smooth rotation
      rotX += (targetRotX - rotX) * 0.08;
      rotY += (targetRotY - rotY) * 0.08;

      // Draw points
      for (const p of spherePoints) {
        // 3D rotation
        let x = p.x;
        let y = p.y * Math.cos(rotX) - p.z * Math.sin(rotX);
        let z = p.y * Math.sin(rotX) + p.z * Math.cos(rotX);
        let x2 = x * Math.cos(rotY) - z * Math.sin(rotY);
        let z2 = x * Math.sin(rotY) + z * Math.cos(rotY);

        // Perspective projection
        const scale = 0.7 * RADIUS / (RADIUS + z2) + 0.3;
        const px = canvas.width * 0.75 + x2 * scale;
        const py = canvas.height / 2 + y * scale;

        // Draw dot
        ctx.beginPath();
        ctx.arc(px, py, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.globalAlpha = 0.8;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Add mouse interaction for Spline viewer
  useEffect(() => {
    const handleSplineMouseMove = (e: MouseEvent) => {
      const splineViewer = document.querySelector('spline-viewer');
      if (splineViewer) {
        const rect = splineViewer.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        // Send mouse position to Spline viewer
        splineViewer.dispatchEvent(new CustomEvent('mousemove', {
          detail: { x, y }
        }));
      }
    };

    // Add event listener after a delay to ensure Spline is loaded
    const timer = setTimeout(() => {
      document.addEventListener('mousemove', handleSplineMouseMove);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousemove', handleSplineMouseMove);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[83vh] flex items-center bg-black">
        {/* <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        /> */}
        <div className="absolute right-[-100px] w-[50%] h-full hidden md:block">
          <spline-viewer
            ref={splineRef}
            url="https://prod.spline.design/doOi75ohuAVFpwBU/scene.splinecode"
            events-target="global" />
        </div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        />
        {/* <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        /> */}
        <div className="absolute inset-0 bg-gradient-to-br" />
                   {/* Bottom Left Black Box */}
          <div className="absolute bottom-0 left-0 z-20 backdrop-blur-sm pt-6 pb-6 max-w-4xl hidden md:block bg-gradient-to-r from-zink-500 from-10% via-zinc-500 via-30% to-zinc-90 to-55%">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white px-4">
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-lg">AI Consulting</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Discover AI's practical advantages with custom solutions
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-lg">Generative AI</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Adapt cutting-edge Generative AI to your business needs
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-lg">Big Data Consulting</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Transform your data into actionable business insights
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-1/1 px-8 text-left animate-fade-in-up z-10 bottom-[70px]">
          <h1 className="font-heading font-bold text-3xl md:text-6xl lg:text-6xl text-gray-500 mb-6 leading-tight">
            <span className="text-white">Software Development</span><br /> 
            to Help you Scale Innovation
          </h1>
          <p className="text-l md:text-[19px] text-muted-foreground mb-6 max-w-3xl leading-relaxed text-gray-500">
          Webbybutter is a distinguished custom web & mobile app application development company that caters to various industries and also the vast range of business desires.          </p>
          <div className="flex flex-row gap-3 md:gap-6 justify-start items-center">
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="bg-[] hover:bg-blue-hover text-gray-500 group border-2 border-[#1b2d9f] rounded-s-lg px-6 py-6 text-[9px] md:text-l font-semibold tracking-wide uppercase shadow-soft transition-all duration-300"
            >
              <Link to="/case-studies" className="flex items-center space-x-2">
                <span>Read case studies</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              className="bg-[#1b2d9f] hover:bg-blue-hover text-white rounded-s-lg px-6 py-6 text-[9px] md:text-l font-semibold tracking-wide uppercase shadow-button transition-all duration-300"
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Let's talk</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-6">Why We're Leading The App Development Firm</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-card transition-all duration-300 border-0 bg-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange/20 transition-colors">
                  <TrendingUp className="w-8 h-8 text-orange" />
                </div>
                <h3 className="font-heading font-bold text-4xl text-navy mb-2">300+</h3>
                <p className="text-muted-foreground font-medium">AI Projects Delivered</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-all duration-300 border-0 bg-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange/20 transition-colors">
                  <Star className="w-8 h-8 text-orange" />
                </div>
                <h3 className="font-heading font-bold text-4xl text-navy mb-2">6+</h3>
                <p className="text-muted-foreground font-medium">Years Of Experience</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-all duration-300 border-0 bg-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange/20 transition-colors">
                  <Zap className="w-8 h-8 text-orange" />
                </div>
                <h3 className="font-heading font-bold text-4xl text-navy mb-2">150K+</h3>
                <p className="text-muted-foreground font-medium">Hours Of Innovation</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-all duration-300 border-0 bg-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange/20 transition-colors">
                  <Users className="w-8 h-8 text-orange" />
                </div>
                <h3 className="font-heading font-bold text-4xl text-navy mb-2">380+</h3>
                <p className="text-muted-foreground font-medium">Satisfied Clients</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Teasers */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-6">We transform your idea into reality</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-card transition-all duration-300 animate-fade-in-up border-0 bg-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange/20 transition-colors">
                  <Globe className="w-8 h-8 text-orange" />
                </div>
                <h3 className="font-heading font-bold text-xl text-navy mb-4">Connect you to the world</h3>
                <p className="text-muted-foreground leading-relaxed">
                Work with top tech talent with company experience from all over the world and different time zones.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-all duration-300 animate-fade-in-up border-0 bg-card" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange/20 transition-colors">
                  <Users className="w-8 h-8 text-orange" />
                </div>
                <h3 className="font-heading font-bold text-xl text-navy mb-4">On-Demand World-Class Full-Stack Product Team</h3>
                <p className="text-muted-foreground leading-relaxed">
                Our teams can efficiently design, build, ship, and scale your idea to make it a reality.                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-all duration-300 animate-fade-in-up border-0 bg-card" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange/20 transition-colors">
                <MessageCircle className="w-8 h-8 text-orange" />
                </div>
                <h3 className="font-heading font-bold text-xl text-navy mb-4">Communicate your brand story </h3>
                <p className="text-muted-foreground leading-relaxed">
                The most rapidly expanding digital product agency</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-center text-navy mb-12">Trusted by industry leaders</h2>
          <div className="relative overflow-hidden">
            <div className="flex animate-float space-x-12 justify-center items-center opacity-60">
              {/* Placeholder tech company logos */}
              <div className="flex-shrink-0 w-32 h-16 bg-navy/10 rounded-lg flex items-center justify-center">
                <span className="font-bold text-navy">TechCorp</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-navy/10 rounded-lg flex items-center justify-center">
                <span className="font-bold text-navy">DataFlow</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-navy/10 rounded-lg flex items-center justify-center">
                <span className="font-bold text-navy">AI Systems</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-navy/10 rounded-lg flex items-center justify-center">
                <span className="font-bold text-navy">CloudTech</span>
              </div>
              <div className="flex-shrink-0 w-32 h-16 bg-navy/10 rounded-lg flex items-center justify-center">
                <span className="font-bold text-navy">Innovate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-6">Core capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive suite of AI and data services designed to accelerate your digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-card transition-all duration-300 border-0 bg-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-navy mb-3">Strategic AI Planning</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Develop comprehensive AI strategies aligned with your business objectives. Our experts help you identify opportunities, assess readiness, and create roadmaps for successful AI adoption across your organization.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-all duration-300 border-0 bg-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-navy mb-3">Real-time Analytics</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Transform your data into actionable insights with our advanced real-time analytics platforms. Monitor, analyze, and respond to business events as they happen with intelligent dashboards and automated alerts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-all duration-300 border-0 bg-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-navy mb-3">Secure AI Infrastructure</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Build robust, secure, and scalable AI infrastructure that meets enterprise standards. Our solutions ensure data privacy, regulatory compliance, and seamless integration with existing systems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-all duration-300 border-0 bg-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-navy mb-3">Performance Optimization</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Maximize the ROI of your AI investments with continuous monitoring, optimization, and improvement services. We ensure your models perform at peak efficiency and adapt to changing business needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-all duration-300 border-0 bg-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-navy mb-3">Team Training & Support</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Empower your team with comprehensive training programs and ongoing support. We provide hands-on workshops, certification courses, and dedicated support to ensure successful AI adoption.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-all duration-300 border-0 bg-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-navy mb-3">Custom AI Solutions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Develop bespoke AI solutions tailored to your specific industry challenges and business requirements. From proof of concept to full-scale deployment, we deliver solutions that drive results.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Stories Slider */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-6">Customer stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped leading organizations transform their businesses with AI and data solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-card transition-all duration-300 border-0 bg-card">
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-orange/20 to-orange/5 rounded-lg mb-6 flex items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-orange" />
                </div>
                <h3 className="font-heading font-bold text-xl text-navy mb-4">Financial Services Transformation</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Implemented ML-powered risk assessment system that reduced fraud detection time by 80% and improved accuracy by 95%.
                </p>
                <Button asChild variant="ghost" className="text-orange hover:text-orange-hover p-0">
                  <Link to="/case-studies/financial-transformation" className="flex items-center space-x-2">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-all duration-300 border-0 bg-card">
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-orange/20 to-orange/5 rounded-lg mb-6 flex items-center justify-center">
                  <Database className="w-12 h-12 text-orange" />
                </div>
                <h3 className="font-heading font-bold text-xl text-navy mb-4">Healthcare Data Analytics</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Built comprehensive patient data platform that improved diagnosis accuracy by 40% and reduced treatment costs by 30%.
                </p>
                <Button asChild variant="ghost" className="text-orange hover:text-orange-hover p-0">
                  <Link to="/case-studies/healthcare-analytics" className="flex items-center space-x-2">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-all duration-300 border-0 bg-card">
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-orange/20 to-orange/5 rounded-lg mb-6 flex items-center justify-center">
                  <Cpu className="w-12 h-12 text-orange" />
                </div>
                <h3 className="font-heading font-bold text-xl text-navy mb-4">Manufacturing Optimization</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Deployed IoT and AI solution that increased production efficiency by 60% and reduced downtime by 75%.
                </p>
                <Button asChild variant="ghost" className="text-orange hover:text-orange-hover p-0">
                  <Link to="/case-studies/manufacturing-optimization" className="flex items-center space-x-2">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global CTA Banner */}
      <section className="py-20 bg-gradient-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Let's discuss how our AI and data solutions can drive growth, efficiency, and innovation for your organization.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-orange hover:bg-orange-hover text-white rounded-full px-8 py-6 text-lg font-semibold tracking-wide uppercase shadow-button transition-all duration-300"
          >
            <Link to="/contact" className="flex items-center space-x-2">
              <span>Start your transformation</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;