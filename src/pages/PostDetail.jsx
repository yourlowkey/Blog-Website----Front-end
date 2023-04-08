import React from 'react'
import { Categories,PostContent } from '../components'
import { useEffect,useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
const PostDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [post,setPost]= useState([])
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8080/posts/slug/${params.slug}`)
      .then((res) => {
        if (res.data.post[0]) {
          setPost({
            id: res.data.post[0]._id,
            title: res.data.post[0].title,
            content: res.data.post[0].content
          });
          setIsLoading(false);
        }else {
          navigate('/notFound');
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [setPost]);
  return (
    <>
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostContent post={post}></PostContent>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default PostDetail