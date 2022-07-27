import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  kursDollara!:string;
  kursEur!:string;
  title = 'TZ';
  url:string = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
  ngOnInit(): void {
    fetch(this.url)
    .then(response => response.json())
    .then(commits =>{
      this.kursDollara = commits[25].rate;
      this.kursEur = commits[32].rate

    }
      )
  }
  
}
