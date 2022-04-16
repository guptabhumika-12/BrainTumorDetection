import React, { useCallback } from 'react'
import { useLocation } from 'react-router-dom';

import '../style/pi.css'
// import axios from 'axios';
function PIform() {
    const location = useLocation();
    console.log(location.state)
    let pred = "No Tumor";
    if (location.state) {
        pred = location.state.prediction.prediction;
    }

    const getDate = () => {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }

    const [formValue, setformValue] = React.useState({
        name: '',
        gen: '',
        age: '',
        bld: '',
        mh: '',
        dob: '',
        email: '',
        phn: '',
        date: getDate(),
        res: pred



    });
    const PostData = async (e) => {
        e.preventDefault();

        const { name, gen, age, bld, mh, dob, email, phn, date, res } = formValue;
        const response = await fetch("http://localhost:5000/patient", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name, gen, age, bld, mh, dob, email, phn, date, res
            }),
        });

        const data = await response.json();

        if (data.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
            window.alert("Successful Registration");
            console.log("Successful Registration");

        }
    };

    // const handleChange = (event) => {
    //     console.log('e:' + event.target.value)

    //     setformValue({
    //         ...formValue,
    //         [event.target.name]: event.target.value
    //     });
    //     console.log(formValue)
    // }
    let name, value;

    const handleChange = useCallback((e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setformValue({ ...formValue, [name]: value });
        console.log(name + ' ' + value);
    }, [formValue]);


    return (
        <div className='pi-form'>
            <form

                onSubmit={PostData}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#cceeff",
                    height: "100%",
                    padding: "20px",
                    margin: "20px",
                }}
            >


                {/* name */}
                <div className='form-group'>
                    <label for="name" className='col-sm-6'>Name:</label>
                    <input
                        name='name'
                        placeholder='Name'
                        value={formValue.name}
                        onChange={handleChange} />
                </div>
                {/* email */}
                <div className='form-group'>
                    <label for="email" className='col-sm-6'>Email Id:</label>
                    <input
                        name='email'
                        type="email" placeholder='Email'
                        value={formValue.email}
                        onChange={handleChange} />
                </div>
                {/* age */}
                <div className='form-group'>
                    <label for="age" className='col-sm-6'>Age:</label>
                    <input
                        name='age'
                        placeholder='Age'
                        value={formValue.age}
                        onChange={handleChange}
                    />
                </div>
                {/* date of birth */}
                <div className='form-group'>
                    <label className='col-sm-6'>Date of Birth:</label>
                    <input type='date' value={formValue.dob} onChange={handleChange} name="dob" />
                </div>
                {/*gender */}
                <div className='form-group  radio-group'>
                    <label for="gender" className='col-sm-6'>Gender:</label>
                    <select
                        className='form-select'

                        aria-label="Default select example" name='gen' onChange={handleChange}>
                        <option selected> Select </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>


                {/* medical history */}
                <div className='form-group'>

                    <label for="medicalHistory" className='col-sm'>Previous Medical Conditions:</label>
                    <input type="text" name="mh" value={formValue.medicalhist} onChange={handleChange} />
                </div>
                {/* phone no. */}
                <div className='form-group'>

                    <label for="phoneno" className='col-sm-6'>Phone No.:</label>
                    <input type="text" value={formValue.phoneno} onChange={handleChange} name="phn" />
                </div>
                {/* blood group */}
                <div className='form-group'>
                    <label for="blood group" className='col-sm-6'>Blood Group:</label>
                    <input type="text" name="bld" value={formValue.bloodgrp} onChange={handleChange} />
                </div>
                {/* phone number */}
                <div className='form-group'>
                    <label className='col-sm-6'>
                        Date:
                    </label >
                    <input
                        type='text'
                        name='date'
                        value={getDate()} />
                </div>
                <div className='form-group'>
                    <label className='col-sm-6'>
                        Result:
                    </label >
                    <input
                        type='text'
                        name='res'
                        value={pred} />
                </div>
                {/* utility */}
                <div className='form-group submit-btn'>
                    <button type="submit" className='btn ebtn'>Submit</button>
                    <button type="reset" className='btn ebtn reset' >Reset</button>

                </div>

            </form >
        </div >
    )
}

export default PIform