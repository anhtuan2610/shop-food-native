import { TUser, TUserLoginResponse } from "@/types";
import { get, post } from "./axios-config";

// export const register = async ({
//   fullName,
//   email,
//   password,
// }: {
//   fullName: string;
//   email: string;
//   password: string;
// }) => {
//   return await post({
//     url: "users",
//     data: {
//       fullName,
//       email,
//       password,
//     },
//   });
// };

export const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  return await post<TUserLoginResponse>({
    url: "auth/login",
    data: {
      username,
      password,
    }
  });
};

export const getSingleUser = async ({userId}: {userId: number}) => {
  return await get<TUser>({
    url: `user/${userId}`
  })
}
