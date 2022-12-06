import React from 'react'
import styles from "../styles/ProductsCard.module.css";

const ProductCard = ({title, short_description}) => {
  return (
    <div className={styles.productCard}>
        <h3>{title}</h3>
        <p>{short_description}</p>
    </div>
  )
}

export default ProductCard