import React, { useState, useEffect } from 'react';
import { getUsers } from '../../api';
import UserCard from './UserCard';
import './style.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const loadUsers = (pageNumber) => {
    getUsers(pageNumber)
    .then((data) => {
      setUsers(data);
    })
    .catch((error) => {
      setError(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  const renderUsers = () => {
    return users.map((user) => <UserCard user={user} key={user.id} />);
  }

  const prevBtnHandler = () => {
    if(page > 1) {
      setPage(page - 1);
    }
  }

  const nextBtnHandler = () => {
    setPage(page + 1);
  }

  useEffect(() => {
    loadUsers(page)
  }, [page]);
  // Пустий масив залежностей - componentDidMount

  return (
    <>
      <h1>User List</h1>

      {isLoading && <h2 className='loading'>Loading....</h2>}
      <section className='card-container'>
        {users.length > 0 ? renderUsers() : <h2 className='error'>Users not found</h2>}
      </section>

      <div>
        <button onClick={prevBtnHandler} disabled={page === 1}>Previous page</button>
        <button onClick={nextBtnHandler} disabled={users.length < 5}>Next page</button>
      </div>
    </>
  );
}

export default UserList;
