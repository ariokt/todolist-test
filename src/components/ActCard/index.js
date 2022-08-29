import React from "react";
import deleteAct from '../../assets/activity-delete.svg'
import "./ActCard.css"


const ActCard = ({ act }) => {
    return (
        <div className="act-card">
            <h2>{act}</h2>
            <div className="d-flex align-items-center justify-content-between">
                <p>6 Oktober 2021</p>
                <img src={deleteAct} />
            </div>
        </div>
    )
}

export default ActCard