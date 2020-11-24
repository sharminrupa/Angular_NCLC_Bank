export class Show{
id: number;
name: string;
gender: string;
mobile: string;
balance: number;
date: string;
type: string;

    constructor(id, name, gender, mobile, balance, date, type){
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.mobile = mobile;
        this.balance = balance;
        this.date = date;
        this.type = type;
    }
}
