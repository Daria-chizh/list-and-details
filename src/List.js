import React, { useEffect, useState } from 'react';
import User from './User';

const USERS_LIST_URL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

const List = (props) => {
  const [items = [], setItems] = useState();
  const { onUserSelected } = props;

  useEffect(() => {
    fetch(USERS_LIST_URL)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="list">
      { items.map((item) => <User item={item} key={item.id} onUserSelected={onUserSelected} />) }
    </div>
  );
};

export default List;
