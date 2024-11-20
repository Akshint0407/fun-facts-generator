const facts = [
    "I love hiking and have traveled to five national parks.",
    "I am an avid reader and read around 20 books per year.",
    "I once baked a 3-tiered cake for a family gathering!",
    "I speak three languages fluently.",
    "I'm learning to play the guitar in my free time."
];

let currentFactIndex = 0;
const factDisplay = document.getElementById('fact-display');
const nextButton = document.getElementById('next-fact');

// Display initial fact
factDisplay.textContent = facts[currentFactIndex];

// Add click event listener
nextButton.addEventListener('click', () => {
    currentFactIndex = (currentFactIndex + 1) % facts.length;
    factDisplay.textContent = facts[currentFactIndex];
});
