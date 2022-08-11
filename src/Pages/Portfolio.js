import React from "react";
import main from '../main.css';
import business from '../business.jpg';
import { Card } from "react-bootstrap";

const Portfolio = () => {
    return(
            <div >
                <div className={main.portfolio}>
                    <h1> Miguel Mason </h1>
                </div>
                <Card style={{ width: '18rem' }}>
                    <div class="carousel-item">
                        <img src={business} alt={business} />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>...</h5>
                            <p>...</p>
                        </div>
                    </div>
                </Card>
            </div>
        )
}

export default Portfolio