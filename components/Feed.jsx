"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [constPosts, setConstPosts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);

    const filteredPosts = constPosts.filter((p) => {
      return (
        p.prompt.includes(e.target.value) ||
        p.tag.includes(e.target.value) ||
        p.creator.email.includes(e.target.value) ||
        p.creator.username.includes(e.target.value)
      );
    });
    setAllPosts(filteredPosts);
  };

  const handleTagClick = (e) => {
    setSearchText(e);

    const filteredPosts = constPosts.filter((p) => p.tag.includes(e));
    setAllPosts(filteredPosts);
  };

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setAllPosts(data);
    setConstPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag, a username or a piece of text you want..."
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
