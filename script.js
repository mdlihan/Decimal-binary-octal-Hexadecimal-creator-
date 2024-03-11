let decimal = document.querySelector('#decimal');
let binary = document.querySelector('#binary'); 
let error = document.querySelector('#error')
let octal = document.querySelector('#octal');
let hexadecimal = document.querySelector('#Hexadecimal');

decimal.addEventListener("input",()=>{
  let decimal_value = parseInt(decimal.value);
  binary.value=decimal_value.toString(2);
  octal.value=decimal_value.toString(8);
  hexadecimal.value=decimal_value.toString(16);
});


binary.addEventListener('input',()=>{
  let binaryinput = binary.value;
  
  if (validatorbinary(binaryinput)) {
let binary_value = parseInt(binaryinput,2);
  decimal.value=binary_value;
  octal.value=binary_value.toString(8);
  hexadecimal.value=binary_value.toString(16);
  error.innerHTML='';
  } else {
   error.innerHTML="please enter a correct Binary number:"
  }
  
});
function validatorbinary(num) {
  for (var i = 0; i < num.length; i++) {
    if (num[i] != '0' && num[i] != "1") {
      return false;
    }
  }
  return true;
};

octal.addEventListener('input',()=>{
let binaryinput = octal.value;
if (validatoroctal(binaryinput)) {
let binary_value = parseInt(binaryinput,8);
  decimal.value=binary_value;
  binary.value=binary_value.toString(2);
  hexadecimal.value=binary_value.toString(16);
  error.innerHTML='';
  } else {
   error.innerHTML="please enter a correct octal number:"
  }
});

function validatoroctal(num) {
  for (var i = 0; i < num.length; i++) {
    if (num[i]!='0' &&  num[i]!='1' &&  num[i] !='2' && num[i] !='3' && num[i]!='4' && num[i]!='5' &&  num[i]!='6' && num[i]!='7') {
      return false;
    }
  }
  return true;
}


hexadecimal.addEventListener('input',()=>{
let binaryinput = hexadecimal.value;
if (validatorhexadecimal(binaryinput)) {
let binary_value = parseInt(binaryinput,16);
  decimal.value=binary_value;
  binary.value=binary_value.toString(2);
  octal.value=binary_value.toString(7);
  error.innerHTML='';
  } else {
   error.innerHTML="please enter a correct Hexadecimal number:"
  }
});

function validatorhexadecimal(num) {
  for (var i = 0; i < num.length; i++) {
    if (num[i]!='0' &&  num[i]!='1' &&  num[i] !='2' && num[i] !='3' && num[i]!='4' && num[i]!='5' &&  num[i]!='6' && num[i]!='7'&& num[i]!='8'&& num[i]!='9' && num[i]!='a'&& num[i]!='b'&& num[i]!='c'&& num[i]!='d'&& num[i]!='e'&& num[i]!='f') {
      return false;
    }
  }
  return true;
}