import React from 'react'
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import styles from  './Header.module.scss';


const Header = () => {
  return (
      <Navigation className={styles.header}>
        <form className={styles.nav__form}>
          <input type='text' placeholder='Поиск по названию картины' className={styles.input}/>
          <Button>
            Найти
          </Button>
        </form>
      </Navigation>
   );
}

export default Header;
