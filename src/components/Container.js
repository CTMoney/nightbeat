import React from 'react';

const Container = () => {
    return ( 
        <div className="container">
        <label className="display-4 mt-3">NightBeat</label>
        <div className="jumbotron shadow" style={myStyle}>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>

        </div>
      </div>
     );
}
 
const myStyle = {
    minHeight: "60%"
}
export default Container;