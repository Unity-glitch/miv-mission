export interface OutreachEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  description: string;
}

export const UPCOMING_OUTREACH_EVENTS: OutreachEvent[] = [
  {
    id: 'community-evangelism',
    title: 'Community Evangelism Outreach',
    date: 'To be announced',
    time: 'To be announced',
    venue: 'Venue to be announced',
    image: '/images/home-img1.jpeg',
    description:
      'Join us as we take the Gospel into communities, share the message of Christ, and connect with people.',
  },
  {
    id: 'missionary-outreach',
    title: 'Missionary Outreach Programme',
    date: 'To be announced',
    time: 'To be announced',
    venue: 'Venue to be announced',
    image: '/images/home-img2.jpeg',
    description:
      'An opportunity to participate in missionary activities and support the work of reaching communities.',
  },
  {
    id: 'community-impact',
    title: 'Community Impact Outreach',
    date: 'To be announced',
    time: 'To be announced',
    venue: 'Venue to be announced',
    image: '/images/home-img3.jpeg',
    description:
      'An outreach initiative focused on connecting with communities and demonstrating the love of Christ through service.',
  },
];
