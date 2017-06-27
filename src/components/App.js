import { h } from 'preact';
import User from './User';

const users = [
  {
    image: 'https://avatars3.githubusercontent.com/u/1643522?v=3&s=460',
    name: 'Shane Osbourne'
  },
  {
    image: 'https://avatars3.githubusercontent.com/u/1643522?v=3&s=460',
    name: 'Sindre Sorhus'
  },
  {
    image: 'https://avatars3.githubusercontent.com/u/1643522?v=3&s=460',
    name: 'Sindre Sorhus'
  },
]

export function App () {
  return (
    <div class="app">
    {users.map(user => <User {...user} key={user.name}/>)}

    </div>
  );
}

export default App;
