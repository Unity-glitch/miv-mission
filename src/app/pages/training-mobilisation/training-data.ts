import { Injectable } from '@angular/core';

export interface TrainingCourse {
  id: string;
  title: string;
  category: string;
  image: string;
  duration: string;
  description: string;
  about: string;
  objectives: string[];
  instructors: {
    name: string;
    role: string;
    image: string;
  }[];
  pastEvents: {
    title: string;
    date: string;
    image: string;
    description: string;
  }[];
  achievements: string[];
}

@Injectable({
  providedIn: 'root',
})
export class TrainingDataService {
  private courses: TrainingCourse[] = [
    {
      id: 'missionary-training',
      title: 'Missionary Training Programme',
      category: 'Mission Preparation',
      image: '/images/home-img1.jpeg',
      duration: 'To be announced',
      description:
        'A programme designed to prepare participants for effective missionary service and cross-cultural engagement.',
      about:
        'This programme focuses on preparing individuals with the spiritual understanding, practical knowledge, and ministry skills required for missionary work.',
      objectives: [
        'Develop a deeper understanding of the mission mandate.',
        'Build practical missionary and evangelism skills.',
        'Prepare participants for effective community engagement.',
      ],
      instructors: [],
      pastEvents: [],
      achievements: [],
    },
    {
      id: 'leadership-development',
      title: 'Christian Leadership Development',
      category: 'Leadership',
      image: '/images/home-img2.jpeg',
      duration: 'To be announced',
      description:
        'A learning programme focused on developing responsible, effective, and service-oriented Christian leaders.',
      about:
        'This programme is intended to strengthen leadership capacity through biblical principles, personal development, and practical leadership training.',
      objectives: [
        'Understand biblical principles of leadership.',
        'Develop effective communication and team-building skills.',
        'Strengthen leadership and decision-making abilities.',
      ],
      instructors: [],
      pastEvents: [],
      achievements: [],
    },
    {
      id: 'evangelism-outreach',
      title: 'Evangelism and Outreach Training',
      category: 'Evangelism',
      image: '/images/home-img4.jpeg',
      duration: 'To be announced',
      description:
        'Training that equips participants with practical approaches to evangelism and community outreach.',
      about:
        'This programme aims to equip participants to communicate the Gospel effectively and participate meaningfully in outreach activities.',
      objectives: [
        'Understand the foundations of evangelism.',
        'Develop confidence in sharing the Gospel.',
        'Learn practical approaches to community outreach.',
      ],
      instructors: [],
      pastEvents: [],
      achievements: [],
    },
  ];

  getCourses(): TrainingCourse[] {
    return this.courses;
  }

  getCourse(id: string): TrainingCourse | undefined {
    return this.courses.find((course) => course.id === id);
  }
}
