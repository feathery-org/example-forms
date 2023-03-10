import { stytchClient } from ".";
import "./App.css";

const demoForms = [
  {
    title: "SaaS Signup & Onboarding",
    link: "https://form.feathery.io?_slug=g1vU7Q",
    img: "https://feathery.s3.us-west-1.amazonaws.com/templates/SaaS+Signup+&+Onboarding.jpg",
  },
  {
    title: "SMS Signup",
    link: "https://form.feathery.io?_slug=NHl7C3",
    img: "https://feathery.s3.us-west-1.amazonaws.com/templates/SMS+Signup.jpg",
  },
  {
    title: "Simple Signup",
    link: "https://form.feathery.io?_slug=NjOv8k",
    img: "https://feathery.s3.us-west-1.amazonaws.com/templates/Simple+Signup.jpg",
  },
  // {
  //   title: "Signup & Onboarding (Robinhood)",
  //   // todo: ADD REAL FORM LINK
  //   link: "here",
  //   img: "https://feathery.s3.us-west-1.amazonaws.com/templates/Signup+&+Onboarding+(Robinhood).jpg",
  // },
];

function App() {
  console.log("client", stytchClient);
  console.log("session", stytchClient.session.getSync());

  if (stytchClient.session.getSync()) {
    return (
      <div>
        Congratulations you logged in with a Feathery template!
        <button onClick={() => stytchClient.session.revoke()}>Logout</button>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="App-header">
        {demoForms.map(({ title, link, img }) => {
          return (
            <div className="templateContainer" key={title}>
              <img
                className="templateImage"
                src={img}
                alt="SaaS Signup & Onboarding Template"
              />
              <a className="App-link" href={link} rel="noopener noreferrer">
                {title}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
