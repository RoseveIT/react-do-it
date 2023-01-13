import React from 'react';

import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                my posts
                <div>
                    new post
                </div>
                <div className='posts'>
                    postі
                    <Post/>
                    <Post/>
                </div>
            </div>
    );
};

export {MyPosts};