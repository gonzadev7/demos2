window.addEventListener('scroll', function () {
    const header = document.querySelector('.top-header');
    if (window.scrollY > 60) {
        header.style.background = '#ffffff';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.09)';
        header.querySelector('.logo h1').style.color = '#2a0818';
        header.querySelector('.logo p').style.color = '#aaa';
    } else {
        header.style.background = '#2a0818';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.25)';
        header.querySelector('.logo h1').style.color = '#ffffff';
        header.querySelector('.logo p').style.color = 'rgba(240,128,168,0.55)';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});
