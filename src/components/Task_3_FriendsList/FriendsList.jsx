import React from 'react';
import s from './FriendsList.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <>
      <section className={s.section}>
        <ul className={s.friendsList}>
          {friends.map(({ avatar, name, isOnline, id }) => {
            return (
              <li key={id} className={s.friendsItem}>
                <span className={s.friendsStatus}>{isOnline}</span>
                <img
                  src={avatar}
                  alt="friend avatar"
                  className={s.friendsAvatar}
                />
                <p className={s.friendsName}>{name}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
