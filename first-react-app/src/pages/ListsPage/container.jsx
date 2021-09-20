import React, { useState } from 'react';
import { ListPage } from '.';

export const ListPageContainer = () => {
  const [userList, setUserList] = useState([
    { name: 'Ditto', age: 18 },
    { name: 'Pikachu', age: 23 },
    { name: 'Bulbasavr', age: 16 },
  ]);
  return <ListPage users={userList} />;
};
