document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'bg-darker/90');
            navbar.classList.remove('py-4');
            navbar.classList.add('py-3');
        } else {
            navbar.classList.remove('shadow-lg', 'bg-darker/90');
            navbar.classList.add('py-4');
            navbar.classList.remove('py-3');
        }
    });

    // FAQ Accordion Logic
    const faqBtns = document.querySelectorAll('.faq-btn');
    
    faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('i');
            
            // Toggle current FAQ
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
                btn.classList.add('text-primary');
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
                btn.classList.remove('text-primary');
            }
        });
    });

    // Optional: Simulating slow number increase for FOMO (just visual, resets on reload)
    // The user requested 15/50 specifically.
    const regCount = document.getElementById('registration-count');
    if (regCount) {
        let count = parseInt(regCount.innerText);
        // Occasionally blink or increase to show activity
        setInterval(() => {
            if (Math.random() > 0.8 && count < 48) {
                // Not actually increasing to avoid changing the base 15 immediately, 
                // but we can add a subtle pulse effect
                regCount.classList.add('text-primary', 'scale-110', 'inline-block', 'transition-all');
                setTimeout(() => {
                    regCount.classList.remove('text-primary', 'scale-110');
                }, 500);
            }
        }, 3000);
    }
});
