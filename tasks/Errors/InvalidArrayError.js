class InvalidArrayError extends Error{
    constructor(message, array) {
        super(message);
        this.array = array;
    }
}