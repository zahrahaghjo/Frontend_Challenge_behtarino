import styles from '../styles/Product.module.css';

export default function Title({title}){
    return(
        <p 
            className={`fs-6 mb-1 ${styles.header}`}
        >
        {title}
        </p>
    )
}