
export class User {
    
  constructor(username:string, email:string){

    //let d = new Date();
    this.username = username;
    this.email = email;
    //this.age = birthdate - d.getFullYear();

  
    }

  username:string= "";
  email:string = "";
  birthdate:string = "";
  password:string = "";
  age:number = 0;
  valid:boolean = false;


}

