import React from 'react'

function Home() {
    return (
        <div className="text-center mx-auto flex-column mb-0">
            <main id="home" className="pt-4 home">
                <img src={require('../../img/pfp.jpg')} alt="" className="rounded-circle shadow-m black img-fluid img-thumbnail" height="200px" width="200px" />
                <h1 className="font pt-2">Hello, I am Luca Giuseppe Vinciguerra</h1>
                <p className="lead">You can simply call me <b>Luca</b>, <br />
                    im a <code>Junior Full Stack Web Developer</code></p>
            </main>
            <a className="btn btn-primary bg-gradient btn-lg mx-2 m-auto" href="/about" role="button">About Me</a>
            <a className="btn btn-primary bg-gradient btn-lg mx-2 m-auto" href="/skills" role="button">My Skills</a>
            <a className="btn btn-primary bg-gradient btn-lg mx-2 m-auto" href="/contact" role="button">Contact Me</a>
        </div>
    )
}

export default Home