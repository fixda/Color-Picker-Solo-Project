

function testColor(){
    let colorTest = document.getElementById("color-picker").value
    console.log(colorTest)
}
let colorData = []

fetch("https://www.thecolorapi.com/scheme?hex=0047AB",{method: "GET"})
.then(res => res.json())
.then(data => {
    for(i=0; i<5; i++){
        colorData[i] = data.colors[i].hex.value 
    }
    console.log(data.colors[0].hex.value)
    console.log(colorData)})