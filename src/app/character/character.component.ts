import { Component } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  standalone : true,
  imports: [CommonModule, FormsModule]
})
export class CharacterComponent {
  personId?: number;
  personData?: Person;

  constructor(private swapiService: SwapiService) {}

  getPerson() {
    if (this.personId) {
      this.swapiService.getPerson(this.personId).subscribe(data => {
        this.personData = data;
        console.log(data);
      });
    }
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}