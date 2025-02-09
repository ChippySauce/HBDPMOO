window.onload = function() {
    createConfetti();
};

function createConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.style.left = Math.random() * window.innerWidth + 'px';
        confettiPiece.style.animationDuration = (Math.random() * 2 + 3) + 's';
        confettiContainer.appendChild(confettiPiece);
    }
}

function startSurprise() {
    const music = document.getElementById('bg-music');
    music.play().catch(err => console.log("Autoplay blocked:", err));

    document.getElementById('surpriseMessage').style.display = 'block';
    document.getElementById('main-button').style.display = 'none';

    setTimeout(() => {
        showPopUp("Did you think that was the real bday message??", ["Yes", "No"]);
    }, 1000);
}

function showPopUp(message, options) {
    const popUpBox = document.createElement('div');
    popUpBox.classList.add('pop-up-box');

    const heading = document.createElement('h2');
    heading.textContent = message;
    popUpBox.appendChild(heading);

    const yesButton = document.createElement('button');
    yesButton.textContent = options[0];
    yesButton.classList.add('pop-up-btn');
    yesButton.onclick = () => {
        popUpBox.style.display = 'none';
        setTimeout(() => {
            alert("Come on I'm not that mean.");
            showWannaSeePopUp();
        }, 1000);
    };

    const noButton = document.createElement('button');
    noButton.textContent = options[1];
    noButton.classList.add('pop-up-btn');
    noButton.onclick = () => {
        popUpBox.style.display = 'none';
        setTimeout(() => {
            alert("Nahhh.")
            showWannaSeePopUp();
        }, 1000);
    };

    popUpBox.appendChild(yesButton);
    popUpBox.appendChild(noButton);
    document.body.appendChild(popUpBox);
    popUpBox.style.display = 'block';
}

function showWannaSeePopUp() {
    const popUpBox = document.createElement('div');
    popUpBox.classList.add('pop-up-box');

    const heading = document.createElement('h2');
    heading.textContent = "Wanna see the actual message?";
    popUpBox.appendChild(heading);

    const yesButton = document.createElement('button');
    yesButton.textContent = "Yes";
    yesButton.classList.add('pop-up-btn');
    yesButton.onclick = () => {
        popUpBox.style.display = 'none';
        setTimeout(() => {
            showParagraph();
        }, 1000);
    };

    const defButton = document.createElement('button');
    defButton.textContent = "Yes";
    defButton.classList.add('pop-up-btn');
    defButton.onclick = () => {
        popUpBox.style.display = 'none';
        setTimeout(() => {
            showParagraph();
        }, 1000);
    };

        const interval = setInterval(() => {
            yesButton.textContent = phrases[counter % phrases.length];
            counter++;
        }, 1000);


    popUpBox.appendChild(yesButton);
    popUpBox.appendChild(defButton);
    document.body.appendChild(popUpBox);
    popUpBox.style.display = 'block';
}

function showParagraph() {
    const popUpBox = document.createElement('div');
    popUpBox.classList.add('pop-up-box');

    const heading = document.createElement('h2');
    heading.textContent = "Here's the real BDAY message:";
    popUpBox.appendChild(heading);

    const paragraph = document.createElement('p');
    paragraph.textContent = "Happy Birthday, big bro! I hope you have the best day filled with all the things you love whether it's hanging out, enjoying some good food, or just taking it easy. I wish you a year ahead that's packed with good times, laughter, and all the things that make you happiest. Here's to new adventures, more fun memories, and everything you're hoping for. Enjoy your special day to the fullest! I'm too poor for brownies *sobs* sooooo have virtual ones 🧱🧱🧱!! I'm writing this and a thought popped up in my mind, can you even translate the whole thing???? Oh well anyways HAPPY BIRTHDAYYYYYYYYYYY !!!! ( you gay )";
    popUpBox.appendChild(paragraph);

    document.body.appendChild(popUpBox);
    popUpBox.style.display = 'block';
}
