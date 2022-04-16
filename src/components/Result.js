import React from 'react'
import { useNavigate } from 'react-router-dom';

function Result({ prediction, close, loader, setLoader }) {

    const navigate = useNavigate();

    return (
        <div style={{

            position: "absolute",
            width: "700px",
            height: "350px",
            background: "white",
            borderRadius: "2%",
            animation: "blinker 1s cubic - bezier(0.5, 0, 1, 1) infinite alternate",
            opacity: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 0px 10px black",
            zIndex: "100"

        }}>

            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
                marginBottom: "10px",
                fontSize: "20px",
                fontWeight: "bold",
                color: "black",
                fontFamily: "Arial",
                width: "100%",
                height: "100%",
                position: "relative"

            }}>
                <button
                    style={{

                        position: "absolute",
                        backgroundColor: "red",
                        color: "white",
                        top: "-10px",
                        right: "-10px",
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                        border: "none",
                        cursor: "pointer",
                        outline: "none",
                        fontSize: "20px",
                        fontWeight: "bold",
                        zIndex: "100"
                    }}
                    onClick={() => {
                        close(false)
                        setLoader(false)
                    }}
                    type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <p><span> The Predicted Tumor Class is</span>
                    <span style={{
                        color: "red",
                    }}> {prediction}</span>
                </p>
                <div>



                    <button className='btn btn-primary btn-dr'
                        onClick={() => {
                            close(false)
                            navigate('/pi', { state: { prediction: { prediction } } })
                        }}>Fill patient details</button>

                </div>
            </div>
        </div >
    )
}

export default Result