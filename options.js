const cellNamePlaceHolder = document.querySelector("#active-cell");
let activeElement = null;
const fontSizeInput = document.querySelector("#font-size");
const fontFamilyInput = document.querySelector("#font-family");
const form = document.querySelector("#form");
const formulaBox = document.querySelector(".expression");
formulaBox.addEventListener("keydown",onEvalExpression);

function onEvalExpression(e){
    if(!activeElement){
        alert("select a cell before making changes");
        form.reset();
        return;
    }
    if(e.keyCode===13){
       let  x = window.eval(formulaBox.value);
       activeElement.innerText = x;
       formulaBox.value = "";
    }
}

let state = {

}

let defaultProps = {
    fontFamily: "monospace",
    fontSize: "16",
    color: "#000000",
    textAlign: "left",
    backgroundColor: "#ffffff",
    isBold:false,
    isItalic:false,
    isUnderlined:false,
    value:""

};


function onCellFocus(e){
    const elementId = e.target.id;
    cellNamePlaceHolder.innerText = e.target.id;
    activeElement = e.target;
   
    if(state[elementId]){
        resetOptions(state[elementId]);
    }
    else{
        resetOptions(defaultProps);
    }
}

function resetOptions(optionState){

    form.fontfamily.value =optionState.fontFamily;
    form.fontsize.value = optionState.fontSize;
    form.textalign.value = optionState.textAlign;
    form.bold.checked = optionState.isBold;
    form.italic.checked = optionState.isItalic;
    form.underline.checked = optionState.isUnderlined;
    form.textcolor.value = optionState.color;
    form.bgcolor.value = optionState.backgroundColor;
}






function onFormChange(){
    if(!activeElement){
        alert("select a cell before making changes");
        form.reset();
        return;
    }

    let currentState = {
        textColor: form.textcolor.value,
        backgroundColor: form.bgcolor.value,
        fontSize: form.fontsize.value,
        fontFamily: form.fontfamily.value,
        isBold: form.bold.checked,
        isItalic: form.italic.checked,
        isUnderlined: form.underline.checked,
        textAlign: form.textalign.value
    }

    applyStyleToCell(currentState);
    state[activeElement.id] = {...currentState, value: activeElement.innerText};
}


function applyStyleToCell(currentState){
    activeElement.style.fontSize = `${currentState.fontSize}px`;
    activeElement.style.fontFamily = currentState.fontFamily;
    activeElement.style.color = currentState.textColor;
    activeElement.style.backgroundColor = currentState.backgroundColor;
    activeElement.style.textAlign = currentState.textAlign;

    if(currentState.isBold){
        activeElement.style.fontWeight = "bold";
    }
    else{
        activeElement.style.fontWeight = "normal";
    }

    if(currentState.isItalic){
        activeElement.style.fontStyle = 'italic';
    }
    else{
        activeElement.style.fontStyle = 'normal';
    }

    if(currentState.isUnderlined){
        activeElement.style.textDecoration = "underline";
    }
    else{
        activeElement.style.textDecoration = "none";
    }

   
}