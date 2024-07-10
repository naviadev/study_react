const LoginForm: React.FC = () => {
  const styles: React.CSSProperties = {
    width: "100vw",
    height: "100vh",
    
  };

  const loginSubmit = () => {
    alert("야호");
  };

  return (
    <div id="login-container" style={styles}>
      <div id="login-input"></div>
      <div id="login-submit" onClick={loginSubmit}> test </div>
    </div>
  );
};

export default LoginForm;