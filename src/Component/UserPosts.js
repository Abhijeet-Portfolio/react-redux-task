import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, tagName } from '../actions';
import LazyLoad from 'react-lazyload';
import Loader from './Loader';
import Post from './Post';
import '../Assets/css/UserPosts.css';

const UserPosts = () => {

    const [tags, settags] = useState(['All']);
    const dispatch = useDispatch();
    const getData = useSelector(state => state.posts.array);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    const clickTag = value => {
        dispatch(tagName(value));
        settags([...tags,(' > '+value)]);
    }
    
    const clearTags = () => {
        dispatch(fetchPosts());
        settags(['All']);
    }

    return (
        <section className="user-posts">
            <div className="wrapper">
                <div className='heading'>
                    <div>
                        <h2>Posts</h2>
                        <span>{tags.map(tag => tag)}</span>
                    </div>
                    <button onClick={() => clearTags()}>Clear</button>
                </div>
                <ul className="posts">
                    {getData.length === 0 ? <div className='loader-div'><Loader /></div> : getData.map((element, key) => {
                        return (
                            <LazyLoad key={key} placeholder={<Loader />}>
                                <Post element={element} id={key} clicktag={value => clickTag(value)} />
                            </LazyLoad>                                
                        )
                    })}
                </ul>
            </div>
        </section>
    );
}

export default UserPosts;