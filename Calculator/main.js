const keys = document.querySelectorAll('.key');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');
console.log(keys)
let input = "";
for(let key of keys){
    const value = key.dataset.key;
    console.log(value);
    key.addEventListener('click',()=>{
        if(value == 'clear'){
            input = "";
            display_input.innerHTML = "";
            display_output.innerHTML = "";
        }else if(value == 'backspace'){
            input = input.slice(0,-1);
            display_input.innerHTML = input;
        }else if(value == "="){
            let result = eval(PrepareInput(input));
            display_output.innerHTML = result;
        }else if(value == 'brackets'){
            if(input.indexOf('(') == -1 ||
             input.indexOf("(") != -1 && 
             input.indexOf(")") != -1  && 
             input.lastIndexOf("(") < input.lastIndexOf(")")){
                input+="(";
            }else if(input.indexOf("(") != -1 && 
            input.indexOf(")") == -1 ||
            input.indexOf("(") != -1 &&
            input.indexOf(")")!= -1 &&
            input.lastIndexOf("(") > input.lastIndexOf(")")){
                input+=")";  
            }
            display_input.innerHTML = input;
        }else{
            if(validateInput(value)){
                input+=value;
            display_input.innerHTML = input;
            }
        }
    })
}

function cleanOutput(output){
    let output_string = output.toString();
    let decimal = output_string.split(".")[1];
    output_string = output_string.split(".")[0];

    let output_array = output_string.split("");
    if(output_array.length > 1){
        for(let i = output_array.length -3;i >0; i-=3){
            output_array.splcie(1,0,",");
        }
    }
    if(decimal){
        output_array.push(".");
        output_array.push(decimal);
    }
    return output_array.join("");
}
function validateInput(value){
    let last_input = input.slice(-1);
    let operators = ["*","/","+","-"];
    if(value =="." && last_input =="."){
        return false;
    }
    if(operators.includes(value)){
        if(operators.includes(last_input)){
            return false;
        }else{
            return true;
        }
    }
    return true;
}
function PrepareInput(input){
    let input_array = input.split("");
    for(let i =0;i<input_array.length;i++){
        if(input_array[i] =="%"){
            input_array[i] = "/100";
        }
    }
    return input_array.join("");
}