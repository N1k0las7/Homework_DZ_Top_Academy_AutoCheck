const auto = { 'country': 'США', 'mark': 'Tesla', 'model': 'Y', 'year': '2019', 'top': '1 место', 'pic': 'tesla.jpeg' }

let but = document.getElementById('but')
let out = document.getElementById('out')


let stroka = ''

but.onclick = f1
function f1() {
    stroka += 'Страна: ' + auto.country + ' <br>' + 'Марка: ' + auto.mark + ' <br>' + 'Модель: ' + auto.model + ' <br>' + 'Год:' + auto.year + ' <br>' + 'Место по продажам в 2023г: ' + auto.top + ' <br>' + '<img src=' + auto.pic + ' alt="auto" width="500px">' + '<br>'
    console.log(stroka)
    out.innerHTML = stroka
}

////////////////////////////////////////////////////////////////

const chek = [
    { name: 'Курица', quantity: 2, price: 400, },
    { name: 'Яйца', quantity: 10, price: 100, },
    { name: 'Укроп', quantity: 3, price: 50, },
    { name: 'Вина Анапы', quantity: 1, price: 500, },
]

let but1 = document.getElementById('but1')
let out1 = document.getElementById('out1')
let out2 = document.getElementById('out2')
let out3 = document.getElementById('out3')

but1.onclick = f2

function f2() {
    let str = ''
    for (x in chek) {
        str += '<tr><td>' + chek[x].name + '</td><td>' + chek[x].quantity + '</td><td>' + chek[x].price + '</td></tr>'
    }
    out1.innerHTML = '<tr><td>' + 'Название' + '</td><td>' + 'Количество(шт)' + '</td><td>' + 'Цена(за 1шт)' + '</td></tr>' + str

    const total = chek.reduce((total, elem) => {
        total += elem.price * elem.quantity
        return total
    }, 0)
    
    out2.innerText = 'Cумма всех покупок: ' + total

    // console.log(chek[0].price)

    let max = 0
    let namePrice = ''
    for (x in chek) {
        if (max > chek[x].price) {
            continue
        }
        else {
            max = chek[x].price
            namePrice = chek[x].name
        }
    }

    out3.innerText = 'Самая дорогая покупка: ' + namePrice + ' за ' + max

}
