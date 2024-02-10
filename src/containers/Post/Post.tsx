import {Link, useParams} from 'react-router-dom';
import {useCallback, useEffect, useState} from 'react';
import {ApiPost} from '../../types';
import axiosApi from '../../axiosApi';
import Spinner from '../../components/Spinner/Spinner';
import {format} from 'date-fns';

const Post = () => {
  const params = useParams();

  const [post, setPost] = useState<ApiPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPost = useCallback(async () => {
    setIsLoading(true);
    const response = await axiosApi.get<ApiPost | null>('/posts/' + params.id + '.json');
    setPost(response.data);
    setIsLoading(false);
  }, [params.id])

  useEffect(() => {
    void fetchPost();
  }, [fetchPost]);

  let postArea = <Spinner/>;

  if (!isLoading && post) {
    postArea = (
      <div className='mt-5'>
        <span className="text-muted date">Created on: {format(post.createdAt, 'dd.MM.yyyy HH:mm')}</span>
        <h1>{post.title}</h1>
        <article>
          {post.description};
        </article>
        <div className='mt-3 '>
          <button className='btn btn-danger'>Delete</button>
          <Link to={'/posts/' + params.id + '/edit'} className='btn btn-success'>Edit</Link>
        </div>
      </div>
    )
  } else if (!isLoading && !post) {
    postArea = (
      <h1>Not Found</h1>
    );
  }

  return postArea;
}

export default Post;