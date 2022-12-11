import { makeRequest } from "./makeRequest.jsx";

export function getPosts() {
  return makeRequest("/posts");
}
