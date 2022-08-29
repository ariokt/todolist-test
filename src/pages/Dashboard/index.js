import React from "react";
import Header from "../../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import actEmpty from "../../assets/act-empty.svg"
import "./Dashboard.css"


const Dashboard = () => {
    return (
        <div>
            <Header />
            <div className="dashboard__top d-flex flex-row justify-content-between align-items-center mb-4">
                <h2>Activity</h2>
                <button className="d-flex flex-row gap-2 align-items-center">
                    <FontAwesomeIcon icon={faPlus} />
                    <p>Tambah</p>
                </button>
            </div>
            <div className="dashboard__empty">
                <img  src={actEmpty} />
            </div>
            

        </div>
    )
}

export default Dashboard