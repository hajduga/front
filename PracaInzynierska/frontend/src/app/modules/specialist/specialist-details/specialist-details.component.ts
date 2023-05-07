import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpecialistDetailsService} from './specialist-details.service';
import {MatPaginator} from "@angular/material/paginator";
import {SpecialistDto} from "../model/specialistDto";

@Component({
  selector: 'app-specialist-details',
  templateUrl: './specialist-details.component.html',
  styleUrls: ['./specialist-details.component.scss']
})
export class SpecialistDetailsComponent {

  user!: SpecialistDto;

  constructor(
    private specialistDetailsService: SpecialistDetailsService,
    private router: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.getSpecialistDetails();
  }

  getSpecialistDetails() {
    let id = this.router.snapshot.params['id'];
    this.specialistDetailsService.getSpecialistDetails(id)
      .subscribe(specialist => this.user = specialist);
  }

}
