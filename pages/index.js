import { ToastContainer } from "react-toastify";
import Home from "./Home";
import Navigation from "../components/Navigation";
import Head from "next/head";
export default function index() {
    return (
        <>
            <Head>
                <title>GodApi</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

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
