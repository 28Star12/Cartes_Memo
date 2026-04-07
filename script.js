// On récupère les éléments de la page
const generateBtn = document.getElementById('generateBtn');
const inputText = document.getElementById('inputText');
const container = document.getElementById('flashcards-container');

// Quand on clique sur le bouton...
generateBtn.addEventListener('click', function() {
    // 1. On vide le conteneur au cas où il y aurait déjà des cartes
    container.innerHTML = '';

    // 2. On récupère le texte et on le sépare ligne par ligne
    const text = inputText.value;
    const lines = text.split('\n');

    // 3. Pour chaque ligne, on crée une carte
    lines.forEach(function(line) {
        // On vérifie que la ligne n'est pas vide et contient bien un tiret
        if (line.trim() !== '' && line.includes('-')) {
            
            // On sépare la question et la réponse
            const parts = line.split('-');
            const question = parts[0].trim();
            const answer = parts[1].trim();

            // 4. On crée les éléments HTML de la carte
            const card = document.createElement('div');
            card.className = 'flashcard';

            const inner = document.createElement('div');
            inner.className = 'flashcard-inner';

            const front = document.createElement('div');
            front.className = 'flashcard-front';
            front.textContent = question;

            const back = document.createElement('div');
            back.className = 'flashcard-back';
            back.textContent = answer;

            // 5. On assemble la carte
            inner.appendChild(front);
            inner.appendChild(back);
            card.appendChild(inner);

            // 6. On ajoute l'action pour la retourner au clic
            card.addEventListener('click', function() {
                card.classList.toggle('flipped');
            });

            // 7. On ajoute la carte terminée sur la page
            container.appendChild(card);
        }
    });
});