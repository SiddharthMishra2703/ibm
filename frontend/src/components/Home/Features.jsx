import React from 'react'
import { Link } from 'react-router-dom';


export default function Features() {
    return (
        <>
            <div className="card mx-10" style={{backgroundColor: "whitesmoke"}}>
            {/* <div className="card mx-10"> */}
                <div className="mx-auto mt-5">
                    <h1 className='card-title fw-bolder text-center'>What We Got For You</h1>
                    <p className='text-mute text-center'>Don't Know Where To Start. Don't Worry We Got You.</p>
                </div>
                <div className="card fullwidth shadow my-4 mx-auto" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://www.marketing91.com/wp-content/uploads/2018/08/Product-Portfolio-1.jpg" className="img-fluid rounded-start s-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body ">
                                <h5 className="card-title">Buy products to contribute</h5>
                                <p className="card-text">You can contribute in planting trees by purchasing productson this website.</p>
                                <p className="card-text"><Link className="btn btn-primary btn-sm rounded-pill" to="/products">Buy Now</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card fullwidth shadow my-4 mx-auto" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://betterbelieveit.net/wp-content/uploads/2016/09/read-articles.png" className="img-fluid rounded-start s-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body ">
                                <h5 className="card-title">Read from other's Article</h5>
                                <p className="card-text">You can find topics from your intrest and check out what other's are writing form their knowledge.</p>
                                <p className="card-text"><Link className="btn btn-primary btn-sm rounded-pill" to="/articles">Read Now</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card fullwidth shadow my-4 mx-auto" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://crisissupportsolutions.com/wp-content/uploads/2013/08/stats-pie-chart-bar-graph.jpg" className="img-fluid rounded-start s-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body ">
                                <h5 className="card-title">Deforestation Statastics</h5>
                                <p className="card-text">You can see Statastics of deforestation in the for of bar chart and pie chart.</p>
                                <p className="card-text"><Link className="btn btn-primary btn-sm rounded-pill" to="/#">See Below</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}