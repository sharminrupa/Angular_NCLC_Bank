export class Employee{
    id: string;
    name: string;
    gender: string;
    mobile: string;
    email: string;
    education: string;
    date: Date;
    skill: string;
    post: string;
    img: string;
    address: string;
    
    constructor(id, name, gender, mobile, email, education, date, skill, post, address){
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.mobile = mobile;
        this.email = email;
        this.education = education;
        this.date = date;
        this.skill = skill;
        this.post = post;
        this.address = address;
    }
    
    }
    