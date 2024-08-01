import React from 'react'
// import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios';


export default function SingleArticle() {
  const url = window.location.href;
  const articleId = url.slice(-24);
  const [userData, setUserData] = useState({});
  const getData = async () => {
    try {
    //   const res = await fetch('/blog/' + articleId, {
    //     method: "GET",
    //     headers: {
    //       Accept: "appllication/json",
    //       "Content-Type": "application/json"
    //     },
    //     credentials: "include"
    //   });
      const res = await axios.get('http://localhost:5000/article/' + articleId);

      const data = await res.data;
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  const blog = userData;
  
  return (

      <div className="card w-50 shadow mx-auto my-5" >
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{blog.topic}</h6>
          <p className="card-text">{blog.content}</p>
        </div>
      </div>
  )
}