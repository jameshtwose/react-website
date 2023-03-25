import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const About = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("mdFiles/bio.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="about">
      <ReactMarkdown children={content} />
    </div>
  );
};

export default About;
