import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, CircularProgress } from '@mui/material';


export default function ArticleList() {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {

            const res = await axios.get(process.env.API + '/articles');

            const data = await res.data;
            setArticles(data);
            setLoading(false);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err.response.data.error);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    if (loading) {
        return (
        <Box sx={{display:'flex', justifyContent:'center', height:'80vh', alignItems:'center'}}>
            <CircularProgress />
        </Box>
        );
    }

    return (

        <div className='container my-3'>
            <h1 className='text-center fw-bolder'>Articles</h1>
            <p className="text-muted text-center">Choose a Article to read full content</p>
            <div className='text-center'>
            </div>

            <div className="row">
                {articles.map((article) => (
                    <div key={article._id} className="col-md-6">
                        <div className="card shadow mx-auto my-5" >
                            <div className="card-body">
                                <h5 className="card-title">{article.title ? article.title.slice(0, 40) : ""}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{article.topic}</h6>
                                <p className="card-text" dangerouslySetInnerHTML={{ __html: article.description.slice(0,20) + " ..." }} />
                                <Link to={article.url} target='blank' className="btn btn-sm btn-outline-primary rounded-pill">Read More</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}