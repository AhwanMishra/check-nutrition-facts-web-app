import { HomePage } from './components/home-page/home-page.js';
import './style-sheets/main.css';

import Amplify from 'aws-amplify';
import { CNF_SERVICE_NAME, CNF_SERVICE_URL } from './apis/apiConstants.js';


Amplify.configure({
    API: {
        endpoints: [
            {
                name: CNF_SERVICE_NAME,
                endpoint: CNF_SERVICE_URL
            }
        ]
    }
});

function App() {
  return (
  <div className="DefaultStyle">
    <HomePage />
  </div>
  );
}

export default App;
