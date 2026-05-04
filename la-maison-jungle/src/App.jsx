import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


//Sur la ligne 8 on importe le composant Banner que nous avons créer dans le dossier components.
import Banner from './components/Banner'
//Sur la ligne 9 on importe le composant Cart que nous avons créer dans le dossier components.
import Cart from './components/Cart'
//Sur la ligne 10 le composant App est le composant principal de notre application, c'est lui qui va afficher tous les autres composants.
import ShoppingList from './components/ShoppingList'
import logo from './assets/fleur-logo.jpg'

import styles from './styles/Banner.module.css'


function App() {
  const title = "Bienvenue sur à la maison jungle"
 
//Sur la ligne 13 ,return est la partie qui affiche le contenu de notre application, ici on affiche le composant Banner .
  return (
    <>
  
      <Banner>
       <img src={logo} alt="Logo"className={styles.logo} /> 
        <h1 className={styles.title}>{title}</h1> 
      </Banner> 
      <Cart />   
      <ShoppingList />

    </>
  )
}
//exportation du composant App 
export default App
