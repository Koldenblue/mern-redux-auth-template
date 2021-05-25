import React from 'react';
import ReactLoading from "react-loading";

export default function Loading() {

  return (
    <section className='loading-component'>
      <div className='screen-cover'></div>
      <div className='loading'>
        <div className='loading-bottom'>
          <div className='loading-bars'>
            <ReactLoading color="rgb(180, 180, 180)" height={200} width={200} type="cubes" />
          </div>
        </div>
      </div>
    </section>
  )
}