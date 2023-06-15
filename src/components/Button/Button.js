import styles from './Button.module.scss';

const Button = props => {

  return (
    <button type='button' className={styles.btn} onClick={props.clickHandler} >{props.children}</button>
  )
}

export default Button;