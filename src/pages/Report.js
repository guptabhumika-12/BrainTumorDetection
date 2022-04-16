import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios'
import '../style/report.css'


function Report() {
    const form = useRef();

    const [id, setid] = React.useState('');
    const [patient, setPatient] = React.useState();
    const handleChange = (event) => {
        setid(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(id);

        axios.get(`http://localhost:5000/patient/${id}`)
            .then(res => {
                const user = res.data;
                setPatient(user);
            })
            .catch(err => {
                console.log(err);
            }
            );
        console.log(patient);
    }
    function handleClick(e) {
        e.preventDefault();

        emailjs.sendForm('default_service', 'template_trbpwh8', form.current, 'hc8HZh6IiScSdmPEX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "50px",
            backgroundColor: "#cceeff",
            minHeight: "100vh",
            padding: "20px"
        }} >
            <h1 style={{
                fontSize: "25px",
                fontWeight: "bold",
                color: "black",
                fontFamily: "'Roboto', sans-serif",
            }}>
                Patient Record
            </h1>
            <div className='form-container'>
                <input style={{
                    width: "300px",
                    height: "40px",
                    borderRadius: "5px",
                    border: "1px solid black",
                    margin: "10px",
                    padding: "10px"
                }} placeholder="Patient ID"
                    value={id}
                    onChange={handleChange} />
                <button
                    className='btn ebtn'
                    style={{
                        width: "150px",
                        height: "40px",
                        borderRadius: "5px",
                        border: "1px solid black",
                        margin: "10px",
                        padding: "5px",
                    }}
                    onClick={handleSubmit}>
                    View Record
                </button>
            </div>

            <div className='container'>
                {patient ?
                    <div className='row report'>
                        <div className='col'
                            style={{
                                backgroundColor: "#f5f5f5",
                            }}>
                            <p>Name:</p>

                            <p>Gender:</p>
                            <p>Age:</p>
                            <p>Blood Group:</p>
                            <p>Medical History:</p>
                            <p>Phone Number:</p>
                            <p>Date:</p>
                            <p>Result:</p>
                        </div>
                        <div className='col' style={{
                            backgroundColor: "#f5f5f5",

                        }}>
                            <p>{patient.name}</p>
                            <p>{patient.gender}</p>
                            <p>{patient.age}</p>
                            <p>{patient.bloodgrp}</p>
                            <p>{patient.medicalhist}</p>
                            <p>{patient.phoneno}</p>
                            <p>{patient.date}</p>
                            <p>{patient.result}</p>
                        </div>
                        <div style={{
                            backgroundColor: "#f5f5f5",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "30px"
                        }}>
                            <h1
                                style={{

                                    fontSize: "25px",
                                    fontWeight: "bold",
                                    color: "black",
                                    fontFamily: "'Roboto', sans-serif",

                                }}>
                                Send Patient Report to Doctor
                            </h1>
                            <form ref={form} id="form" onSubmit={handleClick}>

                                <div className='row'>
                                    <div className="form-group">
                                        <label for="dname" className='col-sm-6'>Doctor's Name:</label>
                                        <input className='dform' type="text" name="dname" id="dname" />
                                    </div>
                                    <div className="form-group">
                                        <label for="doctor_email" className='col-sm-6'>Email ID:</label>
                                        <input className='dform' type="email" name="doctor_email" id="doctor_email" />
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "100%",
                                    }}  >

                                        <input className="ebtn btn" type="submit" id="button" value="Send Email" />
                                    </div>
                                </div>

                                <div className="field">
                                    <input type="hidden" value={patient.name} name="name" id="name" />
                                </div>
                                <div className="field">
                                    <input type="hidden" value={patient.id} name="id" id="id" />
                                </div>
                                <div className="field">
                                    <input type="hidden" value={patient.gender} name="gender" id="gender" />
                                </div>
                                <div className="field">
                                    <input type="hidden" name="age" value={patient.age} id="age" />
                                </div>
                                <div className="field">
                                    <input type="hidden" name="bldgrp" value={patient.bloodgrp} id="bldgrp" />
                                </div>
                                <div className="field">
                                    <input type="hidden" name="mhist" value={patient.medicalhist} id="mhist" />
                                </div>
                                <div className="field">
                                    <input type="hidden" name="phn" id="phn" value={patient.phoneno} />
                                </div>
                                <div className="field">
                                    <input type="hidden" name="date" value={patient.date} id="date" />
                                </div>
                                <div className="field">
                                    <input type="hidden" name="res" value={patient.result} id="res" />
                                </div>

                            </form>

                        </div>
                    </div>
                    : <div></div>}

            </div>

        </div>
    )
}

export default Report