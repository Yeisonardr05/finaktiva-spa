import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ComicModel } from '../../models/comics/comic.model';
import { StatusCodeEnum } from '../../commons/enums/status-code.enum';
import { APIENDPOINT } from '../../config/configuration';
import { ComicService } from './../comic.service';
import { ThumbnailModel } from '../../models/common/thumbnail.model';

describe('CharacterService', () => {
    let service: ComicService;
    let httpClientSpy: { get: jasmine.Spy };

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new ComicService(httpClientSpy as any);

        TestBed.configureTestingModule({
            imports: [HttpClientModule]
        });
        service = TestBed.inject(ComicService);
    });

    it('Debe crear ComicService', () => {
        expect(service).toBeTruthy();
    });

    it('Debe llamar el api de comics y recibir el StatusCode 200', (done) => {
        service.getAll(APIENDPOINT.comics).subscribe(resp => {
            expect(resp.code).toBe(StatusCodeEnum.OK);
            done();
        });
    });

    it('Debe de agregar un nuevo comic la LocalStorage', () => {
        let thumbnail = new ThumbnailModel();
        thumbnail.path = "ruta";
        thumbnail.extension = "jpg";

        let comic = new ComicModel();
        comic.id = 555555;
        comic.title = "Nuevo Comic";
        comic.thumbnail = thumbnail
        service.createList(comic);
        expect(service.comicFavoriteList.find(x=> x.id == comic.id).id).toBeGreaterThanOrEqual(0);
    });
});