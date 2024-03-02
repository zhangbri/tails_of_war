const wargrooveImage = document.querySelector('.column img[src="images/wargroove.jpg"]');
const chucklefishImage = document.querySelector('.column img[src="images/chucklefish.jpg"]');
const wolverineSoftImage = document.querySelector('.image-container img[src="images/wsoft_logo.png"]');
const steamImage = document.querySelector('.image-container img[src="images/steam.png"]');

wargrooveImage.addEventListener('click', function() {
    window.open('https://wargroove.com', '_blank');
});

chucklefishImage.addEventListener('click', function() {
    window.open('https://chucklefish.org', '_blank');
});

wolverineSoftImage.addEventListener('click', function() {
    window.open('https://wolverineSoft.org', '_blank');
});

steamImage.addEventListener('click', function() {
    window.open('https://store.steampowered.com/app/2687500/Tails_of_War/', '_blank');
});