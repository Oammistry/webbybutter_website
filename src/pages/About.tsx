import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Users, Target, Award, Globe, Brain, Database, Cpu, Zap, CheckCircle, ArrowRight } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      expertise: "AI Strategy, Machine Learning",
      experience: "15+ years",
      image: "from-blue-500 to-cyan-500"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      expertise: "Big Data, Cloud Architecture",
      experience: "12+ years",
      image: "from-purple-500 to-pink-500"
    },
    {
      name: "Emily Johnson",
      role: "VP of AI Solutions",
      expertise: "Generative AI, NLP",
      experience: "10+ years",
      image: "from-orange to-red-500"
    },
    {
      name: "David Kim",
      role: "VP of Data Engineering",
      expertise: "MLOps, Data Platforms",
      experience: "11+ years",
      image: "from-green-500 to-emerald-500"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We stay at the forefront of AI and data science, continuously exploring new technologies and methodologies to deliver cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering solutions that drive measurable business value and long-term growth."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do, from initial consultation to final implementation and ongoing support."
    },
    {
      icon: Globe,
      title: "Ethical AI",
      description: "We believe in responsible AI development that respects privacy, ensures fairness, and creates positive impact for society."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Enterprise Clients" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "12", label: "Years Experience" }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional",
    "Microsoft Azure AI Engineer",
    "Certified Analytics Professional",
    "Kubernetes Certified Application Developer",
    "Certified Ethical Hacker"
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
              <li className="text-navy font-semibold">About</li>
            </ol>
          </nav>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-navy mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a team of AI and data science experts passionate about helping organizations transform their businesses through intelligent technology solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl text-navy mb-8">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To democratize AI and data science by making advanced technologies accessible to organizations of all sizes. 
                We believe that every business should be able to harness the power of artificial intelligence to drive growth, 
                efficiency, and innovation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to bridge the gap between cutting-edge AI research and practical business applications, 
                ensuring that our clients not only adopt AI technologies but truly understand and maximize their value.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange/20 to-navy/20 rounded-2xl p-12 text-center">
              <Brain className="w-24 h-24 text-orange mx-auto mb-6" />
              <h3 className="font-heading font-bold text-2xl text-navy mb-4">Empowering Intelligence</h3>
              <p className="text-muted-foreground">
                Transforming businesses through AI-driven innovation and data-powered insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading font-bold text-4xl md:text-5xl text-orange mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-navy mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 bg-card shadow-soft hover:shadow-card transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-orange" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-navy mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-navy mb-6">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced leaders driving our vision and ensuring exceptional delivery for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 bg-card shadow-soft hover:shadow-card transition-all duration-300">
                <CardContent className="p-0">
                  <div className={`h-48 bg-gradient-to-br ${member.image} rounded-t-lg`}></div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-lg text-navy mb-1">{member.name}</h3>
                    <p className="text-orange font-medium mb-3">{member.role}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Expertise:</span>
                        <span className="text-navy font-medium">{member.expertise}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Experience:</span>
                        <span className="text-navy font-medium">{member.experience}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading font-bold text-4xl text-navy mb-8">Our Expertise</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Artificial Intelligence</h3>
                    <p className="text-muted-foreground">Machine learning, deep learning, natural language processing, and computer vision solutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Big Data Analytics</h3>
                    <p className="text-muted-foreground">Scalable data processing, real-time analytics, and comprehensive business intelligence platforms.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Cloud & Infrastructure</h3>
                    <p className="text-muted-foreground">Multi-cloud deployments, containerization, and scalable infrastructure design.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">MLOps & DevOps</h3>
                    <p className="text-muted-foreground">Automated CI/CD pipelines, model deployment, monitoring, and maintenance systems.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading font-bold text-4xl text-navy mb-8">Certifications</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our team maintains industry-leading certifications to ensure we're always working with the latest technologies and best practices.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg">
                    <Award className="w-5 h-5 text-orange flex-shrink-0" />
                    <span className="text-navy font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-20 bg-gradient-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion for AI and data science. 
            Join us in shaping the future of intelligent business solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-orange hover:bg-orange-hover text-white rounded-full px-8 py-6 text-lg font-semibold tracking-wide uppercase shadow-button"
            >
              <Link to="/careers">View Open Positions</Link>
            </Button>
            <Button 
              asChild 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-navy rounded-full px-8 py-6 text-lg font-semibold tracking-wide uppercase"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;