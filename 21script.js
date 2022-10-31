var lista = []
var res = document.getElementById('res')
function add(){
    var numero = document.getElementById("txtnum")
    res.innerHTML = ""

    if(numero.value.length==0){
        window.alert(`Por favor, insira um número para ser adicionado`)
    }else{
        let num = Number(numero.value)
        if(num>=1 && num<=100 && lista.indexOf(num)==-1){
            lista.push(num)
            banco(lista)
        }else{
            window.alert(`Insira um valor válido. OBS: NÚMEROS REPETIDOS SÃO INVÁLIDOS`)
        }
    }
}

function banco(lista){
    var aux = 0
    var tab = document.getElementById("selnum")
    tab.innerHTML = ``
        while(aux<lista.length){
            let item = document.createElement('option')
            item.text = `${lista[aux]}`
            tab.appendChild(item)
            aux++
        }
    return lista
}

function finalizar(){
    res.innerHTML = ''
    var soma = 0
    for(var aux=0; aux<lista.length; aux++){
        soma = soma + lista[aux]
    }
    var media = soma/lista.length

    res.innerHTML += `Ao todo, temos ${lista.length} números cadastrados.\n`
    lista.sort()
    res.innerHTML += `<p>O maior valor informado foi ${lista[(lista.length)-1]}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${lista[0]}</p>`
    res.innerHTML += `<p>Somando todos os valores temos: ${soma}</p>`
    res.innerHTML += `<p>A média dos valores digitados é: ${media}</p>`
}