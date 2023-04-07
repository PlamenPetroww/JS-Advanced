function traveling(input) {

    let index = 0;
    let destinaciq = input[index];
    index++
    let money = 0;
    let end = false;

    while(destinaciq !== "End") {
        let needMoney = Number(input[index]);
        index++;

        while(money < needMoney) {
            if(input[index] === "End") {
                end = true;
                break;
            }
            let saveMoney = Number(input[index]);
            money += saveMoney;
            index++;
        }
        if(money >= needMoney) {
            console.log(`Going to ${destinaciq}!`);
            money -= needMoney;
            destinaciq = input[index];
        }
        if(end) {
            break;
        }
    }
}


traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

