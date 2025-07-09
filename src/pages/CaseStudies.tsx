import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Database, Cpu, Users, Target, Zap } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "financial-transformation",
      title: "Financial Services Transformation",
      subtitle: "AI-Powered Risk Assessment & Fraud Detection",
      industry: "Financial Services",
      challenge: "Traditional fraud detection systems with high false positives and slow processing times",
      solution: "Implemented real-time ML-powered fraud detection with advanced risk assessment algorithms",
      results: {
        metrics: [
          { label: "Fraud Detection Speed", value: "80%", improvement: "faster" },
          { label: "Accuracy Improvement", value: "95%", improvement: "increase" },
          { label: "False Positives", value: "60%", improvement: "reduction" },
          { label: "Cost Savings", value: "$2.4M", improvement: "annually" }
        ]
      },
      technologies: ["Machine Learning", "Real-time Analytics", "Python", "TensorFlow", "Apache Kafka"],
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: "healthcare-analytics",
      title: "Healthcare Data Analytics Platform",
      subtitle: "Comprehensive Patient Data Intelligence System",
      industry: "Healthcare",
      challenge: "Fragmented patient data across multiple systems hindering diagnosis accuracy and treatment efficiency",
      solution: "Built unified healthcare data platform with predictive analytics and real-time patient monitoring",
      results: {
        metrics: [
          { label: "Diagnosis Accuracy", value: "40%", improvement: "improvement" },
          { label: "Treatment Costs", value: "30%", improvement: "reduction" },
          { label: "Patient Satisfaction", value: "85%", improvement: "increase" },
          { label: "Response Time", value: "50%", improvement: "faster" }
        ]
      },
      technologies: ["Big Data Analytics", "FHIR", "Apache Spark", "Elasticsearch", "React"],
      icon: Database,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: "manufacturing-optimization",
      title: "Smart Manufacturing Optimization",
      subtitle: "IoT & AI-Driven Production Excellence",
      industry: "Manufacturing",
      challenge: "Frequent equipment downtime and suboptimal production efficiency leading to significant revenue loss",
      solution: "Deployed IoT sensors with AI-powered predictive maintenance and production optimization algorithms",
      results: {
        metrics: [
          { label: "Production Efficiency", value: "60%", improvement: "increase" },
          { label: "Equipment Downtime", value: "75%", improvement: "reduction" },
          { label: "Maintenance Costs", value: "45%", improvement: "savings" },
          { label: "Product Quality", value: "35%", improvement: "improvement" }
        ]
      },
      technologies: ["IoT", "Predictive Analytics", "Edge Computing", "Azure IoT", "Power BI"],
      icon: Cpu,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: "retail-personalization",
      title: "Retail Personalization Engine",
      subtitle: "AI-Driven Customer Experience Optimization",
      industry: "Retail",
      challenge: "Low customer engagement and conversion rates due to generic product recommendations",
      solution: "Implemented advanced recommendation engine with real-time personalization and customer behavior analytics",
      results: {
        metrics: [
          { label: "Customer Engagement", value: "70%", improvement: "increase" },
          { label: "Conversion Rate", value: "45%", improvement: "boost" },
          { label: "Average Order Value", value: "35%", improvement: "growth" },
          { label: "Customer Retention", value: "55%", improvement: "improvement" }
        ]
      },
      technologies: ["Recommendation Systems", "Real-time Analytics", "AWS", "Python", "React"],
      icon: Users,
      gradient: "from-orange to-red-500"
    },
    {
      id: "supply-chain-optimization",
      title: "Supply Chain Intelligence Platform",
      subtitle: "End-to-End Supply Chain Visibility & Optimization",
      industry: "Logistics",
      challenge: "Limited supply chain visibility leading to inefficient inventory management and delayed deliveries",
      solution: "Created comprehensive supply chain analytics platform with predictive demand forecasting and route optimization",
      results: {
        metrics: [
          { label: "Delivery Time", value: "40%", improvement: "reduction" },
          { label: "Inventory Costs", value: "25%", improvement: "savings" },
          { label: "Supply Chain Visibility", value: "90%", improvement: "improvement" },
          { label: "Customer Satisfaction", value: "50%", improvement: "increase" }
        ]
      },
      technologies: ["Supply Chain Analytics", "Machine Learning", "Google Cloud", "Kubernetes", "Tableau"],
      icon: Target,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: "energy-optimization",
      title: "Smart Energy Management System",
      subtitle: "AI-Powered Energy Efficiency & Cost Optimization",
      industry: "Energy",
      challenge: "High energy costs and inefficient energy usage patterns across multiple facilities",
      solution: "Deployed smart energy management system with AI-driven optimization and automated control systems",
      results: {
        metrics: [
          { label: "Energy Costs", value: "35%", improvement: "reduction" },
          { label: "Energy Efficiency", value: "50%", improvement: "improvement" },
          { label: "Carbon Footprint", value: "40%", improvement: "reduction" },
          { label: "ROI Achievement", value: "18", improvement: "months" }
        ]
      },
      technologies: ["IoT", "AI Optimization", "Smart Meters", "Azure", "Power BI"],
      icon: Zap,
      gradient: "from-yellow-500 to-orange"
    }
  ];

  return (
    <div className="py-20">
      {/* Header */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-orange">Home</Link></li>
              <li className="text-muted-foreground">/</li>
              <li className="text-navy font-semibold">Case Studies</li>
            </ol>
          </nav>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-navy mb-6">Success Stories</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped leading organizations transform their businesses with innovative AI and data solutions.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="overflow-hidden border-0 shadow-card">
                <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'}`}>
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <CardContent className="p-12">
                      <div className="flex items-center space-x-4 mb-6">
                        <Badge className="bg-orange/10 text-orange border-orange/20">
                          {study.industry}
                        </Badge>
                        <Badge variant="outline" className="border-navy/20 text-navy">
                          Case Study
                        </Badge>
                      </div>
                      
                      <h2 className="font-heading font-bold text-3xl text-navy mb-3">
                        {study.title}
                      </h2>
                      <p className="text-xl text-orange mb-8">{study.subtitle}</p>
                      
                      <div className="space-y-6 mb-8">
                        <div>
                          <h3 className="font-semibold text-navy mb-2">Challenge</h3>
                          <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-navy mb-2">Solution</h3>
                          <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {study.results.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center p-4 bg-secondary/30 rounded-lg">
                            <p className="font-bold text-2xl text-orange mb-1">{metric.value}</p>
                            <p className="text-xs text-muted-foreground">{metric.improvement}</p>
                            <p className="text-sm font-medium text-navy">{metric.label}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mb-8">
                        <h3 className="font-semibold text-navy mb-3">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button asChild className="bg-orange hover:bg-orange-hover text-white rounded-full px-6">
                        <Link to={`/case-studies/${study.id}`} className="flex items-center space-x-2">
                          <span>Read Full Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>

                  {/* Visual */}
                  <div className={`bg-gradient-to-br ${study.gradient} p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="text-center text-white">
                      <study.icon className="w-24 h-24 mx-auto mb-6 opacity-90" />
                      <h3 className="font-heading font-bold text-2xl">{study.industry}</h3>
                      <p className="text-white/80 mt-2">Transformation</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-6">
            Ready to create your success story?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with innovative AI and data solutions tailored to your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-orange hover:bg-orange-hover text-white rounded-full px-8 py-6 text-lg font-semibold tracking-wide uppercase shadow-button"
            >
              <Link to="/contact">Start Your Transformation</Link>
            </Button>
            <Button 
              asChild 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-navy rounded-full px-8 py-6 text-lg font-semibold tracking-wide uppercase"
            >
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;