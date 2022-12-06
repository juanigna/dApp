import Link from 'next/link'
import React from 'react'
import styles from "../styles/Menu.module.css";

const Menu = () => {
  return (
    <nav>
        <ul className={styles.menu}>
            <li>
                <Link href="/">
                    Inicio
                </Link>
            </li>
            <li>
                <Link href="/products">
                    Productos
                </Link>
            </li>
            <li>
                <Link href="/profile">
                    Perfil
                </Link>
            </li>
        </ul>
    </nav>
)
}

export default Menu