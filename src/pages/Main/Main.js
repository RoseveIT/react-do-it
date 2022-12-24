import React from 'react';
import './Main.css'

const Main = () => {
    return (
        <div className='wrapper'>
            <header className='header'>
                <img src="https://static.vecteezy.com/system/resources/previews/001/191/989/non_2x/circle-logo-png.png" alt="two green leaf"/>
            </header>
            <nav className='nav'>
                <div><a>Profile</a></div>
                <div><a>News</a></div>
                <div><a>Massages</a></div>
                <div><a>Musics</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className='content'>
                <div>
                    <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" alt="img"/>
                </div>
                <div>
                    ava + discr
                </div>
                <div>
                    my posts
                    <div>
                       new post
                    </div>
                    <div>
                        post
                        <div>post1</div>
                        <div>post2</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Main};