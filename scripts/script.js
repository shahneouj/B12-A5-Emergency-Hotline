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

//  copy button  function

function copy() {
  const copyBtns = document.querySelectorAll('.copyBtn');
  const copyCount = document.getElementById('copycout');
  for (let copyBtn of copyBtns) {
    copyBtn.addEventListener('click', function () {
      // get the innerText of the service number of the clicked copy button
      let copyText = copyBtn.parentNode.parentNode.children[1].children[1].children[0].innerText;
      increment(copyCount)
      alert(`The number has been copied ${copyText}`)
      navigator.clipboard.writeText(copyText);
    })
  }
}

heart();

//call button function

function call() {
  const callBtns = document.querySelectorAll(".callBtn");
  const callCount = document.getElementById('callCount');

  for (let callBtn of callBtns) {
    callBtn.addEventListener('click', function () {
      let countNum = parseInt(callCount.innerText);
      if (countNum == 0) {
        alert('❌ You can not call now, you need minimum 20 points')
        return;
      }
      countNum -= 20;
      callCount.innerText = countNum;
      // get the title and service number of the clicked call button
      let subtitle = callBtn.parentNode.parentNode.children[1].children[0].children[1].innerText;
      let serviceNumber = callBtn.parentNode.parentNode.children[1].children[1].children[0].innerText;
      makeElement(subtitle, serviceNumber);
      alert(`📞 Calling ${subtitle} ${serviceNumber}`);

    })
  }

}

call()

//  clear history button function

function clear() {
  const clearBtn = document.getElementById('clear-history-btn');
  clearBtn.addEventListener('click', function () {
    document.querySelector('.historis').innerHTML = null;
  })
}
clear()
//  increasing function
function increment(counts) {
  let countNum = parseInt(counts.innerText);
  countNum++
  counts.innerText = countNum;
}

//  Make the history element

function makeElement(title, number) {
  const historyContent = document.querySelector('.historis');
  let element = `<div class="history-content
           bg-[#FAFAFA] flex justify-between gap-4 items-center p-4 rounded-[8px] mb-2">
            <div class="left">
              <h3 class="history-card-title">${title}</h3>
              <p class="card-category">${number}</p>
            </div>
            <div class="right">
              <p class="card-category">11:36:58 AM</p>
            </div>
          </div>`
  historyContent.innerHTML += element;

}
