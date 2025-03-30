export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  export const validateUsername = (username) => {
    return /^[a-zA-Z0-9_]{3,15}$/.test(username);
  };
  
  export const validatePassword = (password) => {
    if (password.length < 6) return "Débil";
    if (password.length < 10) return "Media";
    return "Fuerte";
  };