/*function timeToTWalk(steps, footprint, speed) {
    let distance = steps * footprint;
    let speedMetersInSec = speed / 3.6;
    let time = distance / speedMetersInSec;
    let res = Math.floor(distance / 500);

    let timeInMinutes = Math.floor(time / 60);
    let timeInSe = Number((time-(timeInMinutes * 60)).toFixed(0))
    let timeInHours = Math.floor(time / 3600);
    timeInMinutes += res;
    timeInMinutes +=Math.floor(timeInMinutes / 60);
    timeInMinutes = timeInMinutes % 60;

    let formatH = timeInHours < 10 ? `0${timeInHours}` : `${timeInHours}`;
    let formatM = timeInMinutes < 10 ? `0${timeInMinutes}` : `${timeInMinutes}`;
    let formatS = timeInSe   < 10 ? `0${timeInSe  }` : `${timeInSe  }`;
    console.log(`${formatH}:${formatM}:${formatS}`)   
}

timeToTWalk(4000, 0.60, 5);
 timeToTWalk(2564, 0.70, 5.5) */

 function solve(stupki, stukpaZaMeter, razstoqniZaEdinChas) {

    let cqlotoRazstoqnie = stupki * stukpaZaMeter;
    let zaSekundaMeter = razstoqniZaEdinChas / 3.6
    let obshtoVreme = cqlotoRazstoqnie / zaSekundaMeter;
    let pochivka = Math.floor(cqlotoRazstoqnie / 500);
    
    let vremetoVMinuti = Math.floor(obshtoVreme / 60);
    vremetoVMinuti += pochivka;
    let vremetoVSekundi = Math.ceil(obshtoVreme + (pochivka * 60) - (vremetoVMinuti * 60));
    let vremeVChasove = Math.floor(vremetoVMinuti / 60);
    
    let formatChas = vremeVChasove < 10 ? `0${vremeVChasove}` : `${vremeVChasove}`;
    let formatMinuti = vremetoVMinuti < 10 ? `0${vremetoVMinuti}` : `${vremetoVMinuti}`;
    let formatSekundi = vremetoVSekundi < 10 ? `0${vremetoVSekundi}` : `${vremetoVSekundi}`;

    console.log(`${formatChas}:${formatMinuti}:${formatSekundi}`)
    

 }

 solve(4000, 0.60, 5)
 solve(2564, 0.70, 5.5)