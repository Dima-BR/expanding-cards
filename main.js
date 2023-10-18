const panels = document.querySelectorAll('.panel');
const panel = document.querySelector('.panel');

panels.forEach((panel) => {
    console.log(panel);
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')

    })
}


// Get the video element
const video = panel.querySelector('video');

// Listen for hover events on the slider element
panel.addEventListener('mouseenter', () => {
    // Play the video
    video.play();
});

// Listen for mouseleave events on the slider element
panel.addEventListener('mouseleave', () => {
    // Pause the video
    video.pause();
});