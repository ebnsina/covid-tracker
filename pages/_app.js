import Router from "next/router";
import NProgress from "nprogress";
import Layout from "../components/layout/Layout";
import "../styles/nprogress.css";
import "../styles/globals.css";

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeError", NProgress.done);
Router.events.on("routeChangeComplete", NProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
