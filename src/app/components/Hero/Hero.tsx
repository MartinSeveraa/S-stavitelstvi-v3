import styles from "./Hero.module.scss";
import Button from "../Buttons/Button";
import logo from "../../../assets/images/logo.svg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__logoWrapper}>
          <img
            src={logo}
            alt="S-Stavitelství logo"
            className={styles.hero__logoImg}
          />
        </div>

        <span className={styles.hero__subtitle}>
          STAVEBNÍ ODBORNÍCI
        </span>

        <h1 className={styles.hero__title}>
          Zkušenosti <br />
          <strong>mluví samy</strong> <br />
          za sebe
        </h1>

        <p className={styles.hero__text}>
          S-Stavitelství nabízí komplexní stavební služby – od hrubé
stavby po dokončovací práce. Kvalita, spolehlivost a tradice
od roku 2004.
        </p>

        <Button variant="inverse">
          NAŠE SLUŽBY →
        </Button>
      </div>
    </section>
  );
};

export default Hero;