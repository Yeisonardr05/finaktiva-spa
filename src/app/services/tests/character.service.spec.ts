import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { StatusCodeEnum } from '../../commons/enums/status-code.enum';
import { APIENDPOINT } from '../../config/configuration';

import { CharacterService } from './../character.service';

describe('CharacterService', () => {
    let service: CharacterService;
    let httpClientSpy: { get: jasmine.Spy };

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new CharacterService(httpClientSpy as any);

        TestBed.configureTestingModule({
            imports: [HttpClientModule]
        });
        service = TestBed.inject(CharacterService);
    });

    it('Debe crear CharacterService', () => {
        expect(service).toBeTruthy();
    });

    it('Debe llamar el api de characters y recibir el StatusCode 200', (done) => {
        service.getAll(APIENDPOINT.characters).subscribe(resp => {
            expect(resp.code).toBe(StatusCodeEnum.OK);
            done();
        });        
    });
});