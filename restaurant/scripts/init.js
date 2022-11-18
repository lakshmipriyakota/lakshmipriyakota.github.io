var course = ['soup','starter','main','dessert','beverages'];
var menu = new Map([
    ['Tomato Soup',['soup','50']],
    ['Veg Corn Soup',['soup','60']],
    ['Chicken Soup',['soup','85']],
    ['Veg Manchurian',['starter','100']],
    ['Chicken 65',['starter','200']],
    ['Chilli Chicken',['starter','250']],
    ['Apollo fish',['starter','260']],
    ['Mutton kebab',['starter','270']],
    ['Veg fried rice',['main','250']],
    ['Chicken Dum Briyani',['main','350']],
    ['Special Chicken Biryani',['main','370']],
    ['Chicken pulav',['main','320']],
    ['Mutton Biryani',['main','400']],
    ['Egg biryani',['main','350']],
    ['Gulab Jamun',['dessert','150']],
    ['Ice Cream',['dessert','165']],
    ['Matka Kulfi',['dessert','120']],
    ['Soft drinks',['beverages','60']],
    ['Buttermilk',['beverages','50']],
    ['Lassi',['beverages','100']]
]);
var tableMap = new Map();

function addItem(name,course,cost) {
    let ul = document.querySelector(".menu-list");
    let item = document.createElement("li");
    let h = document.createElement("h3");
    h.innerText = name;
    item.setAttribute("class",'item '+course);
    item.setAttribute('id',name);
    item.appendChild(h);
    let span = document.createElement("span");
    span.setAttribute("class","cost");
    span.innerText = cost;
    item.appendChild(span);
    item.setAttribute('draggable',"true");
    item.setAttribute('ondragstart','dragStart(event)');
    ul.appendChild(item);
}

function initMenu() {
    for(let i of menu){
        addItem(i[0],i[1][0],i[1][1]);
    }
}

function addTable(id) {
    let ul = document.querySelector(".tables-list");
    let table = document.createElement("li");
    let h = document.createElement("h3");
    h.innerText = 'Table-'+id;
    table.setAttribute("class",'table');
    table.setAttribute("id",'table'+id);
    table.setAttribute("onclick","showOrder(this.id)");
    table.setAttribute("ondragover","allowDrop(event)");
    table.setAttribute("ondrop","drop(event)");
    table.appendChild(h);
    let para = document.createElement('p');
    para.innerText = 'Rs. ';
    let span = document.createElement("span");
    span.setAttribute("class","cost");
    span.innerText = '0';
    para.appendChild(span);
    para.appendChild(document.createTextNode(' | Total items: '));
    span = document.createElement('span');
    span.setAttribute("class","items");
    span.innerText = '0';
    para.appendChild(span);
    table.appendChild(para);
    ul.appendChild(table);
}

function initTables(n) {
    for(let i=1; i<=n; i++) {
        tableMap.set('table'+i,[[],[],[],[]]);
        addTable(i);
    }
}

initMenu();
initTables(4);