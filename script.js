// script.js
const subjects = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "A cat", "An elephant", "A monkey", "A dinosaur"];
const actions = ["sat on", "danced with", "saw", "doesn't like", "kissed", "jumped over", "played with", "ran away"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a silly", "a loud", "a happy"];
const animals = ["goat", "monkey", "cow", "frog", "worm", "cat", "dog", "elephant", "tiger"];
const places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "in my shoes", "in the garden", "at the park", "under the bed"];

let selectedWords = ["", "", "", "", ""];

function cycleOptions(array, index) {
    let currentWord = selectedWords[index] || array[0];
    let currentIndex = array.indexOf(currentWord);
    let nextIndex = (currentIndex + 1) % array.length;
    const nextWord = array[nextIndex];
    document.getElementById(`button${index + 1}`).textContent = nextWord;
    return nextWord;
}

document.getElementById("button1").addEventListener("click", function () {
    selectedWords[0] = cycleOptions(subjects, 0);
});
document.getElementById("button2").addEventListener("click", function () {
    selectedWords[1] = cycleOptions(actions, 1);
});
document.getElementById("button3").addEventListener("click", function () {
    selectedWords[2] = cycleOptions(adjectives, 2);
});
document.getElementById("button4").addEventListener("click", function () {
    selectedWords[3] = cycleOptions(animals, 3);
});
document.getElementById("button5").addEventListener("click", function () {
    selectedWords[4] = cycleOptions(places, 4);
});

document.getElementById("generate-story").addEventListener("click", function () {
    const story = selectedWords.join(" ");
    document.getElementById("story-output").textContent = story;
});

document.getElementById("random-story").addEventListener("click", function () {
    const randomStory = `${getRandom(subjects)} ${getRandom(actions)} ${getRandom(adjectives)} ${getRandom(animals)} ${getRandom(places)}`;
    document.getElementById("story-output").textContent = randomStory;
});

document.getElementById("reset").addEventListener("click", function () {
    selectedWords = ["", "", "", "", ""];
    document.getElementById("story-output").textContent = "";
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`button${i}`).textContent = `Choose a ${['subject', 'action', 'adjective', 'animal', 'place'][i-1]}`;
    }
});

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
