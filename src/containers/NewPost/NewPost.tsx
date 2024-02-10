import {useParams} from 'react-router-dom';

const NewPost = () => {
  const params = useParams();

  console.log(params.id);

  return (
    <div>
      {params.id ? 'Edit Post' : 'New Post'}
    </div>
  );
};

export default NewPost;