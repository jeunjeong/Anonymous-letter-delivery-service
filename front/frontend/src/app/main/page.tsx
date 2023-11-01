'use client'
import React from 'react'
import Three from '../../component/Three/three'
import Three2 from '../../component/Three/three2'

const Main: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="absolute z-10">
          <div className="flex items-center justify-center pt-20 text-4xl text-white">
            18:00
          </div>
        </div>
      </div>
      <Three2 style={{ position: 'absolute', width: '100%', height: '100%' }} />
    </div>
  )
}

export default Main