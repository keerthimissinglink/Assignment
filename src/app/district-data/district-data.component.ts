import { visitAll } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { apiService } from '../services/api.service';

@Component({
  selector: 'app-district-data',
  templateUrl: './district-data.component.html',
  styleUrls: ['./district-data.component.scss']
})
export class DistrictDataComponent implements OnInit {
  displayedColumns: string[] = ['district', 'active', 'confirmed', 'recovered','deceased'];
  dataSource:any;
  district;
  constructor(private apiservice: apiService,private route:ActivatedRoute,private router:Router) { }

ngOnInit() {
    this.route.params.subscribe(e=>{
      this.district = e.state;
    })
    this.apiservice.getDistricts().subscribe(res => {
      for(let value of Object.values(res)){
        if(value['statecode']==this.district){
        var myData = Object.keys(value['districtData']).map(key => {
         Object.assign(value['districtData'][key],{district:key})
          return value['districtData'][key];
         })
        }
      }
      this.dataSource=myData;
  })
}
back(){
  this.router.navigate(['/dashboard']);
}
}
