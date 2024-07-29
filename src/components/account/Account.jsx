import styles from './Account.module.css';

const Account = () => {
  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      <section className={styles.Account}>
        <div className={styles.Account_content_wrapper}>
          <h3 className={styles.Account_title}>Argent Bank Checking (x8349)</h3>
          <p className={styles.Account_amount}>$2,082.79</p>
          <p className={styles.Account_amount_description}>Available Balance</p>
        </div>
        <div className={styles.Account_content_wrapper_cta}>
          <button className={styles.Transaction_button}>View transactions</button>
        </div>
      </section>
      <section className={styles.Account}>
        <div className={styles.Account_content_wrapper}>
          <h3 className={styles.Account_title}>Argent Bank Savings (x6712)</h3>
          <p className={styles.Account_amount}>$10,928.42</p>
          <p className={styles.Account_amount_description}>Available Balance</p>
        </div>
        <div className={styles.Account_content_wrapper_cta}>
          <button className={styles.Transaction_button}>View transactions</button>
        </div>
      </section>
      <section className={styles.Account}>
        <div className={styles.Account_content_wrapper}>
          <h3 className={styles.Account_title}>Argent Bank Credit Card (x8349)</h3>
          <p className={styles.Account_amount}>$184.30</p>
          <p className={styles.Account_amount_description}>Current Balance</p>
        </div>
        <div className={styles.Account_content_wrapper_cta}>
          <button className={styles.Transaction_button}>View transactions</button>
        </div>
      </section>
    </>
  );
};

export default Account;
