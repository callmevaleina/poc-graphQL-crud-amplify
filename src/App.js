import Router from "./routes/Router";
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);



function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
