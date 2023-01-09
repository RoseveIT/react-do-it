import React from 'react';

import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
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
                <div className='posts'>
                    post
                    <div className={s.item}>post1</div>
                    <div className={s.item}>post2</div>
                </div>
            </div>
        </div>
    );
};

export {Profile};