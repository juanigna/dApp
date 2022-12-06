import React from 'react'
import Menu from './Menu'
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
        <h2 className={styles.logo}>Logo</h2>
        <Menu/>
    </header>
  )
}

export default Header