// Heart increasing function

function heart() {
  const allHeartBtn = document.querySelectorAll('.clickHeart');
  const heartCounts = document.getElementById('heart-counts');

  for (const btn of allHeartBtn) {
    btn.addEventListener('click', function () {
      increment(heartCounts)
    })
  }
}
copy()

// for the copy function

function copy() {
  const copyBtns = document.querySelectorAll('.copyBtn');
  const copyCount = document.getElementById('copycout');
  for (let copyBtn of copyBtns) {
    copyBtn.addEventListener('click', function () {
      // navigator.clipboard.write()
      let copyText = copyBtn.parentNode.parentNode.children[1].children[1].children[0].innerText;
      increment(copyCount)
      alert(`The number has been copied ${copyText}`)
      navigator.clipboard.writeText(copyText);
    })
  }
}

heart();

//a


// some increasing function
function increment(counts) {
  let countNum = parseInt(counts.innerText);
  countNum++
  counts.innerText = countNum;
}