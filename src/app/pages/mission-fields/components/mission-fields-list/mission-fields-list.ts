import { Component, inject } from '@angular/core';
import { ScrollReveal } from '../../../../shared/scroll-reveal';
import { RouterLink } from '@angular/router';
import { MissionField, MissionFieldDataService } from '../../mission-field-data';

type FieldType = 'Local' | 'International';

@Component({
  selector: 'app-mission-fields-list',
  imports: [ScrollReveal, RouterLink],
  templateUrl: './mission-fields-list.html',
  styleUrl: './mission-fields-list.css',
})
export class MissionFieldsList {
  missionFieldDataService = inject(MissionFieldDataService);

  selectedFieldType = 'All';
  selectedContinent = '';
  selectedCountry = '';
  selectedState = '';
  selectedCity = '';

  get missionFields(): MissionField[] {
    return this.missionFieldDataService.getMissionFields();
  }

  get continents(): string[] {
    return this.getUniqueValues(
      this.missionFields.filter((field) => this.matchesFieldType(field)),
      'continent',
    );
  }

  get countries(): string[] {
    return this.getUniqueValues(
      this.missionFields.filter(
        (field) =>
          this.matchesFieldType(field) &&
          (!this.selectedContinent || field.continent === this.selectedContinent),
      ),
      'country',
    );
  }

  get states(): string[] {
    return this.getUniqueValues(
      this.missionFields.filter(
        (field) =>
          this.matchesFieldType(field) &&
          (!this.selectedContinent || field.continent === this.selectedContinent) &&
          (!this.selectedCountry || field.country === this.selectedCountry),
      ),
      'state',
    );
  }

  get cities(): string[] {
    return this.getUniqueValues(
      this.missionFields.filter(
        (field) =>
          this.matchesFieldType(field) &&
          (!this.selectedContinent || field.continent === this.selectedContinent) &&
          (!this.selectedCountry || field.country === this.selectedCountry) &&
          (!this.selectedState || field.state === this.selectedState),
      ),
      'city',
    );
  }

  get filteredMissionFields(): MissionField[] {
    return this.missionFields.filter(
      (field) =>
        this.matchesFieldType(field) &&
        (!this.selectedContinent || field.continent === this.selectedContinent) &&
        (!this.selectedCountry || field.country === this.selectedCountry) &&
        (!this.selectedState || field.state === this.selectedState) &&
        (!this.selectedCity || field.city === this.selectedCity),
    );
  }

  onFieldTypeChange(value: string): void {
    this.selectedFieldType = value;
    this.resetLocationFilters();

    if (value === 'Local') {
      this.selectedContinent = 'Africa';
      this.selectedCountry = 'Nigeria';
    }
  }

  onContinentChange(value: string): void {
    this.selectedContinent = value;
    this.selectedCountry = '';
    this.selectedState = '';
    this.selectedCity = '';
  }

  onCountryChange(value: string): void {
    this.selectedCountry = value;
    this.selectedState = '';
    this.selectedCity = '';
  }

  onStateChange(value: string): void {
    this.selectedState = value;
    this.selectedCity = '';
  }

  onCityChange(value: string): void {
    this.selectedCity = value;
  }

  clearFilters(): void {
    this.selectedFieldType = 'All';
    this.resetLocationFilters();
  }

  private resetLocationFilters(): void {
    this.selectedContinent = '';
    this.selectedCountry = '';
    this.selectedState = '';
    this.selectedCity = '';
  }

  private matchesFieldType(field: MissionField): boolean {
    if (this.selectedFieldType === 'All') {
      return true;
    }

    return field.fieldType === this.selectedFieldType;
  }

  private getUniqueValues(
    fields: MissionField[],
    property: 'continent' | 'country' | 'state' | 'city',
  ): string[] {
    return [...new Set(fields.map((field) => field[property]))].sort();
  }
}
