import {Component, OnInit, Input, ViewEncapsulation, Inject} from '@angular/core';
import {Employee} from '../../../models/employee';
import {EmployeeService} from '../../../services/employee.service';
import * as Collections from 'typescript-collections';
import {DirectEmployeeDialogComponent} from '../direct-employee-dialog/direct-employee-dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {DataSharingService} from '../../../services/data-sharing.service';
import {TotalEmployeeDialogComponent} from '../total-employee-dialog/total-employee-dialog.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Input() numberOfReports: number;
  @Input() imageId: number;
  visitedEmployees = new Collections.Bag<number>();
  dialogRef: MatDialogRef<DirectEmployeeDialogComponent>;
  totalDialogRef: MatDialogRef<TotalEmployeeDialogComponent>;

  constructor(private employeeService: EmployeeService, public dialog: MatDialog, private dataSharingService: DataSharingService) {
  }

  ngOnInit() {
    this.imageId = Math.floor(Math.random() * 12) + 1;
    this.employee.compensation = Math.floor((Math.random() * 250000) + 25000);
    this.computeNumberOfReports();
  }

  computeNumberOfReports(): void {
    const myQueue = new Collections.Queue<number>();
    let listOfEmployees: Employee[] = [];
    myQueue.enqueue(this.employee.id);
    this.visitedEmployees.add(this.employee.id);
    this.employeeService.getAllEmployees().subscribe(tempEmployees => {
      listOfEmployees = tempEmployees;
      let tempEmployeeId: number;
      while (!myQueue.isEmpty()) {
        tempEmployeeId = myQueue.dequeue();
        let tempEmployee: Employee;
        for (const emp of listOfEmployees) {
          if (emp.id === tempEmployeeId) {
            tempEmployee = emp;
          }
        }
        if (typeof tempEmployee.directReports !== 'undefined') {
          for (const empId of tempEmployee.directReports) {
            if (!this.visitedEmployees.contains(empId)) {
              myQueue.enqueue(empId);
              this.visitedEmployees.add(empId);
            }
          }
        }
      }
      this.numberOfReports = this.visitedEmployees.size() - 1;
    });
  }

  openDirectModal() {
    this.dataSharingService.setEmployee(this.employee.id);
    this.dialogRef = this.dialog.open(DirectEmployeeDialogComponent, {
      width: '800px'
    });
  }

  openTotalModal() {
    this.dataSharingService.setEmployee(this.employee.id);
    console.log(this.visitedEmployees.remove(0));
    const tempVisitedEmployees: number[] = [];
    for (let i = 0; i < this.visitedEmployees.toArray().length; i++) {
      if (i === 0) {
        continue;
      } else {
        tempVisitedEmployees.push(this.visitedEmployees.toArray()[i]);
      }
    }
    this.dataSharingService.setVisitedEmployees(tempVisitedEmployees);
    this.totalDialogRef = this.dialog.open(TotalEmployeeDialogComponent, {
      width: '1000px'
    });
  }

}

