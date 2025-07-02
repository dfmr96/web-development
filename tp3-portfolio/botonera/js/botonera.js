function playSound(file) {
  console.log("Intentando reproducir:", file);
  const audio = new Audio(file);
  audio.play().catch(error => console.error("Error reproduciendo el sonido:", error));
}
