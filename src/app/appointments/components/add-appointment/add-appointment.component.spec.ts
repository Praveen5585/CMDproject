import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AddAppointmentComponent } from './add-appointment.component';

describe('AddAppointmentComponent', () => {
  let component: AddAppointmentComponent;
  let fixture: ComponentFixture<AddAppointmentComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,FormsModule,ReactiveFormsModule],
      declarations: [ AddAppointmentComponent]
    })
    .compileComponents();
    // fixture = TestBed.createComponent(AddAppointmentComponent);
    // componentInstance = fixture.componentInstance;
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  
  // it('Test case for reactiveForms',()=>{
  //   const patientName :HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#patientName');
  //   const id :HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#id');
  //   const department :HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#department');
  //   const  vet:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#vet');
  //   const time :HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#time');
  //   const  date:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#date');
  //   const patinetEmail :HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#patinetEmail');
  //   const patientPhonenumber :HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#patientPhonenumber');
  //   const address : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#address');
  //   const Message : HTMLInputElement = fixture.debugElement.nativeElement.document. querySelector('#Message');
  //   // const status: HTMLInputElement = fixture.nativeElement.document.querySelector('#product_active');
  //   // const status1: HTMLInputElement = fixture.nativeElement.document.querySelector('#product_inactive');
  //   // const status : HTMLUListElement = fixtur.nativeElement.document.querySelector()
  //   id.value = '10',
  //   patientName.value = 'Akshay',
  //   department.value = 'cardiography',
  //   vet.value = 'Praveen',
  //   date.value = '10/10/23',
  //   time.value = '5.30pm',
  //   patinetEmail.value = 'Akshay',
  //   patientPhonenumber.value = '9108144509',
  //   address.value = 'pratian',
  //   Message.value = 'metting with vet',
  //   // status.value = 'Active',
  //   // status1.value = 'inActive',


  //   patinetEmail.dispatchEvent(new Event ('input'));
  //  patientName.dispatchEvent(new Event ('input'));
  //   department.dispatchEvent(new Event ('input'));
  //   vet.dispatchEvent(new Event ('input'));
  //  date.dispatchEvent(new Event ('input'));
  //  patientPhonenumber.dispatchEvent(new Event ('input'));
  //  address.dispatchEvent(new Event ('input'));
  //   Message.dispatchEvent(new Event ('input'));
  //   // status.dispatchEvent (new Event('input'));
  //   // status1.dispatchEvent (new Event('input'));


  //   fixture.detectChanges();
  //   fixture.whenStable().then(()=>{
  //       expect(component).toBeTruthy({
  //    id : '10',
  //    patientName  :'Akshay',
  //    department  :'cardiography',
  //   vet : 'Praveen',
  //    date : '10/10/23',
  //    time : '5.30pm',
  //    patinetEmail : 'Akshay',
  //    patientPhonenumber : '9108144509',
  //    address : 'pratian',
  //    Message : 'metting with vet',
    //  status : 'Active',
    // status1 : 'inActive',
 
  //       })
  //   })
  // })
  
  // it('first Testcase for ReactiveForms',()=> {
  //   let form1= component.Appointment.controls['patientName'];
  //   let form2 = component.Appointment.controls['id'];
  //   let form3 = component.Appointment.controls['vet'];
  //   let form4 = component.Appointment.controls['time'];
  //   let form5 = component.Appointment.controls['date'];
  //   let form6 = component.Appointment.controls['patinetEmail'];
  //   let form7 = component.Appointment.controls['patientPhonenumber'];
  //   let form8 = component.Appointment.controls['address'];
  //   let form9 = component.Appointment.controls['Message'];
  //   let form10 = component.Appointment.controls['product_active'];
  //   let form11= component.Appointment.controls['product_inactive'];
  //   form1.setValue('Akshay');
  //   form2.setValue('10');
  //   form3.setValue('Praveen');
  //   form4.setValue('5.20');
  //   form5.setValue('5/5/23');
  //   form6.setValue('Akshay@gmail.com');
  //   form7.setValue('9108144509');
  //   form8.setValue('Banglore');
  //   form9.setValue('meeting with the doctor');
  //   form10.setValue('Active');
  //   form11.setValue('InActive');
  //   expect(form1.Valid).toBeTruthy();
  //   expect(form1.value).toEqual('Akshay');
  //   expect(form2.Valid).toBeTruthy();
  //   expect(form2.value).toEqual('10');
  //   expect(form3.Valid).toBeTruthy();
  //   expect(form3.value).toEqual('Praveen');
  //   expect(form4.Valid).toBeTruthy();
  //   expect(form4.value).toEqual('5.20');
  //   expect(form5.Valid).toBeTruthy();
  //   expect(form5.value).toEqual('5/5/23');
  //   expect(form6.Valid).toBeTruthy();
  //   expect(form6.value).toEqual('Akshay@gmail.com');
  //   expect(form7.Valid).toBeTruthy();
  //   expect(form7.value).toEqual('9108144509');
  //   expect(form8.Valid).toBeTruthy();
  //   expect(form8.value).toEqual('Banglore');
  //   expect(form9.Valid).toBeTruthy();
  //   expect(form9.value).toEqual('meeting with the doctor');
  //   expect(form10.Valid).toBeTruthy();
  //   expect(form10.value).toEqual('Active');
  //   expect(form11.Valid).toBeTruthy();
  //   expect(form11.value).toEqual('InActive');  
  // })
    // it('Reactivefroms-FirstName',()=>{
    //   let firstName = component.registerForm.controls[' firstName'];
    //   firstName.setValue(' firstName');
    //   expect(firstName.valid).toBeTruthy();
    //   expect( firstName.value).toEqual('firstName');
    // })
});

