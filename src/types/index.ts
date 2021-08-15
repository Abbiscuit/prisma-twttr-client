export type Tweet = {
  id: number;
  content: string;
  created_at: Date;
  published: boolean;
  userId: number | null;

  user?: User;
};

export type User = {
  id: number;
  username: string;
  email: string | null;
};
