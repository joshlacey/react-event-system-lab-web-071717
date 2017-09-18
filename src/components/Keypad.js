// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

  something = () => {
    console.log('Entering password...')
  }

  render () {
    return (
      <form>
        <input type="password" onKeyUp={this.something}/>
      </form>
    )
  }
}

export default Keypad
