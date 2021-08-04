import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['state', 'confirmed', 'recovered', 'deaths'];
  dataSource:any;
  total=[];
  questions=[];
  final=[];

 
  constructor(private apiService : apiService,private route:Router,private httpClient: HttpClient) {
    // let person =  {name:"something", age:10};
    // person.name = "anything"
    // console.log(person)
          const person =  {name:"something", age:10};
          Object.assign(person,{num:'9898'})
          console.log(person)
   }

  ngOnInit() {
    this.apiService.getState().subscribe(data => {
      this.dataSource = data.statewise.filter(e=> e.state != 'Total' && e.statecode != 'UN');
      const total = data.statewise.find(e => e.state == 'Total');
      this.total.push({name:'confirmed',count:total.confirmed});
      this.total.push({name:'recovered',count:total.recovered});
      this.total.push({name:'deaths',count:total.deaths});
    });
    this.httpClient.get("assets/new.json").subscribe((data:any) => {
     console.log(data)
     const result = data.result.assessment.evidences[0].sections[0].questions[0].pageQuestions;
     result.map(e=>this.final.push(e.question[0]));
    })
    
  }
  viewState(data){
    this.route.navigate(['/district/'+data]);
  }

}
