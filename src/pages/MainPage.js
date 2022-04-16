/* form with input as file in react */
import React, { useState, useEffect } from 'react'
import logo from '../images/bg3.jpg';
import bg from '../images/bg.jpg';

import Form from './../components/Form'
import Result from '../components/Result'
function MainPage() {
    const [prediction, setPrediction] = useState('')
    const [showpop, setshowpop] = useState(false);
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        prediction ? setshowpop(true) : setshowpop(false);
    }, [prediction])
    return (

        <div style={{
            "backgroundImage": `url(${logo})`,
            "backgroundSize": "cover",
            "backgroundRepeat": "no-repeat",
            "backgroundPosition": "center",
            "height": "100vh",
            "width": "100%",
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
            "alignItems": "center"

        }} >
            {showpop ? < Result prediction={prediction} close={setshowpop} loader={loader} setLoader={setLoader} /> : null}
            <Form prediction={prediction} setPrediction={setPrediction} loader={loader} setLoader={setLoader} />
        </div>


    )
}

export default MainPage