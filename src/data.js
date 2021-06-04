import bus from './assets/busIcon.svg'
import num17 from './assets/number_17.svg'
import num3 from './assets/number_3.svg'
import cam from './assets/cam.svg'
import location from './assets/location.svg'

export const items = [
  {
    id: 1,
    title: 'Port Authority',
    address: '8th Ave btwn 42nd St & 43rd St, in front of…',

    tags: [
      {
        color: '#E81517',
        text: 'Downtown Tour',
      },
      {
        color: '#016F74',
        text: 'Brooklyn Tour',
      },
      {
        color: '#1AA0D8',
        text: 'Uptown & Harlem Tour',
      },
      {
        color: '#AB66C7',
        text: 'Night Tour',
      },
    ],
    category: 'bus stops',
    busIcon: [bus, num17],
  },
  {
    id: 2,
    title: 'Times Square West',
    address: '46th St btwn 7th Ave & 8th Ave, off of 8th…',

    tags: [
      {
        color: '#E81517',
        text: 'Downtown Tour',
      },

      {
        color: '#1AA0D8',
        text: 'Uptown & Harlem Tour',
      },
    ],

    category: 'bus stops',
    busIcon: [bus, num3],
  },

  {
    id: 3,
    title: 'Times Square',
    address: '12 E 23rd St, New York, NY',
    category: 'attractions',
    icon: cam,
  },
  {
    id: 4,
    title: 'Times Square Building',
    address: '12 E 23rd St, New York, NY',
    category: 'attractions',
    icon: cam,
  },

  {
    id: 5,
    title: 'Central Park',
    address: '12 E 23rd St, New York, NY',
    category: 'parks',
    icon: location,
  },
  {
    id: 6,
    title: 'Battery Park',
    address: '12 E 23rd St, New York, NY',
    category: 'parks',
    icon: location,
  },
  {
    id: 7,
    title: 'Metropolitan Museum',
    address: '12 E 23rd St, New York, NY',
    category: 'museums',
    icon: location,
  },
  {
    id: 8,
    title: 'Brooklyn Museum',
    address: '12 E 23rd St, New York, NY',
    category: 'museums',
    icon: location,
  },
]
//
