import React from 'react';

export default function Skills() {
  return (
    <>
    <div className=' container shadow p-3 mb-5 bg-white rounded m-auto'>
      <h1>Skills</h1>
    <div className="container"> 

<div className="row mb-3 mt-5"> 
  <div className="col-3" style={{ backgroundColor: '#f7f7f7' }}> 
    <strong>CSS</strong>
  </div>
  <div className="col-9">
    <div className="progress">
      <div className="progress-bar bg-secondary" style={{ width: '70%' }}> 
        70%
      </div>
    </div>
  </div>
</div>

<div className="row mb-3">
  <div className="col-3" style={{ backgroundColor: '#f7f7f7' }}>
    <strong>HTML</strong>
  </div>
  <div className="col-9">
    <div className="progress">
      <div className="progress-bar bg-success" style={{ width: '85%' }}>
        85%
      </div>
    </div>
  </div>
</div>

<div className="row mb-3">
  <div className="col-3" style={{ backgroundColor: '#f7f7f7' }}>
    <strong>React</strong>
  </div>
  <div className="col-9">
    <div className="progress">
      <div className="progress-bar bg-info" style={{ width: '50%' }}>
        50%
      </div>
    </div>
  </div>
</div>

<div className="row mb-5">
  <div className="col-3" style={{ backgroundColor: '#f7f7f7' }}>
    <strong>Angular</strong>
  </div>
  <div className="col-9">
    <div className="progress">
      <div className="progress-bar bg-warning" style={{ width: '60%' }}>
        60%
      </div>
    </div>
  </div>
</div>

</div>
    </div>
      
    </>
  );
}
