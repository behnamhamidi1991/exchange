"use client";
import React, { useEffect, useState } from "react";
import "./cryptolist.css";
import axios from "axios";
import Image from "next/image";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Pictures {
  albumdId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const CryptoList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [pictures, setPictures] = useState<Pictures[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (Array.isArray(response.data)) {
        setPosts(response.data);
      } else {
        console.log("It is not an array!");
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchPhotos = async () => {
      const photoResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );

      setPictures(photoResponse.data);
    };

    fetchPhotos();
  }, []);

  console.log(pictures);

  const filteredPosts = posts.filter((item) => item.id <= 10);

  return (
    <div className="cryptoList">
      <div className="blogSection">
        <h2>Blog</h2>

        <div className="postBox">
          {filteredPosts.map((item) => (
            <div key={item.id} className="box">
              <h3>{item.title}</h3>
              <p>{item.body.substring(0, 199)} ...</p>
            </div>
          ))}
        </div>

        <div className="pcitruesBox">
          {pictures.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <img src={item.url} alt="logo" />
              <img src={item.thumbnailUrl} alt="icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoList;
