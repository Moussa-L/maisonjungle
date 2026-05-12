// Composant qui affiche une échelle de soin selon le type reçu.
const quantityLabel = {
  1: 'peu',
  2: 'moyennement',
  3: 'beaucoup'
  
};

const CareScale = ({scaleValue, careType}) => {
    // Tableau utilisé pour répéter l'icône plusieurs fois.
    const range = [1,2,3];
    // Choix de l'icône selon le type de soin.
    const scaleType = careType === 'light' ? '☀️' : '💧';
    // Affichage de l'échelle de soin.
    return(
        <div
        onClick={() => {
                alert(`Niveau de ${quantityLabel[scaleValue]} ${
                    careType === "light" ? "lumière" : "eau"
                    }`)
                    
                    }}
                    >
            
            {
                
                // Parcours de chaque niveau pour afficher l'icône si nécessaire.
                range.map((rangeElement) => 
                     scaleValue >= rangeElement ? (
                    <span key={rangeElement.toString()}>{scaleType}</span>) : null
        

                )
            }
        </div>
    )
}

// Export du composant pour l'utiliser dans PlantItem.
export default CareScale;
