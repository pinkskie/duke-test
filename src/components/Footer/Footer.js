import React from 'react';
import Navigation from '../Navigation/Navigation'; 
import styles from  './Footer.module.scss';
import phone from '../../assets/icons/phone.svg'
import address from '../../assets/icons/address.svg'

const Footer = () => {
  return (
    <>
      <Navigation className={styles.footer}>
        <div className={styles.footer__contacts}>
          <p><img src={phone} alt='phone'/>+7 (495) 555-55-55</p>
          <p><img src={address} alt='address'/>г. Алматы, ул. Фурманова, 24</p>
        </div>
      </Navigation>
    </>
   );
}

export default Footer;
