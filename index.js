window.addEventListener('DOMContentLoaded', () => {
  console.log('page has loaded!');
  document.querySelector('html').setAttribute('data-something', 'test');

  document.querySelector('button').addEventListener('click', function () {
    this.style.background = 'red';
    console.log('something I forgot');
  });
});
