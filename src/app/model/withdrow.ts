export class Withdrow{
    id: number;
    accno: number;
    name: string;
    mobile: string;
    balance: number;
    date: string;

    constructor(id, accno, name, mobile, balance, date){
        this.id = id;
        this.accno = accno;
        this.name = name;
        this.mobile = mobile;
        this.balance = balance;
        this.date = date;
    }
}
