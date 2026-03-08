import styles from "./Company.module.scss";
import button from "../Buttons/Button.module.scss";

import companyImg from "../../../assets/images/hero_2.jpg";

const Company = () => {
  return (
    <section className={styles.company}>
      <div className={styles.container}>
        
        <div className={styles.left}>
          <img src={companyImg} alt="Stavba" className={styles.image} />

          <div className={styles.experience}>
            <span className={styles.number}>20</span>
            <span className={styles.text}>
              ROKŮ <br /> ZKUŠENOSTÍ
            </span>
          </div>
        </div>

        <div className={styles.right}>
          <span className={styles.overTitle}>O SPOLEČNOSTI</span>

          <h2 className={styles.title}>
            STAVÍME S <br /><span>VÁŠNÍ</span> A PRECIZNOSTÍ
          </h2>

          <p className={styles.lead}>
            Jsme rodinná stavební firma s dvacetiletou tradicí a stovkami
            spokojených zákazníků po celé České republice.
          </p>

          <p className={styles.text_reverse}>
            Naše firma S-Stavitelství vznikla v roce 2004 s jednoduchým cílem:
            nabízet stavební práce nejvyšší kvality za rozumné ceny. Za ta léta
            jsme vybudovali silný tým zkušených odborníků, kteří přistupují ke
            každé zakázce s plným nasazením.
          </p>

          <p className={styles.text_reverse}>
            Od rodinných domů přes komerční stavby až po rekonstrukce
            historických objektů – každý projekt bereme jako svůj vlastní a
            dbáme na každý detail.
          </p>

          <div className={styles.features}>
            <ul>
              <li>Vlastní tým odborníků</li>
              <li>Pevné termíny</li>
              <li>Záruka 5 let</li>
              <li>Moderní technologie</li>
            </ul>

            <ul>
              <li>Certifikované materiály</li>
              <li>Transparentní ceny</li>
              <li>Pojištěná firma</li>
              <li>Ekologický přístup</li>
            </ul>
          </div>

          <a
          href=""
          className={`${button.button} ${button["button--cta"]}`}
        >
          Nezávazná konzultace →
        </a>
        </div>

      </div>
    </section>
  );
};

export default Company;