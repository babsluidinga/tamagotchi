/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

//variabelen
//wat het tekstwolkje gaat zeggen
var zeggen = [
    "MMMMM.... Lekker!",
    "yeahh!! Dat was leuk!",
    "Ik voel me nu al beter! Dankjewel!!",
    "Ik zit vol!!",
    "Ik heb wel genoeg gespeeld hoor!",
    "Teveel medicijnen zijn niet goed voor me!",
    "Je hebt me zojuist dood laten gaan! Shame on you!",
    "Dubbelklik op het biggetje om hem te reanimeren!"];
var tekstWolkje = document.querySelector('#opmerking');
//de knoppen die ervoor zorgen dat de stats weer omhoog gaan nadat je erop klikt
var knoppen = [document.querySelector('.buttons'),
               document.querySelector('.eten'),
               document.querySelector('.spelen'),
               document.querySelector('.meds')];
//de startknop
var starten = document.querySelector('.start');
//delen van het dier die je wilt aanpassen als het dood is
var dier = [document.querySelector('.linkeroog'),
            document.querySelector('.rechteroog'),
            document.querySelector('.linkeroor'),
            document.querySelector('.rechteroor'),
            document.querySelector('.staart'),
            document.querySelector('.big')];
//de status waarmee het dier begint.
var gezondheid = 100;
var honger = 100;
var plezier = 100;
//de variabelen die ervoor zorgen dat de scores straks te zien zijn op het scherm
var geefStatus = [document.querySelector('#gezondheid'),
                  document.querySelector('#honger'),
                  document.querySelector('#plezier')];
/*functies die ervoor zorgen dat als de gezondheid, of de honger, of de verveling 0 wordt, het dier dood gaat.
Ook zorgt de functie ervoor dat als de waarde van gezondheid, honger, of plezier hoger dan 4 is, met 4 omlaag kan gaan. Als hij lager is dan 4, dan niet meer (aangezien hij elke keer standaard met stapjes van 4 gaat, komt hij uiteindelijk dus op 0 uit.*/
function wordtZiek() {
    if (gezondheid === 0) {
        tekstWolkje.textContent = zeggen[6];
        dier[0].classList.remove('linkeroog');
        dier[0].classList.add('dood');
        dier[1].classList.remove('rechteroog');
        dier[1].classList.add('doodrechts');
        dier[2].classList.remove('linkeroor');
        dier[2].classList.add('stopAnimerenlinks');
        dier[3].classList.remove('rechteroor');
        dier[3].classList.add('stopAnimerenrechts');
        dier[4].classList.remove('staart');
        dier[4].classList.add('stopAnimerenstaart');
        knoppen[0].classList.remove('buttons');
        knoppen[0].classList.add('weg');
        starten.classList.remove('start');
        starten.classList.add('weg');
        document.querySelector('h1').textContent = zeggen[7];
        //https://davidwalsh.name/css-variables-javascript
        //Hier heb ik gelezen hoe ik css variabelen kan lezen en aanpassen!
        document.documentElement.style
            .setProperty('--primair', '#8B8D90');
        document.documentElement.style
            .setProperty('--donker', '#696768');
        document.documentElement.style
            .setProperty('--snoet', '#EFEFEF');
        document.documentElement.style
            .setProperty('--gat', '#454545');
    } else if (gezondheid >= 4) {
        gezondheid = gezondheid - 4;
    } else {
        gezondheid = 0;
    }
    geefStatus[0].textContent = 'gezondheid: ' + gezondheid;
}

function krijgHonger() {
    if (honger === 0) {
        tekstWolkje.textContent = zeggen[6];
        dier[0].classList.remove('linkeroog');
        dier[0].classList.add('dood');
        dier[1].classList.remove('rechteroog');
        dier[1].classList.add('doodrechts');
        dier[2].classList.remove('linkeroor');
        dier[2].classList.add('stopAnimerenlinks');
        dier[3].classList.remove('rechteroor');
        dier[3].classList.add('stopAnimerenrechts');
        dier[4].classList.remove('staart');
        dier[4].classList.add('stopAnimerenstaart');
        knoppen[0].classList.remove('buttons');
        knoppen[0].classList.add('weg');
        starten.classList.remove('start');
        starten.classList.add('weg');
        document.querySelector('h1').textContent = zeggen[7];
        //https://davidwalsh.name/css-variables-javascript
        //Hier heb ik gelezen hoe ik css variabelen kan lezen en aanpassen!
        document.documentElement.style
            .setProperty('--primair', '#8B8D90');
        document.documentElement.style
            .setProperty('--donker', '#696768');
        document.documentElement.style
            .setProperty('--snoet', '#EFEFEF');
        document.documentElement.style
            .setProperty('--gat', '#454545');
    } else if (honger >= 4) {
        honger = honger - 4;
    } else {
        honger = 0;
    }
    geefStatus[1].textContent = 'honger: ' + honger;
}

