// Função para verificar Fibonacci
function verificarFibonacci() {
    let numero = parseInt(document.getElementById("inputFibonacci").value);
    let a = 0, b = 1, fib = 0;
    let resultado = document.getElementById("resultadoFibonacci");

    if (isNaN(numero)) {
        resultado.innerHTML = "Por favor, insira um número válido.";
        return;
    }

    if (numero === 0 || numero === 1) {
        resultado.innerHTML = `O número ${numero} pertence à sequência de Fibonacci.`;
        return;
    }

    while (fib < numero) {
        fib = a + b;
        a = b;
        b = fib;
    }

    if (fib === numero) {
        resultado.innerHTML = `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        resultado.innerHTML = `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
}

// Faturamento diário (dados fictícios)
const faturamento = [
    { "dia": 1, "valor": 1000.0 },
    { "dia": 2, "valor": 2000.0 },
    { "dia": 3, "valor": 0.0 },
    { "dia": 4, "valor": 1500.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 3000.0 }
];

function calcularFaturamento() {
    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;
    let resultado = document.getElementById("resultadoFaturamento");

    faturamento.forEach(dia => {
        if (dia.valor > 0) {
            if (dia.valor < menorFaturamento) menorFaturamento = dia.valor;
            if (dia.valor > maiorFaturamento) maiorFaturamento = dia.valor;
            somaFaturamento += dia.valor;
            diasComFaturamento++;
        }
    });

    const mediaFaturamento = somaFaturamento / diasComFaturamento;
    let diasAcimaDaMedia = 0;

    faturamento.forEach(dia => {
        if (dia.valor > mediaFaturamento) diasAcimaDaMedia++;
    });

    resultado.innerHTML = `Menor Faturamento: R$ ${menorFaturamento}<br>
                           Maior Faturamento: R$ ${maiorFaturamento}<br>
                           Dias acima da média: ${diasAcimaDaMedia}`;
}

// Percentual por estado
const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function calcularPercentual() {
    const total = Object.values(faturamentoEstados).reduce((acc, valor) => acc + valor, 0);
    const resultado = document.getElementById("resultadoPercentual");
    let percentuais = '';

    for (const estado in faturamentoEstados) {
        const percentual = ((faturamentoEstados[estado] / total) * 100).toFixed(2);
        percentuais += `${estado}: ${percentual}%<br>`;
    }

    resultado.innerHTML = percentuais;
}

// Inversor de String
function inverterString() {
    let stringOriginal = document.getElementById("inputString").value;
    let stringInvertida = '';

    for (let i = stringOriginal.length - 1; i >= 0; i--) {
        stringInvertida += stringOriginal[i];
    }

    const resultado = document.getElementById("resultadoString");
    resultado.innerHTML = `Original: ${stringOriginal}<br>Invertida: ${stringInvertida}`;
}
