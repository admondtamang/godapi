import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import store from "../redux/configureStore";
import "../styles/globals.css";

import { ConfigProvider } from "antd";
import frFR from "antd/lib/locale/fr_FR";

function MyApp({ Component, pageProps }) {
    let persistor = persistStore(store);
    return (
        <ConfigProvider locale={frFR}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        </ConfigProvider>
    );
}

export default MyApp;
