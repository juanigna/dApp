import React from 'react'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard';
import styles from "../styles/Products.module.css";

const products = () => {
  return (
    <Layout>
        <input type="text"/>
        <div className={styles.productsContainer}>
            <ProductCard title="Titulo" short_description="Descripcion"/>
            <ProductCard title="Titulo" short_description="Descripcion"/>
            <ProductCard title="Titulo" short_description="Descripcion"/>
            <ProductCard title="Titulo" short_description="Descripcion"/>
            <ProductCard title="Titulo" short_description="Descripcion"/>
            <ProductCard title="Titulo" short_description="Descripcion"/>
            <ProductCard title="Titulo" short_description="Descripcion"/>
            <ProductCard title="Titulo" short_description="Descripcion"/>
            <ProductCard title="Titulo" short_description="Descripcion"/>
            <ProductCard title="Titulo" short_description="Descripcion"/>
            <ProductCard title="Titulo" short_description="Descripcion"/>
            <ProductCard title="Titulo" short_description="Descripcion"/>
            <ProductCard title="Titulo" short_description="Descripcion"/>
            <ProductCard title="Titulo" short_description="Descripcion"/>
            <ProductCard title="Titulo" short_description="Descripcion"/>
            <ProductCard title="Titulo" short_description="Descripcion"/>
        </div>
    </Layout>
  )
}

export default products