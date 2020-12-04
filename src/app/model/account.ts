export class Account{
    name: string;
    gender: string;
    mobile: string;
    email: string;
    education: string;
    acctype: string;
    date: string;
    balance: number;
    address: string;
    constructor(name, gender, mobile, email, education, acctype, date, balance, address){
        this.name = name;
        this.gender = gender;
        this.mobile = mobile;
        this.email = email;
        this.education = education;
        this.acctype = acctype;
        this.date = date;
        this.balance = balance;
        this.address = address;
    }

    }
