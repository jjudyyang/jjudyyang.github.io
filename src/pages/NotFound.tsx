
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found | Judy Yang";
  }, []);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-extrabold text-[#0A84FF]">404</h1>
      <h2 className="text-3xl font-bold mt-4">Oops! Page not found</h2>
      <p className="text-muted-foreground mt-4 max-w-md">
        The page you're looking for doesn't seem to exist. Let's get you back on track.
      </p>
      <Button asChild className="mt-8 bg-[#0A84FF] hover:bg-[#0A84FF]/90">
        <Link to="/">Return Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
