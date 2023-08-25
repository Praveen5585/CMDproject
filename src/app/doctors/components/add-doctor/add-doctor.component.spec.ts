import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule} from '@angular/forms';

import { AddDoctorComponent } from './add-doctor.component';

describe('AddDoctorComponent', () => {
  let component: AddDoctorComponent;
  let fixture: ComponentFixture<AddDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,ReactiveFormsModule],
      declarations: [ AddDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('first Casetest', () => {
    let firstname = component.doctorfrom.controls['firstname']
    expect(firstname.valid).toBeFalsy();
  });
   
  it('Reactivefroms-FirstName',()=>{
    let firstname = component.doctorfrom.controls['firstname'];
    firstname.setValue('firstname');
    expect(firstname.valid).toBeTruthy();
    expect( firstname.value).toEqual('firstname');
  })
});
