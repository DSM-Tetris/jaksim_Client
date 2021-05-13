export const getToken = () => {
  const token = localStorage.getItem("token");
  let headers = {
    authorization: `Bearer ${token}`
  };

  return headers;
}