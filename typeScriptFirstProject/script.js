var Sorteo = /** @class */ (function () {
    function Sorteo(name) {
        this.name = name;
    }
    Sorteo.prototype.setTicket = function (ticket) {
        this.ticket = ticket;
    };
    Sorteo.prototype.getTicket = function () {
        return this.ticket;
    };
    Sorteo.prototype.sort = function () {
        return "for ".concat(this.name, " the ticket is ").concat(this.ticket);
    };
    return Sorteo;
}());
var sorteo = new Sorteo('santiago');
sorteo.setTicket(7);
console.log(sorteo.sort());
