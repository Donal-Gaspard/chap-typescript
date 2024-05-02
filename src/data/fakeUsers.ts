import UserType from "../components/userDashboard/userType.ts";

const fakeUsers: UserType[] = [
  {
    userId: 1,
    firstname: 'Ludvig',
    lastname: 'Bjørkum',
    email: 'ludvig.bjorkum@example.com',
    phone: '123-456-7890',
    isAdmin: true,
    avatar: 'https://randomuser.me/api/portraits/med/men/32.jpg'
  },
  {
    userId: 2,
    firstname: 'jose',
    lastname: 'pena',
    email: 'jose.pena@example.com',
    avatar: 'https://randomuser.me/api/portraits/med/women/26.jpg',
    isAdmin: false
  },
  {
    userId: 3,
    firstname: 'mille',
    lastname: 'sorensen',
    email: 'mille.sorensen@example.com',
    phone: '123-456-7890',
    isAdmin: true,
    avatar: 'https://randomuser.me/api/portraits/med/men/33.jpg',
  },
  ];

export default  fakeUsers;


