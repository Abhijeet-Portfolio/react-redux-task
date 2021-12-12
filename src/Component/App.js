
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions';
import '../Assets/css/App.css';
import Loader from './loader';
import UserProfile from './UserProfile';

function App() {

  const [limit, setlimit] = useState('all');
  const [modal, setmodal] = useState(false);
  const [userid, setuserid] = useState('');
  const dispatch = useDispatch();

  const getData = useSelector(state => state.array);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const displayModal = id => {
    setuserid(id);
    setmodal(true);
  }

  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <h1>Logo</h1>
        </div>
      </header>
      <section className='users'>
        <div className="wrapper">
          <div className='sort'>
            <h2>Users List</h2>
            <select defaultValue='all' onChange={e => setlimit(e.target.value)}>
              <option value="all">All</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
          </div>
          <ul className='users-lists'>
            {getData.length === 0 ? <Loader /> : (getData.map((element,key) => {
              if(limit === 'all' || key < Number(limit)) {
                return (
                  <li key={key} onClick={() => displayModal(element.id)}>
                    <figure>
                      <img src={element.picture} alt={element.firstName} />
                    </figure>
                    <div>
                      <h3>ID: {element.id}</h3>
                      <h4>Name: {element.title}. {element.firstName} {element.lastName}</h4>
                    </div>
                  </li>
                )
              }
              return null;              
            }))}
          </ul>
          {modal ? <UserProfile modal={value => setmodal(value)} id={userid} /> : null}
        </div>
      </section>
    </div>
  );
}

export default App;
