import React from 'react'
import '../RandomCss/Web.css'

function Web() {
  return (
    <>
      <div className='WebContent'>
        <div className='WebImg'>
          <img src='https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=' alt='randomimg' />
        </div>
        <h1>Web Development</h1>
        <p>A front-end dev takes care of layout, design and interactivity using HTML, CSS and JavaScript.
          They take an idea from the drawing board and turn it into reality.</p>
        <p>The backend developer engineers what is going on behind the scenes. This is where the data is stored,
          and without this data, there would be no frontend. The backend of the web consists of the server that hosts the website,
          an application for running it and a database to contain the data.</p>
        <p>Full-stackers take care of both the front-end and the back-end, and need to know how the web works on all levels,
          in order to determine how the client- and server-sides will relate.
          Naturally working up to this level of expertise will take longer, as there is more to learn.</p>
      </div>

      <div className='belowContent'>
        <div className='backImg'>
          <img src='data:image/jpeg;base64,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'
            alt='background' />
        </div>

        <div className='webpng'>
          <img src='https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000' alt='webpng' />
        </div>
        <p>What would you like the app or website need to do for you. We are ready to complete your project and ship it on time for you, of course, within your budget. We are using numerous web development methodologies like Waterfall and Agile based on the needs of the assignment.</p>
      </div>

      <div className='contenWeb'>
        <div className='WebIMg'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ELpG6LIeO3tE6_qnMYxDKABeyZDSbdtnmQ3gVSCXod7t7cnt3sVWB6NnBrMwg6L4ck8&usqp=CAU' alt='another' />
        </div>
        <p>Becoming a web professional allows you to participate in absolutely any field, because the web has become universally present in our professional lives. You can be a web developer and specialize in anything from the art world to the automobile industry.</p>
      </div>
    </>
  )
}

export default Web
