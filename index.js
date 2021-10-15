//Calculo da media do aluno:

function CalculoDaMedia(){
    const estruturaDoInputNota1 = document.getElementById("nota1");
    const valorDoInputNota1 = estruturaDoInputNota1.value;
    const nota1 = parseFloat(valorDoInputNota1);

    const estruturaDoInputNota2 = document.getElementById("nota2");
    const valorDoInputNota2 = estruturaDoInputNota2.value;
    const nota2 = parseFloat(valorDoInputNota2);

    const estruturaDoInputNota3 = document.getElementById("nota3");
    const valorDoInputNota3 = estruturaDoInputNota3.value;
    const nota3 = parseFloat(valorDoInputNota3);

    const estruturaDoInputNota4 = document.getElementById("nota4");
    const valorDoInputNota4 = estruturaDoInputNota4.value;
    const nota4 = parseFloat(valorDoInputNota4);

    /* Só deve realizar o calculo se todos os campos estão preenchidos */

    const calculoDamedia = (nota1 + nota2 + nota3 + nota4)/4;
    const mediaFixada = calculoDamedia.toFixed(1);

    const estruturaDoResultado = document.getElementById("resultado");

    if(mediaFixada >= 6){
        estruturaDoResultado.innerHTML = `Parabéns, você foi aprovado! Sua média é de ${mediaFixada}`;
        resultado.style.padding = "16px";
    }else{
        estruturaDoResultado.innerHTML = `Infelizmente, você foi reprovado :( Sua média é de ${mediaFixada}`;
        resultado.style.padding = "16px";
    }
}

//adiciona ao botão a opção de pressionar a tecla "enter" e executar o cáculo
document.addEventListener("keypress", function(event){
    if(event.key === 'Enter'){
        const inputEviarEnter = document.querySelector("#input_enviar");
        inputEviarEnter.click();
    }
});