import {useState, useEffect} from 'react'
import './TreeNode.css';


function TreeNode({currentNode}) {
    const [isCollapsed, setIsCollapsed] = useState({});


    let nodeKeys = currentNode ? Object.keys(currentNode) : [];

    useEffect(() => {
        let isCollapsedKeys = {};
        nodeKeys.map(nodeKey=> {
            isCollapsedKeys[nodeKey] = true;
        })
        setIsCollapsed(Object.assign({},isCollapsedKeys))
    },[]);

    if (currentNode === null) return <div>null</div>
    if (currentNode === undefined) return <div>null</div>

    if (nodeKeys.length){
        return (
            <div className="Tree">
                {nodeKeys.map(nodeKey => { 
                    let sign = isCollapsed[nodeKey] ? '▲' : '▼';
                    if (typeof currentNode[nodeKey] === 'object'){
                        return (
                            <div onClick={(event)=>{
                                event.stopPropagation();
                                let isCollapsedKeys = Object.assign({},isCollapsed);
                                isCollapsedKeys[nodeKey] = !isCollapsedKeys[nodeKey];
                                setIsCollapsed(Object.assign({},isCollapsedKeys))
                            }}>
                                <div>{sign + ' ' + nodeKey + ' : '}</div>
                                {isCollapsed[nodeKey] ? null : <TreeNode currentNode={currentNode[nodeKey]}></TreeNode>}
                            </div>)
                    }
                    else if (typeof currentNode[nodeKey] === 'function'){
                        return (
                            <div className="nodeNoChild">
                                <span>{nodeKey  + ': '}</span>
                                <span>{currentNode[nodeKey].toString()}</span>
                            </div>                            
                        )
                    }
                    else return (
                            <div className="nodeNoChild">
                                <span>{nodeKey  + ': '}</span>
                                <span>{currentNode[nodeKey]}</span>
                            </div>
                        )
                    })}
            </div>
            );
    }
    else return null

}

export default TreeNode;
