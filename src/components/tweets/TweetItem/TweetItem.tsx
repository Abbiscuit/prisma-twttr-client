import React from 'react';
import { Tweet } from '../../../types';

import s from './TweetItem.module.scss';

interface TweetItemProps {
  readonly tweet: Tweet;
}

const TweetItem = ({ tweet }: TweetItemProps) => {
  console.log(tweet);

  return (
    <div className={s.itemContainer}>
      <div className={s.info}>
        <span className={s.username}>{tweet.user?.username}</span>
        <span>・</span>
        <time className={s.time}>{tweet.created_at}</time>
      </div>
      <p className={s.content}>{tweet.content}</p>
    </div>
  );
};

export default TweetItem;
