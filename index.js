
document.getElementById("texto").innerHTML="Tchuda Bidenguilté"
document.getElementById("developer").innerHTML="Calculadora"
// document.getElementById("fotoBoy").setAttribute('src','https://github.com/Oneboy97.png ')
document.getElementById("fotoBoy").setAttribute('src','foto.jpg ')
function soma(){
    let numero1=document.getElementById("numero1").value
    let numero2=document.getElementById("numero2").value
    let soma=parseFloat(numero1)+parseFloat(numero2)
    document.getElementById("resultado").innerHTML=soma
}
function sub(){
    let numero1=document.getElementById("numero1").value
    let numero2=document.getElementById("numero2").value
    let sub=parseFloat(numero1)-parseFloat(numero2)
    document.getElementById("resultado").innerHTML=sub
}
function mult(){
    let numero1=document.getElementById("numero1").value
    let numero2=document.getElementById("numero2").value
    let mult=parseFloat(numero1)*parseFloat(numero2)
    document.getElementById("resultado").innerHTML=mult
}
function div(){
    let numero1=document.getElementById("numero1").value
    let numero2=document.getElementById("numero2").value
    let div=parseFloat(numero1)/parseFloat(numero2)
    document.getElementById("resultado").innerHTML=div
}