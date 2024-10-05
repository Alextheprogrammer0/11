const words = [
    { id: 1, word: 'UNO', sound: '1.mp3' },
    { id: 2, word: 'DOS', sound: '2.mp3' },
    { id: 3, word: 'TRES', sound: '3.mp3' },
    { id: 4, word: 'CUATRO', sound: '4.mp3' },
    { id: 5, word: 'CINCO', sound: '5.mp3' },
    { id: 6, word: 'SEIS', sound: '6.mp3' },
    { id: 7, word: 'SIETE', sound: '7.mp3' },
    { id: 8, word: 'OCHO', sound: '8.mp3' },
    { id: 9, word: 'NUEVE', sound: '9.mp3' }
];

const images = [
    { id: 1, img: 'img num 1A.png' },
    { id: 2, img: 'img num 2A.png' },
    { id: 3, img: 'img num 3A.png' },
    { id: 4, img: 'img num 4A.png' },
    { id: 5, img: 'img num 5A.png' },
    { id: 6, img: 'img num 6A.png' },
    { id: 7, img: 'img num 7A.png' },
    { id: 8, img: 'img num 8A.png' },
    { id: 9, img: 'img num 9A.png' }
];

let selectedWord = null;
let selectedImage = null;

function createItems() {
    const wordsContainer = document.getElementById('words');
    const imagesContainer = document.getElementById('images');

    words.forEach(word => {
        const wordDiv = document.createElement('div');
        wordDiv.classList.add('item');
        wordDiv.textContent = word.word;
        wordDiv.dataset.id = word.id;
        wordDiv.dataset.sound = word.sound;
        wordDiv.addEventListener('click', () => selectWord(wordDiv));
        wordsContainer.appendChild(wordDiv);
    });

    images.forEach(image => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('item');
        const img = document.createElement('img');
        img.src = image.img;
        img.alt = image.img;
        imgDiv.appendChild(img);
        imgDiv.dataset.id = image.id;
        imgDiv.addEventListener('click', () => selectImage(imgDiv));
        imagesContainer.appendChild(imgDiv);
    });
}

function selectWord(element) {
    if (selectedWord) {
        selectedWord.classList.remove('selected');
    }
    selectedWord = element;
    selectedWord.classList.add('selected');
    playSound(selectedWord.dataset.sound);
    checkMatch();
}

function selectImage(element) {
    if (selectedImage) {
        selectedImage.classList.remove('selected');
    }
    selectedImage = element;
    selectedImage.classList.add('selected');
    checkMatch();
}

function playSound(sound) {
    const audio = new Audio(sound);
    audio.play();
}

function checkMatch() {
    if (selectedWord && selectedImage) {
        if (selectedWord.dataset.id === selectedImage.dataset.id) {
            selectedWord.classList.add('matched');
            selectedImage.classList.add('matched');
        }
        selectedWord.classList.remove('selected');
        selectedImage.classList.remove('selected');
        selectedWord = null;
        selectedImage = null;
    }
}

createItems();
