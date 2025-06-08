n1 = document.getElementById("num1")
n2 = document.getElementById("num2")
res = document.getElementsByClassName("resultado")[0]

function Calcular(){
    const horarioEntrada = new Date(`2000-01-01T${n1.value}:00`);
    const horarioSaida = new Date(`2000-01-01T${n2.value}:00`);

    let h1 = FormatarMinutos(horarioEntrada.getHours(), horarioEntrada.getMinutes())
    let h2 = FormatarMinutos(horarioSaida.getHours(), horarioSaida.getMinutes())

    const diferenca = h2 - h1;
    console.log("Diferença em minutos:", diferenca);
    
    res.innerHTML = `Total de horas trabalhadas: ${FormatarHoras(diferenca)}`;
}

function calcularMinutosEntre(h1, h2) {
    let m1 = h1.getHours() * 60 + h1.getMinutes();
    let m2 = h2.getHours() * 60 + h2.getMinutes();

    if (m2 < m1) m2 += 24 * 60; // suporta virada de dia

    return m2 - m1;
}

function FormatarMinutos(horas, minutos){
    return (horas * 60) + minutos
}

function FormatarHoras(minutos) {
    let horas = Math.floor(minutos / 60);
    let minutosRestantes = minutos % 60;

    // Adiciona zero à esquerda se necessário
    let horasStr = horas.toString().padStart(2, '0');
    let minutosStr = minutosRestantes.toString().padStart(2, '0');

    return `${horasStr}:${minutosStr}`;
}