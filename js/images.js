function addTiltAnimation() {
    const images = document.querySelectorAll('img'); // Select all images, you can be more specific with a class or ID
  
    images.forEach((image) => {
      image.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;
        const { left, top, width, height } = image.getBoundingClientRect();
  
        const tiltX = ((clientX - left) / width - 0.5) * 20; // Adjust the multiplier for the tilt effect
        const tiltY = ((clientY - top) / height - 0.5) * 20;
  
        // Apply CSS transform for tilting based on cursor position
        image.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
      });
  
      image.addEventListener('mouseout', () => {
        // Reset transform on mouseout
        image.style.transform = 'none';
      });
    });
  }
  
  // Call the function when the DOM is ready
  document.addEventListener('DOMContentLoaded', addTiltAnimation);