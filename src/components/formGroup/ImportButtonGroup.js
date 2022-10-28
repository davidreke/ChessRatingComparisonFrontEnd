import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ChessWebAPI from 'chess-web-api'

export default function ImportButtonGroup({importedPlayerStats}) {

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
          toast.success('Import successful')
          importedPlayerStats(response.body);
        },
        function (err) {
          if (err.statusCode === 404) {
            toast.error(`Could not find name ${username}`)
          } else {
            toast.error('Could not import stats')
          }
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
            <ToastContainer 
              closeOnClick
            />
      </div>
    );
}
