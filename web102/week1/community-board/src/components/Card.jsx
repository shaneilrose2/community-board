import React from "react";

const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.imageUrl}/>
            <div>
                <h3 style={{ textTransform: 'uppercase'}}>{props.location}</h3>
                <h4>{props.track} </h4>
                <p>{props.date}</p>
            </div>
            <a href={props.link}>
                <button color="#1f1f1f">More Info</button>
            </a>
        </div>
    );
};

export default Card;
