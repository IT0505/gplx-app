export const logout = () => {
  window.sessionStorage.removeItem('id');
  window.reload();
};
export const login = (id) => {
  window.sessionStorage.setItem('id', id);
  window.reload();
};
