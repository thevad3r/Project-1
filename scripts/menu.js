// Получаем элементы
const menuToggle = document.getElementById('menuToggle');
const headerNav = document.getElementById('headerNav');

// Создаем оверлей для меню
const navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
document.body.appendChild(navOverlay);

// Функция открытия/закрытия меню
function toggleMenu() {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true'; 
    // Переключаем состояния
    menuToggle.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    headerNav.classList.toggle('active');
    navOverlay.classList.toggle('active');  
    // Блокируем скролл при открытом меню
    document.body.style.overflow = headerNav.classList.contains('active') ? 'hidden' : '';
}

// Обработчики событий
menuToggle.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', toggleMenu);

// Закрытие меню при клике на ссылку
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});

// Закрытие меню при нажатии Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && headerNav.classList.contains('active')) {
        toggleMenu();
    }
});

// Закрытие меню при изменении размера окна (если перешли на десктоп)
window.addEventListener('resize', () => {
    if (window.innerWidth > 550 && headerNav.classList.contains('active')) {
        toggleMenu();
    }
});

const scrollTopButton = document.getElementById('scrollTop');

// Показываем кнопку после скролла
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

// Прокрутка к началу страницы
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
