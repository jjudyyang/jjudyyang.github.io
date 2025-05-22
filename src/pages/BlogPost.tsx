
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Sample blog post content (this would come from Supabase in a real implementation)
const blogPostsData: Record<string, any> = {
  "product-led-growth": {
    title: "The Evolution of Product-Led Growth",
    date: "2023-11-15",
    readTime: "6 min read",
    tags: ["Product Strategy", "Growth"],
    imageUrl: "",
    content: `
      <h2>What is Product-Led Growth?</h2>
      <p>Product-led growth (PLG) is a business methodology in which user acquisition, expansion, conversion, and retention are all driven primarily by the product itself. It creates company growth through a product that sells itself, delivers value, and encourages users to tell others about their positive experience.</p>
      
      <p>Unlike traditional sales-led growth models, where the path to revenue relies on a sales team closing deals, PLG flips the script by making the product the primary driver of customer acquisition and retention.</p>
      
      <h2>The Rise of Product-Led Growth</h2>
      <p>The PLG model has gained significant traction over the past decade, fueled by:</p>
      <ul>
        <li>Lower barriers to software adoption</li>
        <li>The rise of subscription-based models</li>
        <li>User preference for trying before buying</li>
        <li>The power of word-of-mouth in digital ecosystems</li>
      </ul>
      
      <p>Companies like Slack, Dropbox, and Zoom have demonstrated how focusing on a stellar product experience can drive explosive growth without relying heavily on traditional sales and marketing approaches.</p>
      
      <h2>Key Elements of a Product-Led Strategy</h2>
      <p>To successfully implement PLG, companies typically focus on these foundational elements:</p>
      
      <h3>1. Frictionless Onboarding</h3>
      <p>The first moments of user interaction are critical. PLG companies obsess over creating onboarding experiences that quickly demonstrate value without overwhelming users. This often means:</p>
      <ul>
        <li>Minimizing required information during sign-up</li>
        <li>Providing interactive product tours</li>
        <li>Offering templates and pre-populated examples</li>
        <li>Delivering the core "aha moment" as quickly as possible</li>
      </ul>
      
      <h3>2. Value Before Monetization</h3>
      <p>PLG strategies typically allow users to experience significant product value before requiring payment. This could be through:</p>
      <ul>
        <li>Freemium models with generous free tiers</li>
        <li>Free trials with full product functionality</li>
        <li>Usage-based pricing that scales with derived value</li>
      </ul>
      
      <h3>3. Virality by Design</h3>
      <p>The best PLG products have natural network effects or collaborative elements that incentivize existing users to bring in new ones:</p>
      <ul>
        <li>Built-in sharing features</li>
        <li>Collaborative functionality that becomes more valuable with more users</li>
        <li>Referral programs that benefit both parties</li>
      </ul>
      
      <h2>Measuring Product-Led Success</h2>
      <p>Effective PLG strategies rely on product analytics to drive decision-making. Key metrics to track include:</p>
      <ul>
        <li>Time to value: How quickly users reach their first "aha moment"</li>
        <li>Activation rate: Percentage of new users who take key actions indicating engagement</li>
        <li>Product-qualified leads (PQLs): Users showing patterns that indicate readiness to convert or upgrade</li>
        <li>Expansion revenue: Additional revenue from existing customers</li>
        <li>Net revenue retention: Measure of revenue growth from existing customers</li>
      </ul>
      
      <h2>The Future of Product-Led Growth</h2>
      <p>As PLG continues to evolve, we're seeing emerging trends that will shape its future:</p>
      <ul>
        <li>AI-powered personalization of the product experience</li>
        <li>Community-led growth complementing product-led approaches</li>
        <li>Hybrid models that combine PLG with targeted sales motions</li>
        <li>Increasing importance of product data in driving business decisions</li>
      </ul>
      
      <p>By putting the product experience at the center of business strategy, companies can create sustainable growth engines that scale efficiently while delivering genuine value to users.</p>
    `
  },
  "user-research-techniques": {
    title: "5 Underrated User Research Techniques",
    date: "2023-10-22",
    readTime: "4 min read",
    tags: ["User Research", "Product Management"],
    imageUrl: "",
    content: `
      <p>While interviews and surveys remain valuable tools in the user research arsenal, there are several less common but highly effective techniques that can provide unique insights into user behavior and needs. This article explores five underrated research methods that can complement your existing toolkit.</p>
      
      <h2>1. Diary Studies</h2>
      <p>Diary studies involve participants documenting their experiences, thoughts, and behaviors related to your product over an extended period. Unlike one-time interviews or usability tests, diary studies capture how users interact with your product in their natural environment and across different contexts.</p>
      
      <p>When to use them:</p>
      <ul>
        <li>When you need to understand usage patterns over time</li>
        <li>For products that solve problems that occur intermittently</li>
        <li>When context and environment significantly impact usage</li>
      </ul>
      
      <p>Implementation tip: Provide clear guidelines on what to document and use mobile-friendly tools that make it easy for participants to capture moments through text, photos, or videos.</p>
      
      <h2>2. Jobs-to-be-Done Interviews</h2>
      <p>While the Jobs-to-be-Done (JTBD) framework isn't new, JTBD interviews remain underutilized. These interviews focus on understanding what "jobs" users are trying to accomplish and what caused them to "hire" your product for that job.</p>
      
      <p>The key difference from standard interviews is the focus on specific instances of decision-making rather than general opinions or preferences.</p>
      
      <p>When to use them:</p>
      <ul>
        <li>When you need to understand purchase decisions</li>
        <li>To identify competition (which might not be who you think)</li>
        <li>When planning new features or positioning</li>
      </ul>
      
      <p>Implementation tip: Structure questions around the timeline of adoption: First thought → Passive looking → Active looking → Deciding → Onboarding. Ask about specific memories, not hypotheticals.</p>
      
      <h2>3. Behavioral Analytics with Session Recordings</h2>
      <p>While many teams look at aggregate analytics, fewer take advantage of session recordings to watch actual users interacting with their products. Tools like Hotjar, FullStory, or LogRocket allow you to observe natural user behavior without the artificiality of a lab setting.</p>
      
      <p>When to use them:</p>
      <ul>
        <li>To understand points of confusion in your UI</li>
        <li>When quantitative data shows drop-offs but doesn't explain why</li>
        <li>To identify unexpected usage patterns</li>
      </ul>
      
      <p>Implementation tip: Create segments of particularly interesting user groups (e.g., users who abandoned during a specific step, power users) and review their sessions to identify patterns.</p>
      
      <h2>4. Collaborative Design Workshops</h2>
      <p>Instead of just testing designs on users, involve them in the creation process. Collaborative design workshops bring users and product teams together to co-create solutions.</p>
      
      <p>When to use them:</p>
      <ul>
        <li>Early in the design process when exploring solutions</li>
        <li>For complex problems where user expertise is crucial</li>
        <li>When building for specialized user groups (e.g., healthcare professionals)</li>
      </ul>
      
      <p>Implementation tip: Provide simple templates and constraints to guide the activity, and remember that the goal isn't to get users to design your solution but to uncover needs, priorities, and mental models.</p>
      
      <h2>5. Longitudinal Benchmarking</h2>
      <p>Longitudinal benchmarking involves tracking the same usability metrics over time through repeated studies with similar participants and tasks. This method provides objective measures of how your product's usability evolves.</p>
      
      <p>When to use them:</p>
      <ul>
        <li>To ensure redesigns actually improve usability</li>
        <li>When gradually evolving a product over multiple releases</li>
        <li>To demonstrate ROI of UX investments</li>
      </ul>
      
      <p>Implementation tip: Establish a consistent set of tasks and metrics (e.g., success rate, time on task, error rate, SUS scores) that you'll track across studies. Use the same recruitment criteria each time.</p>
      
      <h2>Finding the Right Mix</h2>
      <p>The most effective user research strategies employ multiple methodologies to compensate for the weaknesses of any single approach. Consider how these underutilized techniques might complement your existing research practice to build a more comprehensive understanding of your users.</p>
      
      <p>Remember that the goal of user research isn't just to gather data—it's to develop empathy and insights that drive better product decisions. Sometimes the less traveled path yields the most valuable discoveries.</p>
    `
  }
  // Additional blog posts would be defined here
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug && blogPostsData[slug]) {
      setPost(blogPostsData[slug]);
      document.title = `${blogPostsData[slug].title} | Judy Yang`;
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return <div className="container px-4 py-12 text-center">Loading...</div>;
  }

  if (!post) {
    return (
      <div className="container px-4 py-12 text-center">
        <h1 className="heading-lg mb-4">Blog Post Not Found</h1>
        <p className="mb-8">Sorry, the blog post you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container px-4 md:px-6 py-12">
      <Button asChild variant="ghost" className="mb-8">
        <Link to="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
      </Button>

      <article className="max-w-3xl mx-auto">
        {/* Post Header */}
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag: string) => (
              <span 
                key={tag}
                className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="heading-lg mb-3">{post.title}</h1>
          
          <div className="text-muted-foreground">
            {post.date} · {post.readTime}
          </div>
        </header>

        {/* Featured Image */}
        <div className="aspect-video bg-muted rounded-lg mb-10"></div>

        {/* Post Content */}
        <div 
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Card */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex items-center">
            <div className="h-14 w-14 rounded-full bg-muted mr-4"></div>
            <div>
              <h3 className="font-semibold">Judy Yang</h3>
              <p className="text-sm text-muted-foreground">Product Manager with a passion for the intersection of technology and user experience.</p>
            </div>
          </div>
        </div>

        {/* Related Posts / Share Links placeholder */}
        <div className="mt-10 pt-10 border-t grid grid-cols-2 gap-4">
          <Button asChild variant="outline">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> All Posts
            </Link>
          </Button>
          <Button asChild className="bg-[#0A84FF] hover:bg-[#0A84FF]/90 justify-self-end">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
