const brukervalg = "stein"

function valg (brukervalg);

    return brukervalg




let datavalg = Math.random();

if datavalg ( < 0.34) {

    datavalg = "stein";

} else if (datavalg <= 0.67){

    datavalg = "papir";

} else{

    datavalg = "saks";

}

/*

*her er ein funksjon som \let datamaskinen velge stain, saks eller pappir

*/



function spill (brukervalg, datavalg){

    if (brukervalg === "BOMBE!"){
    
        return "Du vinnner!";

    }
  
    if (brukervalg === datavalg){

        return "Det ble uavgjort";

    }



    if (brukervalg === "stein"){

        if (datavalg === "saks") {

            return "Du vinner!";

        } else {

            return "Du taper";

    }



    if (brukervalg === "papir") {

        if (datavalg === "saks") {

            return "Du taper";

        } else {

            return "Du vinner!";
        

    }



    if (brukervalg === "saks") {

        if (datavalg === "stein") {

            return "Du taper";

        } else {

            return "Du vinner!";
        
    }
}

spill();

    console.log(´Du valgte ${brukervalg}´);
    console.log(´Dataen valgte ${datavalg}´);