function raakVerveeld() {
    if (plezier === 0) {
        tekstWolkje.textContent = zeggen[6];
        dier[0].classList.remove('linkeroog');
        dier[0].classList.add('dood');
        dier[1].classList.remove('rechteroog');
        dier[1].classList.add('doodrechts');
        dier[2].classList.remove('linkeroor');
        dier[2].classList.add('stopAnimerenlinks');
        dier[3].classList.remove('rechteroor');
        dier[3].classList.add('stopAnimerenrechts');
        dier[4].classList.remove('staart');
        dier[4].classList.add('stopAnimerenstaart');
        knoppen[0].classList.remove('buttons');
        knoppen[0].classList.add('weg');
        starten.classList.remove('start');
        starten.classList.add('weg');
        document.querySelector('h1').textContent = zeggen[7];
        //https://davidwalsh.name/css-variables-javascript
        //Hier heb ik gelezen hoe ik css variabelen kan lezen en aanpassen!
        document.documentElement.style
            .setProperty('--primair', '#8B8D90');
        document.documentElement.style
            .setProperty('--donker', '#696768');
        document.documentElement.style
            .setProperty('--snoet', '#EFEFEF');
        document.documentElement.style
            .setProperty('--gat', '#454545');
        //https://davidwalsh.name/css-variables-javascript
        //Hier heb ik gelezen hoe ik css variabelen kan lezen en aanpassen!
        document.documentElement.style
            .setProperty('--primair', '#8B8D90');
        document.documentElement.style
            .setProperty('--donker', '#696768');
        document.documentElement.style
            .setProperty('--snoet', '#EFEFEF');
        document.documentElement.style
            .setProperty('--gat', '#454545');
    } else if (plezier >= 4) {
        plezier = plezier - 4;
    } else {
        plezier = 0;
    }
    geefStatus[2].textContent = 'plezier: ' + plezier;
}
/*Deze functie zorgt ervoor dat de drie bovenstaande functies elke seconden uitgevoerd worden. */

function wordSlechter() {
    setInterval(wordtZiek, 1000);
    setInterval(krijgHonger, 1000);
    setInterval(raakVerveeld, 1000);
}
//De bovenstaande functie wordt pas actief als je op de knop start hebt gedrukt.
starten.addEventListener('click', wordSlechter);

/* de drie onderstaande functies zorgen ervoor dat de score met x omhoog gaat, in dit geval heb ik x=4 gedaan, zodat je mooi op 0 en 100 uit kan komen. Als de score nog niet maximaal is geeft het diertje een andere opmerking dan wanneer de score wel 100 is.*/
function etenGeven(x) {
    if (honger <= 100) {
        honger = honger + x;
        tekstWolkje.textContent = zeggen[0];
    } else {
        tekstWolkje.textContent = zeggen[3];
    }
}
knoppen[1].addEventListener('click', function () {
    etenGeven(4);
});
//Deze last minute veranderd! moet dus 1 zijn en niet 0!!

function spelenMet(x) {
    if (plezier <= 100) {
        plezier = plezier + x;
        tekstWolkje.textContent = zeggen[1];
    } else {
        tekstWolkje.textContent = zeggen[4];
    }
}
knoppen[2].addEventListener('click', function () {
    spelenMet(4);
});
//Deze last minute veranderd! moet dus 2 zijn en niet 1!!

function beterMaken(x) {
    if (gezondheid <= 100) {
        gezondheid = gezondheid + x;
        tekstWolkje.textContent = zeggen[2];
    } else {
        tekstWolkje.textContent = zeggen[5];
    }
}
knoppen[3].addEventListener('click', function () {
    beterMaken(4);
});
//Deze last minute veranderd! moet dus 3 zijn en niet 2!!

//als je dubbelklikt op het dier, wordt de pagina herladen, zo kan je opnieuw beginnen met het spelletje!
//heb ik gelezen op: https://www.w3schools.com/jsref/met_loc_reload.asp
function beginOpnieuw() {
    location.reload();
}
dier[5].addEventListener("dblclick", beginOpnieuw);
