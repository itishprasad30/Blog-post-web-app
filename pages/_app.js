import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import "../styles/global.scss";

import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
