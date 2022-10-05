let colorData = []
let apiCall = ""

function getFetchAddress(){
    let userScheme = document.getElementById("color-scheme").value
    let userColor = document.getElementById("color-picker").value.slice(1)
    apiCall = "https://www.thecolorapi.com/scheme?hex="+userColor+"&mode="+userScheme+"&count=5"
}

// console.log(document.getElementById("color-scheme").value)

function getColorScheme(){
    let colorTest = document.getElementById("color-picker").value
    console.log(document.getElementById("color-scheme").value)
    console.log(colorTest)
    getFetchAddress()
    console.log("apiCall = "+apiCall)

    fetch(apiCall,{method: "GET"})
        .then(res => res.json())
        .then(data => {
            for(i=0; i<5; i++){
                colorData[i] = data.colors[i].hex.value 
            }
    console.log(colorData)})
    docuement.getElementById("color-box0").style.background = colorData[0]
}

// function renderScheme(){
//   for(i=0; i<5; i++){
//     docuement.getElementById("color-box"+i).style.color = colorData[i];
//    } 
//         docuement.getElementById("color-box0").style.color = colorData[0]
// }