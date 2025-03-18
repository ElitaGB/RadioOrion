// Función para pedir una canción
function requestSong() {
    const input = document.getElementById("song-request");
    const songList = document.getElementById("song-list");
    const songName = input.value.trim();

    if (songName) {
        const listItem = document.createElement("li");
        listItem.textContent = songName;
        songList.appendChild(listItem);
        input.value = "";
    }
}

// Función para enviar mensajes en el chat
function sendMessage() {
    const input = document.getElementById("chat-input");
    const chatBox = document.getElementById("chat-box");
    const message = input.value.trim();

    if (message) {
        const messageItem = document.createElement("p");
        messageItem.textContent = message;
        chatBox.appendChild(messageItem);
        chatBox.scrollTop = chatBox.scrollHeight; // Autoscroll
        input.value = "";
    }
}

// Configurar el reproductor de radio
document.addEventListener("DOMContentLoaded", () => {
    const streamPlayer = document.getElementById("stream-player");
    const streamSource = document.getElementById("stream-source");

    // Cambia esta URL por la URL de tu transmisión
    const streamURL = "http://tu-servidor:8000/stream";
    
    streamSource.src = streamURL;
    streamPlayer.load();
});
