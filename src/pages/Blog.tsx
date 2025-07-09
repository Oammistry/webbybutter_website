import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: "ai-trends-2024",
      title: "Top AI Trends Transforming Industries in 2024",
      excerpt: "Explore the latest artificial intelligence trends that are reshaping business landscapes across different sectors.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI Trends",
      image: "from-blue-500 to-cyan-500",
      featured: true
    },
    {
      id: "data-governance-best-practices",
      title: "Data Governance Best Practices for Enterprise Success",
      excerpt: "Essential strategies for implementing effective data governance frameworks in large organizations.",
      author: "Michael Rodriguez",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Data Management",
      image: "from-purple-500 to-pink-500"
    },
    {
      id: "generative-ai-business-applications",
      title: "Practical Applications of Generative AI in Business",
      excerpt: "Real-world use cases and implementation strategies for generative AI across various business functions.",
      author: "Emily Johnson",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "Generative AI",
      image: "from-orange to-red-500"
    },
    {
      id: "mlops-implementation-guide",
      title: "Complete Guide to MLOps Implementation",
      excerpt: "Step-by-step approach to implementing MLOps practices for scalable machine learning operations.",
      author: "David Kim",
      date: "2024-01-05",
      readTime: "15 min read",
      category: "MLOps",
      image: "from-green-500 to-emerald-500"
    },
    {
      id: "ai-ethics-enterprise",
      title: "AI Ethics in Enterprise: Building Responsible AI Systems",
      excerpt: "Guidelines for developing and deploying ethical AI systems that build trust and ensure compliance.",
      author: "Dr. Lisa Wang",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "AI Ethics",
      image: "from-indigo-500 to-purple-500"
    },
    {
      id: "data-visualization-trends",
      title: "Modern Data Visualization Techniques for Better Insights",
      excerpt: "Advanced visualization techniques that transform complex data into actionable business insights.",
      author: "Alex Thompson",
      date: "2024-01-01",
      readTime: "7 min read",
      category: "Data Analytics",
      image: "from-teal-500 to-blue-500"
    }
  ];

  const categories = ["All", "AI Trends", "Data Management", "Generative AI", "MLOps", "AI Ethics", "Data Analytics"];
  
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="py-20">
      {/* Header */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-orange">Home</Link></li>
              <li className="text-muted-foreground">/</li>
              <li className="text-navy font-semibold">Blog</li>
            </ol>
          </nav>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-navy mb-6">Insights & Resources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights in AI and data science.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "ghost"}
                className={`rounded-full px-6 ${
                  category === "All" 
                    ? "bg-orange hover:bg-orange-hover text-white" 
                    : "text-navy hover:text-orange hover:bg-orange/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Badge className="bg-orange text-white">Featured</Badge>
            </div>
            <Card className="overflow-hidden border-0 shadow-card">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className={`bg-gradient-to-br ${featuredPost.image} p-12 flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <h2 className="font-heading font-bold text-3xl mb-4">{featuredPost.title}</h2>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {featuredPost.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-12">
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-navy">By {featuredPost.author}</p>
                    </div>
                    <Button asChild className="bg-orange hover:bg-orange-hover text-white rounded-full px-6">
                      <Link to={`/blog/${featuredPost.id}`} className="flex items-center space-x-2">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-card transition-all duration-300 border-0 bg-card overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${post.image} relative`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-navy">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy mb-3 group-hover:text-orange transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">By {post.author}</p>
                    <Button asChild variant="ghost" size="sm" className="text-orange hover:text-orange-hover p-0">
                      <Link to={`/blog/${post.id}`} className="flex items-center space-x-1">
                        <span>Read</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, trends, and best practices in AI and data science.
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border-0 focus:ring-2 focus:ring-orange"
            />
            <Button className="bg-orange hover:bg-orange-hover text-white rounded-full px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;