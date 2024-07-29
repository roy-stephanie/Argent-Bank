import Slide from "../../components/slide/Slide";
import Features from "../../components/features/Features";
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.Home}>
      <Slide/>
      <Features />
    </div>
  );
};

export default Home;
