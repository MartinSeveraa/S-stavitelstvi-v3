import styles from './USP.module.scss'

const Usp = () => {
  return (
    <section className={styles.usp}>
      <div className={styles.usp__stats}>
        <div>
          <strong>50+</strong>
          <span>Projektů</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Spokojenost</span>
        </div>
        <div>
          <strong>24/7</strong>
          <span>Podpora</span>
        </div>

        <div>
          <strong>20 let</strong>
          <span>Zkušeností</span>
        </div>
      </div>
    </section>
  )
}

export default Usp