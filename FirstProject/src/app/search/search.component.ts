import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private svs:ProductsService) { }

  private admin:boolean=this.svs.isadmin();
  public isadmin():boolean
  {
    return this.admin;
  }
  //It is a simple data it is only for testing
  lists:string[][]=[["Praveen","Manager","Chennai","25","23-08","25000"],
  ["KAVIN PRASHANNA N P ","Manager","Namakkal","52","36837","1374"],
  ["DHUSHYANTH D ","Employee","Namakkal","37","40081","7429"],
  ["EMIL JEBASTIN A","Manager","Namakkal","36","42597","8036"],
  ["BALAJI M","Manager","Namakkal","26","43432","5587"],
  ["DAKSHINAMURTHY B","Manager","Salem","40","44672","2941"],
  ["MATHAN A","Manager","Thiruvannamalai","55","44403","8041"],
  ["DHANESH RAAM S ","Manager","Namakkal","46","40692","2706"],
  ["SARAVANAN R","Employee","Salem","41","44794","6747"],
  ["MIDHUN S","Manager","Thiruvannamalai","51","38157","5461"],
  ["ABISHEK V R","Employee","Thiruvannamalai","51","40442","2823"],
  ["Nirmaladevi J","Employee","Thiruvannamalai","28","42801","1641"],
  ["SOUNDARYA B","Manager","Thiruvannamalai","57","40698","7254"],
  ["Giridharan M","Manager","Thiruvannamalai","30","41144","8296"],
  ["RAJESWARI P","Employee","Salem","28","40130","1907"],
  ["YOKEESWRAN M","Manager","Thiruvannamalai","25","40547","5486"],
  ["NILAVARASU K","Employee","Namakkal","47","41028","3725"],
  ["Praveenkumar.B","Manager","Thiruvannamalai","43","43750","4002"],
  ["BAWYA V","Manager","Salem","42","39058","9462"],
  ["Jeya Surya ","Employee","Namakkal","54","36993","8639"],
  ["SELVAGANAPATHY R","Employee","Thiruvannamalai","51","38666","4102"],
  ["KUMARASAN T ","Manager","Namakkal","33","38743","6439"],
  ["J.Cathrine Arockiya Mary","Employee","Namakkal","55","39779","4801"],
  ["SRI KRISHNA R","Employee","Namakkal","26","38559","6286"],
  ["JANANIDURGADEVI M","Manager","Salem","57","43084","9930"],
  ["SABARI I","Manager","Thiruvannamalai","45","40238","8464"],
  ["ABISHEK V K","Manager","Namakkal","31","39730","3187"],
  ["SARANYA S ","Employee","Namakkal","59","38814","9885"],
  ["Vishnuraj R","Manager","Namakkal","56","44812","5939"],
  ["Dharmadurai P ","Manager","Salem","47","40087","9538"],
  ["R.Ramaswamy","Manager","Salem","41","40333","3833"],
  ["Ramasamy R","Manager","Salem","45","43279","4479"],
  ["Sadhasivam A","Manager","Thiruvannamalai","52","42073","5479"],
  ["Naidu Rahul Govindham","Employee","Thiruvannamalai","40","44368","5161"],
  ["Gayam Sainath Reddy","Manager","Thiruvannamalai","44","44873","8159"],
  ["Kiruthik Adhithya V","Employee","Salem","47","44186","5111"],
  ["Nagasurya T","Manager","Thiruvannamalai","39","42736","8290"],
  ["Kavidharshini P S","Employee","Thiruvannamalai","31","43848","8825"],
  ["Kaviya A","Employee","Namakkal","26","38992","9319"],
  [" Hemalatha. T","Manager","Thiruvannamalai","28","44292","5152"],
  ["Janani. R","Employee","Namakkal","27","40541","9026"],
  [" Lakshmi. T","Employee","Thiruvannamalai","52","41839","1963"],
  ["Prithisha.  S ","Employee","Thiruvannamalai","54","42099","1153"],
  ["Sathiskumar A","Employee","Thiruvannamalai","39","44893","1343"],
  ["Madhumitha D","Manager","Thiruvannamalai","51","41266","2801"],
  ["Karthik K","Employee","Thiruvannamalai","45","42666","6408"],
  ["Lakshamanan D","Employee","Namakkal","28","43659","1252"],
  ["B.Dinesh","Employee","Thiruvannamalai","30","43103","4144"],
  ["B.Sathish","Employee","Namakkal","52","44142","1848"],
  ["R.Muthukumaran","Employee","Namakkal","45","39563","5763"],
  ["S.Sudursan","Manager","Salem","48","41525","3498"],
  ["Dr.P.Hemalatha","Manager","Thiruvannamalai","44","40320","9049"]                  
]
  images:string[]=["https://cdn.pixabay.com/photo/2017/06/21/07/51/icon-2426370_960_720.png","https://cdn.pixabay.com/photo/2021/02/25/18/24/recycle-bin-6049740_960_720.png","https://cdn.pixabay.com/photo/2017/01/05/19/10/cart-1956097_960_720.png"];
  
  showedit():string{return this.images[0];}
  showdel():string{return this.images[1];}
  showbuy():string{return this.images[2];}
  
  //The Popup for Delete button is Store  the value here
  isdelete:boolean=false;
  arydelint:number=-1;
  delname:string='';
  delclose():void{
    this.isdelete=false;
  }
  delok(){
    
    this.lists.splice(this.arydelint,1);
    this.isdelete=false;
  }
  delitem(indnet:number):void
  {
    this.isdelete=true;
    this.arydelint=indnet;
    this.delname=this.lists[indnet][0];
  }
  //********************/
  edittab=new FormGroup({
    ename:new FormControl(),
    eposition:new FormControl(),
    ecity:new FormControl(),
    eage:new FormControl(),
    estart:new FormControl(),
    esalary:new FormControl(),
  })
  //******************************/
  isedittab:boolean=false;
  aryindex:number=-1;
  edittabcancel():void
  {
    this.isedittab=false;
  }
  edittabok():void
  {
    var tem1:string[]=[this.edittab.controls.ename.value,
                      this.edittab.controls.eposition.value,
                      this.edittab.controls.ecity.value,
                      this.edittab.controls.eage.value,
                      this.edittab.controls.estart.value,
                      this.edittab.controls.esalary.value];
    this.lists[this.aryindex]=tem1;
    this.isedittab=false;
    
  }
  
  edititem(ints:number):void
  {
      this.isedittab=true;
      var tem:string[]=this.lists[ints];
      this.edittab.setValue({
        ename:tem[0],
        eposition:tem[1],
        ecity:tem[2],
        eage:tem[3],
        estart:tem[4],
        esalary:tem[5]
      });
      this.aryindex=ints;
  }
  event()
  {
    
  }
  ngOnInit(): void {
    
  }

}
