import { post } from "./axios-config";

type loginResponse = {
  accessToken: string;
  refreshToken: string;
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
};

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
  return await post<loginResponse>({
    url: "auth/login",
    data: {
      username,
      password,
    }
  });
};
