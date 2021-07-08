import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const {
    loginWithPopup,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getIdTokenClaims,
    getAccessTokenSilently,
  } = useAuth0();

  async function token() {
    console.log("acess token is    " , (await getAccessTokenSilently()));
    console.log("id token is    " , (await getIdTokenClaims()));
  }

  return (
    <>
      <div className="App">
        <h1> auth0</h1>
        <li>
          <button onClick={loginWithPopup}> login with popup</button>
          <button onClick={loginWithRedirect}> login with redirect</button>
          <button onClick={logout}> login with logout</button>
        </li>
        <h2>user is {isAuthenticated ? "logged in" : "not logged in"}</h2>
        {isAuthenticated && (
          <pre style={{ textAlign: "start" }}>
            {JSON.stringify(user, null, 2)}
          </pre>
        )}
        <button onClick={token}> token</button>
      </div>
    </>
  );
}

export default App;
