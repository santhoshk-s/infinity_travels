import React from 'react'
import Carditem from './Carditem'
import './Cards.css'


function Cards(props) {
  return (
    <div className='cards'>
      <h1>{props.heading}</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Carditem 
            src="images/img-9.jpg"
            text="Explore the hidden Waterfall deep inside the Amazon jungle"
            label='Adventure'
            path='/services'
            />
            <Carditem 
            src="images/img-2.jpg"
            text="Travel through the islands of Bali in a Private Cruise"
            label='Luxury'
            path='/services'
            />
          </ul>
          <ul className="cards__items">
            <Carditem 
            src="images/img-3.jpg"
            text="Set sail in the Atlantic Visiting Uncharted Waters"
            label='Mystery'
            path='/services'
            />
            <Carditem 
            src="images/img-4.jpg"
            text="Experience FootBall op Top of the Himalayan Mountains"
            label='Adventure'
            path='/services'
            />
            <Carditem 
            src="images/img-8.jpg"
            text="Ride through the Sahara Desert on a guided camel tour"
            label='Adrenaline'
            path='/services'
            />
          </ul>
          <ul className="cards__items">
            <Carditem 
            src="images/img-10.jpg"
            text="While a unique site can help you stand out, your priority should be to create a user-friendly experience that enables visitors to plan their next trip."
            label='Mystery'
            path='/services'
            />
            <Carditem 
            src="images/img-11.jpg"
            text="But this straightforward navigation setup eliminates that issue and makes it easy for users to access the information they need"
            label='Adventure'
            path='/services'
            />
          </ul>
          <ul className="cards__items">
            <Carditem 
            src="images/img-12.jpg"
            text="The pair has made a name for themselves taking photos around the world, and they’ve created a nice compilation of their journeys."
            label='Mystery'
            path='/services'
            />
            <Carditem 
            src="images/img-13.jpg"
            text="Then, the homepage features an alphabetical list of city guides, from Aberdeen to Zurich."
            label='Adventure'
            path='/services'
            />
            <Carditem 
            src="images/img-14.jpg"
            text="After all, how difficult could it be to persuade visitors to check out beautiful beaches and hikes through the Amazon?"
            label='Adrenaline'
            path='/services'
            />
          </ul>
          <ul className="cards__items">
            <Carditem 
            src="images/img-15.jpg"
            text="By making the images so large, the site makes sure the first thing you see is a beautiful landscape."
            label='Mystery'
            path='/services'
            />
            <Carditem 
            src="images/img-16.jpg"
            text="And theres tons of example travel sites that we can use for inspiration. Lets get started."
            label='Adventure'
            path='/services'
            />
          </ul>
          <ul className="cards__items">
            <Carditem 
            src="images/img-17.jpg"
            text="Guides to arts and culture, including museums, theaters, and other attractions"
            label='Mystery'
            path='/services'
            />
            <Carditem 
            src="images/img-18.jpg"
            text="The design elements you need depend on the type of site you’re running."
            label='Adventure'
            path='/services'
            />
            <Carditem 
            src="images/img-19.jpg"
            text="Not all travel sites tick all of these boxes, but the ones that do stand out from all the rest."
            label='Adrenaline'
            path='/services'
            />
          </ul>
          <ul className="cards__items">
            <Carditem 
            src="images/img-22.jpg"
            text="Once a visitor is convinced that they need to see the sights in the photos for themselves, it should be easy for them to plan their trip."
            label='Mystery'
            path='/services'
            />
            <Carditem 
            src="images/img-23.jpg"
            text="It can make or break a traveler’s decision to take a certain tour, stay at a certain hotel, or even visit a city or country altogether."
            label='Adventure'
            path='/services'
            />
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Cards
