import { get, post } from "./axios-config";

type loginResponse = [
  {
    id: string;
    fullName: string;
    email: string;
    password: string;
  }
];

export const register = async ({
  fullName,
  email,
  password,
}: {
  fullName: string;
  email: string;
  password: string;
}) => {
  return await post({
    url: "users",
    data: {
      fullName,
      email,
      password,
    },
  });
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return await get<loginResponse>({
    url: "users",
    params: {
      email,
      password,
    },
  });
};
