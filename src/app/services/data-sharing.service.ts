import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class DataSharingService {

  private currentEmployeeId = new BehaviorSubject<number>(0);
  currentEmployee = this.currentEmployeeId.asObservable();

  private totalVisitedEmployees = new BehaviorSubject<number[]>([]);
  visitedEmployees = this.totalVisitedEmployees.asObservable();

  constructor() {
  }

  setEmployee(employeeId: number) {
    this.currentEmployeeId.next(employeeId);
  }

  setVisitedEmployees(employees: number[]) {
    this.totalVisitedEmployees.next(employees);
  }
}
