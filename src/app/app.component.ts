import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  company = 
  { name: '', location: '',est:'',empcount:'' }; // Define an empty object
  companies: any[] = [];
  isAdded=false;
  addCompanyDetails(company:any) {
    console.log(company);
    this.companies.push(company );
    console.log(this.companies); // Copy user details to avoid mutation
    // this.company.name = '';
    // this.company.location = '';
    // this.company.est = '';
    // this.company.empcount = '';

    // const newCompany = {
    //   name: e.target.name.value,
    //   location: e.target.location.value,
    //   est: e.target.est.value,
    //   empcount: e.target.empcount.value,
    // };
  
    // this.companies.push(newCompany);
    this.isAdded=true;
    // Reset additional details if needed
  }
}