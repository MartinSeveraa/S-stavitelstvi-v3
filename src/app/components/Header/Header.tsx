import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Top bar */}
      <div className={styles.header__top}>
        <div className={styles.header__container}>
          <div className={styles.header__contact}>
            <a href="tel:+420123456789">+420 123 456 789</a>
            <a href="mailto:info@s-stavitelstvi.cz">
              info@s-stavitelstvi.cz
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className={styles.header__main}>
        <div className={styles.header__container}>
          <div className={styles.header__brand}>
            <span className={styles.header__logo}>
              S-STAVITELSTVÍ
            </span>
            <span className={styles.header__tagline}>
              Kvalita a tradice
            </span>
          </div>

          <nav className={styles.header__nav}>
            <a href="#home">Domů</a>
            <a href="#services">Služby</a>
            <a href="#references">Realizace</a>
            <a href="#about">O nás</a>
            <a href="#contact">Kontakty</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header