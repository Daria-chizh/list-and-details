import React from 'react';

const User = (props) => {
  const { item, onUserSelected } = props;
  const { name, id } = item;

  return (
    <div className="users" onClick={() => onUserSelected(id)}>{name}</div>
  )
};

export default User;
