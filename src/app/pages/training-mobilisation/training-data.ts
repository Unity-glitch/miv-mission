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
      instructors: [
        {
          name: 'Rev. Samson Ajetomobi',
          role: 'Lead Instructor & Mission Director',
          image: '/images/Rev Samson.png',
        },
        {
          name: 'Rev. Mrs. Stella Ajetomobi',
          role: 'Programme Facilitator',
          image: '/images/Rev Stella.png',
        },
      ],

      pastEvents: [
        {
          title: 'Missionary Leadership Workshop',
          date: '15 June 2026',
          image: '/images/home-img2.jpeg',
          description:
            'A practical workshop focused on developing leadership skills and preparing participants for effective missionary service.',
        },
        {
          title: 'Evangelism and Discipleship Seminar',
          date: '22 August 2026',
          image: '/images/home-img3.jpeg',
          description:
            'An interactive seminar exploring practical approaches to evangelism, discipleship, and community engagement.',
        },
        {
          title: 'Mission Mobilisation Conference',
          date: '10 October 2026',
          image: '/images/home-img4.jpeg',
          description:
            'A gathering focused on inspiring and equipping participants to take an active role in advancing the mission.',
        },
      ],
      achievements: [
        'Participants equipped with practical missionary and evangelism skills.',
        'Improved understanding of biblical leadership and discipleship.',
        'Increased participation in community outreach activities.',
        'Stronger collaboration among ministry teams and volunteers.',
        'Successful completion of the programme by participating learners.',
      ],
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
      instructors: [
        {
          name: 'Rev. Samson Ajetomobi',
          role: 'Lead Instructor & Mission Director',
          image: '/images/Rev Samson.png',
        },
        {
          name: 'Rev. Mrs. Stella Ajetomobi',
          role: 'Programme Facilitator',
          image: '/images/Rev Stella.png',
        },
      ],

      pastEvents: [
        {
          title: 'Missionary Leadership Workshop',
          date: '15 June 2026',
          image: '/images/home-img3.jpeg',
          description:
            'A practical workshop focused on developing leadership skills and preparing participants for effective missionary service.',
        },
        {
          title: 'Evangelism and Discipleship Seminar',
          date: '22 August 2026',
          image: '/images/home-img2.jpeg',
          description:
            'An interactive seminar exploring practical approaches to evangelism, discipleship, and community engagement.',
        },
        {
          title: 'Mission Mobilisation Conference',
          date: '10 October 2026',
          image: '/images/home-img1.jpeg',
          description:
            'A gathering focused on inspiring and equipping participants to take an active role in advancing the mission.',
        },
      ],
      achievements: [
        'Participants equipped with practical missionary and evangelism skills.',
        'Improved understanding of biblical leadership and discipleship.',
        'Increased participation in community outreach activities.',
        'Stronger collaboration among ministry teams and volunteers.',
        'Successful completion of the programme by participating learners.',
      ],
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
      instructors: [
        {
          name: 'Rev. Samson Ajetomobi',
          role: 'Lead Instructor & Mission Director',
          image: '/images/Rev Samson.png',
        },
        {
          name: 'Rev. Mrs. Stella Ajetomobi',
          role: 'Programme Facilitator',
          image: '/images/Rev Stella.png',
        },
      ],

      pastEvents: [
        {
          title: 'Missionary Leadership Workshop',
          date: '15 June 2026',
          image: '/images/home-img4.jpeg',
          description:
            'A practical workshop focused on developing leadership skills and preparing participants for effective missionary service.',
        },
        {
          title: 'Evangelism and Discipleship Seminar',
          date: '22 August 2026',
          image: '/images/home-img3.jpeg',
          description:
            'An interactive seminar exploring practical approaches to evangelism, discipleship, and community engagement.',
        },
        {
          title: 'Mission Mobilisation Conference',
          date: '10 October 2026',
          image: '/images/home-img2.jpeg',
          description:
            'A gathering focused on inspiring and equipping participants to take an active role in advancing the mission.',
        },
      ],
      achievements: [
        'Participants equipped with practical missionary and evangelism skills.',
        'Improved understanding of biblical leadership and discipleship.',
        'Increased participation in community outreach activities.',
        'Stronger collaboration among ministry teams and volunteers.',
        'Successful completion of the programme by participating learners.',
      ],
    },
  ];

  getCourses(): TrainingCourse[] {
    return this.courses;
  }

  getCourse(id: string): TrainingCourse | undefined {
    return this.courses.find((course) => course.id === id);
  }
}
