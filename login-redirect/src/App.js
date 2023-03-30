import { useState } from "react";
import { stytchClient } from ".";
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
    link: "https://form.feathery.io?_slug=NjOv8k",
    img: "https://feathery.s3.us-west-1.amazonaws.com/templates/Simple+Signup.jpg",
  },
  // {
  //   title: "Signup & Onboarding (Robinhood)",
  //   link: ADD FORM LINK,
  //   img: "https://feathery.s3.us-west-1.amazonaws.com/templates/Signup+&+Onboarding+(Robinhood).jpg",
  // },
];

function getStytchJwt() {
  return document.cookie
    .split("; ")
    .filter((row) => row.startsWith(`stytch_session_jwt=`))
    .map((c) => c.split("=")[1])[0];
}

function App() {
  const [loggedIn, setLoggedIn] = useState(
    !!(getStytchJwt() || stytchClient.session.getSync())
  );

  stytchClient.session.onChange((newSession) => {
    setLoggedIn(!!newSession);
  });

  return (
    <div className="App">
      <div className="App-header">
        <h1>Feathery Login Demo</h1>
        {loggedIn ? (
          <div className="success">
            Congratulations, you logged in with a Feathery template!
            <br />
            You can log out to try again with another template.
            <button
              className="logoutButton"
              onClick={() => stytchClient.session.revoke()}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="templates">
            {demoForms.map(({ title, link, img }) => {
              return (
                <div className="template" key={title} onClick={() => window.location.href = link}>
                  <img className="templateImage" src={img} alt={title} />
                  <span className="templateLabel">{title}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
