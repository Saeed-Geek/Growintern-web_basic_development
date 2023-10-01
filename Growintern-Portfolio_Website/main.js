
const links = document.querySelectorAll('.nav_link');

links.forEach(link=>{
    link.addEventListener('click',function(){
        document.querySelector('.active').classList.remove('active');
        link.classList.add('active');
    })
})
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.content-text,.social',{delay:200}); 