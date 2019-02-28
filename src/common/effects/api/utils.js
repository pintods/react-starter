export function getAuthHeaders(token) {
  return {
    headers: {
      Authorization: token,
      Accept: "application/json"
    }
  };
}
