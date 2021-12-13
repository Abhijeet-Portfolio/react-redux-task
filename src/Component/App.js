import { Link } from 'react-router-dom';
import '../Assets/css/App.css';

const App = () => {

  return (
    <header>
      <div className="wrapper">
        <h1>Logo</h1>
        <nav>
          <ul>
            <Link to='/' className='link'><li>Home</li></Link>
            <Link to='/userslist' className='link'><li>Users</li></Link>
            <Link to='/posts' className='link'><li>Posts</li></Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default App;
