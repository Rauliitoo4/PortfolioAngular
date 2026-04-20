import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { gsap } from 'gsap';
import { PortfolioService } from '../../services/portfolio.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactForm: FormGroup;
  sending= false;

  constructor(
    private fb: FormBuilder,
    private portfolioService: PortfolioService,
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) {
    this.contactForm = this.fb.group ({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    gsap.from('.contact-card', {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: 'power2.out'
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) return;

    this.sending = true;
    const message = {
      ...this.contactForm.value,
      date: new Date().toISOString()
    };

    this.portfolioService.sendMessage(message).subscribe({
      next: () => {
        this.translate.get('PAGES.CONTACT.SUCCESS').subscribe(msg => {
          this.snackBar.open(msg, '✕', { duration: 4000});
        });
        this.contactForm.reset();
        this.sending = false;
      },
      error:() => {
        this.translate.get('PAGES:CONTACT:ERROR').subscribe(msg => {
          this.snackBar.open(msg, '✕', {duration: 4000});
        });
        this.sending=false;
      }
    });
  }
}
