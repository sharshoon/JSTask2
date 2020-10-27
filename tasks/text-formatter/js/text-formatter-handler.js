function handleTextFormat(e){
    const text = document.getElementsByClassName("text-formatter__input-text")[0].value;
    const maxTextLength = document.getElementsByClassName("text-formatter__input-max-text")[0].value;
    const maxLineLength = document.getElementsByClassName("text-formatter__input-max-line")[0].value;
    const wrapOption = document.getElementsByClassName("text-formatter__select-mode")[0].value;
    const resultContainer = document.getElementsByClassName("text-formatter__result-container")[0];

    try{
        if(maxTextLength < 0){
            throw new Error("Max Text Length should be more than zero");
        }
        if(maxLineLength < 0){
            throw new Error("Max Line Length should be more than zero");
        }

        const result = textFormatter.formatText(text, maxTextLength || undefined, maxLineLength || undefined, wrapOption);
        
        // I think it would be wrong to immediately write <br/> in the text formatting function, because it becomes less universal
        resultContainer.innerHTML = result.replaceAll("\n", "<br/>");
    }
    catch(e){
        resultContainer.innerHTML = e.message;
    }
}

document.getElementsByClassName("text-formatter__button")[0].addEventListener("click", handleTextFormat);
