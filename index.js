let colorData = []
let apiCall = ""

function getFetchAddress(){
    let userScheme = document.getElementById("color-scheme").value
    let userColor = document.getElementById("color-picker").value.slice(1)
    apiCall = "https://www.thecolorapi.com/scheme?hex="+userColor+"&mode="+userScheme+"&count=5"
}

function getColorScheme(){
    getFetchAddress()
    fetch(apiCall,{method: "GET"})
        .then(res => res.json())
        .then(data => {
            for(i=0; i<5; i++){
                colorData[i] = data.colors[i].hex.value 
            }
            renderScheme()})
}

function renderScheme(){
  for(i=0; i<5; i++){
    document.getElementById("color-box"+i).style.background = colorData[i]
    document.getElementById("hex-code"+i).innerText = colorData[i]
   } 
}

function copyBtn(buttonNumber){
    navigator.clipboard.writeText(colorData[buttonNumber])
}