
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    slug: "product-led-growth",
    title: "Recuriting Strategy",
    excerpt: "How focusing on product experience drives sustainable business growth and creates customer advocates.",
    date: "2023-11-15",
    readTime: "6 min read",
    tags: ["Product Strategy", "Growth"],
    imageUrl: ""
  },
  {
    slug: "user-research-techniques",
    title: "5 Ways to use AI .... ",
    excerpt: "Beyond interviews and surveys: innovative ways to gather valuable user insights for your product development process.",
    date: "2023-10-22",
    readTime: "4 min read",
    tags: ["User Research", "Product Management"],
    imageUrl: ""
  },
  {
    slug: "ml-product-integration",
    title: "Product Teardown - Glance Back",
    excerpt: "https://make-your-work-easier.notion.site/Product-Teardown-Worksheet-16c4897843834ccc8f41205146c5ca7f",
    date: "2023-09-08",
    readTime: "8 min read",
    tags: ["Machine Learning", "Product Strategy"],
    imageUrl: ""
  },
  {
    slug: "metrics-that-matter",
    title: "Learnings from my First Product Internship",
    excerpt: "Moving beyond vanity metrics to track indicators that provide actionable insights for product decisions.",
    date: "2023-08-17",
    readTime: "5 min read",
    tags: ["Analytics", "Product Management"],
    imageUrl: ""
  },
  {
    slug: "why-pm",
    title: "Why Product Management?",
    excerpt: "How my CS degree shaped my approach to product management and enables better collaboration with engineering teams.",
    date: "2023-07-29",
    readTime: "7 min read",
    tags: ["Career", "Technical Skills"],
    imageUrl: ""
  }
];

// All available tags
const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    document.title = "Blog";
  }, []);

  useEffect(() => {
    if (!selectedTag) {
      setFilteredPosts(blogPosts);
      return;
    }
    
    const filtered = blogPosts.filter(post => 
      post.tags.includes(selectedTag)
    );
    setFilteredPosts(filtered);
  }, [selectedTag]);

  return (
    <div className="container px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="heading-lg mb-4">Judy's Field Notes 📝 🗺️ </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Thoughts on product management, technology, and my journey in the industry.
        </p>

        {/* Tags Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setSelectedTag(null)}
            className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
              !selectedTag 
                ? "bg-[#0A84FF]/90 text-white" 
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            All Posts
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                selectedTag === tag 
                  ? "bg-[#0A84FF]/90 text-white" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="space-y-10">
          {filteredPosts.map((post) => (
            <article key={post.slug} className="border-b pb-10 last:border-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Image placeholder (can be replaced with actual images) */}
                <div className="md:col-span-1">
                  <div className="aspect-square bg-muted rounded-lg"></div>
                </div>
                
                <div className="md:col-span-3">
                  <div className="flex gap-2 mb-2">
                    {post.tags.map(tag => (
                      <span 
                        key={`${post.slug}-${tag}`}
                        className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-[#0A84FF]">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <div className="text-sm text-muted-foreground mb-3">
                    {post.date} · {post.readTime}
                  </div>
                  
                  <p className="mb-4">{post.excerpt}</p>
                  
                  <Button asChild variant="link" className="pl-0">
                    <Link to={`/blog/${post.slug}`}>Explore Note</Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No posts found</h3>
            <p className="text-muted-foreground mb-4">
              No posts match the selected filter. Try another category or view all posts.
            </p>
            <Button onClick={() => setSelectedTag(null)}>View All Posts</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
