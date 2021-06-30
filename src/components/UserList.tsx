import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/UseActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creator/user';

const UserList: React.FC = () => {
    const { users, error, loading } = useTypedSelector(state => state.user);
   const { fetchUsers } = useActions();

    useEffect( () => {
        fetchUsers()
    }, []);

    if(loading) {
        return <h1>Loading process...</h1>
    }
    if(error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {users.map((item:any) => <div key={item.id}>{item.name}</div> )}
        </div>
    );
};

export default UserList;