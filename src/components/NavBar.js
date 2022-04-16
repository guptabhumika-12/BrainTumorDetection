import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <div style={{
            // position: "absolute",
            top: "0",
            width: "100%",
            height: "50px",
            borderRadius: "2%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#cceeff",
            boxShadow: "0px 0px 5px lightgray",
            position: "fixed",
            zIndex: "1"
            // backgroundColor: "#f5f5f5",
        }}>
            <nav className="navbar navbar-expand-lg navbar-light "
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    position: "relative"

                }}
            >
                <Link to="/" className="navbar-brand" style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",

                    height: "100%",
                    position: "relative",
                    marginLeft: "10px",

                }}>
                    <img style={{ width: "60px", height: "50px", padding: '10px 10px 10px 10px' }}
                        src={logo} className="d-inline-block align-top" alt="React Bootstrap logo" /> <span style={{ fontSize: "20px", fontWeight: "bold", color: "#0081C9 " }}>
                        Brain Tumor Detection</span>

                </Link>

                <div

                    className=" navbar-collapse ms-auto " id="navbarSupportedContent">
                    <ul style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        marginRight: "10px",

                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#0081C9!important",
                        fontFamily: "Arial",


                    }}
                        className="navbar-nav me-auto  "
                    >
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Scan MRI</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pi" className="nav-link">Register Patient</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rp" className="nav-link">Patient Record</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ar" className="nav-link">All Records</Link>
                        </li>
                    </ul>
                </div>
            </nav >
        </div >
    )
}

export default NavBar