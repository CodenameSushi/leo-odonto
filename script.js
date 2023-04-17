window.addEventListener('scroll', reveal);

function reveal(){
    let revealsLeft = document.querySelectorAll('.revealLeft')
    let revealsRight = document.querySelectorAll('.revealRight')
    let revealsIn = document.querySelectorAll('.revealIn')


    for(let i = 0; i < revealsLeft.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = revealsLeft[i].getBoundingClientRect().top;   
        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            revealsLeft[i].classList.add('fadeInLeft');
        }else
        revealsLeft[i].classList.remove('revealsLeft');
        
        
    }

    for(let i = 0; i < revealsRight.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = revealsRight[i].getBoundingClientRect().top;   
        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            revealsRight[i].classList.add('fadeInRight');
        }else
        revealsRight[i].classList.remove('revealsRight');
        
    }

    for(let i = 0; i < revealsIn.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = revealsIn[i].getBoundingClientRect().top;   
        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            revealsIn[i].classList.add('fadeIn');
        }else
        revealsIn[i].classList.remove('revealsIn');
        
    }

}