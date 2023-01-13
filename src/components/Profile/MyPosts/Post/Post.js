import React from 'react';

import s from './Post.module.css'

const Post = () => {
    return (<div>
            <div className={s.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWNIhpqqDtaFj16hHIqd_Hzaq5AmS-EdOxw&usqp=CAU" alt="avatar"/>
                post1
                <div><span>like</span></div>
                </div>

        </div>
    );
};

export {Post};