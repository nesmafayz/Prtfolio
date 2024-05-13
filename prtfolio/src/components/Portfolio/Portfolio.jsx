import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function Portfolio() {
  return (
    <>
<div className='shadow p-3 bg-secondary rounded m-5'>
<div className="container m-5"> 
<h1>Portfolio</h1>
<br />
      <div className="row" style={{ justifyContent: 'space-around' }}> 
        <div className="col-3 shadow p-3 mb-5 bg-white rounded p-5 " style={{ backgroundColor: '#e0e0e0', padding: '20px', textAlign: 'center' }}>
          HTML
        </div>
        <div className="col-3 shadow p-3 mb-5 bg-white rounded p-5 " style={{ backgroundColor: '#c0c0c0', padding: '20px', textAlign: 'center' }}>
          CSS
        </div>
        <div className="col-3 shadow p-3 mb-5 bg-white rounded p-5 " style={{ backgroundColor: '#e0e0e0', padding: '20px', textAlign: 'center' }}>
          BOOTSTRAP
        </div>
      </div>

      <div className="row mt-3" style={{ justifyContent: 'space-around' }}> 
        <div className="col-3 shadow p-3 mb-5 bg-white rounded p-5 " style={{ backgroundColor: '#c0c0c0', padding: '20px', textAlign: 'center' }}>
          REACT
        </div>
        <div className="col-3 shadow p-3 mb-5 bg-white rounded p-5 " style={{ backgroundColor: '#e0e0e0', padding: '20px', textAlign: 'center' }}>
          ANGULAR
        </div>
        <div className="col-3 shadow p-3 mb-5 bg-white rounded p-5 " style={{ backgroundColor: '#c0c0c0', padding: '20px', textAlign: 'center' }}>
         VUE
        </div>
      </div>
    </div>
</div>


    </>
   
  );
}
