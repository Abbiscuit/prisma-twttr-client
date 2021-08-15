import React from 'react';

import s from './TweetItem.module.scss';

interface Props {}

const TweetItem = (props: Props) => {
  return (
    <div className={s.itemContainer}>
      <div className={s.info}>
        <span className={s.username}>{`username@userid`}</span>
        <span>・</span>
        <time className={s.time}>{`date 2021`}</time>
      </div>
      <p className={s.content}>Tweets Content</p>
    </div>
  );
};

export default TweetItem;
