import { InputJsonValue } from "../../types";
import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  posts?: PostCreateNestedManyWithoutUsersInput;
};
