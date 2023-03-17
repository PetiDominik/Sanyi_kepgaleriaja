$(function() {
    main();
});

let lista = [
    "kepek/alszik.jpg",
    "kepek/bocsok.jpg",
    "kepek/cirkusz.jpg",
    "kepek/eszik.jpg",
    "kepek/integet.jpg",
    "kepek/maci.jpg",
    "kepek/medve.jpg",
    "kepek/taj.jpg",
];

function main() {
    const ARTICLE = $("article").eq(0);
    let txt = kepracsEloallit();
    let currentIndex = 0;
    
    ARTICLE.html(txt);

    const NAGYKEP = $(".nagykep img").eq(0);
    const JOBB = $("#jobb");
    const BAL = $("#bal");

    JOBB.on("click", function() {
        currentIndex = leptetes(1, currentIndex);
        NAGYKEP.attr("src", lista[currentIndex]);
    });
    BAL.on("click", function() {
        currentIndex = leptetes(-1, currentIndex);
        NAGYKEP.attr("src", lista[currentIndex]);
    });

    const KEPEK = $("article div img");
    console.log(KEPEK.eq(0));

    for (let j = 0; j < KEPEK.length; j++) {
        const KEP = KEPEK.eq(j);

        KEP.on("click", function (event) {
            NAGYKEP.attr("src", event.target.src);
            currentIndex = j;
        });
    }
}

function leptetes(ertek, currentIndex) {
    currentIndex += ertek;
    if (currentIndex < 0) {
        currentIndex = lista.length - 1;
    }
    if (currentIndex > lista.length - 1) {
        currentIndex = 0;
    }
    return currentIndex;
}

function kepracsEloallit() {
    let txt = "";

    for (let i = 0; i < lista.length; i++) {
        txt += `<div><img src="${lista[i]}" alt=""></div>`;
    }
    return txt;
}