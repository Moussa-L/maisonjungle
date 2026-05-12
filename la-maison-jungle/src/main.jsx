// Active le mode strict de React pendant le développement.
import { StrictMode } from 'react'
// Fonction React qui permet d'accrocher l'application au DOM.
import { createRoot } from 'react-dom/client'
// Styles globaux de l'application.
import './index.css'
// Composant racine de l'application.
import App from './App.jsx'

// Point d'entrée qui affiche l'application dans l'élément #root.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
