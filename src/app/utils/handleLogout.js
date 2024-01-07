const handleLogout = () => {
  if (typeof window !== 'undefined') {
    console.log('Currently on Client side');
    if (localStorage.getItem('jwtToken')) {
      // remove token for localStorage
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('email');
      localStorage.removeItem('expiration');
    }
  } else {
    console.log('Currently on Server Side');
  }

};

export default handleLogout;