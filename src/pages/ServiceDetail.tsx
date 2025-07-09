import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Star, Users, Target, Zap } from "lucide-react";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const serviceData: Record<string, any> = {
    "ai-consulting": {
      title: "AI Consulting",
      subtitle: "Strategic AI transformation for enterprise success",
      description: "Our AI consulting services help organizations navigate the complex landscape of artificial intelligence, from strategy development to implementation and optimization.",
      heroImage: "from-blue-500 to-cyan-500",
      problem: "Many organizations struggle to identify the right AI opportunities, develop effective strategies, and successfully implement AI solutions that deliver measurable business value.",
      solution: "Our experienced AI consultants work closely with your team to assess your current state, identify high-value AI opportunities, and develop a comprehensive roadmap for successful AI adoption.",
      process: [
        { step: 1, title: "Discovery & Assessment", description: "Comprehensive analysis of your current infrastructure, data assets, and business processes to identify AI opportunities." },
        { step: 2, title: "Strategy Development", description: "Create a tailored AI strategy aligned with your business objectives and technical capabilities." },
        { step: 3, title: "Proof of Concept", description: "Develop and test proof-of-concept solutions to validate feasibility and business value." },
        { step: 4, title: "Implementation Planning", description: "Detailed roadmap with timelines, resource requirements, and success metrics." },
        { step: 5, title: "Deployment & Support", description: "Guided implementation with ongoing support and optimization services." }
      ],
      technologies: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      testimonial: {
        quote: "The AI consulting team helped us identify and implement AI solutions that transformed our customer service operations, reducing response times by 70% and improving satisfaction scores significantly.",
        author: "Sarah Johnson",
        title: "CTO, TechCorp"
      }
    },
    "big-data-consulting": {
      title: "Big-Data Consulting",
      subtitle: "Unlock insights from your data ecosystem",
      description: "Transform massive datasets into actionable business insights with our comprehensive big data consulting and implementation services.",
      heroImage: "from-purple-500 to-pink-500",
      problem: "Organizations are drowning in data but struggling to extract meaningful insights due to complex data architectures, scalability challenges, and lack of analytical capabilities.",
      solution: "We design and implement scalable big data solutions that enable real-time analytics, improve decision-making, and drive business growth through data-driven insights.",
      process: [
        { step: 1, title: "Data Assessment", description: "Evaluate your current data landscape, sources, quality, and infrastructure requirements." },
        { step: 2, title: "Architecture Design", description: "Design scalable data architecture tailored to your specific needs and growth plans." },
        { step: 3, title: "Platform Implementation", description: "Deploy and configure big data platforms and analytics tools." },
        { step: 4, title: "Data Pipeline Setup", description: "Create automated data ingestion, processing, and analytics pipelines." },
        { step: 5, title: "Training & Optimization", description: "Team training and ongoing optimization to maximize value from your data investments." }
      ],
      technologies: ["Apache Spark", "Hadoop", "Kafka", "Elasticsearch", "Data Lakes", "Real-time Analytics"],
      testimonial: {
        quote: "Their big data solution enabled us to process customer data in real-time, leading to a 45% improvement in personalization and a 30% increase in customer engagement.",
        author: "Michael Chen",
        title: "VP of Data, DataFlow Inc"
      }
    },
    "generative-ai": {
      title: "Generative-AI Consulting",
      subtitle: "Harness the power of generative AI for innovation",
      description: "Leverage cutting-edge generative AI technologies to automate content creation, enhance customer experiences, and drive innovation across your organization.",
      heroImage: "from-orange to-red-500",
      problem: "Organizations want to leverage generative AI but face challenges in understanding use cases, ensuring quality outputs, and integrating these technologies into existing workflows.",
      solution: "Our generative AI experts help you identify the right use cases, implement custom solutions, and ensure responsible AI deployment that delivers tangible business value.",
      process: [
        { step: 1, title: "Use Case Identification", description: "Identify high-value generative AI opportunities across your organization." },
        { step: 2, title: "Technology Selection", description: "Choose the right generative AI models and platforms for your specific needs." },
        { step: 3, title: "Custom Development", description: "Develop and fine-tune custom generative AI solutions." },
        { step: 4, title: "Integration & Testing", description: "Integrate solutions into existing workflows with comprehensive testing." },
        { step: 5, title: "Monitoring & Optimization", description: "Continuous monitoring and optimization to ensure quality and performance." }
      ],
      technologies: ["Large Language Models", "GPT", "DALL-E", "Stable Diffusion", "Custom Fine-tuning", "Prompt Engineering"],
      testimonial: {
        quote: "The generative AI solution automated 80% of our content creation process while maintaining quality, freeing up our team to focus on strategic initiatives.",
        author: "Emily Rodriguez",
        title: "Marketing Director, Creative Solutions"
      }
    },
    "mlops": {
      title: "MLOps",
      subtitle: "Streamline machine learning operations",
      description: "Implement robust MLOps practices and infrastructure to accelerate model deployment, ensure reliability, and scale your machine learning initiatives.",
      heroImage: "from-green-500 to-emerald-500",
      problem: "Organizations struggle with model deployment, monitoring, and maintenance, leading to models that fail in production or become outdated quickly.",
      solution: "Our MLOps solutions establish automated pipelines, monitoring systems, and governance practices that ensure your ML models perform reliably at scale.",
      process: [
        { step: 1, title: "Current State Analysis", description: "Assess existing ML workflows, infrastructure, and operational practices." },
        { step: 2, title: "Pipeline Design", description: "Design automated ML pipelines for training, validation, and deployment." },
        { step: 3, title: "Infrastructure Setup", description: "Implement MLOps infrastructure with monitoring and governance capabilities." },
        { step: 4, title: "Model Deployment", description: "Deploy models with automated testing and rollback capabilities." },
        { step: 5, title: "Monitoring & Maintenance", description: "Establish ongoing monitoring and automated maintenance processes." }
      ],
      technologies: ["Kubernetes", "Docker", "MLflow", "Kubeflow", "CI/CD Pipelines", "Model Monitoring"],
      testimonial: {
        quote: "Their MLOps implementation reduced our model deployment time from weeks to hours and improved model reliability by 90%.",
        author: "David Kim",
        title: "Lead Data Scientist, AI Systems"
      }
    }
  };

  const service = serviceData[serviceId as string];

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold text-navy mb-4">Service Not Found</h1>
        <Link to="/services" className="text-orange hover:underline">Back to Services</Link>
      </div>
    );
  }

  const faqs = [
    {
      question: "How long does a typical implementation take?",
      answer: "Implementation timelines vary based on project scope and complexity. Most projects range from 3-12 months, with proof-of-concept phases typically completed within 4-8 weeks."
    },
    {
      question: "What level of technical expertise is required from our team?",
      answer: "We work with teams of all technical levels. Our consultants provide comprehensive training and documentation to ensure your team can effectively manage and maintain the solutions we implement."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "Security and compliance are built into every solution we deliver. We follow industry best practices, implement proper access controls, and ensure compliance with relevant regulations like GDPR, HIPAA, and SOC 2."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "We offer various support options including 24/7 monitoring, regular health checks, performance optimization, and dedicated support teams to ensure your solutions continue to perform optimally."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className={`py-20 bg-gradient-to-r ${service.heroImage} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4">
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-white/80">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li>/</li>
              <li className="text-white font-semibold">{service.title}</li>
            </ol>
          </nav>
          <div className="max-w-4xl">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {service.subtitle}
            </p>
            <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-3xl">
              {service.description}
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-orange hover:bg-orange-hover text-white rounded-full px-8 py-6 text-lg font-semibold tracking-wide uppercase shadow-button"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading font-bold text-3xl text-navy mb-6">The Challenge</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {service.problem}
              </p>
            </div>
            <div>
              <h2 className="font-heading font-bold text-3xl text-navy mb-6">Our Solution</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {service.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-navy mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful delivery and maximum value from your investment.
            </p>
          </div>

          <div className="space-y-8">
            {service.process.map((step: any, index: number) => (
              <div key={step.step} className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl text-navy mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl text-navy mb-6">Technologies We Use</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technologies and platforms to deliver robust, scalable solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {service.technologies.map((tech: string) => (
              <Badge key={tech} variant="secondary" className="px-6 py-3 text-base bg-orange/10 text-orange border-orange/20">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-0 bg-card shadow-card">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-orange fill-orange" />
                ))}
              </div>
              <blockquote className="text-xl text-muted-foreground italic mb-8 leading-relaxed">
                "{service.testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-navy text-lg">{service.testimonial.author}</p>
                <p className="text-muted-foreground">{service.testimonial.title}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-navy mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about our {service.title.toLowerCase()} services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-navy">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form CTA */}
      <section className="py-20 bg-gradient-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Get in touch with our experts to discuss your {service.title.toLowerCase()} needs and discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-orange hover:bg-orange-hover text-white rounded-full px-8 py-6 text-lg font-semibold tracking-wide uppercase shadow-button"
            >
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button 
              asChild 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-navy rounded-full px-8 py-6 text-lg font-semibold tracking-wide uppercase"
            >
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;