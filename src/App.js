import './App.css';
import { useState } from 'react'

function App() {

  const [one, newOne] = useState(false)
  const [two, newTwo] = useState(false)
  const [three, newThree] = useState(false)
  const [four, newFour] = useState(false)






  function clicked(name) {
    if (name + 's' === 'ones') {
      if (one === true) {
        document.getElementById(name + "sText").style.visibility = 'hidden'
        newOne(false)
      }
      else {
        document.getElementById(name + "sText").style.visibility = 'visible'

        newOne(true)

      }
    }

    if (name + 's' === 'twos') {
      if (two === true) {
        document.getElementById(name + "sText").style.visibility = 'hidden'
        newTwo(false)
      }
      else {
        document.getElementById(name + "sText").style.visibility = 'visible'
        newTwo(true)
      }
    }

    if (name + 's' === 'threes') {
      if (three === true) {
        document.getElementById(name + "sText").style.visibility = 'hidden'
        newThree(false)
      }
      else {
        document.getElementById(name + "sText").style.visibility = 'visible'
        newThree(true)
      }
    }

    if (name + 's' === 'fours') {
      if (four === true) {
        document.getElementById(name + "sText").style.visibility = 'hidden'
        newFour(false)
      }
      else {
        document.getElementById(name + "sText").style.visibility = 'visible'
        newFour(true)
      }
    }



  }


  return (
    <div className="App">
      <div id="header">
        <div className='navBar'>
          <a href='#nice'>Home</a>
        </div>
      </div>
      <div id="container">
        <div id='nice' className='test'>
          <div className='order'>
            <div className='person'>
              <div id='one' className='content'>
                <button id='ones' onClick={() => clicked('one')} ></button>
                <div className='textz' id='onesText'>
                  <h1> {"\t"} Kanye</h1>
                  <h2> {"\t"}  All Falls Down</h2>
                  <p>
                    It seems we living the american dream {'\n'}
                    But the people highest up got the lowest self esteem {'\n'}
                    The prettiest people do the ugliest things {'\n'}
                    For the road to riches and diamond rings {'\n'}
                    We shine because they hate us, floss cause they degrade us {'\n'}
                    We trying to buy back our 40 acres {'\n'}
                    And for that paper, look how low we a'stoop {'\n'}
                    Even if you in a Benz, you still a ni**a in a coop/coupe {'\n'}
                    {'\n'}
                    {'\n'}

                    <br></br>
                  </p>
                  <h2>{"\t"} Power</h2>
                  <p>
                    Now I embody every characteristic of the egotistic {'\n'}
                    He knows he so f*ckin' gifted {'\n'}
                    I just needed time alone, with my own thoughts {'\n'}
                    Got treasures in my mind but couldn't open up my own vault {'\n'}
                    My childlike creativity, purity and honesty {'\n'}
                    Is honestly being crowded by these grown thoughts {'\n'}
                    Reality is catching up with me {'\n'}
                    Taking my inner child, I'm fighting for custody {'\n'}
                    With these responsibilities that they entrusted me {'\n'}

                  </p>
                </div>
              </div>
            </div>

            <div className='person'>
              <div id='two' className='content'>
                <button id='twos' onClick={() => clicked('two')} ></button>
                <div className='textz' id='twosText'>
                  <h1> {"\t"} Kid Cudi</h1>
                  <h2> {"\t"}  Enter Galatic</h2>
                  <p>
                    I know it's easy to imagine, {"\n"}
                    But it's easier to just do, {"\n"}
                    See, if you can't do what you imagine, {"\n"}
                    Then what is imagination to you? {"\n"}
                    Just a waste of space in your brain, {"\n"}
                    To take the place of hate, {"\n"}
                    Or things all the same, {"\n"}
                    Tell me your secrets {"\n"}
                    The things that make you tick, {"\n"}
                    I like it when you talk {"\n"}
                    Because your voice is angelesque (aye)
                    <br></br>
                  </p>
                  <h2>{"\t"} Soundtrack 2 My Life</h2>
                  <p>
                    Or even explain the troubles that haunted my mom{"\n"}
                    On Christmas time, my mom Christmas grind{"\n"}
                    Got me most of what I wanted, how'd you do it mom, huh?{"\n"}
                    She copped the toys I would play with in my room by myself, why he by himself?{"\n"}
                    He got two older brothers, one hood, one good{"\n"}
                    An independent older sister got me fly when she could{"\n"}
                    But they all didn't see,{"\n"}
                    The little bit of sadness in me, Scotty{"\n"}
                  </p>
                </div>
              </div>
            </div>

            <div className='person'>
              <div id='three' className='content'>
                <button id='threes' onClick={() => clicked('three')} ></button>
                <div className='textz' id='threesText'>
                  <h1> {"\t"} J. Cole</h1>
                  <h2> {"\t"}  Love Yourz</h2>
                  <p>
                    It's beauty in the struggle, ugliness in the success{'\n'}
                    Hear my words or listen to my signal of distress{'\n'}
                    I grew up in the city and know sometimes we had less{'\n'}
                    Compared to some of my ni**as down the block, man, we were blessed{'\n'}
                    And life can't be no fairytale, no once upon a time{'\n'}
                    But I be goddamned if a ni**a don't be tryin'{'\n'}
                    On the road to riches, listen, this is what you'll find{'\n'}
                    The good news is, ni**a, you came a long way{'\n'}
                    The bad news is, ni**a, you went the wrong way{'\n'}
                    <br></br>
                  </p>
                  <h2>{"\t"}  Window Pain</h2>
                  <p>
                    I put my hand to the sky, I sing{'\n'}
                    Grateful for the blessings you bring{'\n'}
                    Thank you for the ones I love{'\n'}
                    Forgive me for the times I was{'\n'}
                    Down and confused, I know{'\n'}
                    What I reap is what I will sow{'\n'}
                    Once again I find myself{'\n'}
                    Back with you from my hell{'\n'}
                  </p>
                </div>
              </div>
            </div>

            <div className='person'>
              <div id='four' className='content'>
                <button id='fours' onClick={() => clicked('four')} ></button>
                <div className='textz' id='foursText'>
                  <h1> {"\t"}A$AP Rocky</h1>
                  <h2> {"\t"}  Pharsyde
                  </h2>
                  <p>
                    My ears are ringing, my palms are shaking, my heart is racing {'\n'}
                    Somebody's mama's heart is aching, can't take it, partly fainted{'\n'}
                    Found these body parts in awkward places, like apartments, basements{'\n'}
                    Garbage vacant, lots, garages, spaces, Harlem's far too spacious{'\n'}
                    Sometimes I wish I could get away and charter spaceships{'\n'}
                    To get away from my inhuman race with hearts of Satans{'\n'}
                    Took off my Mason Martin's, lay on back like Martha Mason{'\n'}
                    Smoke away my eye and lung 'til later die at 71{'\n'}
                    {'\n'}
                    {'\n'}
                  </p>
                  <h2>{"\t"}  Power</h2>
                  <p>
                    Gentrification split the nation that I once was raised in {'\n'}
                    I don't recall no friendly neighbors face on my upraising{'\n'}
                    Back in my younger days or razor blades with gangs who bang and never stood a chance{'\n'}
                    Some boys don't dance, but left 'em Harlem shaking{'\n'}
                    On the pavement{'\n'}
                    And my generation fucked, and my society{'\n'}
                    Very trippy pages in my diary{'\n'}
                    It's the irony how LSD inspired me to reach the high in me{'\n'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
