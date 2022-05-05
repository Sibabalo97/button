const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-y2DNjussXTBeWToT0rxT739zXF9SRG35aQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYGFbf1Hz-ULt1Snax9eLW_MV5T3p19vLr-g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUjI2RGFMkR_X7_X6rjeo7fnYb0vilunoWA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwe436kg2WdRDfW-hxz9HMmaN5inJ3cTT8w&usqp=CAU"

];
let num = 0

const slider = document.getElementById("slider")

function next() {
    num++
if(num >= images.length) {
    num = 0

}
slider.src = images[num]
}

function prev() {
    num--
    if(num < 0) {
        num = images.length -1
    }
    slider.src = images[num]
}
setInterval(next, 1000)

