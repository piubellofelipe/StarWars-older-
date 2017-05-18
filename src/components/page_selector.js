import React from 'react'

const selector = (props) =>{
    return(
        <div className = "page-selector">
            <div className = "pgleft" onClick = {() => props.onPageSelect(props.page-1)}> ant.  </div>
            <div className = "pgright" onClick = {() => props.onPageSelect(props.page+1)}> prox.  </div>
        </div>
    );
}

export default selector;