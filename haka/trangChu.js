let listSanPham = localStorage.parse(JSON.stringify('listSanPhamLocalStorage'))
function displaySanPham(array, groupName, id) {
    var group = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.type === groupName) {
            group.push(element);
        }
    }
    var s = "";
    let itemCount = Math.round(group.length / 3);
    for (let i = 0; i < itemCount; i++) {
        s += `<div class="row">`
        for (let j = i * 3; j < i * 3 + 3; j++)
            if (j < group.length) {
                const element1 = group[j];
                s += `<div class="col-sm-4" style="padding: 10px">
                    <div class="card" style="rem">
                        <img class="card-img-top" id="img_${j}" src="${element1.img}" alt="${element1.name}" style="width:100%; height:15rem">
                        <div class="card-body">
                            <h4  class="card-title" id="name_${j}">${element1.name}</h4>
                            <p class="cost" price_${j}">${numberWithCommas(element1.price)}đ</p>
                            <button type="button" class="btn btn-primary"  data-itemId="${element1.name}" id="${j}">đi tới thức đơn</button>
                        </div>
                    </div>
                </div>`
            }
        s += "</div>"
    }
    document.getElementById(id).innerHTML = s;
}
displaySanPham(listSanPham,'trà',"montieubieu")