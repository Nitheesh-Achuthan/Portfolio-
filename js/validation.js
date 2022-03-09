// let form=document.querySelector("#cform");
// let submit=document.querySelector(".contact__button")
// let vname=document.querySelector("#vname")
// let vmail=document.querySelector("#vmail")
// let varea=document.querySelector("#varea")
// let error=document.querySelector("#errorbox")
// let error1=document.querySelector("#errorbox1")
// let error2=document.querySelector("#errorbox2")
// let resultbox=document.querySelector('#resultbox')
// let check=[0,0,0];
// const textnode = document.createTextNode("Water");
// const node = document.createElement("LI");

// const regname=/^[a-zA-Z][a-zA-Z\s]*$/;
// let regmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// console.log(vname);

// let nameListner=vname.addEventListener('input',()=>{  
// if(vname.value.match(regname) != vname.value )
// {   
  
//     error.textContent="Please enter a valid name"
//     check[0]=0;

// }
// else{
//     error.textContent=""
//     check[0]=1;
// }
// })


// let emailListner=vmail.addEventListener('input',()=>{
// if(vmail.value.match(regmail) != vmail.value)
// {   
  
//     error1.textContent="Enter a proper mail"
//     check[1]=0;

// }
// else{
//     console.log(regmail)
//     error1.textContent=""
//     check[1]=1
// }
// })

// let textListner=varea.addEventListener('input',()=>{
    
//     if(varea.value.length < 10)
//     {   
//       error2.textContent="Please enter atleast 10 characters"+" "+varea.value.length+"/400 ";
//         check[2]=0;
      
    
    
//     }
//     else if(varea.value.length > 400)
//     {
//         error2.textContent="Please keep it limited to 400 characcters";
//         check[2]=0
//     }
//     else{

//         error2.textContent=varea.value.length+"/400 ";
//         check[2]=1
//     }
//     })
   
// function isOne(element)
// {
//     return element===1;
// }

// function checkDouble(){
//     if(1<2){
//      value=true
//     }
//     else{
//         value=false;
//     }
// }
// checkDouble();
// // +++++++++++++AJAX+++++++++++++++++
// $("#cform").submit((e)=>{
//     e.preventDefault()
    
//     if(check.every(isOne)&& value==true)
//    {    value=false;
//         $.ajax({
//         url:"https://script.google.com/macros/s/AKfycbz6s1r6tzoth6u4UKJu8I0iAu3_zoqCMVIMdaqewzZCQ0zGqicHmi_6bbNO90TBcwPS/exec",
//         data:$("#cform").serialize(),
//         method:"post",
//         success:function (response){
           
//             alert("Form submitted successfully");
            
//             window.location.reload()
//             //window.location.href="https://google.com"
            
//             form.reset();
//         },
//         error:function (err){
//             alert("Something went wrong")

//         }
//     })}
//     else{
//         // resultbox.textContent="Enter details correctly..!"
//         if(vmail.value=="")
//             {   
  
//                 error1.textContent="Enter a proper mail..!"
//                 check[1]=0;

//             }
//             if(vname.value=="" )
//             {   
              
//                 error.textContent="Please enter a valid name..!"
//                 check[0]=0;
            
//             }
//             if(varea.value=="")
//             {
//                 error2.textContent="Please enter the message..!"
//             }
        
//     }
// })