function sendMessage() {
    const input = document.getElementById("chat-input");
    const chatBox = document.getElementById("chat-box");
    const message = input.value.trim();
    if (message) {
        const messageItem = document.createElement("p");
        messageItem.textContent = message;
        chatBox.appendChild(messageItem);
        input.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function requestSong() {
    const input = document.getElementById("song-request");
    const list = document.getElementById("song-list");
    const song = input.value.trim();
    if (song) {
        const listItem = document.createElement("li");
        listItem.textContent = song;
        list.appendChild(listItem);
        input.value = "";
    }
}

document.getElementById("emoji-picker").addEventListener("click", function(event) {
    const emojiContainer = document.getElementById("emoji-container");
    emojiContainer.innerHTML = "";
    const emojis = "😊😂🤣😍😘😎😉😁😇😜💀🤡💖💜🖤💫✨🔥⭐🌟🌈🎧🎵🎶🎤🎸".split("");
    emojis.forEach(emoji => {
        const span = document.createElement("span");
        span.textContent = emoji;
        span.addEventListener("click", function() {
            document.getElementById("chat-input").value += emoji;
            emojiContainer.style.display = "none";
        });
        emojiContainer.appendChild(span);
    });
    emojiContainer.style.display = "flex";
    event.stopPropagation();
});

document.addEventListener("click", function(event) {
    if (!event.target.closest("#emoji-picker") && !event.target.closest("#emoji-container")) {
        document.getElementById("emoji-container").style.display = "none";
    }
});
