$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        // if(this.scrollY > 500){
        //     $('.scroll-up-btn').addClass("show");
        // }else{
        //     $('.scroll-up-btn').removeClass("show");
        // }
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

     // typing text animation script
     var typed = new Typed(".typing-1", {
        strings: [
            "Backend Developer",
            "PHP & MySQL Specialist",
            "JavaScript Enthusiast",
            "API Integrator",
            "Problem Solver",
            "Database Architect",
            "Full-Stack Developer",
            "Tech Innovator",
            "Continuous Learner"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [
            "Backend Developer",
            "PHP & MySQL Specialist",
            "JavaScript Enthusiast",
            "API Integrator",
            "Problem Solver",
            "Database Architect",
            "Full-Stack Developer",
            "Tech Innovator",
            "Continuous Learner"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});   