import {Form, setValues} from "@feathery/react";
import { EMBED_FORM_NAME } from "./FeatheryConfig";

function App() {
  return <Form
    formName={EMBED_FORM_NAME}
    onSubmit={(context) => {
      if (context.stepProperties().name === 'user-input') {
        const data = context.submitFields;
        const interest = parseInt(data['interest-rate'].value) / 100;
        const time = parseInt(data['loan-months'].value) / 12;
        const deposit = data['loan-deposit'].value;
        const loan = Math.max((data['vehicle-value'].value * interest * time) - deposit, 0);
        setValues({'loan-total': loan});
      }
    }}
  />;
}

export default App;
