import React from 'react';
import TweetItem from '../TweetItem/TweetItem';

import s from './TweetsList.module.scss';

interface TweetsListProps {}

const TweetsList = (props: TweetsListProps): JSX.Element => {
  return (
    <div>
      <div className={s.tweetList}>
        {[...Array(10)].map(tweet => (
          <TweetItem />
        ))}
      </div>
    </div>
  );
};

export default TweetsList;
