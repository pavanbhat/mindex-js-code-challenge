import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppComponent} from './app.component';
import {BackendlessMockService} from './services/backendless-mock.service';
import {EmployeeComponent} from './components/body/employee/employee.component';
import {EmployeeListComponent} from './components/body/employee-list/employee-list.component';
import {EmployeeService} from './services/employee.service';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {BodyComponent} from './components/body/body.component';
import {DirectEmployeeDialogComponent} from './components/body/direct-employee-dialog/direct-employee-dialog.component';
import {DirectEmployeeListComponent} from './components/body/direct-employee-list/direct-employee-list.component';
import {DataSharingService} from './services/data-sharing.service';
import {ReactiveFormsModule} from '@angular/forms';
import {TotalEmployeeListComponent} from './components/body/total-employee-list/total-employee-list.component';
import {TotalEmployeeDialogComponent} from './components/body/total-employee-dialog/total-employee-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    DirectEmployeeDialogComponent,
    DirectEmployeeListComponent,
    TotalEmployeeListComponent,
    TotalEmployeeDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(BackendlessMockService, {
      apiBase: 'api/',
      delay: 250,
      passThruUnknownUrl: true,
      post204: false,
      put204: false
    }),
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [EmployeeService, DataSharingService],
  bootstrap: [AppComponent],
  entryComponents: [
    DirectEmployeeDialogComponent,
    TotalEmployeeDialogComponent
  ]
})
export class AppModule {
}
