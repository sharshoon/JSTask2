class InvalidNumberError extends Error{
    constructor(message, number) {
        super(message);
        this.array = number;
    }
}