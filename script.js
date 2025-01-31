let toggleBtn = document.getElementById('toggleBtn');
let mainImg = document.getElementById('mainImg');
let icon = document.getElementById('icon');
let likedImg = true

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('btn')
    icon.classList.toggle('symbol')
    if(likedImg){
        mainImg.src = './images/cutie1.jpeg'
        toggleBtn.innerText = 'Liked'
        likedImg = false;
    }
    else{
        mainImg.src = './images/cutie.jpg'
        toggleBtn.innerText = 'Like'
        likedImg = true;
    }
    
})