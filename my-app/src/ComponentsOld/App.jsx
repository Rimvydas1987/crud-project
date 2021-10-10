import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Post from './Post';
import NewPost from './NewPost';


function App() {

const [posts, setPosts] = useState([]);
const [postsUpdateTime, setPostsUpdateTime] = useState(Date.now());
const [open, setOpen] = useState(0);

    useEffect(() => {
    axios.get('http://localhost:3003/posts')
        .then(function (response) {
            setPosts(response.data);

        })},[postsUpdateTime])

    const doDelete = id => {
        axios.delete('http://localhost:3003/posts/'+id) 
          .then(function (response) {
            setPostsUpdateTime(Date.now)
          })
/*           .catch(function (error) {
            console.log(error);
          }); */
    }
    const doAdd = (data) => {
        axios.post('http://localhost:3003/posts/', data) 
        .then(function (response) {

          setPostsUpdateTime(Date.now)
        })
/*         .catch(function (error) {
          console.log(error);
        }); */
    }
    const openModal = (id) => {
        setOpen(id);
    }

    const closeModal = () => {
        setOpen(0);
    }

    const crud = {
        delete: doDelete,
        close: closeModal
    }
    

    return (
        <div>
            <div className="new-posts-container">
                <NewPost add={doAdd}/>
            </div>
            <div className="posts-container">
                {posts.map((post)=>(<Post key={post.id} data={post} crud={crud}></Post>))}
            </div>
        </div>
    );
}
    
export default App;

