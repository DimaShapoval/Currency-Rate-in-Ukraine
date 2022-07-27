import { Component,  OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-valut',
  templateUrl: './valut.component.html',
  styleUrls: ['./valut.component.css']
})

export class ValutComponent implements OnInit {

  kurs!:number;
  inputUAH!:number;
  inputUSD!: number;
  money!: number;
  input!: string[];
  constructor() { };
  kursDollara!:number;
  dollar:number = 1;
  select1:any;
  select2:any;
  url:string = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
  

  ngOnInit(): void {
    fetch(this.url)
    .then(response => response.json())
    .then(commits =>{
      this.kursDollara = commits[25].rate;
      
    }
      )    
    
  }
  changeSumm(inputUAH:any, inputUSD:any, select1:any, select2:any){
    let firstInput = inputUSD;
    let secondInput = inputUAH;
    if(select1.options[0].selected === true && select2.options[2].selected === true){
      select1.options[0].selected = false;
      select1.options[2].selected = true;
      select2.options[2].selected = false;
      select2.options[0].selected = true;
    }
    else if(select2.options[0].selected === true && select1.options[2].selected === true){
      select1.options[0].selected = true;
      select1.options[2].selected = false;
      select2.options[2].selected = true;
      select2.options[0].selected = false;
    }
    else if(select2.options[0].selected === true && select1.options[1].selected === true){
      select1.options[0].selected = true;
      select1.options[1].selected = false;
      select2.options[1].selected = true;
      select2.options[0].selected = false;
    }
    else if(select1.options[0].selected === true && select2.options[1].selected === true){
      select1.options[1].selected = true;
      select1.options[0].selected = false;
      select2.options[0].selected = true;
      select2.options[1].selected = false;
    }
    else if(select1.options[1].selected === true && select2.options[2].selected === true){
      select1.options[2].selected = true;
      select1.options[1].selected = false;
      select2.options[1].selected = true;
      select2.options[2].selected = false;
    }
    else if(select1.options[2].selected === true && select2.options[1].selected === true){
      select1.options[1].selected = true;
      select1.options[2].selected = false;
      select2.options[2].selected = true;
      select2.options[1].selected = false;
    }
    
    

    
      this.kursDollara = firstInput*inputUAH/inputUAH;
      this.dollar = secondInput*inputUSD/inputUSD;

    
    
  }
  UAH(inputUS:any, select1:any,select2:any){
    console.log(select1.options.selectedIndex);
    if(select1.options.selectedIndex == 0 && select2.options.selectedIndex == 2){
      fetch(this.url)
    .then(response => response.json())
    .then(commits =>{
      this.kursDollara = inputUS*commits[25].rate;
     }
      )
      
    }
    else if(select1.options.selectedIndex == 1 && select2.options.selectedIndex == 2){
      fetch(this.url)
  .then(response => response.json())
  .then(commits =>{
    this.kursDollara = inputUS*commits[32].rate;
   }
    )
    }
    else if(select1.options.selectedIndex == 0 && select2.options.selectedIndex == 1){
      fetch(this.url)
  .then(response => response.json())
  .then(commits =>{
    this.kursDollara = inputUS*commits[32].rate/commits[25].rate;
   }
    )
    }
    else if(select1.options.selectedIndex == 1 && select2.options.selectedIndex == 0){
      fetch(this.url)
  .then(response => response.json())
  .then(commits =>{
    this.kursDollara = inputUS*commits[25].rate/commits[32].rate;
  })
}
    else if(select1.options.selectedIndex == select2.options.selectedIndex){
      this.kursDollara = inputUS*1;
    }
    else if(select1.options.selectedIndex == 2 && select2.options.selectedIndex == 0){
      fetch(this.url)
  .then(response => response.json())
  .then(commits =>{
    this.kursDollara = inputUS/commits[25].rate;
  })}
    else{
      this.kursDollara = inputUS/1; 
    }
}
  USD(inputUA:any, select2:any, select1:any){
      if(select2.options.selectedIndex == 0 && select1.options.selectedIndex == 2){
        fetch(this.url)
      .then(response => response.json())
      .then(commits =>{
        this.dollar = inputUA*commits[25].rate;
       }
        )
        
      }
      else if(select2.options.selectedIndex == 1 && select1.options.selectedIndex == 2){
        fetch(this.url)
    .then(response => response.json())
    .then(commits =>{
      this.dollar = inputUA/commits[32].rate;
     }
      )
      }

      else if(select2.options.selectedIndex == 0 && select1.options.selectedIndex == 1){
        fetch(this.url)
    .then(response => response.json())
    .then(commits =>{
      this.dollar = inputUA*commits[32].rate/commits[25].rate;
     }
      )
      }
      else if(select1.options.selectedIndex == select2.options.selectedIndex){
        this.dollar = inputUA*1;
      }
      else if(select2.options.selectedIndex == 1 && select1.options.selectedIndex == 0){
        fetch(this.url)
    .then(response => response.json())
    .then(commits =>{
      this.dollar = inputUA*commits[25].rate/commits[32].rate;
    })
    }
    else if(select2.options.selectedIndex == 2 && select1.options.selectedIndex == 1){
      fetch(this.url)
  .then(response => response.json())
  .then(commits =>{
    this.dollar = inputUA/commits[32].rate;
   }
    )
    }
    else if(select2.options.selectedIndex == 2 && select1.options.selectedIndex == 0){
      fetch(this.url)
  .then(response => response.json())
  .then(commits =>{
    this.dollar = inputUA/commits[25].rate;
   }
    )
    }
    else{
      this.dollar = inputUA*1; 
    }
      
    

  }
  



}
