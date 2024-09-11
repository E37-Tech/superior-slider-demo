document.addEventListener("DOMContentLoaded", function() {
  var item1 = document.getElementById("superior-item-1");
  var item2 = document.getElementById("superior-item-2");

  function selectItem1() {
    item1.style.display = "block";
    item2.style.display = "none";
  }

  function selectItem2() {
    item1.style.display = "none";
    item2.style.display = "block";
  }

  document.getElementById("selectItem1").addEventListener("click", function(e) {
    e.preventDefault();
    selectItem1();
  });

  document.getElementById("selectItem2").addEventListener("click", function(e) {
    e.preventDefault();
    selectItem2();
  });
});

document.getElementById('copyButton').addEventListener('click', () => {
  const codeBlock = document.getElementById('codeBlock');
  const tooltip = document.getElementById('tooltip');

  navigator.clipboard.writeText(codeBlock.textContent).then(() => {
    tooltip.classList.remove('invisible');
    tooltip.classList.add('opacity-100');

    setTimeout(() => {
      tooltip.classList.add('invisible');
      tooltip.classList.remove('opacity-100');
    }, 4000);
  }).catch(err => {
    console.error('Failed to copy code: ', err);
  });
});
