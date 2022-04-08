import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalDetailOrganizationComponent } from './modal-detail-organization.component';

describe('ModalDetailOrganizationComponent', () => {
  let component: ModalDetailOrganizationComponent;
  let fixture: ComponentFixture<ModalDetailOrganizationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDetailOrganizationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDetailOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
