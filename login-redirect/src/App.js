import { useEffect, useState } from "react";
import { stytchClient } from ".";
import Spinner from "./Spinner";
import "./App.css";

const demoForms = [
  {
    title: "SaaS Signup & Onboarding",
    link: "https://templates.feathery.io?_slug=g1vU7Q",
    img: "https://feathery.s3.us-west-1.amazonaws.com/templates/SaaS+Signup+&+Onboarding.jpg",
  },
  {
    title: "SMS Signup",
    link: "https://templates.feathery.io?_slug=NHl7C3",
    img: "https://feathery.s3.us-west-1.amazonaws.com/templates/SMS+Signup.jpg",
  },
  {
    title: "Simple Signup",
    link: "https://templates.feathery.io?_slug=NjOv8k",
    img: "https://feathery.s3.us-west-1.amazonaws.com/templates/Simple+Signup.jpg",
  },
];

function clearStytchDomainCookie() {
  const domainParts = window.location.hostname.split(".");
  const domain =
    domainParts.length === 1
      ? "localhost"
      : domainParts.at(-2) + "." + domainParts.at(-1);

  document.cookie = `stytch_session_jwt=; Max-Age=-1; Domain=${domain}`;
  document.cookie = `stytch_session=; Max-Age=-1; Domain=${domain}`;
}

function App() {
  // If page is refreshed with an existing session, Stytch will have session on
  // first render so the user can be directly logged in
  const [loggedIn, setLoggedIn] = useState(!!stytchClient.session.getSync());
  const [showLoader, setShowLoader] = useState(
    !loggedIn && document.cookie.includes("stytch_session_jwt")
  );

  useEffect(() => {
    // Fires on new login or logout, but not on refreshing page with existing session
    const unsubSession = stytchClient.session.onChange((newSession) => {
      setLoggedIn(!!newSession);
      setShowLoader(false);
    });
    return () => unsubSession && unsubSession();
  });

  return (
    <div className="App">
      {showLoader ? (
        <Spinner />
      ) : (
        <div className="App-header">
          <h1>Feathery Login Demo</h1>
          {loggedIn ? (
            <div className="success">
              Congratulations, you logged in with a Feathery template!
              <br />
              You can log out to try again with another template.
              <button
                className="logoutButton"
                onClick={() => {
                  stytchClient.session.revoke();
                  // Clearing the cookie allows for simpler logic regarding the loader
                  clearStytchDomainCookie();
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="templates">
              {demoForms.map(({ title, link, img }) => (
                <div
                  className="template"
                  key={title}
                  onClick={() => (window.location.href = link)}
                >
                  <img className="templateImage" src={img} alt={title} />
                  <span className="templateLabel">{title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
