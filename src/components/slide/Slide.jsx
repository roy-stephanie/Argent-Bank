import styles from './Slide.module.css';

const Slide = () => {
  return (
    <div className={styles.slide}>
      <section className={styles.slide_content}>
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
};

export default Slide;
