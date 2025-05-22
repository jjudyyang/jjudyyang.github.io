
import { useState, useEffect, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Contact | Judy Yang";
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!name || !email || !message) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // In a real implementation, this would send data to Supabase and trigger Resend API
    // We're simulating success for demo purposes
    try {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset the form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message could not be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="heading-lg mb-4">Contact Me</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  aria-required="true"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  aria-required="true"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can I help you?"
                  rows={5}
                  required
                  aria-required="true"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0A84FF] hover:bg-[#0A84FF]/90"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-muted p-6 rounded-lg h-full">
              <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:judy.yang@example.com" 
                    className="text-muted-foreground hover:text-[#0A84FF]"
                  >
                    judy.yang@example.com
                  </a>
                </div>
                
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/judyyang" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[#0A84FF]"
                  >
                    linkedin.com/in/judyyang
                  </a>
                </div>
                
                <div>
                  <p className="font-medium">Location</p>
                  <span className="text-muted-foreground">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section>
          <h2 className="heading-md mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">What types of projects do you work on?</h3>
              <p className="text-muted-foreground">
                I specialize in product management for B2B SaaS, mobile applications, and products leveraging ML/AI. I'm particularly passionate about products that solve real user problems and drive measurable business growth.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Do you offer consulting services?</h3>
              <p className="text-muted-foreground">
                Yes, I provide product strategy consulting, user research, and product roadmapping services for startups and established companies. Each engagement is tailored to your specific needs.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Are you open to full-time opportunities?</h3>
              <p className="text-muted-foreground">
                I'm selectively exploring new opportunities with innovative companies where I can drive product strategy and growth. Feel free to reach out to discuss.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
