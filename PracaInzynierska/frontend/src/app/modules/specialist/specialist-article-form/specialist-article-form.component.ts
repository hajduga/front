import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-specialist-article-form',
    template: `
    <div [formGroup]="parentForm" fxLayout="column">
        <mat-form-field appearance="fill">
            <mat-label>Tytuł</mat-label>
            <input matInput placeholder="Podaj tytuł" formControlName="title">
        </mat-form-field>


        <mat-form-field appearance="fill">
            <mat-label>Krótki opis</mat-label>
            <textarea matInput rows="4" placeholder="podaj krótki opis"  formControlName="shortDescription"></textarea>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Opis</mat-label>
            <textarea matInput rows="20" placeholder="Podaj pełny opis"  formControlName="description"></textarea>
        </mat-form-field>

        <div fxLayout="colum" fxFlexAlign="end" fxLayoutGap="10">
            <button mat-flat-button color="primary">Zapisz</button>
        </div>
    </div>
`
})
export class SpecialistArticleFormComponent implements OnInit {

    @Input() parentForm!: FormGroup;

    ngOnInit(): void {
    }

}
