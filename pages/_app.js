import Layout from "../components/Layout/overallPage/Layout";
import LogoContextProvider from "../store/logo-context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <LogoContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LogoContextProvider>
  );
}

export default MyApp;
