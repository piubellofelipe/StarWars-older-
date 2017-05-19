import React from 'react'
//component responsible for simply allowing the user to navigate through pages
const selector = (props) =>{
    return(
        <div className = "page-selector">
            <button className = "pgleft" onClick = {() => props.onPageSelect(props.page-1)}> &lt;  </button>
            <button className = "pgright" onClick = {() => props.onPageSelect(props.page+1)}> &gt;  </button>
        </div>
    );
}

export default selector;