import React from 'react'
//Next. js 13 understands when there is something loading
//it will display this loading component when loading occurs


export default function loading() {
  return (
    <div className='flex justify-center'>
      <img className='h-96' src="spinner.svg" alt="loading..." />
    </div>
  );
}
