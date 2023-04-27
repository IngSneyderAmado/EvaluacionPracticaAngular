import { TestBed , async, inject} from '@angular/core/testing';

import { PlantaServiceService } from './planta-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlantaServiceService', () => {
  let service: PlantaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantaServiceService]
    });
    service = TestBed.inject(PlantaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
