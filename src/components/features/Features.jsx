import styles from './Features.module.css';

const Features = () => {
  return (
    <section className={styles.features}>
      <h2 className="sr-only">Features</h2>
      <div className={styles.feature_item}>
        <img src="./img/icon-chat.png" alt="Chat Icon" className={styles.feature_icon}/>
        <h3 className={styles.feature_item_title}>You are our #1 priority</h3>
        <p>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </p>
      </div>
      <div className={styles.feature_item}>
        <img
          src="./img/icon-money.png"
          alt="Chat Icon"
          className={styles.feature_icon}
        />
        <h3 className={styles.feature_item_title}>More savings means higher rates</h3>
        <p>
          The more you save with us, the higher your interest rate will be!
        </p>
      </div>
      <div className={styles.feature_item}>
        <img
          src="./img/icon-security.png"
          alt="Chat Icon"
          className={styles.feature_icon}
        />
        <h3 className={styles.feature_item_title}>Security you can trust</h3>
        <p>
          We use top of the line encryption to make sure your data and money
          is always safe.
        </p>
      </div>
    </section>
  );
};

export default Features;
