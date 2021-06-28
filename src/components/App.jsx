import Profile from './Profile/Profile';
import Container from './Container/Container';
import Statistics from './Statistics/Statistics';
import FriendItem from './FriendItem/FriendItem';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../urer.json';
import dataStatistics from '../statistics.json';
import friendsList from '../friends.json';
import transactions from '../transactions.json';

export default function App() {
  return (
    <Container>
      <Profile
        url={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" items={dataStatistics} />
      <FriendItem friends={friendsList} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
}
