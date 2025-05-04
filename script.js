 // Simple JS interactivity
 document.querySelectorAll('article').forEach(item => {
    item.addEventListener('click', () => {
      alert('Product clicked: ' + item.querySelector('h3').textContent);
    });
  });