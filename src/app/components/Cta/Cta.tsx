import styles from "./Cta.module.scss";
import button from "../Buttons/Button.module.scss";

const Cta = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.cta__content}>
        <div className={styles.cta__text}>
        <p className={styles.cta__subtitle}>MÁTE PROJEKT NA MYSLI?</p>
        <h2 className={styles.cta__title}>ZAVOLEJTE NÁM JEŠTĚ DNES</h2>
        </div>
         <a
          href="tel:+420123456789"
          className={`${button.button} ${button["button--inverse"]}`}
        >
          +420 123 456 789
        </a>
      </div>
    </section>
  );
};

export default Cta;