

// Import du hook useState pour gérer une valeur dans le composant.
import { useState } from "react";


// Déclaration du composant qui affichera le formulaire de question.
const QuestionForm = () => {
    // Valeur initiale du champ de texte.
    const [inputValue, setInputValue] = useState('Tapez votre texte')

    const checkValue = (value) => {
        if (!value.includes('fleur')) {
            setInputValue(value)
    }
    }

    // Fonction appelée lors de la validation du formulaire.
    const hundleSubmit = (event) => {
        // Empêche le comportement par défaut du navigateur.
        event.preventDefault();
        // Affiche la valeur envoyée dans une boîte d'alerte.
        alert(event.target.question.value);
    }

    // Affichage du composant dans la page.
    return (
        <div>
            {/* Zone de texte du formulaire. */}
            <textarea 
            value={inputValue} 
            onChange={(e) => checkValue(e.target.value)} 
            />
            
            {/* Bouton de validation du formulaire. */}
            <button onClick={() => alert(inputValue)}>Cliquez</button>
        </div>
    )
    
}
// Export du composant pour pouvoir l'utiliser ailleurs.
export default QuestionForm;
