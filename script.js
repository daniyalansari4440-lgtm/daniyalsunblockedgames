// Game database
const games = [
    {
        id: 1,
        name: 'Tic Tac Toe',
        icon: '⭕',
        description: 'Classic game of Tic Tac Toe. Play against the computer!',
        category: 'strategy'
    },
    {
        id: 2,
        name: 'Snake Game',
        icon: '🐍',
        description: 'Eat dots and grow longer. Avoid hitting the walls!',
        category: 'action'
    },
    {
        id: 3,
        name: 'Memory Match',
        icon: '🧠',
        description: 'Test your memory by matching pairs of cards.',
        category: 'puzzle'
    },
    {
        id: 4,
        name: 'Flappy Bird',
        icon: '🐦',
        description: 'Tap to fly through the pipes. How far can you go?',
        category: 'action'
    },
    {
        id: 5,
        name: '2048',
        icon: '🔢',
        description: 'Combine tiles to reach 2048. A fun math puzzle!',
        category: 'puzzle'
    },
    {
        id: 6,
        name: 'Hangman',
        icon: '🎯',
        description: 'Guess the word before you run out of attempts.',
        category: 'puzzle'
    },
    {
        id: 7,
        name: 'Breakout',
        icon: '🧱',
        description: 'Break all the bricks with your paddle. Addictive!',
        category: 'action'
    },
    {
        id: 8,
        name: 'Rock Paper Scissors',
        icon: '✂️',
        description: 'Play the classic game against the computer.',
        category: 'strategy'
    },
    {
        id: 9,
        name: 'Sudoku',
        icon: '📊',
        description: 'Solve the number puzzle. Challenge your mind!',
        category: 'puzzle'
    },
    {
        id: 10,
        name: 'Jumper',
        icon: '⬆️',
        description: 'Jump on platforms and reach the top.',
        category: 'action'
    },
    {
        id: 11,
        name: 'Connect 4',
        icon: '🔴',
        description: 'Connect four pieces in a row to win!',
        category: 'strategy'
    },
    {
        id: 12,
        name: 'Color Match',
        icon: '🌈',
        description: 'Match colors as fast as you can. Test your reflexes!',
        category: 'action'
    }
];

// Load games on page load
document.addEventListener('DOMContentLoaded', () => {
    loadGames();
});

// Load and display games
function loadGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = '';

    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <div class="game-card-icon">${game.icon}</div>
            <div class="game-card-content">
                <h3>${game.name}</h3>
                <p>${game.description}</p>
                <button class="play-btn" onclick="playGame(${game.id})">Play Now</button>
            </div>
        `;
        gamesGrid.appendChild(gameCard);
    });
}

// Filter games based on search
function filterGames() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const gameCards = document.querySelectorAll('.game-card');

    gameCards.forEach(card => {
        const gameName = card.querySelector('h3').textContent.toLowerCase();
        const gameDesc = card.querySelector('p').textContent.toLowerCase();

        if (gameName.includes(searchInput) || gameDesc.includes(searchInput)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Play game function
function playGame(gameId) {
    const game = games.find(g => g.id === gameId);
    if (game) {
        alert(`🎮 Starting ${game.name}!\n\nIn a real application, this would launch the game. For now, enjoy the demo site!`);
    }
}

// Handle contact form submission
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.children[0].value;
    const email = form.children[1].value;
    const message = form.children[2].value;

    // Show success message
    alert(`Thanks for reaching out, ${name}! We'll get back to you at ${email} soon.`);
    
    // Reset form
    form.reset();
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
