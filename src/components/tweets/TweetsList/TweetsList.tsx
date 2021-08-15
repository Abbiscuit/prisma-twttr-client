import React from 'react';
import { useTweet } from '../../../lib/hooks/useTweet';
import TweetItem from '../TweetItem/TweetItem';

import s from './TweetsList.module.scss';

interface TweetsListProps {}

const TweetsList = (props: TweetsListProps): JSX.Element => {
  const { tweets } = useTweet();
  return (
    <div>
      <div className={s.tweetList}>
        {tweets.map(tweet => (
          <TweetItem key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
};

export default TweetsList;
