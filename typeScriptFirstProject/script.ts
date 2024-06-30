class Sorteo<T>{
    private ticket?: T;


    constructor(
        private name :string
    ){ }

    setTicket(ticket: T): void {
        this.ticket = ticket;
    
    }

    getTicket(){
        return this.ticket;
    }

    public sort(): string {
        return `for ${this.name} the ticket is ${this.ticket}`;
    }

}

let sorteo =  new Sorteo<number>('santiago')
sorteo.setTicket(7)

console.log(sorteo.sort())


//1:30:05
