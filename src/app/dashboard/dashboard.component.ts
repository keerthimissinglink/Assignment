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
  total;
  
 
  constructor(private apiService : apiService,private route:Router) { }

  ngOnInit() {
    this.apiService.getState().subscribe(data => {
      this.dataSource = data.statewise.filter(e=> e.state != 'Total' && e.statecode != 'UN');
      this.total = data.statewise.find(e => e.state == 'Total');
      console.log(this.dataSource)
    });
    
  }
  viewState(data){
    this.route.navigate(['/district/'+data]);
  }

}
