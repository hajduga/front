import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Page } from 'src/app/modules/common/model/page';
import { SpecialistListService } from './specialist-list.service';
import {SpecialistDto} from "../model/specialistDto";

@Component({
  selector: 'app-specialist-list',
  templateUrl: './specialist-list.component.html',
  styleUrls: ['./specialist-list.component.scss']
})
export class SpecialistListComponent {

  page!: Page<SpecialistDto>;

  constructor(
    private specialistListService: SpecialistListService
  ) { }

  ngOnInit(): void {
    this.getSpecialists();
  }

  getSpecialists(){
    this.getSpecialistPage(0, 10);
  }
  onPageEvent(event: PageEvent){
    this.getSpecialistPage(event.pageIndex,event.pageSize);
  }

  private getSpecialistPage(page: number, size: number) {
    this.specialistListService.getSpecialists(page, size)
      .subscribe(page => {
        return this.page = page
      });
  }

}
