import React, { Suspense, lazy } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, tagName } from '../actions';
import Loader from './Loader';
import '../Assets/css/UserPosts.css';
const Post = React.lazy(() => import('./Post'));

const UserPosts = () => {

    const dispatch = useDispatch();

    const getData = useSelector(state => state.posts.array);
    console.log(getData);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    const clickTag = value => {
        console.log(value);
        dispatch(tagName(value))
    }

    return (
        <section className="user-posts">
            <div className="wrapper">
                <div className='heading'>
                    <h2>Posts</h2>
                    <button onClick={() => dispatch(fetchPosts())}>All Posts</button>
                </div>
                <ul className="posts">
                    {getData.length === 0 ? <Loader /> : getData.map((element, key) => {
                        return (
                            <Suspense fallback={<div>Loading...</div>}>
                                <Post element={element} id={key} clicktag={value => clickTag(value)} />
                            </Suspense>                                
                        )
                    })}
                </ul>
            </div>
        </section>
    );
}

export default UserPosts;