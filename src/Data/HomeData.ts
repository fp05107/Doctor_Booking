export interface CommonDisease {
  icon: any;
  name: string;
  backgroundColor: string;
}

export interface Doctor {
  icon: any;
  name: string;
  ratePerHour: string;
  rating: string;
  favourite: boolean;
}

export interface Store {
  image: any;
  name: string;
  rating: string;
}

export const commonDiseases: CommonDisease[] = [
  {
    icon: require('../../assets/HomeScreenImages/dental.png'),
    name: 'Dental',
    backgroundColor: '#5E58F9',
  },
  {
    icon: require('../../assets/HomeScreenImages/heart.png'),
    name: 'Heart',
    backgroundColor: '#0BCB95',
  },
  {
    icon: require('../../assets/HomeScreenImages/eye.png'),
    name: 'Eye',
    backgroundColor: '#FE8D4A',
  },
  {
    icon: require('../../assets/HomeScreenImages/body.png'),
    name: 'Body',
    backgroundColor: '#FF5754',
  },
];

export const Doctors: Doctor[] = [
  {
    icon: require('../../assets/HomeScreenImages/qualifieddoctor.png'),
    name: 'Subham Sahoo',
    ratePerHour: '$25/hours',
    rating: '5',
    favourite: true,
  },
  {
    icon: require('../../assets/HomeScreenImages/qualifieddoctor.png'),
    name: 'Subham Sahoo',
    ratePerHour: '$25/hours',
    rating: '5',
    favourite: true,
  },
  {
    icon: require('../../assets/HomeScreenImages/qualifieddoctor.png'),
    name: 'Subham Sahoo',
    ratePerHour: '$25/hours',
    rating: '5',
    favourite: true,
  },
  {
    icon: require('../../assets/HomeScreenImages/qualifieddoctor.png'),
    name: 'Subham Sahoo',
    ratePerHour: '$25/hours',
    rating: '5',
    favourite: true,
  },
];

export const Stores: Store[] = [
  {
    image: require('../../assets/HomeScreenImages/stores.png'),
    name: 'Chemist Warehouse',
    rating: '5',
  },
  {
    image: require('../../assets/HomeScreenImages/stores.png'),
    name: 'CVC Pharmacy',
    rating: '5',
  },
  {
    image: require('../../assets/HomeScreenImages/stores.png'),
    name: 'CVC Pharmacy',
    rating: '5',
  },
  {
    image: require('../../assets/HomeScreenImages/stores.png'),
    name: 'CVC Pharmacy',
    rating: '5',
  },
];
