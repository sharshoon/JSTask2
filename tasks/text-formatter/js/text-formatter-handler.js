function handleTextFormat(textClass, maxTextLengthClass, maxLineLengthClass, wrapOptionClass, resultContainerClass){
    const text = document.getElementsByClassName(textClass)[0].value;
    const maxTextLength = document.getElementsByClassName(maxTextLengthClass)[0].value;
    const maxLineLength = document.getElementsByClassName(maxLineLengthClass)[0].value;
    const wrapOption = document.getElementsByClassName(wrapOptionClass)[0].value;
    const resultContainer = document.getElementsByClassName(resultContainerClass)[0];

    try{
        if(maxTextLength < 0){
            throw new Error("Max Text Length should be more than zero");
        }
        if(maxLineLength < 0){
            throw new Error("Max Line Length should be more than zero");
        }

        const result = textFormatter.formatText(text, parseInt(maxTextLength) || undefined, parseInt(maxLineLength) || undefined, wrapOption);
        
        // I think it would be wrong to write <br/> in the text formatting function, because it becomes less universal
        resultContainer.innerHTML = result.replaceAll("\n", "<br/>");
    }
    catch(e){
        resultContainer.innerHTML = e.message;
    }
}
