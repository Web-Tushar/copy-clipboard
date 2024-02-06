let input = document.querySelector(".inputbox");
let upperbtn = document.querySelector(".upperbtn");
let lowerbtn = document.querySelector(".lowerbtn");
let result = document.querySelector(".result");
let repeatbtn = document.querySelector(".repeatbtn");
let lengthbtn =document.querySelector(".length")
let resetbtn = document.querySelector(".reset");
let copy = document.querySelector(".copy")


upperbtn.addEventListener("click",function(){

    input.value = input.value.toUpperCase();
 
 })
 
 lowerbtn.addEventListener("click" , function(){
 
    input.value = input.value.toLowerCase();
 
 })
 
 repeatbtn.addEventListener("click" , function(){
 
    input.value = input.value.repeat(20);
 
 })
 lengthbtn.addEventListener("click",function(){

    input.value = " your text length is : " + input.value.length;

 })


 resetbtn.addEventListener("click" , function(){
 
    input.value = "";
     input.value = "";
 
 })

    copy.addEventListener("click",function(){
        input.select();
        input.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(input.value);
})