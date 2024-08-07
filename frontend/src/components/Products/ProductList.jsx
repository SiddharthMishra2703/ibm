import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import './products.css';
import { Box, CircularProgress } from '@mui/material';

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    

    const getData = async () => {
        try {

            const res = await axios.get(process.env.API + '/products');
            const data = await res.data;
            setProducts(data);
            setLoading(false);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error.response.data.error);
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
        <div className="container py-5">
        <h1 className="text-center">Products</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 py-5">

        {products.map((product) => (

            <div key={product._id} className="col">
                <div className="card">
                    <img src={product.Image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.Name}</h5>
                        <p className="card-text">{product.Description}</p>
                    </div>
                    <div className="mb-5 d-flex justify-content-around">
                        <h3>{product.Price}</h3>
                        <button onClick={() => {window.open(product.url, '_blank')}} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        ))}   


        </div>
    </div>
    )
}