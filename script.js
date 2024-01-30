document.addEventListener('DOMContentLoaded', function () {
    const typingTextElement = document.querySelector('.typing-text');

    const phrases = [" Computer Science Student", "n Avionics Enthusiast", " Problem Solver", "n Engineer"]; // Add your phrases here
    let currentPhraseIndex = 0;
    let charIndex = 0;
    let isTyping = true;

    function typeText() {
        const currentPhrase = phrases[currentPhraseIndex];

        if (isTyping && charIndex <= currentPhrase.length) {
            typingTextElement.textContent = currentPhrase.substring(0, charIndex) + "_";
            charIndex++;

            if (charIndex > currentPhrase.length) {
                isTyping = false;
                setTimeout(() => {
                    isTyping = true;
                    charIndex = 0;
                    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to the next phrase
                    typeText(); // Start typing the next phrase
                }, 1000); // Wait for a second before typing the next phrase
            }
        } else {
            backspaceText();
        }

        setTimeout(typeText, 50); // Adjust the duration (in milliseconds) as needed
    }

    function backspaceText() {
        if (charIndex >= 0) {
            typingTextElement.textContent = currentPhrase.substring(0, charIndex) + "_";
            charIndex--;
        } else {
            charIndex = 0;
            isTyping = true; // Enable typing for the next phrase
        }

        if (charIndex >= 0) {
            setTimeout(backspaceText, 100); // Adjust the duration (in milliseconds) as needed
        } else {
            setTimeout(typeText, 1000); // Wait for a second before typing the next phrase
        }
    }

    typeText();
});
