import "../styles/globals.css";
import "antd/dist/antd.css";
import React from "react";
import { wrapper } from "../redux/store";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);
