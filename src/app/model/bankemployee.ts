export class Employee{
id: number;
name: string;
gender: string;
mobile: string;
email: string;
education: string;
date: string;
skill: string;
post: string;
image: string;
address: string;
password: string;

constructor(id, name, gender, mobile, email, education, date, skill, post, image, address, password){
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.mobile = mobile;
    this.email = email;
    this.education = education;
    this.date = date;
    this.skill = skill;
    this.image = image;
    this.post = post;
    this.address = address;
    this.password = password;
}

}
