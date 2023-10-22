import { JsonValue } from "type-fest";
import { Post } from "../post/Post";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: JsonValue;
  posts?: Array<Post>;
};
