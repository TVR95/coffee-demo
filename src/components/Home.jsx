import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Cluster from "./Cluster";

function Home() {
    return (
        <div className="home">
            <Cluster link="/offer"  imageSrc="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1962&q=80" clusterText="See our offer" />
            <Cluster link="/about" imageSrc="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80" clusterText="Get to know us better" />
            <Cluster link="/localization" imageSrc="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" clusterText="See where to find us" />
            <Cluster link="/contact" imageSrc="https://images.unsplash.com/photo-1566590549972-2d38e22dae0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" clusterText="Get in touch with us" />
        </div>
    );
}

export default Home;