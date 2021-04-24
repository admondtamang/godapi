import { ToastContainer } from "react-toastify";
import Home from "./Home";
import Navigation from "../components/Navigation";

export default function index() {
    return (
        <>
            <Navigation>
                <Home />
            </Navigation>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}
