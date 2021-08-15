import React from 'react';
import TweetsList from '../components/tweets/TweetsList/TweetsList';

interface Props {}

const TweetsPage = (props: Props) => {
  return (
    <section>
      <TweetsList />
    </section>
  );
};

export default TweetsPage;
