const env = document.querySelector("#calc");

env.addEventListener("click", function (e) {

    e.preventDefault();

    const num1 = document.querySelector("#num1").value;
    const num2 = document.querySelector("#num2").value;
    const num3 = document.querySelector("#num3").value;
    const num4 = document.querySelector("#num4").value;

    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);
    const numero3 = parseFloat(num3);
    const numero4 = parseFloat(num4);

    var pontos = [];
    var temp = 0;
    for (var i = -10; i <= 10; i++) {
        const result = numero1 * (i * i * i) + numero2 * (i * i) + numero3 * i + numero4;
        if ((temp < 0 && result > 0) || temp > 0 && result < 0) {
            pontos.push(temp);
            pontos.push(result);
        }
        temp = result;
    }

    var pontosString = "";
    for (var i = 0; i < pontos.length - 1; i += 2) {
        pontosString += "[" + pontos[i] + " ; " + pontos[i + 1] + "], ";
    }

    document.getElementById("media").innerHTML = pontosString.slice(0, -2);
    document.getElementById("getInterval").innerHTML = "<br/>Intervalo:<br/> <input type='text' id='aElement' placeholder='A'/><input type='text' id='bElement' placeholder='B'/>";
    document.getElementById("getEpslon").innerHTML = "<br/> &Epsilon;:<br/><input type='text' name='eps' id='eps'><br><button id='calc2'>Confirmar</button>";
    const env2 = document.querySelector("#calc2");

    env2.addEventListener("click", function (e) {
        function f(x) {

            const num1 = document.querySelector("#num1").value;
            const num2 = document.querySelector("#num2").value;
            const num3 = document.querySelector("#num3").value;
            const num4 = document.querySelector("#num4").value;

            const numero1 = parseFloat(num1);
            const numero2 = parseFloat(num2);
            const numero3 = parseFloat(num3);
            const numero4 = parseFloat(num4);
            return numero1 * (x * x * x) + numero2 * (x * x) + numero3 * x + numero4;
        }

        function bissecao(f, a, b, TOL, N) {
            let i = 1;
            let fa = f(a);

            while (i <= N) {
                let p = a + ((b - a) / 2);
                let fp = f(p);

                if (fp == 0 || (b - a) / 2 < TOL) {
                    return p;
                }

                i = i + 1;
                if (fa * fp > 0) {
                    a = p;
                    fa = fp;
                } else {
                    b = p;
                }
            }
        }
        const aElement = document.querySelector("#aElement").value;
        const bElement = document.querySelector("#bElement").value;
        const TOL = document.querySelector("#eps").value;
        const al = parseFloat(aElement);
        const bl = parseFloat(bElement);
        const tol = parseFloat(TOL);

        document.getElementById("resultadoFinal").innerHTML = bissecao(f, al, bl, tol, 100000);
    });




});
