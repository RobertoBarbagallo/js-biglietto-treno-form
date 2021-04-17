
window.addEventListener("load", function () {
    console.log("pagina caricata completamente")
    formKeeper();
});


function formKeeper() {
    var ilForm = document.getElementById("myform");
    var ilBottone = document.getElementById("genera")

    ilBottone.addEventListener("mouseover", function () {
        ilBottone.style.animation = "pulse 500ms linear 1"
    });

    ilBottone.addEventListener("mouseleave", function () {
        ilBottone.style.animation = "none"
    })

    var ilBottoneDue = document.getElementById("annulla")

    ilBottoneDue.addEventListener("mouseover", function () {
        ilBottoneDue.style.animation = "pulse 500ms linear 1"
    });

    ilBottoneDue.addEventListener("mouseleave", function () {
        ilBottoneDue.style.animation = "none"
    })


    ilForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var dati = event.currentTarget;

        var listaDati = dati.elements;

        var nomeCompleto = listaDati.nomecognome.value;

        nomeCompleto = nomeCompleto.toLowerCase();

        var distanza = listaDati.distanzadapercorrere.value;

        var tariffa = listaDati.eta.value;

        console.log(nomeCompleto, distanza, tariffa);
        console.log(listaDati);


        function carrozzaGenerator() {
            var numeroCarrozza = parseInt((Math.random() * 9) + 1);
            return numeroCarrozza
        }
        var vagone = carrozzaGenerator();


        function codiceCPGenerator() {
            var numeroGenerato = parseInt((Math.random() * 10000) + 89999);
            return numeroGenerato
        }
        var ilTreno = codiceCPGenerator();



        function prezzoCalculator(kilometriPercorsi, anni) {
            var tariffaBiglietto = (kilometriPercorsi * 0.21);
            var sconto20 = tariffaBiglietto * 20 / 100;
            var sconto40 = tariffaBiglietto * 40 / 100;
            if (anni === "minorenne") {
                tariffaBiglietto = (tariffaBiglietto - sconto20).toFixed(2)
                return tariffaBiglietto
            } else if (anni === "anziano") {
                tariffaBiglietto = (tariffaBiglietto - sconto40).toFixed(2)
                return tariffaBiglietto
            } else {
                tariffaBiglietto = tariffaBiglietto
                return tariffaBiglietto.toFixed(2);
            }

        }
        var prezzoDelBiglietto = prezzoCalculator(distanza, tariffa);

        console.log(prezzoCalculator(distanza, tariffa));
        console.log(carrozzaGenerator());
        console.log(codiceCPGenerator());

        function controlloNome(unNome) {
            var controllo = false
            var unNomeInNUmero = parseInt(unNome)
            if (Number.isNaN(unNomeInNUmero)) {
                controllo = true
                return controllo
            }
        }
        var nomeControllato = controlloNome(nomeCompleto)

        function controlloNumero(unNumero) {
            var controllo = false
            var unNumeroInNumero = parseInt(unNumero)
            if (!Number.isNaN(unNumeroInNumero)) {
                controllo = true
                return controllo
            }
        }
        var numeroControllato = controlloNumero(distanza)

        function inoculate(name, offer, wagon, code, price) {
            document.getElementById("nomedelpasseggero").innerHTML += ("<span class='inoculated'>" + name + "</span>")
            document.getElementById("offerta").innerHTML += ("<span class='inoculated'>" + offer + "</span>")
            document.getElementById("carrozza").innerHTML += ("<span class='inoculated'>" + wagon + "</span>")
            document.getElementById("codiceCP").innerHTML += ("<span class='inoculated'>" + code + "</span>")
            document.getElementById("prezzofinale").innerHTML += ("<span class='inoculated'>" + price + "</span>")
            return;
        }
        if (nomeControllato && numeroControllato) {
            var biglietto = document.getElementById("toreveal")
            biglietto.style.display = "block"
            inoculate(nomeCompleto, tariffa, vagone, ilTreno, prezzoDelBiglietto);
        }else{
            alert("Hai immesso un valore numerico al posto del nome o una parola al posto della distanza, riprova!")
        }
    });

    ilForm.addEventListener("reset", function () {
        var biglietto = document.getElementById("toreveal")
        biglietto.style.display = "none"

        function reset() {
            var testoInoculato = document.querySelectorAll("span");
            console.log (testoInoculato)

            for (var index = 0; index < testoInoculato.length; index++) {
                var ilTestoDaCancellare = testoInoculato[index];
                ilTestoDaCancellare.outerHTML = ("")
            }
         
            return;
        }
        reset()
    });
};





