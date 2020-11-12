import {useState} from 'react'
import './TreeNode.css';


function TreeNode({currentNode}) {

    let nodeKeys = currentNode ? Object.keys(currentNode) : [];


    if (currentNode === null) return <div>null</div>

    if (nodeKeys.length){
        return (
            <div className="Tree">
                {nodeKeys.map(nodeKey => <TreeNodeKey nodeKey={nodeKey} currentNode={currentNode}  key={'_' + Math.random().toString(36).substr(2, 9)}></TreeNodeKey>)}
            </div>
            );
    }
    else return null

}

function TreeNodeKey ({currentNode, nodeKey}){
    const [isCollapsed, setIsCollapsed] = useState(true);
    let sign = isCollapsed ? '▲' : '▼';
    if (typeof currentNode[nodeKey] === 'object'){
        return (
            <div onClick={(event)=>{
                event.stopPropagation();
                setIsCollapsed(!isCollapsed)
            }}>
                <div>{sign + ' ' + nodeKey + ' : '}</div>
                {isCollapsed ? null : <TreeNode currentNode={currentNode[nodeKey]}></TreeNode>}
            </div>)
    }
    else return (
            <div className="nodeNoChild">
                <span>{nodeKey  + ': '}</span>
                <span>{currentNode[nodeKey]}</span>
            </div>
        )
}

export default TreeNode;
