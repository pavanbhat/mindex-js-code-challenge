import {Component, OnInit} from '@angular/core';
import {DataSharingService} from '../../../services/data-sharing.service';
import {EmployeeService} from '../../../services/employee.service';
import {Employee} from '../../../models/employee';

@Component({
  selector: 'app-total-employee-list',
  templateUrl: './total-employee-list.component.html',
  styleUrls: ['./total-employee-list.component.css']
})
export class TotalEmployeeListComponent implements OnInit {

  employeeId = 0;
  listOfTotalEmployees: number[] = [];
  totalReports: Employee[] = [];

  constructor(private employeeService: EmployeeService, private dataSharingService: DataSharingService) {
  }

  ngOnInit() {
    this.getCurrentEmployee();
    this.getTotalVisitedEmployees();
    this.displayTotalReporting();
  }

  getCurrentEmployee() {
    this.dataSharingService.currentEmployee.subscribe(currentEmployeeId => {
      this.employeeId = currentEmployeeId;
    }, error1 => {
      console.log(error1);
    });
  }

  getTotalVisitedEmployees() {
    this.dataSharingService.visitedEmployees.subscribe(totalVisitedEmployees => {
      this.listOfTotalEmployees = totalVisitedEmployees;
    }, error2 => {
      console.log(error2);
    });
  }

  displayTotalReporting() {
    let tempListOfEmployees: Employee[] = [];
    this.employeeService.getAllEmployees().subscribe(tempEmployees => {
      tempListOfEmployees = tempEmployees;
      for (const totalReportingEmployees of this.listOfTotalEmployees) {
        for (const totalEmpObject of tempListOfEmployees) {
          if (totalEmpObject.id === totalReportingEmployees) {
            this.totalReports.push(totalEmpObject);
          }
        }
      }
    });
  }

}
