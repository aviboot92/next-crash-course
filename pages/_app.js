import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <h1>Hello</h1>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
