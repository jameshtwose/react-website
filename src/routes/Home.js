import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("mdFiles/home.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="home">
      <ReactMarkdown children={content} />
    </div>
  );
};

export default Home;