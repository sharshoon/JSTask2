const arrayHelper = {
    emptyArrayCheck(array){
        if(!array){
            throw new InvalidArrayError("Array is empty!", array)
        }
    }
}