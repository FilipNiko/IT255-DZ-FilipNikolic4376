import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormaComponent } from './forma.component';
import { Let } from '../let/let.model';
import { CrudServiceService } from '../services/crud-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FormaComponent', () => {
  let component: FormaComponent;
  let fixture: ComponentFixture<FormaComponent>;
  let crudService: CrudServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [FormaComponent],
      providers: [CrudServiceService]
    });

    fixture = TestBed.createComponent(FormaComponent);
    component = fixture.componentInstance;
    crudService = TestBed.get(CrudServiceService);
  });

  it('proverava kreiranje', () => {
    expect(component).toBeTruthy();
  });

  it('Proverava da li forma ima validne kontrole', () => {
    expect(component.forma.contains('aerodrom')).toBeTruthy();
    expect(component.forma.contains('sifraLeta')).toBeTruthy();
    expect(component.forma.contains('destinacija')).toBeTruthy();
    expect(component.forma.contains('polazak')).toBeTruthy();
    expect(component.forma.contains('dolazak')).toBeTruthy();
    expect(component.forma.contains('biznisKlasa')).toBeTruthy();
    expect(component.forma.contains('gratisHrana')).toBeTruthy();
    expect(component.forma.contains('direktanLet')).toBeTruthy();
  });

  it('Proverava validator za šifru leta (da li mora da bude dužina 4)', () => {
    let sifraLeta = component.forma.get('sifraLeta');

    sifraLeta?.setValue('123');
    expect(sifraLeta?.valid).toBeFalsy();

    sifraLeta?.setValue('1234');
    expect(sifraLeta?.valid).toBeTruthy();
  });


});