import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as NextProvider } from "next-auth/client";

import store from "../redux/configureStore";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    let persistor = persistStore(store);
    return (
        <ChakraProvider>
            <NextProvider session={pageProps.session}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Component {...pageProps} />
                    </PersistGate>
                </Provider>
            </NextProvider>
        </ChakraProvider>
    );
}

export default MyApp;
