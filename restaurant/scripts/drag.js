function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    let id = event.dataTransfer.getData('text/plain');
    let cost = (menu.get(id)[1])|0;
    let tid = event.currentTarget.id;
    let tarr = tableMap.get(tid);
    let ind = tarr[0].indexOf(id);
    if(ind!=-1) {
        tarr[2][ind]++;
        tarr[3][ind]+=cost;
    }
    else {
        tarr[0].push(id);
        tarr[1].push(cost);
        tarr[2].push(1);
        tarr[3].push(cost);
    }
    updateTable(tid);
}