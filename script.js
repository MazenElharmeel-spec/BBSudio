const body = document.body;
const languageButton = document.querySelector('#lang');
const themeButton = document.querySelector('#theme');

let language = 'ar';

languageButton.addEventListener('click', () => {
  language = language === 'ar' ? 'en' : 'ar';
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-ar]').forEach((element) => {
    element.innerHTML = element.dataset[language];
  });

  languageButton.textContent = language === 'ar' ? 'EN' : 'عربي';
});

themeButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem(
    'frame-theme',
    body.classList.contains('dark') ? 'dark' : 'light',
  );
});

if (localStorage.getItem('frame-theme') === 'dark') {
  body.classList.add('dark');
}
