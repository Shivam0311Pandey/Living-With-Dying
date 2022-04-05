import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "./logo.png";
import { useMoralis } from "react-moralis";

const Navbar = () => {

    const { authenticate, authError, isAuthenticated, logout, user } = useMoralis();
    const [watchWeb3AuthModal, setWatchWeb3AuthModal] = useState(false);

    // if (typeof window !== "undefined" && document.getElementById("w3a-modal")) {
    //     document.getElementById("w3a-modal").style.zIndex = "500";
    // }

    let checkWeb3AuthModalTimeout;
    useEffect(() => {
        checkWeb3AuthModalTimeout = setTimeout(changeWeb3AuthModalVisibility, 100);
    }, [watchWeb3AuthModal]);

    function changeWeb3AuthModalVisibility() {
        if (document.getElementById("w3a-modal")) {
            document.getElementById("w3a-modal").style.zIndex = "10";
            clearTimeout(checkWeb3AuthModalTimeout);
        }
        console.log("FUCK UUUUUUUUUUUUUUU")
    }

    useEffect(() => {
        console.log(authError);
        // <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
        // <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        //     <div class="toast-header">
        //     <img src="..." class="rounded me-2" alt="...">
        //     <strong class="me-auto">Bootstrap</strong>
        //     <small>11 mins ago</small>
        //     <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        //     </div>
        //     <div class="toast-body">
        //     Hello, world! This is a toast message.
        //     </div>
        // </div>
        // </div>
    }, [authError]);

    const handleLogin = async () => {
        setWatchWeb3AuthModal(true);
        await authenticate({
            provider: "web3Auth",
            clientId: "BHTLRuzqq8826X_pv5PkbvsilGzEvkxCYVQv_3vZN4LbnIiEqyN72yq_xgrNNjx0ThgkxQFyczZdNsj2UAY73Sk",
            theme: "light",
            chainId: 0x13881,
            appLogo:
                     "https://musixverse.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-black.ab1ae84f.svg&w=256&q=75",
            loginMethodsOrder: ["google", "facebook", "twitter", "apple", "linkedin", "discord", "github", "email_passwordless"],
            signingMessage: "Living With Dying Authentication",
        });
    };

    // useEffect(()=>{
    //     const navHeight = document.querySelector('.navbar').offsetHeight;
    //     document.querySelector('.sidebar-nav').style.marginTop = `${navHeight}px`;
    // }, [])

    const [today, setToday] = useState()

    const getToday = () =>{
        let d = new Date();
        d = d.toISOString().split('T')[0];
        setToday(d);
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default fixed-top">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                <div className="navbar-brand d-flex ">
                    <span className="material-icons-outlined menu" style={{margin: "0 0.6rem"}}>menu</span>
                </div>
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" width="33rem" height="38rem" />
                </a>
                <a className="navbar-brand" href="#">Living With Dying</a>
                </div>
                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <div>
                        <form className="d-flex" style={{marginLeft: "4.5rem"}}>
                            <div className="tip">
                                <input className="form-control me-2 cal-input shadow-none" type="date" max={today} onFocus = {getToday} />
                                <span className="tooltiptext">Search Entry</span>
                            </div>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={handleLogin}>SignUp/LogIn</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </nav> 
        <nav className="sidebar">
            <ul className="sidebar-nav d-flex flex-column align-items-center">
                <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                        <span className="material-icons-outlined sidebar-icon">
                            book
                        </span>
                        <div className="link-text">Home</div>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                        <span className="material-icons-outlined sidebar-icon">
                            collections
                        </span>
                        <span className="link-text">Gallery</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                        <span className="material-icons-outlined sidebar-icon">
                            format_quote
                        </span>
                        <span className="link-text">Quote</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                        <span className="material-icons-outlined sidebar-icon">
                            event
                        </span>
                        <span className="link-text">Reminder</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                        <span className="material-icons-outlined sidebar-icon">
                            delete_forever
                        </span>
                        <span className="link-text">Delete</span>
                    </a>
                </li>
                <li className="sidebar-item d-lg-none">
                    <a className="sidebar-link" href="#">
                        <span className="material-icons-outlined sidebar-icon">
                            info
                        </span>
                        <span className="link-text">About</span>
                    </a>
                </li>
                <li className="sidebar-item d-lg-none">
                    <a className="sidebar-link" href="#">
                        <span className="material-icons-outlined sidebar-icon">
                            login
                        </span>
                        <span className="link-text">SignUp/LogIn</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a className="sidebar-link" href="#">
                        <span className="material-icons-outlined sidebar-icon">
                            contact_support
                        </span>
                        <span className="link-text">Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
        
        </>
    );
}
 
export default Navbar;