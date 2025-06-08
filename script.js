n1 = document.getElementById("num1")
n2 = document.getElementById("num2")
res = document.getElementsByClassName("resultado")[0]

function Calcular(){
    console.log()
    res.innerText = parseFloat(n1.value) + parseFloat(n2.value)
}

function FormatarMinutos(horas, minutos){
    return (horas * 60) + minutos
}

function FormatarHoras(minutos){
    let horas = Math.floor(minutos/60)
    let minutosRestantes = minutos%60
    
    console.log("horas e minutos restantes: " + horas , minutosRestantes)
    return horas, minutosRestantes
}
