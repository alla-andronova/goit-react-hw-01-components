import Profile from './Profile/Profile';
import user from '../urer.json';

export default function App() {
  return (
    <div>
      <Profile
        url={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
}
