import {useState} from 'react'

import InputUrl from './components/InputUrl';
import TreeNode from './components/TreeNode';
import './App.css';
import {getJson} from './api'

function App() {

  const [firstNode, setFirstNode] = useState(null);

  return (
    <div className="App">
      <InputUrl
        sendRequest={sendRequest}
      ></InputUrl>
      {firstNode ? <TreeNode
        currentNode={firstNode}
      ></TreeNode> : <div>nothing to display</div>}
    </div>
  );

  function sendRequest(url){
    getJson(url).then(res => {
      setFirstNode(res.data);
    })
    .catch(e => {
      setFirstNode(null);
    })
    // let res = getJson();
    // setFirstNode(res);
  }
}

export default App;
