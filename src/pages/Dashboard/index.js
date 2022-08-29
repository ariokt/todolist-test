import React, { useEffect } from "react";
import Header from "../../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import actEmpty from "../../assets/act-empty.svg"
import { useDispatch, useSelector } from "react-redux"
import { getAct } from "../../actions/actAction"
import "./Dashboard.css"
import ActCard from "../../components/ActCard";


const Dashboard = () => {
    const dispatch = useDispatch();
    const { getResult } = useSelector((state) => state.ActivityReducer);

    useEffect(() => {
        dispatch(getAct());
    }, [])

    const handleTambah = () => {
        let activity;
        let input = prompt("Masukkan aktifitas baru:", "Aktifitas");
        if (input != null) {
            activity = input
        }

    }

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
            <div className="dashboard__act d-flex gap-4 flex-wrap">
                {getResult ? (
                    getResult.map(item => (
                        <ActCard act={item.title} />
                    ))
                ) : (
                    <div className="dashboard__empty">
                    <img  src={actEmpty} />
                </div>
                )} 
            </div>
        </div>
    )
}

export default Dashboard