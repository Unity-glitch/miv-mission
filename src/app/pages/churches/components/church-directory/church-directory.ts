import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScrollReveal } from '../../../../shared/scroll-reveal';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-church-directory',
  imports: [CommonModule, ScrollReveal, RouterLink, FormsModule],
  templateUrl: './church-directory.html',
  styleUrl: './church-directory.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChurchDirectory {
  searchTerm = '';
  selectedCountry = '';
  selectedStatus = '';

  countries = ['Nigeria', 'Ghana', 'Kenya', 'South Africa'];

  churches = [
    {
      id: '1',
      name: 'Living Faith Community',
      country: 'Nigeria',
      city: 'Lagos',
      status: 'Active',
      image: '/images/home-img1.jpeg',
      description:
        'A community of believers committed to sharing the Gospel and serving people through faith and love.',
    },
    {
      id: '2',
      name: 'Living Faith Community',
      country: 'Nigeria',
      city: 'Lagos',
      status: 'Planted',
      image: '/images/home-img4.jpeg',
      description:
        'A community of believers committed to sharing the Gospel and serving people through faith and love.',
    },
    {
      id: '3',
      name: 'Grace Mission Church',
      country: 'Ghana',
      city: 'Accra',
      status: 'Active',
      image: '/images/home-img2.jpeg',
      description:
        'Dedicated to discipleship, evangelism and building a strong foundation of faith in the community.',
    },
    {
      id: '4',
      name: 'Grace Mission Church',
      country: 'Ghana',
      city: 'Accra',
      status: 'Active',
      image: '/images/home-img2.jpeg',
      description:
        'Dedicated to discipleship, evangelism and building a strong foundation of faith in the community.',
    },
    {
      id: '5',
      name: 'Hope of Nations Church',
      country: 'Kenya',
      city: 'Nairobi',
      status: 'Planted',
      image: '/images/home-img1.jpeg',
      description:
        'A growing church reaching families and communities with the transforming message of Jesus Christ.',
    },
    {
      id: '6',
      name: 'Kingdom Life Assembly',
      country: 'Nigeria',
      city: 'Abuja',
      status: 'Active',
      image: '/images/home-img2.jpeg',
      description:
        'Raising believers through prayer, biblical teaching, fellowship and purposeful community outreach.',
    },
    {
      id: '7',
      name: 'New Dawn Mission Church',
      country: 'South Africa',
      city: 'Johannesburg',
      status: 'Planned',
      image: '/images/home-img4.jpeg',
      description:
        'A planned mission work focused on bringing the hope of the Gospel to more communities.',
    },
    {
      id: '8',
      name: 'Faith and Victory Church',
      country: 'Nigeria',
      city: 'Port Harcourt',
      status: 'Planned',
      image: '/images/home-img2.jpeg',
      description:
        'Serving communities through Christian fellowship, spiritual growth and practical expressions of love.',
    },
    {
      id: '9',
      name: 'Faith and Victory Church',
      country: 'Nigeria',
      city: 'Port Harcourt',
      status: 'Active',
      image: '/images/home-img3.jpeg',
      description:
        'Serving communities through Christian fellowship, spiritual growth and practical expressions of love.',
    },
  ];

  get filteredChurches() {
    return this.churches.filter((church) => {
      const search = this.searchTerm.toLowerCase().trim();

      const matchesSearch =
        !search ||
        church.name.toLowerCase().includes(search) ||
        church.city.toLowerCase().includes(search) ||
        church.country.toLowerCase().includes(search);

      const matchesCountry = !this.selectedCountry || church.country === this.selectedCountry;

      const matchesStatus = !this.selectedStatus || church.status === this.selectedStatus;

      return matchesSearch && matchesCountry && matchesStatus;
    });
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedCountry = '';
    this.selectedStatus = '';
  }
}
