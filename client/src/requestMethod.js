import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjk1NjdlY2FmODc2ZDQyZDczYTk0ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDM3OTA0OSwiZXhwIjoxNjY0NjM4MjQ5fQ.GBRqLvQB9aixrCZYHRC96ICq8TT6MGZ6EHWy7m1Iv_c";

export const publicReq = axios.create({
  baseURL: BASE_URL,
});
export const userReq = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
