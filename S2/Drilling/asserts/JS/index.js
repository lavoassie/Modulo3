
function convert() {
    let dias = ["bigTemp", "sun", "mon", "wed", "thu", "fri", "sat"];
    let input = document.querySelector("input");

    if (input.id == '' || input.id == 'C') {
        input.setAttribute("id", "F")
        document.getElementById("bigC").innerHTML = "ºF"
        for (let dia of dias) {
            let date = document.getElementById(dia);
            let dateF = (date.innerHTML * 1.8) + 32;
            date.innerHTML = Math.round(dateF)
        }

    } else {
        input.setAttribute("id", "C")
        document.getElementById("bigC").innerHTML = "ºC"
        for (let dia of dias) {
            let date = document.getElementById(dia);
            let dateF = (date.innerHTML -32) * 5/9;
            date.innerHTML = Math.round(dateF)
        }
    }
}