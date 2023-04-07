function radar(skorost, mestopolojenie) {

    let naMagistrala = 130;
    let dvulentovPut = 90;
    let vGrada = 50;
    let vJilishteKompleks = 20;

    if (mestopolojenie === 'residential') {
        if (skorost <= vJilishteKompleks) {
            console.log(`Driving ${skorost} km/h in a ${vJilishteKompleks} zone`);
        } else if (skorost > vJilishteKompleks && skorost <= vJilishteKompleks + 20) {
            console.log(`The speed is ${skorost - vJilishteKompleks} km/h faster than the allowed speed of ${vJilishteKompleks} - speeding`);
        } else if (skorost > vJilishteKompleks + 20 && skorost <= vJilishteKompleks + 40) {
            console.log(`The speed is ${skorost - vJilishteKompleks} km/h faster than the allowed speed of ${vJilishteKompleks} - excessive speeding`)
        } else {
            console.log(`The speed is ${skorost - vJilishteKompleks} km/h faster than the allowed speed of ${vJilishteKompleks} - reckless driving`)
        }
    }

    if (mestopolojenie === 'city') {
        if (skorost <= vGrada) {
            console.log(`Driving ${skorost} km/h in a ${vGrada} zone`);
        } else if (skorost > vGrada && skorost <= vGrada + 20) {
            console.log(`The speed is ${skorost - vGrada} km/h faster than the allowed speed of ${vGrada} - speeding`);
        } else if (skorost > vGrada + 20 && skorost <= vGrada + 40) {
            console.log(`The speed is ${skorost - vGrada} km/h faster than the allowed speed of ${vGrada} - excessive speeding`)
        } else {
            console.log(`The speed is ${skorost - vGrada} km/h faster than the allowed speed of ${vGrada} - reckless driving`)
        }
    }

    if (mestopolojenie === 'interstate') {
        if (skorost <= dvulentovPut) {
            console.log(`Driving ${skorost} km/h in a ${dvulentovPut} zone`);
        } else if (skorost > dvulentovPut && skorost <= dvulentovPut + 20 ) {
            console.log(`The speed is ${skorost - dvulentovPut} km/h faster than the allowed speed of ${dvulentovPut} - speeding`);
        } else if (skorost > dvulentovPut + 20 && skorost <= dvulentovPut + 40) {
            console.log(`The speed is ${skorost - dvulentovPut} km/h faster than the allowed speed of ${dvulentovPut} - excessive speeding`)
        } else {
            console.log(`The speed is ${skorost - dvulentovPut} km/h faster than the allowed speed of ${dvulentovPut} - reckless driving`)
        }
    }

    if (mestopolojenie === 'motorway') {
        if (skorost <= naMagistrala) {
            console.log(`Driving ${skorost} km/h in a ${naMagistrala} zone`);
        } else if (skorost > naMagistrala && skorost <= naMagistrala + 20) {
            console.log(`The speed is ${skorost - naMagistrala} km/h faster than the allowed speed of ${naMagistrala} - speeding`);
        } else if (skorost > naMagistrala + 20 && skorost <= naMagistrala + 40) {
            console.log(`The speed is ${skorost - naMagistrala} km/h faster than the allowed speed of ${naMagistrala} - excessive speeding`)
        } else {
            console.log(`The speed is ${skorost - naMagistrala} km/h faster than the allowed speed of ${naMagistrala} - reckless driving`)
        }
    }

}



radar(40, 'residential');
/* radar(70, 'city'); */
/* radar(170, 'motorway'); */
/* radar(190, 'interstate'); */