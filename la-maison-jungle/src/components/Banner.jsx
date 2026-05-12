/*
 Banner.jsx est le composant qui affiche la bannière de la page d'accueil de l'application(la barre de navigation.)
 C'est quoi un composant ? Un composant est une fonction qui retourne du JSX (une syntaxe qui ressemble à du HTML) et qui peut être réutilisée dans d'autres parties de l'application.
 Le composant Banner prend en paramètre des enfants (children)
 qui sont les éléments qui seront affichés à l'intérieur de la bannière. 
 Par exemple, on peut passer un titre ou une image en tant qu'enfant du composant Banner pour les afficher dans la bannière.
*/

//j'importe le Banner.css pour pouvoir utiliser les styles que j'ai défini dans ce fichier pour le composant Banner.
import styles from '../styles/Banner.module.css'

//je vais importer mon logo
import logo from '../assets/fleur-logo.jpg'

/**
 * 
 * @param {*} param0 
 * @returns 
 * le composant Banner est un composant fonctionnel qui prend en paramètre des enfants (children) et qui retourne une div avec une classe banner qui contient les enfants passés en paramètre.
 */  
//importation de React pour pouvoir utiliser les fonctionnalités de React
// Composant qui affiche le contenu passé entre les balises <Banner>.
const Banner = ({children}) => {
// Titre conservé dans le composant.
const title = "Bienvenue sur à la maison jungle"

    //return est la partie qui affiche le contenu de notre composant, ici on affiche un titre h1 avec le texte "Bienvenue sur à la maison jungle"
    return (
        <div className={styles.banner}>
           {/* Affichage des éléments envoyés depuis App. */}
           {children}
            
        </div>
        
    )
    
}
 
//exportation du composant Banner pour pouvoir l'utiliser dans d'autres fichiers
export default Banner
