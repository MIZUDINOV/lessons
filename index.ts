let button: HTMLButtonElement = document.querySelector(".button");

button.addEventListener("click", () => {
  button.className = "button-two";
});

const input: HTMLInputElement = document.querySelector(".input")

input.addEventListener('input', (event: InputEvent) => {
    let value: string = (event.target as HTMLInputElement).value
    console.log(value)
})

