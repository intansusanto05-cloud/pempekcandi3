import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Check, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock, Users, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/Logo.png";
import kitchenImage from "@/assets/Logo.png";
import kitchenimage from "@/assets/kitchenimage.jpg";
import familyImg from "@/assets/family-package.jpg";
import customImg from "@/assets/custom-package.jpg";
import partyImg from "@/assets/party-package.jpg";
import businessImg from "@/assets/business-package.jpg";
import specialImg from "@/assets/special-package.jpg";
const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const pricingTiers = [
    {
      title: "Family Package",
      image: familyImg,
      price: "Rp 30,000",
      description: "Perfect for the whole family’s satisfaction ",
      features: [
        "8 pieces mixed pempek",
        "100 ml cuko",
        "Cucumber garnish",
      ],
    },
{
      title: "Custom Packages",
      image: customImg,
      price: "Rp 150,000",
      description: "Ideal for events and celebrations",
      features: [
        "48 pieces Custom pempek",
        "600 ml cuko",
        "Cucumber Garnish",
        "Free delivery (3km radius)",
        "Disposable plates & utensils",
      ],
      featured: true,
    },
    {
      title: "Party Package",
      image: partyImg,
      price: "Rp 150,000",
      description: "Ideal for events and celebrations",
      features: [
        "48 pieces mixed pempek",
        "600 ml cuko",
        "Cucumber Garnish",
        "Free delivery (3km radius)",
        "Disposable plates & utensils",
      ],
      featured: true,
    },
    {
      title: "Business Package",
      image: businessImg,
      price: "Rp 500,000",
      description: "For reseller, restaurants and catering",
      features: [
        "160 pieces mixed pempek",
        "2 liters cuko",
        "Complete garnish set",
        "Free delivery (5km radius)",
        "Premium packaging",
        "Dedicated support",
      ],
    },
    {
      title: "Special Package",
      image: specialImg,
      price: "Rp 500,000",
      description: "For reseller, restaurants and catering",
      features: [
        "160 pieces mixed pempek",
        "2 liters cuko",
        "Complete garnish set",
        "Free delivery (5km radius)",
        "Premium packaging",
        "Dedicated support",
      ],
    },
  ];

  const blogPosts = [
    {
      title: "The History of Pempek Palembang",
      excerpt: "Discover the rich cultural heritage behind Indonesia's beloved fish cake delicacy and how it became a national treasure.",
      image: "/History.jpeg",
    },
    {
      title: "How to Make Perfect Cuko",
      excerpt: "Learn the secret recipe for the authentic sweet and spicy vinegar sauce that makes pempek truly special.",
      image: "/Cuko.jpg",
    },
    {
      title: "Health Benefits of Fish-Based Foods",
      excerpt: "Explore the nutritional advantages of incorporating fish cakes into your diet and why pempek is a healthy choice.",
      image: "/Fish.jpeg",
    },
    {
      title: "Pempek Varieties You Must Try",
      excerpt: "From kapal selam to lenjer, discover the different types of pempek and what makes each one unique.",
      image: "/Variasi.png",
    },
    {
      title: "Storing and Reheating Tips",
      excerpt: "Keep your pempek fresh and delicious with our expert storage and reheating techniques for maximum flavor.",
      image: "/Freezer.jpeg",
    },
    {
      title: "Catering for Special Events",
      excerpt: "Planning a party? Learn how Pempek Candi can make your event memorable with our catering services.",
      image: "/Party.png",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Authentic Pempek Palembang"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
              Authentic Pempek
              <span className="block text-primary"> Palembang</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-10 leading-relaxed max-w-2xl">
              Experience the rich, authentic taste of traditional Indonesian fish cakes, handcrafted with love and generations of culinary expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" })}>
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Pempek Candi was born from a passion for preserving authentic Palembang flavors. Our family recipe, passed down through three generations, combines the finest fish with traditional techniques to create pempek that tastes like home.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Every batch is made fresh daily using only premium ingredients. We source our fish from trusted local suppliers and prepare each pempek by hand, ensuring consistent quality and authentic taste in every bite.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="font-bold text-2xl">15+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="font-bold text-2xl">5000+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="font-bold text-2xl">100%</p>
                  <p className="text-sm text-muted-foreground">Authentic Recipe</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={kitchenImage}
                alt="Traditional Pempek Kitchen"
                className="rounded-2xl shadow-strong w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your needs. All packages include our signature homemade cuko sauce.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative ${
                  tier.featured ? "border-primary border-2 shadow-strong scale-105" : "shadow-soft"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
               <CardHeader className="p-0 relative">
  {tier.image && (
    <img
      src={tier.image}
      alt={tier.title}
      className="w-full h-44 object-cover rounded-t-xl"
    />
  )}

  <div className="p-6">
    <CardTitle className="text-2xl">{tier.title}</CardTitle>
    <CardDescription className="text-base">
      {tier.description}
    </CardDescription>
    <p className="text-4xl font-bold text-primary mt-4">
      {tier.price}
    </p>
  </div>
</CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={tier.featured ? "default" : "outline"}
                    size="lg"
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Order Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied customers.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">From Our Kitchen</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore stories, recipes, and tips from the world of authentic Indonesian cuisine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-strong transition-shadow duration-300">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
              <p className="text-xl text-muted-foreground">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+62 812 3456 7890"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us how we can help you..."
                          rows={5}
                          className="mt-2"
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-muted-foreground">+62 813 7492 5511</p>
                        <p className="text-muted-foreground">+62 812 7788 4224</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">pempek.candi@gmail.com</p>
                        <p className="text-muted-foreground">pempek.candi@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Address</p>
                        <p className="text-muted-foreground">
                          Jl. Ngampelsari, Kecamatan Candi<br />
                          Sidoarjo, Jawa Timur<br />
                          Indonesia 30137
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
                  <div className="space-y-2 text-foreground/80">
                    <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p>Saturday: 8:00 AM - 9:00 PM</p>
                    <p>Sunday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="Pempek Candi" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Instagram className="Pempek candi" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="Pempek Candi" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Pempek Candi</h3>
              <p className="text-background/70">
                Authentic Palembang pempek made with love and tradition.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#home" className="hover:text-background transition-colors">Home</a></li>
                <li><a href="#pricing" className="hover:text-background transition-colors">Pricing</a></li>
                <li><a href="#blog" className="hover:text-background transition-colors">Blog</a></li>
                <li><a href="#testimonials" className="hover:text-background transition-colors">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#pricing" className="hover:text-background transition-colors">Family Package</a></li>
                <li><a href="#pricing" className="hover:text-background transition-colors">Party Package</a></li>
                <li><a href="#pricing" className="hover:text-background transition-colors">Business Package</a></li>
                <li><a href="#contact" className="hover:text-background transition-colors">Custom Orders</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Refund Policy</a></li>
                <li><a href="#contact" className="hover:text-background transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>&copy; 2025 Pempek Candi. All rights reserved. Made with ❤️.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
