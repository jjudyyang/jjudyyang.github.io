import React, { useEffect, useState } from "react";

function Work(props) {
  const { header, desc, url, position } = props;
  const [style, setStyle] = useState(() => (window.innerWidth <= 880 ? "narrow" : "wide"));

  useEffect(() => {
    const handleResize = () => {
      setStyle(window.innerWidth <= 900 ? "narrow" : "wide");
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`work-${style}`}>
      {url ? (
        <a href={url} className="work_url" target="_blank" rel="noreferrer">
          <div className="work_header">{header}</div>
        </a>
      ) : (
        <div className="work_header">{header}</div>
      )}
      <div className="work_position">{position}</div>
      <div className="work_desc">{desc}</div>
    </div>
  );
}

export default Work;
