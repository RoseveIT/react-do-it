import React from 'react';

import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" alt="img"/>
            </div>
            <div>
                ava + discr
            </div>
            <MyPosts/>
        </div>
    );
};

export {Profile};