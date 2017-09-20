function getFirstSelector(selector) {
  return document.querySelector(selector);
}

  function nestedTarget() {
    return document.querySelector('#nested .target');
  }

function deepestChild() {
  const array = document.getElementById('grand-node').querySelectorAll('div');
  for(let i = 0; i < array.length; i++) {
    if(i = 1 === array.length) {
      return array[i];
    }
  }
}

function increaseRankBy(n) {
  const lis  = document.getElementById('app').querySelectorAll('ul.ranked-list')
  for(let i = 0; i< lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}
