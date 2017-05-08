function calculaIMC(){
  //declaramos las variables
  var peso, altura, imc; //variables necesitadas para el calculo
  peso=document.getElementById("peso").value; //recogemos los datos mediante el id
  altura=document.getElementById("altura").value;
  
  if(peso!="" && altura!=""){ //comprobar que los campos no esten vacíos
    altura = parseInt(altura)/100; //calculo para indice de masa corporal
    imc=peso/(altura*altura);
    document.getElementById("imc").value=imc.toFixed(2); //The toFixed() method converts a number into a string
    var resultado = imc.toFixed(2);
 }
  return alert("Su Índice de masa corporal es de  : " + resultado)
}
console.log(imc);