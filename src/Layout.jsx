import {Outlet} from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import Footer from "./components/footer/Footer";
import styles from './Layout.module.css';

const Layout = () => (
  <>
    <Nav/>
    <main className={styles.main_flex}>
      <Outlet/>
    </main>
    <Footer />
  </>
);

export default Layout;
