import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => { // Añadido async para esperar renderizado
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta cambios para renderizar la vista
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class Navbar implements OnInit { // Corregido el nombre a NavbarComponent

  private toggleButton: HTMLElement | null = null; // Permitir valor null
  private navLinks: HTMLElement | null = null;

  constructor() {}

  ngOnInit(): void {
    this.toggleButton = this.navbar.nativeElement.querySelector('.navbar-toggler') as HTMLElement; // Selector correcto y acceso a elementos
    this.navLinks = this.navbar.nativeElement.querySelector('.navbar-nav') as HTMLElement;

    this.toggleButton?.addEventListener('click', () => { // Encadenamiento opcional
      this.navLinks?.classList.toggle('d-none');
    });
  }
}
