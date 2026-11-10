import { Injectable } from '@angular/core';

export interface MissionField {
  id: string;
  name: string;
  location: string;
  category: string;
  image: string;
  description: string;
  fieldType: 'Local' | 'International';
  continent: string;
  country: string;
  state: string;
  city: string;
  about: {
    title: string;
    content: string;
    vision: string;
    objectives: string[];
  };
  recentUpdates: {
    id: string;
    image: string;
    title: string;
    description: string;
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class MissionFieldDataService {
  private missionFields: MissionField[] = [
    {
      id: 'ikeja',
      name: 'Ikeja Mission Field',
      location: 'Ikeja, Lagos, Nigeria',
      category: 'Community Mission',
      image: '/images/home-img3.jpeg',
      description: 'Reaching communities with the message of Christ and transforming lives.',
      fieldType: 'Local',
      continent: 'Africa',
      country: 'Nigeria',
      state: 'Lagos',
      city: 'Ikeja',
      about: {
        title: 'Ikeja Mission Field',
        content:
          'This section will contain information about the mission work, its activities and the communities it serves.',
        vision: 'To reach lives and communities with the message of Christ.',
        objectives: [
          'Share the Gospel with individuals and families.',
          'Support spiritual growth within the community.',
          'Reach more people through mission activities.',
        ],
      },
      recentUpdates: [
        {
          id: 'ikeja-update-1',
          image: '/images/home-img1.jpeg',
          title: 'Community Outreach',
          description:
            'Mission activities focused on reaching people and sharing the message of Christ.',
        },
        {
          id: 'ikeja-update-2',
          image: '/images/home-img2.jpeg',
          title: 'Mission Engagement',
          description: 'Connecting with members of the community through meaningful engagement.',
        },
        {
          id: 'ikeja-update-3',
          image: '/images/home-img3.jpeg',
          title: 'Spiritual Growth',
          description:
            'Encouraging spiritual development and strengthening faith within the community.',
        },
        {
          id: 'ikeja-update-4',
          image: '/images/home-img4.jpeg',
          title: 'Community Development',
          description:
            'Supporting positive change and encouraging stronger community relationships.',
        },
        {
          id: 'ikeja-update-5',
          image: '/images/home-img1.jpeg',
          title: 'Gospel Outreach',
          description: 'Creating opportunities to share the Gospel and connect with more people.',
        },
        {
          id: 'ikeja-update-6',
          image: '/images/home-img2.jpeg',
          title: 'Mission Activities',
          description: 'Continuing the work of reaching lives and strengthening the mission.',
        },
      ],
    },
    {
      id: 'port-harcourt',
      name: 'Port Harcourt Mission Field',
      location: 'Port Harcourt, Rivers, Nigeria',
      category: 'Community Mission',
      image: '/images/home-img1.jpeg',
      description: 'Taking the Gospel into communities and making a lasting impact.',
      fieldType: 'Local',
      continent: 'Africa',
      country: 'Nigeria',
      state: 'Rivers',
      city: 'Port Harcourt',
      about: {
        title: 'Port Harcourt Mission Field',
        content:
          'This section will contain information about the mission work, its activities and the communities it serves.',
        vision: 'To reach lives and communities with the message of Christ.',
        objectives: [
          'Share the Gospel with individuals and families.',
          'Support spiritual growth within the community.',
          'Reach more people through mission activities.',
        ],
      },
      recentUpdates: [
        {
          id: 'ph-update-1',
          image: '/images/home-img1.jpeg',
          title: 'Community Engagement',
          description: 'Building relationships and sharing the Gospel within the community.',
        },
        {
          id: 'ph-update-2',
          image: '/images/home-img2.jpeg',
          title: 'Mission Activities',
          description: 'Supporting activities that encourage faith and community development.',
        },
        {
          id: 'ph-update-3',
          image: '/images/home-img3.jpeg',
          title: 'Outreach Programme',
          description: 'Reaching more people through community-focused mission activities.',
        },
        {
          id: 'ph-update-4',
          image: '/images/home-img4.jpeg',
          title: 'Community Fellowship',
          description: 'Encouraging meaningful connections and spiritual growth.',
        },
        {
          id: 'ph-update-5',
          image: '/images/home-img1.jpeg',
          title: 'Sharing the Gospel',
          description: 'Creating opportunities to share the message of Christ with more people.',
        },
        {
          id: 'ph-update-6',
          image: '/images/home-img2.jpeg',
          title: 'Mission Development',
          description: 'Strengthening the mission through continued community engagement.',
        },
      ],
    },
    {
      id: 'accra',
      name: 'Accra Mission Field',
      location: 'Accra, Ghana',
      category: 'International Mission',
      image: '/images/home-img4.jpeg',
      description: 'Extending the mission beyond borders to reach more communities.',
      fieldType: 'International',
      continent: 'Africa',
      country: 'Ghana',
      state: 'Greater Accra',
      city: 'Accra',
      about: {
        title: 'Accra Mission Field',
        content:
          'This section will contain information about the mission work, its activities and the communities it serves.',
        vision: 'To extend the reach of the Gospel across nations.',
        objectives: [
          'Reach communities with the Gospel.',
          'Build relationships with local communities.',
          'Encourage spiritual growth and discipleship.',
        ],
      },
      recentUpdates: [
        {
          id: 'accra-update-1',
          image: '/images/home-img1.jpeg',
          title: 'Community Outreach',
          description: 'Taking the message of Christ into communities through outreach activities.',
        },
        {
          id: 'accra-update-2',
          image: '/images/home-img2.jpeg',
          title: 'Mission Fellowship',
          description: 'Encouraging fellowship and spiritual growth among community members.',
        },
        {
          id: 'accra-update-3',
          image: '/images/home-img4.jpeg',
          title: 'Gospel Outreach',
          description: 'Creating opportunities to share the Gospel and connect with more people.',
        },
        {
          id: 'accra-update-4',
          image: '/images/home-img3.jpeg',
          title: 'Community Engagement',
          description:
            'Building relationships and encouraging participation in mission activities.',
        },
        {
          id: 'accra-update-5',
          image: '/images/home-img1.jpeg',
          title: 'Spiritual Development',
          description: 'Encouraging faith, discipleship and spiritual growth.',
        },
        {
          id: 'accra-update-6',
          image: '/images/home-img2.jpeg',
          title: 'Mission Expansion',
          description: 'Continuing to extend the reach of the mission into more communities.',
        },
      ],
    },
    {
      id: 'nairobi',
      name: 'Nairobi Mission Field',
      location: 'Nairobi, Kenya',
      category: 'International Mission',
      image: '/images/home-img2.jpeg',
      description: 'Reaching people and communities through missionary outreach.',
      fieldType: 'International',
      continent: 'Africa',
      country: 'Kenya',
      state: 'Nairobi County',
      city: 'Nairobi',
      about: {
        title: 'Nairobi Mission Field',
        content:
          'This section will contain information about the mission work, its activities and the communities it serves.',
        vision: 'To extend the reach of the Gospel across nations.',
        objectives: [
          'Reach communities with the Gospel.',
          'Build relationships with local communities.',
          'Encourage spiritual growth and discipleship.',
        ],
      },
      recentUpdates: [
        {
          id: 'nairobi-update-1',
          image: '/images/home-img1.jpeg',
          title: 'Mission Outreach',
          description: 'Reaching communities with the Gospel through missionary activities.',
        },
        {
          id: 'nairobi-update-2',
          image: '/images/home-img2.jpeg',
          title: 'Community Fellowship',
          description: 'Strengthening relationships and encouraging spiritual growth.',
        },
        {
          id: 'nairobi-update-3',
          image: '/images/home-img3.jpeg',
          title: 'Mission Development',
          description: 'Supporting the growth of mission activities within the community.',
        },
        {
          id: 'nairobi-update-4',
          image: '/images/home-img4.jpeg',
          title: 'Community Outreach',
          description: 'Connecting with more people through community-focused activities.',
        },
        {
          id: 'nairobi-update-5',
          image: '/images/home-img1.jpeg',
          title: 'Gospel Engagement',
          description: 'Encouraging people to connect with the message of Christ.',
        },
        {
          id: 'nairobi-update-6',
          image: '/images/home-img2.jpeg',
          title: 'Growing the Mission',
          description: 'Supporting continued mission growth and spiritual development.',
        },
      ],
    },
    {
      id: 'london',
      name: 'London Mission Field',
      location: 'London, United Kingdom',
      category: 'International Mission',
      image: '/images/home-img3.jpeg',
      description: 'Sharing the Gospel and supporting mission work across communities.',
      fieldType: 'International',
      continent: 'Europe',
      country: 'United Kingdom',
      state: 'England',
      city: 'London',
      about: {
        title: 'London Mission Field',
        content:
          'This section will contain information about the mission work, its activities and the communities it serves.',
        vision: 'To extend the reach of the Gospel across nations.',
        objectives: [
          'Reach communities with the Gospel.',
          'Build relationships with local communities.',
          'Encourage spiritual growth and discipleship.',
        ],
      },
      recentUpdates: [
        {
          id: 'london-update-1',
          image: '/images/home-img1.jpeg',
          title: 'Community Mission',
          description: 'Connecting with people and sharing the message of hope.',
        },
        {
          id: 'london-update-2',
          image: '/images/home-img2.jpeg',
          title: 'Mission Fellowship',
          description: 'Encouraging fellowship and faith within the community.',
        },
        {
          id: 'london-update-3',
          image: '/images/home-img4.jpeg',
          title: 'Outreach Activities',
          description: 'Creating opportunities to reach more people through mission work.',
        },
        {
          id: 'london-update-4',
          image: '/images/home-img3.jpeg',
          title: 'Gospel Outreach',
          description: 'Sharing the Gospel and connecting with local communities.',
        },
        {
          id: 'london-update-5',
          image: '/images/home-img1.jpeg',
          title: 'Community Engagement',
          description: 'Building relationships and encouraging community participation.',
        },
        {
          id: 'london-update-6',
          image: '/images/home-img2.jpeg',
          title: 'Mission Growth',
          description: 'Supporting the continued growth of mission activities.',
        },
      ],
    },
    {
      id: 'mumbai',
      name: 'Mumbai Mission Field',
      location: 'Mumbai, India',
      category: 'International Mission',
      image: '/images/home-img4.jpeg',
      description: 'Taking the message of Christ to communities across nations.',
      fieldType: 'International',
      continent: 'Asia',
      country: 'India',
      state: 'Maharashtra',
      city: 'Mumbai',
      about: {
        title: 'Mumbai Mission Field',
        content:
          'This section will contain information about the mission work, its activities and the communities it serves.',
        vision: 'To extend the reach of the Gospel across nations.',
        objectives: [
          'Reach communities with the Gospel.',
          'Build relationships with local communities.',
          'Encourage spiritual growth and discipleship.',
        ],
      },
      recentUpdates: [
        {
          id: 'mumbai-update-1',
          image: '/images/home-img1.jpeg',
          title: 'Mission Outreach',
          description: 'Sharing the Gospel and reaching people within the community.',
        },
        {
          id: 'mumbai-update-2',
          image: '/images/home-img2.jpeg',
          title: 'Community Engagement',
          description: 'Building connections and supporting community-focused activities.',
        },
        {
          id: 'mumbai-update-3',
          image: '/images/home-img4.jpeg',
          title: 'Mission Activities',
          description: 'Encouraging faith and strengthening mission engagement.',
        },
        {
          id: 'mumbai-update-4',
          image: '/images/home-img3.jpeg',
          title: 'Community Fellowship',
          description: 'Encouraging fellowship and meaningful connections.',
        },
        {
          id: 'mumbai-update-5',
          image: '/images/home-img1.jpeg',
          title: 'Gospel Engagement',
          description: 'Creating opportunities to share the Gospel with more people.',
        },
        {
          id: 'mumbai-update-6',
          image: '/images/home-img2.jpeg',
          title: 'Mission Development',
          description: 'Supporting continued mission growth and community engagement.',
        },
      ],
    },
  ];

  getMissionFields(): MissionField[] {
    return this.missionFields;
  }

  getMissionField(id: string): MissionField | undefined {
    return this.missionFields.find((field) => field.id === id);
  }
}
