const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spin-btn');
const resultArea = document.getElementById('result-area');
const playerTurn = document.getElementById('player-turn');
const taskDisplay = document.getElementById('task-display');

const players = ["Person 1", "Person 2"]; // Apne naam yahan badal sakte ho

const truths = [
    "Last time kab jhoot bola tha?",
    "Tumhara sabse bada dar kya hai?",
    "Kisi ka koi secret pata hai jo bataya nahi?",
    "Mobile ka sabse ajeeb search history kya hai?"
];

const dares = [
    "Apne partner ke liye koi gana gao.",
    "Agli 2 turns tak robot ki tarah baat karo.",
    "Apne crush ko ek blank text bhejo.",
    "5 push-ups lagao."
];

let rotation = 0;

spinBtn.addEventListener('click', () => {
    rotation += 1800 + Math.random() * 360; // 5 full spins + random
    wheel.style.transform = `rotate(${rotation}deg)`;
    
    spinBtn.disabled = true;
    taskDisplay.innerText = "";
    
    setTimeout(() => {
        spinBtn.disabled = false;
        resultArea.classList.remove('hidden');
        const randomPlayer = players[Math.floor(Math.random() * players.length)];
        playerTurn.innerText = `${randomPlayer}'s Turn!`;
    }, 3000);
});

function getTask(type) {
    const list = type === 'truth' ? truths : dares;
    const randomTask = list[Math.floor(Math.random() * list.length)];
    taskDisplay.innerText = randomTask;
}
