import {Form, setValues} from "@feathery/react";
import { EMBED_FORM_NAME } from "./FeatheryConfig";
import {useEffect} from "react";

function App() {
  useEffect(() => {
    setValues({'first-name-3': 'Feathery', 'last-name-3': 'Support', 'email-1': 'support@feathery.io'});
  }, []);

  return <Form formName={EMBED_FORM_NAME} />;
}

export default App;
