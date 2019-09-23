document.addEventListener('DOMContentLoaded', ()=>{

    console.log("__JS IS RUNNING")
    let navBar = document.querySelector('.sidebar')
    let btns = document.querySelectorAll('.navlink')
    navBar.addEventListener('click', (e) =>{
        if (e.target.classList.contains("navlink")){
            btns.forEach(btn => {
                if (btn.classList.contains('active')){
                    btn.classList.remove('active')
                }
            });
            e.target.className +=" active"
        }
    })
    const sections = document.querySelectorAll('section');

    function changeLinkState() {
    let index = sections.length;

    while(--index && window.scrollY - 300 < sections[index].offsetTop) {}
    
    btns.forEach((link) => link.classList.remove('active'));
    btns[index].classList.add('active');
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);

    let hamburger = document.querySelector('#hamburger')
    hamburger.addEventListener('click', () =>{
        btns.forEach(btn =>{
            btn.classList.toggle("responsive")
        })
    })

    const projectCards = document.querySelectorAll('.front')
    const backCards = document.querySelectorAll('.back')
    const arr = Array.prototype.slice.call(projectCards);
    const arr2 = Array.prototype.slice.call(backCards);
    console.log(projectCards)
    projectCards.forEach(card => {
        card.addEventListener('click', e =>{
            e.currentTarget.style.opacity=0;
            backCards[arr.indexOf(e.currentTarget)].style.opacity=1
            backCards[arr.indexOf(e.currentTarget)].style.zIndex=1
        })
    });

    backCards.forEach(card => {
        card.addEventListener('click', e =>{
            e.currentTarget.style.opacity=0;
            projectCards[arr2.indexOf(e.currentTarget)].style.opacity=1
            backCards[arr2.indexOf(e.currentTarget)].style.zIndex=-1
        })
    })


});