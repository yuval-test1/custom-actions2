import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  user?: UserWhereUniqueInput | null;
};
