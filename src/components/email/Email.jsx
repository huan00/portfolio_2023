import React from 'react'
import './email.css'

const Email = () => {
  const handleClick = () => {
    setTimeout(() => {
      // setEmailModal((prev) => !prev)
    }, 100)
  }
  return (
    <div className="app__email">
      <form
        action="https://formsubmit.co/hello@huan-zeng.com"
        method="POST"
        target="__blank"
        onSubmit={handleClick}
      >
        <input
          type="text"
          name="myemail"
          placeholder="To: hello@huan-zeng.com"
          disabled
        />
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          type="text"
          name="message"
          placeholder="shoot me a message"
          rows={4}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Email
