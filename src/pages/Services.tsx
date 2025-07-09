import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Brain, Database, Cpu, Cog, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "ai-consulting",
      title: "AI Consulting",
      description: "Strategic AI consulting to transform your business operations and drive innovation.",
      icon: Brain,
      features: ["AI Strategy Development", "Technology Assessment", "Implementation Roadmap", "Change Management"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "big-data-consulting",
      title: "Big-Data Consulting",
      description: "Harness the power of big data with advanced analytics and processing solutions.",
      icon: Database,
      features: ["Data Architecture", "Analytics Platforms", "Real-time Processing", "Data Governance"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "generative-ai",
      title: "Generative-AI Consulting",
      description: "Leverage generative AI to create content, automate processes, and drive innovation.",
      icon: Cpu,
      features: ["Custom Model Development", "Content Generation", "Process Automation", "Integration Services"],
      color: "from-orange to-red-500"
    },
    {
      id: "mlops",
      title: "MLOps",
      description: "Streamline your machine learning operations with robust MLOps practices and tools.",
      icon: Cog,
      features: ["Model Deployment", "Pipeline Automation", "Monitoring & Maintenance", "Performance Optimization"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="py-20">
      {/* Masthead Banner */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-orange">Home</Link></li>
              <li className="text-muted-foreground">/</li>
              <li className="text-navy font-semibold">Services</li>
            </ol>
          </nav>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-navy mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI and data solutions designed to accelerate your digital transformation and drive business growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={service.id} className="group hover:shadow-card transition-all duration-300 border-0 bg-card overflow-hidden">
                <CardContent className="p-0">
                  <div className={`h-32 bg-gradient-to-r ${service.color} relative`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-6 left-8">
                      <service.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-heading font-bold text-2xl text-navy mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold text-navy mb-4">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-orange flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      asChild 
                      className="bg-orange hover:bg-orange-hover text-white rounded-full px-6 shadow-button uppercase font-semibold tracking-wide group-hover:shadow-lg transition-all duration-300"
                    >
                      <Link to={`/services/${service.id}`} className="flex items-center space-x-2">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss which service is right for your organization and create a customized solution plan.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-orange hover:bg-orange-hover text-white rounded-full px-8 py-6 text-lg font-semibold tracking-wide uppercase shadow-button"
          >
            <Link to="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;