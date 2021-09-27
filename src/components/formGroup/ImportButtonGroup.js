import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import ChessWebAPI from 'chess-web-api'

export default function ImportButtonGroup() {

    const [username, setUsername] = useState('')

    const handleUsernameChange = (e) => {
        const usernameInput = e.target.value;
        setUsername(usernameInput.trim())
    }

    const importFromChessCom = (e) => {
      e.preventDefault();

      const chessAPI = new ChessWebAPI();
      chessAPI.getPlayerStats(username).then(
        function (response) {
          console.log("Player Profile", response.body, username);
        },
        function (err) {
          console.error(err);
        }
      );
    }

    return (
      <div className='ml-3 fade-in'>
            <div className='import-container'>

              <Button 
                id='importButton' 
                disabled={username === ''}
                variant='dark' 
                onClick={importFromChessCom}>
                Import
              </Button>

              <Form.Control 
                value={username} 
                onChange={handleUsernameChange} 
                placeholder='Username' 
                type='text'
              ></Form.Control>

            </div>
            <div className='import-button-separator'> - or - </div>
      </div>
    );
}
