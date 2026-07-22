import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppiontmentsRoutingModule } from './appiontments-routing.module';
import { EditAppointmentComponent } from './components/add-appointment/edit-appointment/edit-appointment.component';
// import { AppModule } from "../app.module";
// import { AppModule_1 as AppModule } from "../app.module";


@NgModule({
    declarations: [
        EditAppointmentComponent
    ],
    imports: [
        CommonModule,
        AppiontmentsRoutingModule,
        // AppModule,
        // AppModule_1
    ]
})
export class AppiontmentsModule { }
