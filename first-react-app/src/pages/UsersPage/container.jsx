import { useEffect } from 'react';

export const UserPageContainer = () => {
  const [users, setUsers] = useState([]);
  const handleUseRemove = (index) => {
    const stateCopy = [...users];
    stateCopy.splice(index, 1);
    setUsers(stateCopy);
  };
  useEffect(() => {
    setUsers([
      {
        name: 'Alex',
        age: 27,
        phone: '+3752993847474',
        avatar: 'http://archilab.online/images/1/123.jpg',
      },
      {
        name: 'Bella',
        age: 23,
        phone: '+3752974756674',
        avatar: 'https://www.blast.hk/attachments/64805/',
      },
      {
        name: 'Vendetta',
        age: 27,
        phone: '+3752993847474',
        avatar: 'http://archilab.online/images/1/123.jpg',
      },
      {
        name: 'John',
        age: 23,
        phone: '+3752974756674',
        avatar: 'https://www.blast.hk/attachments/64805/',
      },
      {
        name: 'Tim',
        age: 27,
        phone: '+3752993847474',
        avatar: 'http://archilab.online/images/1/123.jpg',
      },
      {
        name: 'Alex',
        age: 23,
        phone: '+3752974756674',
        avatar: 'https://www.blast.hk/attachments/64805/',
      },
    ]);
  }, []);
  return <UserPage users={users} handlUserRempve={handleUserRemove} />;
};
