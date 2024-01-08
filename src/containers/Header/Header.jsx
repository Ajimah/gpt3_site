import React from 'react';
import './Header.css';
import people from '../../assets/people.png';
import Illustration from '../../assets/Illustration.png';

const Header = () => {
  return (
      <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Lets Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore facere odio alias, labore ut voluptas quibusdam officia illo eligendi! Consequatur voluptatem unde nostrum modi repellendus iusto numquam accusantium id hic?</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>
          <div className='gpt3__header-content__people'>
              <img src={people} alt='people'/>
              <p>1,600 people requested access  a visited in last 24hours.</p>
          </div>
        </div>
        <div className='gpt3__header-image'>
            <img src={Illustration} alt="Illustration"/>
          </div>
      </div>
  )
}

export default Header;