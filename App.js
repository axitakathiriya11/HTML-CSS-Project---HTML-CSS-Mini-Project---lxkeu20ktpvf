const reviewSlider = document.querySelector('.slides__track')

let time = 0;
let count = 1; 

function slideAnimation(){
    if(time % 270 === 0){
        if(count === 3) count = 0
        let c = count * 90;
        let sliderPosition = `-${c}vw`
        reviewSlider.style.transform = `translate(${sliderPosition})`
        time = 0;
        count++
    }
}

function animate(){
    time++
    slideAnimation()
    requestAnimationFrame(animate)
}

animate();