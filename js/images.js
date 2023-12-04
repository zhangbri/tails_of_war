function addTiltAnimation() {
  const images = document.querySelectorAll('img'); 
    images.forEach((image) => {
      image.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;
        const { left, top, width, height } = image.getBoundingClientRect();
  
        const tiltX = ((clientX - left) / width - 0.5) * 30;
        const tiltY = ((clientY - top) / height - 0.5) * 30;
  
        image.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
      });
  
      image.addEventListener('mouseout', () => {
        image.style.transform = 'none';
      });
    });
}
  
document.addEventListener('DOMContentLoaded', addTiltAnimation);