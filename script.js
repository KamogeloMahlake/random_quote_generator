const body = document.querySelector("body")
const quoteBox = document.getElementById("quote-box");
const text = document.getElementById("text");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote");

const changeDisplay = async () => {
  try {
    const res = await fetch("https://quoteslate.vercel.app/api/quotes/random?count=50");
    const data = await res.json();
    let currentQuote = data[Math.floor(Math.random() * 50)]
    text.textContent = `"${currentQuote.quote}"`
    author.textContent = `-${currentQuote.author}`
  } catch (err) {
    alert(err)
  }
}

const randomColors = ()=>{
  const values = "123456789abcdef"
  let color = "#";
  
  for (let i = 0; i < 6; i++) {
    color += values[Math.floor(Math.random() * 16)];
  }
  quoteBox.style.cssText = `background-color: white`;
  body.style.backgroundColor =  color;
  newQuote.style.cssText = `color: white; background-color: ${color}`;
  text.style.cssText = `color: ${color}`;
  author.style.cssText = `color: ${color}`
}

window.addEventListener("load", () => {
changeDisplay();
randomColors();
})
newQuote.addEventListener("click",  () => {
changeDisplay();
randomColors();
})



