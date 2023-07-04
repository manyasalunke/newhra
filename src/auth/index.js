export const isLoggedIn = () => {
    let data = localStorage.getItem("response.data");
    if (data !== null) return true;
    else return false;
  };
  
  export const doLogin = (responseData, next) => {
    localStorage.setItem("response.data", JSON.stringify(responseData));
    next();
  };
  
  export const doLogout = (next) => {
    localStorage.removeItem("response.data");
    next();
  };
  
  export const getCurrentUserDetails = () => {
    if (isLoggedIn()) {
      return JSON.parse(localStorage.getItem("response.data"));
    } else {
      return false;
    }
  };
  