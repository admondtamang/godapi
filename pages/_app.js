import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ChakraProvider } from "@chakra-ui/react";

import store from "../redux/configureStore";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    let persistor = persistStore(store);
    return (
        <ChakraProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        </ChakraProvider>
    );
}

export default MyApp;
