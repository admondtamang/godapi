import { ToastContainer } from "react-toastify";
import Home from "./Home";
import Navigation from "../components/Navigation";
import Head from "next/head";
import { useSession } from "next-auth/client";
import { Login } from "../components/Login";
import { Button } from "antd";
import { signOut } from "next-auth/client";
import Loading from "../components/Loading";

export default function index() {
    const [session, loading] = useSession();

    // if (!session) {
    //     return <Login />;
    // }
    // if (loading) {
    //     return <Loading />;
    // }
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
