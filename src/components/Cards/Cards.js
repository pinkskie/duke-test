import React from 'react'
import styles from  './Cards.module.scss';
import Button from '../Button/Button';
import check from '../../assets/icons/check.svg'

const Cards = ({item, handleClick, loading}) => {
    
  return (
    <div className={styles.wrapper} style={{opacity: item.sold ? 0.5 : 1}}>
      <img src={item.img} alt='pc' className={styles.img}/>
      <div className={styles.wrapper__content}>
        <p className={styles.wrapper__value}>{item.value}</p>
        <div className={styles.wrapper__bottom}>
          {item.sold === true ? <p>Продана на аукционе</p> : (
            <>
              <div className={styles.price}>
                <div className={styles.price__old}><s>{item.old}</s></div>
                <div className={styles.price__new}>{item.new}</div>
              </div>
              <Button 
                onClick={() => handleClick(item)} 
                loading={loading} 
                style={item.basket ? {padding:'14px 11px', width: '100%', backgroundColor: '#5B3A32' } : {width: '100%'}}
              >
                {item.basket ? <><img src={check} alt=''/>В корзинe</> : 'Купить'}
              </Button>
            </>
          )}
          
        </div>
      </div>
    </div>
   );
}

export default Cards;
