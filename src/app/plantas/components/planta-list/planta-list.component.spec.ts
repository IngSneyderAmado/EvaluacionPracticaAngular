import { async,ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { Planta } from 'src/app/models/planta';

import { PlantaListComponent } from './planta-list.component';
import { PlantaServiceService } from 'src/app/services/planta-service.service';

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantaListComponent ],
      providers: [PlantaServiceService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const planta = new Planta(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      );
      component.plantas.push(planta);
      }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe crear una tabla con 3 filas mas el encabezado', () => {
    const tabla = fixture.nativeElement.querySelector('table');
    const filas = tabla.querySelectorAll('tr');
    expect(filas.length).toBe(4);
  });
});
