import React from 'react';

import s from './TweetsList.module.scss';

interface TweetsListProps {}

const TweetsList = (props: TweetsListProps): JSX.Element => {
  return (
    <div>
      <div className={s.itemContainer}>
        <div className={s.info}>
          <span className={s.username}>{`username@userid`}</span>
          <span>・</span>
          <time className={s.time}>{`date 2021`}</time>
        </div>
        <p className={s.content}>Tweets Content</p>
      </div>
    </div>
  );
};

export default TweetsList;
