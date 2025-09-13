function withAuth(WrappedComponent) {
  return function EnhancedComponent(props) {
    const isLoggedIn = localStorage.getItem("authToken");

    if (!isLoggedIn) {
      return <h2>🚫 Access Denied! Please login.</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
