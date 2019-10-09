import Cards, { Card } from 'react-swipe-card'
import React, { useState, useEffect } from 'react';



// const data = ['Alexandre', 'Thomas', 'Lucien']

const Wrapper = (props) => {
  return (
	  <Cards onEnd={action('end')} className='master-root'>
        {props.map(item =>
          <Card
            onSwipeLeft={action('swipe left')}
            onSwipeRight={action('swipe right')}>
            <h2>{item}</h2>
          </Card>
        )}
      </Cards>
  )
}

export default Wrapper;
