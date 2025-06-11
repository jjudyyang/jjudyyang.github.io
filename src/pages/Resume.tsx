import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Resume = () => {
  useEffect(() => {
    document.title = "Resume | Judy Yang";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-1/3 text-center">
        <h1 className="text-xl mb-4 font-normal">I'll send you the freshest version.</h1>
        <div className="space-y-4">
          <Button asChild className="w-full bg-[#0A84FF] hover:bg-[#0A84FF]/90">
            <a href="mailto:j636yang@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
              Email Me
            </a>
          </Button>
          
          <Button asChild variant="outline" className="w-full">
            <a href="https://www.linkedin.com/in/jjudyyang" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Resume; 