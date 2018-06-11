import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-total-employee-dialog',
  templateUrl: './total-employee-dialog.component.html',
  styleUrls: ['./total-employee-dialog.component.css']
})
export class TotalEmployeeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TotalEmployeeDialogComponent>) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
