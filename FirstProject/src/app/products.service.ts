import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private isLogin:boolean=false;//isLogin is used to identify the user are login or not
  public getlog():boolean // isLogin in Private because to secure the isLogin from another Class
  {
    return this.isLogin;
  }
  public setsign()
  {
    this.usertype="all";
    this.isLogin=false;
  }
  private usertype:string="all";
  public getuserType():string
  {
    return this.usertype;
  }
  private setuserType(type:string):void
  {
    if(type=="Admin")
    {
      this.usertype=type;
    }
    else{
      this.usertype="User";
    }
    
  }
  public isadmin():boolean{
    if(this.usertype=="Admin"){
      return true;
    }
    return false;
  }
  public isuser():boolean{
    if(this.usertype=="User"){
      return true;
    }
    return false;
  }
  /*
    The BackEnd Database is not Avaiable for me so I will use Array to store the User_Details.
    It is not a good Idea because it is a Major Security Problem.
    It just for Testing............!
  */
  private userD:string[][]=[['praveen@gmail.com','praveen123','Admin'],['seenuvasan5688@gmail.com','seenuvasan123','User']];

  
  public verify(uname:string,pword:string):boolean
  {
    for(let i=0;i<this.userD.length;i++)
    {
      if(uname==this.userD[i][0] && pword==this.userD[i][1])
      {
        this.isLogin=true;
        this.setuserType(this.userD[i][2]);
        return true;
      }
    }
    this.isLogin=false;
    return false;
  }
}
