function updateTable(id) {
    let table = document.querySelector('#'+id);
    let span = table.querySelectorAll('span');
    let tarr = tableMap.get(id);
    let totCost=0,count=0;
    for(let i in tarr[2]){
        count+=tarr[2][i]|0;
        totCost+=tarr[3][i]|0;
    }
    span[0].innerText = totCost;
    span[1].innerText = count;
}