import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="py-20">
      {/* Header */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-orange">Home</Link></li>
              <li className="text-muted-foreground">/</li>
              <li className="text-navy font-semibold">Contact</li>
            </ol>
          </nav>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-navy mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with AI and data solutions? Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-3xl text-navy mb-8">Let's start a conversation</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We're here to help you navigate your AI and data transformation journey. Reach out to discuss your challenges and discover tailored solutions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Office Location</h3>
                    <p className="text-muted-foreground">
                      123 AI Innovation Drive<br />
                      Silicon Valley, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@aidatasolutions.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday: 10:00 AM - 2:00 PM PST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Live Chat Widget Stub */}
              <Card className="border-2 border-orange/20 bg-orange/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-navy mb-2">Need immediate assistance?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Chat with our AI specialists for quick answers to your questions.
                  </p>
                  <Button className="bg-orange hover:bg-orange-hover text-white rounded-full w-full">
                    Start Live Chat
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-card">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Your company name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ai-consulting">AI Consulting</SelectItem>
                            <SelectItem value="big-data">Big-Data Consulting</SelectItem>
                            <SelectItem value="generative-ai">Generative-AI Consulting</SelectItem>
                            <SelectItem value="mlops">MLOps</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Description *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your project, challenges, and goals. The more details you provide, the better we can assist you."
                        rows={6}
                        required
                      />
                    </div>

                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        By submitting this form, you agree to our privacy policy and consent to be contacted by our team. 
                        We'll only use your information to respond to your inquiry and provide relevant updates about our services.
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="bg-orange hover:bg-orange-hover text-white rounded-full px-8 py-6 text-lg font-semibold tracking-wide uppercase shadow-button w-full md:w-auto"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden border-0 shadow-card">
            <div className="h-96 bg-gradient-to-br from-navy/20 to-orange/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-orange mx-auto mb-4" />
                <h3 className="font-heading font-bold text-2xl text-navy mb-2">Find Us Here</h3>
                <p className="text-muted-foreground">
                  Located in the heart of Silicon Valley's innovation district
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-navy mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick answers to common questions about our services and engagement process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 bg-card shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-navy mb-3">How quickly can we start a project?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We can typically begin initial consultations within 1-2 weeks. Project kickoff depends on scope and requirements, usually within 2-4 weeks after agreement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-navy mb-3">What's included in a consultation?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our consultations include needs assessment, technology recommendations, project scoping, timeline estimation, and a detailed proposal with pricing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-navy mb-3">Do you work with startups?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Yes! We work with organizations of all sizes, from startups to Fortune 500 companies. We offer flexible engagement models to fit different budgets and needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-navy mb-3">What industries do you serve?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We serve healthcare, financial services, manufacturing, retail, logistics, energy, and many other industries with specialized AI and data solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;