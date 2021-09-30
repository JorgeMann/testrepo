const brukervalg = "stein"



function tilfeldigTal(max) {
    return Math.floor(Math.random() * max);
  }
  
  datavalg = (tilfeldigTal(3));

if datavalg ( = 0) {
    
    datavalg = "stein";

} else if datavalg ( = 1) {

    datavalg = "saks"

} else{

    datavalg = "papir"

}




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
