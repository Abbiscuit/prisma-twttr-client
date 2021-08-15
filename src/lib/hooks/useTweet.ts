import { useState, useEffect, useCallback } from 'react';
import { Tweet } from '../../types';
import { httpGetAllTweets } from './requests';

export const useTweet = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  const getAllTweets = useCallback(async () => {
    const fetchedTweets = await httpGetAllTweets();
    setTweets(fetchedTweets);
  }, []);

  useEffect(() => {
    getAllTweets();
  }, [getAllTweets]);

  return {
    tweets,
  };
};
