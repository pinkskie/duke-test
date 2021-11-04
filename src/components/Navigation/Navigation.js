import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'
import logo from '../../assets/icons/logo.svg'
import Button from '../Button/Button'

const Navigation = ({children, className}) => (
  <div className={[styles.wrapper, className].join(' ')}>
    <nav className={styles.container}>
      <ul className={styles.nav__link}>
      <li><img src={logo} alt='logo' className={styles.logo}/></li>
        <li><a href="#">Каталог</a></li>
        <li><a href="#">Доставка</a></li>
        <li><a href="#">Оплата</a></li>
        <li><a href="#">Контакты</a></li>
        <li><a href="#">О галерее</a></li>
      </ul>
      {children}
    </nav>
  </div>
)

export default Navigation;
