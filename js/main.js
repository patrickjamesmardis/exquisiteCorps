const sections = document.querySelectorAll("section");

// when an element is 30% in the viewport, add .in-view
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.intersectionRatio > 0.3 ? entry.target.classList.add("in-view") : entry.target.classList.remove("in-view");
    });
}, {
    threshold: [0.0, 0.3, 1.0]
});

// observe all sections to add .in-view on scroll
sections.forEach(section => {
    observer.observe(section);
});