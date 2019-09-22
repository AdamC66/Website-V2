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

});