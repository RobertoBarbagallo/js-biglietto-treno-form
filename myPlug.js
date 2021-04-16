
window.addEventListener("load", function () {
    console.log("pagina caricata completamente")

    formKeeper();
});


function formKeeper() {
    var ilForm = document.getElementById("myform")

    ilForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var dati = event.currentTarget;

        var listaDati = dati.elements;

        var nomeCompleto = listaDati.nomecognome.value;

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
            if (anni === "minorene") {
                tariffaBiglietto = (tariffaBiglietto - sconto20).toFixed(2)
            } else if (anni === "anziano") {
                tariffaBiglietto = (tariffaBiglietto - sconto40).toFixed(2)
            } else {
                tariffaBiglietto
            }
            return tariffaBiglietto.toFixed(2);
        }
        var prezzoDelBiglietto = prezzoCalculator(distanza, tariffa);

        console.log(prezzoCalculator(distanza, tariffa));
        console.log(carrozzaGenerator());
        console.log(codiceCPGenerator());

        function controlloNome(unNome){
            var controllo = false
            var unNomeInNUmero = parseInt(unNome)
            if(Number.isNaN(unNomeInNUmero)){
                controllo = true
                return controllo
            }
        }

        controlloNome(nomeCompleto)

        var nomeCOntrollato = controlloNome(nomeCompleto)


        function controlloNumero (unNumero){
            var controllo = false
            var unNumeroInNumero = parseInt(unNumero)
            if (!Number.isNaN(unNumeroInNumero)){
                controllo = true
                return controllo
            }
        }

        controlloNumero(distanza)

        var numeroControllato =    controlloNumero(distanza)

        function inoculate(name, offer, Wagon, code, price) {
            document.getElementById("nomedelpasseggero").innerHTML += ("<span class='inoculated'>" + name + "</span>")
            document.getElementById("offerta").innerHTML += ("<span class='inoculated'>" + offer + "</span>")
            document.getElementById("carrozza").innerHTML += ("<span class='inoculated'>" + Wagon + "</span>")
            document.getElementById("codiceCP").innerHTML += ("<span class='inoculated'>" + code + "</span>")
            document.getElementById("prezzofinale").innerHTML += ("<span class='inoculated'>" + price + "</span>")
            return;
        }

        if(numeroControllato && numeroControllato){
            inoculate(nomeCompleto, tariffa, vagone, ilTreno, prezzoDelBiglietto);
        }
      

    });

    ilForm.addEventListener("reset", function() {
       
        var targets = document.querySelectorAll(".inoculated")
        
        for (var i = 0; i < targets.length; i++) {
            var target = targets[i];

            target.remove();
        }
       
    });
};





