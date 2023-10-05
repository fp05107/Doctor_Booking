export interface CommonDisease {
  icon: any;
  name: string;
  backgroundColor: string;
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
