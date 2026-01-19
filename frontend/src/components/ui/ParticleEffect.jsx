import React from 'react'

const ParticleEffect = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-ping"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }}
        ></div>
      ))}
    </div>
  )
}

export default ParticleEffect
