import { useState } from 'react'
import axios from 'axios'

const CreateSubForm = props => {
    const [subName, setSubName] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault()
        axios.post(`http://localhost:3001/subreddit/create`, {
            name: subName
        })
        setSubName('')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={subName} onChange={e => setSubName(e.target.value)} placeholder='Name of Subreddit' />
                <input type='submit' value='Create' />
            </form>
        </div>
    )
}

export default CreateSubForm