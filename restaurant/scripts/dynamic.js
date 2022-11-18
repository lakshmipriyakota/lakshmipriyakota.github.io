function showOrder(id) {
    let modal = document.querySelector('#order');
//adding modal header
    let head = modal.querySelector('h2');
    head.innerText = 'Table - '+id.at(-1)+' | Order Details';
//adding modal content table and implementing modification
    let table = modal.querySelector('table');
    let tarr = tableMap.get(id);
    

    for(let i in tarr[0]) {
        let tr = document.createElement('tr');
        let tds = document.createElement('td');
        let tdName = document.createElement('td');
        let tdPrice = document.createElement('td');
        let tdQuant = document.createElement('td');
        let tdrem = document.createElement('td');
        tds.innerText = +i+1;
        tdName.innerText = tarr[0][i];
        tdPrice.innerText = tarr[1][i];
        let inp = document.createElement('input');
        inp.setAttribute('type','number');
        inp.setAttribute('step',1);
        inp.setAttribute('min',1);
        inp.setAttribute('value',tarr[2][i]);
        tdQuant.appendChild(inp);
        let btn = document.createElement('input');
        btn.setAttribute('type','button');
        btn.setAttribute('value','remove');
        tdrem.appendChild(btn);
        tr.appendChild(tds);
        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        tr.appendChild(tdQuant);
        tr.appendChild(tdrem);
        table.appendChild(tr);

        inp.onchange = () => {
            tarr[2][i] = inp.value;
            tarr[3][i] = tarr[1][i]*tarr[2][i];
            updateTable(id);
        }
        btn.onclick = () => {
            tarr[0].splice(i,1);
            tarr[1].splice(i,1);
            tarr[2].splice(i,1);
            table.removeChild(tr);
            updateTable(id);
        }
    }
//To display modal
    modal.style.display = 'block';
//To hide modal
    let span = modal.querySelector('span');
    span.onclick = () => {
        modal.style.display='none';
        clearRows(table);
    }
    window.onclick = event => {
        if (event.target == modal) {
          modal.style.display = "none";
          clearRows(table);
        }
    }
//implementing generate bill
    let btn2 = modal.querySelector('.modal-footer input');
    btn2.onclick = () => {
        modal.style.display='none';
        generateBill(id);
    }
}

function generateBill(id) {
    let modal = document.querySelector('#bill');
//adding modal header
    let head = modal.querySelector('h2');
    head.innerText = 'Table - '+id.at(-1)+' | Bill Details';
//adding modal content table
    let table = modal.querySelector('table');
    let tarr = tableMap.get(id);
    let sum = 0;
    for(let i in tarr[0]) {
        let tr = document.createElement('tr');
        let tds = document.createElement('td');
        let tdName = document.createElement('td');
        let tdPrice = document.createElement('td');
        let tdQuant = document.createElement('td');
        let tdCost = document.createElement('td');
        tds.innerText = +i+1;
        tdName.innerText = tarr[0][i];
        tdPrice.innerText = tarr[1][i];
        tdQuant.innerText = tarr[2][i];
        tdCost.innerText = tarr[3][i];
        sum+=tarr[3][i]|0;
        tr.appendChild(tds);
        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        tr.appendChild(tdQuant);
        tr.appendChild(tdCost);
        table.appendChild(tr);
    }
    let tdTotal = document.createElement('td');
    tdTotal.setAttribute('colspan','4');
    tdTotal.innerText = 'Total Cost:'
    let tdTotCostSum = document.createElement('td');
    tdTotCostSum.innerText = sum;
    let tr = document.createElement('tr');
    tr.appendChild(tdTotal);tr.appendChild(tdTotCostSum);
    tr.setAttribute('class','totalCost');
    table.append(tr);
// To display modal pop-up
    modal.style.display = 'block';
// To hide modal pop-up
    let orderTab = document.querySelector('#order table');
    let span = modal.querySelector('span');
    span.onclick = () => {
        modal.style.display='none';
        clearRows(orderTab);
        clearRows(table);
    }
    window.onclick = event => {
        if (event.target == modal) {
          modal.style.display = "none";
          clearRows(orderTab);
          clearRows(table);
        }
    }
//implementing print button which resets table session
    let btn = modal.querySelector('.modal-footer input');
    btn.onclick = () => {
        clearRows(orderTab);
        clearRows(table);
        modal.style.display='none';
        tarr[0]=[];tarr[1]=[];tarr[2]=[];tarr[3]=[];
        updateTable(id);
    }
}

function clearRows(ele) {
    while(ele.rows.length>1) {
        ele.deleteRow(1);
    }
}