function filterTable() {
    let input, filter, li, i, txtValue,h;
    input = document.querySelector(".tables > input");
    filter = input.value.toLowerCase();
    li = document.querySelectorAll(".table");
    for (i = 0; i < li.length; i++) {
        h = li[i].querySelector("h3");
        txtValue = h.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function filterMenu() {
    let input, filter, li, i, txtValue, bool=true,h;
    input = document.querySelector(".menu > input");
    filter = input.value.toLowerCase();
    for(i of course) {
        if(i==filter){
            let c = document.querySelectorAll('.item');
            for(let j of c){
                j.style.display="none";
            }
            c = document.querySelectorAll('.'+i);
            for(let j of c) {
                j.style.display="";
            }
            bool=false;
            break;
        }
    }
    if(bool) {
        li = document.querySelectorAll(".item");
        for (i = 0; i < li.length; i++) {
            h = li[i].querySelector("h3");
            txtValue = h.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
}
