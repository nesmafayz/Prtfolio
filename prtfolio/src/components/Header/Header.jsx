import React from 'react'

export default function Header() {
  return (
    <>

<div className="container-fluid" style={{ position: 'relative', height: '100vh' }}>
      <div
        className="bg-image"
        style={{
          
          backgroundImage: 'url("/images/p.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          position: 'relative',
          zIndex: 0,
        }}
      >
        <div
          className="text-overlay"
          style={{
            position: 'absolute',
            top: '50%',
            left: '30%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            textAlign: 'center',
            color: 'white',
            fontSize: 'clamp(20px, 5vw, 70px)', 
            fontWeight: 'bold',
            animation: 'fadeSlide 3s ease-in-out infinite', // Animation name from custom CSS
          }}
        >
          I'm Nesma
          <p style={{ fontSize: 'clamp(16px, 3vw, 35px)' }}>Full Stack Developer</p> {/* Responsive paragraph */}
        </div>
      </div>
    </div>

    </>
  )
}
