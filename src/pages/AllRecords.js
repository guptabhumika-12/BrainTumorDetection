import React, { useEffect, useState } from 'react'
import axios from 'axios'
function AllRecords() {
    const [list, setList] = useState([]);
    useEffect(() => {




        axios.get(`http://localhost:5000/allpatients`)
            .then(res => {
                const user = res.data;
                console.log(user)
                setList(user);
            })
            .catch(err => {
                console.log(err);
            }
            );

    }, [])
    return (
        <div style={{

            "height": "100vh",
            "width": "100%",
            marginTop: "50px",
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            backgroundColor: "#cceeff",
            overflowX: "hidden"

        }} >
            <h1
                style={{
                    "fontSize": "50px",
                    "marginTop": "50px",
                    "marginBottom": "50px"
                }}>All Patients</h1>

            <ul style={{
                "listStyle": "none",
                padding: "0px 10px",
                width: "100%",
                height: "100%",
                backgroundColor: "#cceeff",
                fontFamily: "'Roboto', sans-serif",
                fontSize: "20px",

            }}
                className='table list-group list-group-flush' >
                <li style={{
                    backgroundColor: "#cceeff",
                    fontWeight: "bold",
                }}
                    className='row list-group-item d-flex justify-content-between align-items-start ' >
                    <div className='col'>ID</div>
                    <div className='col'>NAME</div>
                    <div className='col'>GENDER</div>
                    <div className='col'>RESULT</div>
                    <div className='col'>EMAIL</div>
                </li>
                {list.map(item => (
                    <li style={{
                        backgroundColor: "#cceeff",
                    }} className='row list-group-item d-flex justify-content-between align-items-start'
                        key={item.id}>
                        <div className='col'>{item.id}</div>
                        <div className='col'>{item.name}</div>
                        <div className='col'>{item.gender}</div>
                        <div className='col'>{item.result}</div>
                        <div className='col'> {item.email}</div>

                    </li>
                ))}
            </ul>
        </div >
    )
}

export default AllRecords