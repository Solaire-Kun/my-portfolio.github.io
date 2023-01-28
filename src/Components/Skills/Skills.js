import React from 'react'

function Skills() {
    return (
        <div className="d-flex mx-auto flex-column mb-0">
            <section id="skills" className="w-75 shadow card black container p-2 my-3">
                <h2 className="font text-center title bg-gradient">Skills</h2> <br />
                <div className="card-body">
                    <img className="img-fluid mx-auto d-block pb-3" src={require('../../img/programming-languages.png')} alt="" width="500" />
                    <p>In my past experience, back in 2017 to 2019 I did some very little coding on my own in <code>CSS</code> for
                        personal reasons and use,
                        but in 2022 I discovered and decided to attend an online school course called <a
                            href="https://www.start2impact.it/"><mark>start2impact</mark></a>,
                        thanks to them and my big passion for Computers and technology I will learn more about<code> Web Development</code> <br />
                    </p>

                    <img className="img-fluid mx-auto d-block pb-3 pt-3" src={require('../../img/other-software.png')} alt="" width="500" />
                    <p>Aside from website development, I also have some experience with softwares such as: <br />
                        <b>Blender, Unity Engine and Photoshop.</b><br />
                        I used these programs as hobby and passion for games since 2020, this was for very personal use and games
                        purpose
                        as I still didn't attend any school for any of these softwares, I currently can only make very specific
                        things. <br />
                        I am not planning to attend any course at the moment or in the following years.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Skills