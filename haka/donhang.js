function displayCustomer() {
    let listCustomer = JSON.parse(localStorage.getItem("CustomerLocalstorage"));
    let s = "";
    const element = listCustomer;
    s += `<tr>
        <td>${element.nameCustomer}</td>
        <td>${element.PhongNumberCustomer}</td>
        <td>${element.addressCustomer}</td>
        <td>${element.noteCustomer}</td>
        <td>${element.timeCustomer}</td>
        </tr>
        `
    document.getElementById("customer").innerHTML = s;
}
displayCustomer();

function displayBill() {
    let listBill = JSON.parse(localStorage.getItem("hoaDonLocalStorage"));
    let s = "";
    for (let i = 0; i < listBill.length; i++) {
        const element = listBill[i];
        s += `<tr>
        <td>${i + 1}</td>
        <td>${element.name}</td>
        <td>${numberWithCommas(element.price)}</td>
        <td>${element.soLuongCuaSanPham}</td>
        <td>${numberWithCommas(element.price * element.soLuongCuaSanPham)}</td>
        </tr>
        `
    }
    let total = 0
    for (let i = 0; i < listBill.length; i++) {
        total += (listBill[i].price * listBill[i].soLuongCuaSanPham) 
    }
    s += `<tr>
    <td></td>
    <td></td>
    <td></td>
    <td>Thành tiền:</td>
    <td>${numberWithCommas(total)}</td>
    </tr>`
    document.getElementById("bill").innerHTML = s;
}
displayBill()

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}