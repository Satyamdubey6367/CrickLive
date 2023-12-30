import React from 'react'
import './notfound.css'
const NotFound = () => {
  return (
    <div>
      <div class="text-center">
            <div class="error mx-auto" data-text="404">404</div>
            <p class="lead text-gray-800 mb-5">Api limit is Over</p>
            <p class="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
          </div>
    </div>
  )
}

export default NotFound
