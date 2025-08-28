//  get the class
// let think  that the btn class is copyBtn

const copyButtons = document.querySelectorAll(".copyBtn");


// for giving  All the button a  click function  using for loop

for (let copyButton of copyButtons) {

  copyButton.addEventListener('click', copy);

}

// using data attribute  to get the value of the text that we have copy onclick
// ex: <button id="999"> copy </button>
//< div class =" hotlineN"> 999 </div>
function getValue(values) {
  for (let value of values) {
    console.log(value.innerText);


  }
}

function copy(e) {
  let copiedText = document.querySelectorAll("hotlineN");;
  console.log(copiedText, " copyFunction ",);
  navigator.clipboard.writeText(copiedText);
  alert(`calling ${copiedText} ${copiedText}...`)
}