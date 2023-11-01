// create array for codes
const emojiCodes = [
    9749,
    9924,
    10024,
    128554,
    128556,
    128579,
    128128,
    129310,
    128123,
    129485,
    129335,
    129396,
];

//store gallery section in variable
const emojiGallery = document.getElementById("emoji-gallery");

//loop through the codes in the array to create an emoji card
emojiCodes.forEach((code) => {
    
    // creates emoji card div
    const card = document.createElement("div");
    card.className = "emoji-card";

    // creates emoji icon div
    const emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.innerHTML = `&#${code};`;

    // creates code div for text
    const codeText = document.createElement("div");
    codeText.textContent = `${code}`;

    // puts emoji icon and dec code in the emoji card
    card.appendChild(emoji);
    card.appendChild(codeText);

    // puts emoji card in the gallery section
    emojiGallery.appendChild(card);
});
