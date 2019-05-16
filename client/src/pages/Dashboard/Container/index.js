import React from 'react';

const Container = (props) => {
  return (
    <div className='container'>
      <label htmlFor='bigJumbo' className='display-4 mt-5 text-white'>NightBeat</label>
      <div name='bigJumbo' className='jumbotron text-white bg-dark shadow'>
        {props.children}
      </div>
    </div>
  )
}

export default Container;