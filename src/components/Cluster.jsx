import React, { useState } from "react";
import { Link } from "react-router-dom";

function Cluster(props) {
    const [click, setClick] = useState(false);

    function onClick() {
        setClick(!click);
    }

    return (
        <Link to={ props.link }>
            <div className="cluster" onClick= { onClick }>
                <div className="cluster-image" style={{backgroundImage: `url(${props.imageSrc})`}}></div>
                <div className="cluster-text">
                    <h1>{ props.clusterText }</h1>
                </div>
            </div>
        </Link>
    );
}

export default Cluster;