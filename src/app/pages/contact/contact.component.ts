import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';
import { gsap } from 'gsap';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslatePipe,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  private readonly portfolioService = inject(PortfolioService);
  private readonly snackBar = inject(MatSnackBar);
  private readonly translate = inject(TranslateService);
  private readonly formBuilder = inject(FormBuilder);

  readonly contactForm: FormGroup = this.formBuilder.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  sending= false;

  ngOnInit(): void {
    gsap.from('.contact-card', {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: 'power2.out'
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) return;

    this.sending = true;
    const message = {
      ...this.contactForm.value,
      date: new Date().toISOString()
    };

    this.portfolioService.sendMessage(message).pipe(
      switchMap(() => this.translate.get('PAGES.CONTACT.SUCCESS'))
    ).subscribe({
      next: (msg: string) => {
        this.snackBar.open(msg, '✕', { duration: 4000 });
        this.contactForm.reset();
        this.sending = false;
      },
      error: () => {
        this.translate.get('PAGES.CONTACT.ERROR').subscribe((msg: string) => {
          this.snackBar.open(msg, '✕', { duration: 4000 });
        });
        this.sending = false;
      }
    });

  }
}
