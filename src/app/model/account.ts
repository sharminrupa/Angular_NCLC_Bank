export class Account{
    id: string;
    name: string;
    gender: string;
    mobile: string;
    email: string;
    education: string;
    acctype: string;
    date: string;
    openingbalance: number;
    address: string;
    constructor(id, name, gender, mobile, email, education, acctype, date, openingbalance, address){
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.mobile = mobile;
        this.email = email;
        this.education = education;
        this.acctype = acctype;
        this.date = date;
        this.openingbalance = openingbalance;
        this.address = address;
    }

    }
