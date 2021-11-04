import React, { useEffect, useState } from 'react';

const Details = (props) => {
  const [userData, setUserData] = useState();
  const { selectedUser } = props;

  useEffect(() => {
    if (!selectedUser) {
      return;
    }

    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${selectedUser}.json`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [selectedUser]);

  if (!userData) {
    return null;
  }

  return (
    <div className="details">
      <img src={userData.avatar} className="avatar" />
      <div className="name">{userData.name}</div>
      <div className="city">City: {userData.details.city}</div>
      <div className="company">Company: {userData.details.company} </div>
      <div className="position">Position: {userData.details.position}</div>
    </div>
  );
};

export default Details;
