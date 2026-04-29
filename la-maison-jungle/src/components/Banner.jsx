/*
 Banner.jsx est le composant qui affiche la bannière de la page d'accueil de l'application(la barre de navigation.)
*/

//je vais importer mon logo
import logo from '../assets/fleur-logo.jpg'
//j'importe le Banner.css pour pouvoir utiliser les styles que j'ai défini dans ce fichier pour le composant Banner.
import '../styles/Banner.css'   
//importation de React pour pouvoir utiliser les fonctionnalités de React
const Banner = () => {
const title = "Bienvenue sur à la maison jungle"

    //return est la partie qui affiche le contenu de notre composant, ici on affiche un titre h1 avec le texte "Bienvenue sur à la maison jungle"
    return (
        <div className="banner">
            <img src={logo} alt="Logo" className="banner-logo" />
            <h1 className="banner-title">{title}</h1>
        </div>
        
    )
    
}
 
//exportation du composant Banner pour pouvoir l'utiliser dans d'autres fichiers
export default Banner