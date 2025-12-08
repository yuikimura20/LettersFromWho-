const emojis = document.querySelectorAll('.emoji');

emojis.forEach(emoji => {
  // random horizontal position
  emoji.style.left = Math.random() * 100 + 'vw';
  
  // random animation duration (speed)
  emoji.style.animationDuration = (Math.random() * 5 + 5) + 's';
  
  // random size
  emoji.style.fontSize = (Math.random() * 2 + 1) + 'rem';
});