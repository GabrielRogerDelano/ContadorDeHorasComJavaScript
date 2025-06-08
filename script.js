function AdicionarDia() {
    const tbody = document.querySelector("#tabelasHoras tbody");
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td><input type="time" class="entrada1"></td>
        <td><input type="time" class="saida1"></td>
        <td class="Horas-dias">-</td>
        <td>
          <button class="btn-remover" type="button" onclick="RemoverDia(this)">
            <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="Remover">
          </button>
        </td>
      `;

    tbody.appendChild(tr);
}

function RemoverDia(botao) {
    botao.closest("tr").remove();
}

function Calcular() {
    const linhas = document.querySelectorAll("#tabelasHoras tbody tr");
    let totalMinutos = 0;

    linhas.forEach(linha => {
        const entrada1 = linha.querySelector(".entrada1")?.value;
        const saida1 = linha.querySelector(".saida1")?.value;
        const resultado = linha.querySelector(".Horas-dias");

        let minutosTotais = 0;

        if (entrada1 && saida1) {
            minutosTotais += calcularMinutosEntre(obterHorario(entrada1), obterHorario(saida1));
        }

        resultado.textContent = minutosTotais > 0 ? FormatarHoras(minutosTotais) : "-";
        totalMinutos += minutosTotais;
    });

    document.getElementById("resultadoTotal").innerText = `Total de horas: ${FormatarHoras(totalMinutos)}`;
}

function obterHorario(hora) {
    return new Date(`2000-01-01T${hora}:00`);
}

function calcularMinutosEntre(h1, h2) {
    let m1 = h1.getHours() * 60 + h1.getMinutes();
    let m2 = h2.getHours() * 60 + h2.getMinutes();
    if (m2 < m1) m2 += 24 * 60;
    return m2 - m1;
}

function FormatarHoras(minutos) {
    let horas = Math.floor(minutos / 60);
    let minutosRestantes = minutos % 60;
    return `${horas.toString().padStart(2, '0')}:${minutosRestantes.toString().padStart(2, '0')}`;
}