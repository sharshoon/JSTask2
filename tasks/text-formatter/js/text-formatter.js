const textFormatter = {
    formatText(sourceText, maxTextLength = sourceText.length, maxLineLength = Infinity, lineBreakStyle = "none"){
        const text = maxTextLength < sourceText.length ? sourceText.slice(0, maxTextLength) : sourceText;
        if(lineBreakStyle === "character"){
            return text.split("").map(character => character + "\n").join("");
        }
        else if(lineBreakStyle === "word"){
            return text
                .split(/[\s.]+/)
                .map(word => {
                    let longWord = word.split("\n");
                    while(longWord.some(word => word.length > maxLineLength)){
                        longWord = longWord.map(word => {
                            if(word.length > maxLineLength){
                                return word.slice(0, maxLineLength) + "\n" + word.slice(maxLineLength);
                            }
                        }).join("").split("\n");
                    }

                    return longWord.join("\n")+"\n";
                })
                .join("")
        }
        else if(lineBreakStyle === "sentence"){
            const sentences = text.split(".");

            let resultText = "";
            for(let sentence of sentences){
                let newLine = "";
                for(let word of sentence.split(" ")){
                    if(newLine.trim().length + word.length - 1 < maxLineLength){
                        newLine += word + " ";
                    }
                    else{
                        resultText += newLine.trim() + "\n";
                        newLine = word + " ";
                    }
                }
                resultText += newLine.trim() + "." + "\n";
            }

            return resultText.trim().slice(0, resultText.length-2);
        }
        else if(lineBreakStyle === "none"){
            if(maxLineLength === Infinity){
                return text;
            }

            const words = text.split(/[\s.]+/);

            let resultText = "",
                newLine = "";
            for(let word of words){
                if(newLine.length + word.length < maxLineLength){
                    newLine += word + " ";
                }
                else{
                    resultText += newLine.trim() + "\n";
                    newLine = word + " ";
                }
            }

            if(newLine.trim()){
                resultText += newLine;
            }

            return resultText.trim();
        }
    }
}