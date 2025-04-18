import Player from './components/Player'
import './App.css'

function App() {

  return (
    <main>
      <div id='game-container'>
        <ul id='players'>
          <Player name='Click edit' />
        </ul>
        <div className='description'>
          <ul>
            <li>Initially no player name is set, instead a text (Click Edit) is displayed.</li>
            <li>A new name can be set by clicking Edit button.</li>
            <li>After Typing the name in the box you can click away to set the typed name.</li>
            <li>Another name can be set by following the same above steps.</li>
          </ul>
          <div className='issue'>
            Bug!!
            <ul>
              <li>After setting a name, if the Edit button is clicked a new name can be set as we know.</li>
              <li>But if the name is kept blank and then we click away, current name is not set, instead initial 
                text (Click Edit) is displayed.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
