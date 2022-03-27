var elementoResultado = document.getElementById("resultadoConversao")

function Converter() {
    
    var velocidadeKM = document.getElementById("velocidade-inserida").value
    var velocidadeMS = velocidadeKM / 3.6
    var velocidadeMPH = velocidadeKM / 1.609
    var velocidadeMSArredondada = velocidadeMS.toFixed(2)
    var velocidadeMPHArredondada = velocidadeMPH.toFixed(2)

    var listaMedidas = document.getElementById("menu-Medidas")
    var medida = listaMedidas.options[listaMedidas.selectedIndex].value

    if (medida == "m/s") {
        elementoResultado.innerHTML = "Olá, o resultado de sua conversão foi de " + velocidadeMSArredondada + " Metros por Segundo."
    } else if (medida == "mph") {
        elementoResultado.innerHTML = "Olá, o resultado de sua conversão foi de " + velocidadeMPHArredondada + " Milhas por Hora."
    }
}