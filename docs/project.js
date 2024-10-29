var originalBackground;
function toggleHighlight() {
  var pos = this.getAttribute('value');
  var color;
  switch (pos) {
    case 'adj':
      color = 'blue';
      break;
    case 'art':
      color = 'green';
      break;
    case 'conj':
      color = 'teal';
      break;
    case 'noun':
      color = 'purple';
      break;
    case 'number':
      color = 'red';
      break;
    case 'prep':
      color = 'yellow';
      break;
    case 'pron':
      color = 'orange';
      break;
    case 'verb':
      color = 'lightblue';
      break;
    case 'deter':
      color= 'purple';
      break;
    case 'adverb':
      color= 'lightgreen';
      break;
  }
  var status = this.checked;
  // the status to which you've just changed the checkbox
  var spans = document.getElementsByClassName(pos);
  for (var i = 0; i < spans.length; i++) {
    if (status == true) {
      spans[i].style.backgroundColor = color;
    } else {
      spans[i].style.backgroundColor = originalBackground;
    }
  }
}
function init() {
  originalBackground = document.body.style.backgroundColor;
  var checkboxes = document.getElementsByTagName('input');
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', toggleHighlight, false);
  }
}
window.addEventListener('DOMContentLoaded', init, false);
