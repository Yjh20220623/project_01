var c  = document.querySelector('.c');
var prt  = document.querySelector('.percent');
var clear  = document.querySelector('.clear');
var dve  = document.querySelector('.divide');
var sev  = document.querySelector('.sevent');
var eig  = document.querySelector('.eight');
var nig  = document.querySelector('.night');
var ten  = document.querySelector('.ten');
var four  = document.querySelector('.four');
var five  = document.querySelector('.five');
var six  = document.querySelector('.six');
var rde  = document.querySelector('.reduce');
var one  = document.querySelector('.one');
var two  = document.querySelector('.two');
var three  = document.querySelector('.three');
var add  = document.querySelector('.add');
var zz  = document.querySelector('.zerozero');
var zero  = document.querySelector('.zero');
var dot  = document.querySelector('.dot');
var equal  = document.querySelector('.equal');
var xianshi =document.querySelector('.xianshi');
var jg = 1;
var input =document.querySelector('input');
input.placeholder = '';
c.addEventListener('click',function() {
    jg = '';
input.placeholder = '';

})
prt.addEventListener('click',function() {
    jg = jg*0.01;
input.placeholder = jg;
console.log(isNaN());
})
clear.addEventListener('click',function() {
input.placeholder = input.placeholder.replace(input.placeholder.charAt(input.placeholder.length-1),'');
})
sev.addEventListener('click',function() {
    input.placeholder = input.placeholder + '7';
    
})
eig.addEventListener('click',function() {
    input.placeholder = input.placeholder + '8';

})
nig.addEventListener('click',function() {
    input.placeholder = input.placeholder + '9';

})  
one.addEventListener('click',function() {
    input.placeholder = input.placeholder + '1';

}) 
 two.addEventListener('click',function() {
    input.placeholder = input.placeholder + '2';

}) 
 three.addEventListener('click',function() {
    input.placeholder = input.placeholder + '3';

})
four.addEventListener('click',function() {
    input.placeholder = input.placeholder + '4';

})
five.addEventListener('click',function() {
    input.placeholder = input.placeholder + '5';

})
six.addEventListener('click',function() {
    console.log('a');
    input.placeholder = input.placeholder +'6';

})
prt.addEventListener('click',function() {
    input.placeholder = input.placeholder +'%';
    
})
dot.addEventListener('click',function() {
    input.placeholder = input.placeholder +'.';

})


dve.addEventListener('click', function() {
             if (input.placeholder.indexOf('//') != -1) {
            input.placeholder = input.placeholder.replace('//','/');
         } else {
             input.placeholder = input.placeholder + '/';
             if (input.placeholder.indexOf('//') != -1) {
                input.placeholder = input.placeholder.replace('//','/');
         }   
        }   
       
       
});
add.addEventListener('click', function() {
    if (input.placeholder.indexOf('++') != -1) {
   input.placeholder = input.placeholder.replace('++','+');
} else {
    input.placeholder = input.placeholder + '+';
    if (input.placeholder.indexOf('++') != -1) {
       input.placeholder = input.placeholder.replace('++','+');
}   
}   


});
rde.addEventListener('click', function() {
    if (input.placeholder.indexOf('--') != -1) {
   input.placeholder = input.placeholder.replace('--','-');
} else {
    input.placeholder = input.placeholder + '-';
    if (input.placeholder.indexOf('--') != -1) {
       input.placeholder = input.placeholder.replace('--','-');
}   
}   


});
ten.addEventListener('click', function() {
    if (input.placeholder.indexOf('**') != -1) {
   input.placeholder = input.placeholder.replace('**','*');
} else {
    input.placeholder = input.placeholder + '*';
    if (input.placeholder.indexOf('**') != -1) {
       input.placeholder = input.placeholder.replace('**','*');
}   
}   


});

   
       
 
   

equal.addEventListener('click',function(){
    input.placeholder = eval(input.placeholder);
})