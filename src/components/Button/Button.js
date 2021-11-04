import React from 'react'
import styles from  './Button.module.scss';


const Button = ({disabled, children, onClick, loading, style}) => {
  return (
    <>
      <button 
        className={styles.button} 
        disabled={disabled || loading} 
        onClick={onClick}
        style={style}
      >
        {loading ? 'loading' : children}
      </button>
    </>
   );
}

export default Button;
