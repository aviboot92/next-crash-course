import Meta from "./Meta";
import Nav from "./../components/Nav";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

/**VAK
 *
 */
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};
// #endregion

export default Layout;
