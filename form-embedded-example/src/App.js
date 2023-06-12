import { Form } from "@feathery/react";
import { EMBED_FORM_NAME } from "./FeatheryConfig";

function App() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Form formName={EMBED_FORM_NAME} />
    </div>
  );
}

export default App;
