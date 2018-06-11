import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../../services/employee.service';
import {DataSharingService} from '../../../services/data-sharing.service';
import {Employee} from '../../../models/employee';

@Component({
  selector: 'app-direct-employee-list',
  templateUrl: './direct-employee-list.component.html',
  styleUrls: ['./direct-employee-list.component.css']
})
export class DirectEmployeeListComponent implements OnInit {

  employeeId = 0;
  listOfDirectEmployees: number[] = [];
  directReports: Employee[] = [];

  constructor(private employeeService: EmployeeService, private dataSharingService: DataSharingService) {
  }

  ngOnInit() {
    this.getCurrentEmployee();
    this.displayDirectReporting();
  }

  getCurrentEmployee() {
    this.dataSharingService.currentEmployee.subscribe(currentEmployeeId => {
      this.employeeId = currentEmployeeId;
    }, error1 => {
      console.log(error1);
    });
  }

  displayDirectReporting() {
    this.employeeService.get(this.employeeId).subscribe(emp => {
      this.listOfDirectEmployees = emp.directReports;
      let tempListOfEmployees: Employee[] = [];
      this.employeeService.getAllEmployees().subscribe(tempEmployees => {
        tempListOfEmployees = tempEmployees;
        for (const directEmp of this.listOfDirectEmployees) {
          for (const directEmpObject of tempListOfEmployees) {
            if (directEmpObject.id === directEmp) {
              this.directReports.push(directEmpObject);
            }
          }
        }
      });
    });
  }
}
