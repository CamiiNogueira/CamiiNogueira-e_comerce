let currentSlide = 0;
        showSlide(currentSlide);

        function showSlide(index) {
            const slides = document.querySelectorAll('.slides img');
            if (index >= slides.length) currentSlide = 0;
            if (index < 0) currentSlide = slides.length - 1;
            slides.forEach((slide, i) => {
                slide.style.display = i === currentSlide ? 'block' : 'none';
            });
        }

        function changeSlide(n) {
            showSlide(currentSlide += n);
        }