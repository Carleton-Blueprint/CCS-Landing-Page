import React from 'react'


const Form = () => {
  return (
    <div className='container'>
        <form name="contact" method="POST">
            <label>
                Name: 
                <input type='text' name='name' id='name' style={{border: '1px solid black'}} /> {/*temp styling added to see form*/}
            </label>
            <label>
                Phone Number: 
                <input type='text' name='phoneNumber' id='phoneNumber' style={{border: '1px solid black'}} />
            </label>
            <label>
                Email: 
                <input type='email' name='email' id='email' style={{border: '1px solid black'}} />
            </label>
            <label>
                Message: 
                <textarea name='message' id='message' rows="5" style={{border: '1px solid black'}}/>
            </label>
            <button type="submit" style={{border: '1px solid black'}}>Send Message</button>
        </form>
    </div>
  )
}

export default Form