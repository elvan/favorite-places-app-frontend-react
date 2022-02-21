import { UserList } from '../components/UserList';

export const UserDashboardPage = () => {
  const users = [
    {
      id: 'u1',
      image:
        'https://images.unsplash.com/photo-1493351192532-a731983a2c30?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8cGxhY2VzfHx8fHx8MTY0NTQwMTkzMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=450',
      name: 'Aaron',
      places: ['p1'],
    },
    {
      id: 'u2',
      image:
        'https://images.unsplash.com/photo-1593604572577-1c6c44fa246c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8cGxhY2VzfHx8fHx8MTY0NTQwMTk0Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=450',
      name: 'Billy',
      places: ['p2', 'p3'],
    },
    {
      id: 'u3',
      image:
        'https://images.unsplash.com/photo-1568568740443-f846637a598f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8cGxhY2VzfHx8fHx8MTY0NTQwMTk1Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=450',
      name: 'Cindy',
      places: ['p3'],
    },
  ];

  return <UserList users={users} />;
};
