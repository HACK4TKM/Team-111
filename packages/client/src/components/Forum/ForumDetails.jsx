import React from 'react'
import { useUserContext } from '../../context/UserContext'

const Reply = ({comments, users, comment, left, setLeft}) => {
    const [reply, setReply] = React.useState('')
    const [added, setAddReply] = React.useState(false)
    const { addComment } = useUserContext()
    const handleAddReply = () => {
        setAddReply(true)
    }
    const handleReply = () => {
        addComment(id, comment.from, reply, localStorage.getItem('id'))
    }
    return (
        <div className={`ml-[${left}px]`}>
            {comments.filter(c => c.from == comment.id).map(r => 
                {
                    return (
                        <div key={r.id} className='my-3'>
                            <div className='flex items-center'>
                                <i class="fa-solid fa-user"></i>
                                <h1 className='ml-2 font-semibold'>{users.find(user => user._id == r.user_id)?.name}</h1>
                            </div>
                            <p className='mt-2 text-gray-500'>{r.comment}</p>
                            {added ? 
                                <div className='mt-10 flex'>
                                    <input type="text" onChange={e => setReply(e.target.value)} className='w-full px-3 py-1 rounded-[40px] border' placeholder='Write your reply...' />
                                    <button onClick={handleReply} className='ml-2 bg-[#53BE28] rounded-[50%] px-2'>
                                        <i class="fa-solid fa-paper-plane text-white"></i>
                                    </button>
                                </div>
                                :
                                    <p onClick={handleAddReply} className='text-blue-500 mt-2'>Reply</p>
                            }
                            <Reply left={left+20} setLeft={setLeft} comments={comments} users={users} comment={r} />
                        </div>
                    )
                }
            )}
        </div>
    )
}

const Comment = ({comment, comments, users}) => {
    const [left, setLeft] = React.useState(10)
    const [reply, setReply] = React.useState('')
    const [added, setAddReply] = React.useState(false)
    const { addComment } = useUserContext()
    const handleAddReply = () => {
        setAddReply(true)
    }
    const handleReply = () => {
        addComment(id, comment.from, reply, localStorage.getItem('id'))
    }
    if(comment.from == 0){
        return(
            <div key={comment.id} className='my-3'>
                <div className='flex items-center'>
                    <i class="fa-solid fa-user"></i>
                    <h1 className='ml-2 font-semibold'>{users.find(user => user._id == comment.user_id)?.name}</h1>
                </div>
                <p className='mt-2 text-gray-500'>{comment.comment}</p>
                {added ? 
                <div className='mt-10 flex'>
                    <input type="text" onChange={e => setReply(e.target.value)} className='w-full px-3 py-1 rounded-[40px] border' placeholder='Write your reply...' />
                    <button onClick={handleReply} className='ml-2 bg-[#53BE28] rounded-[50%] px-2'>
                        <i class="fa-solid fa-paper-plane text-white"></i>
                    </button>
                </div>
                :
                    <p onClick={handleAddReply} className='text-blue-500 mt-2'>Reply</p>
                }
                <Reply left={left} setLeft={setLeft} comments={comments} users={users} comment={comment} />
            </div>
        )
    }
}

const ForumDetails = ({ id, title, desc, comments }) => {
    const [comment, setComment] = React.useState()
    const { users, addComment } = useUserContext()
    const handleComment = () => {
        addComment(id, 0, comment, localStorage.getItem('id'))
    }
  return (
    <div className='px-5 py-5'>
        <h1 className='font-bold text-3xl'>{title}</h1>
        <p className='text-gray-500 my-5'>{desc}</p>
        <div className='flex items-center'>
            <i class="mr-2 fa-solid fa-comment mr-1"></i>
            <h1 className='text-zinc-500 font-semibold'>{comments.length > 1 ? `${comments.length} comments` : `${comments.length} comment`}</h1>
        </div>

        <div className='mt-10 flex'>
            <input type="text" onChange={e => setComment(e.target.value)} className='w-full px-3 py-1 rounded-[40px] border' placeholder='Write your comment...' />
            <button onClick={handleComment} className='ml-2 bg-[#53BE28] rounded-[50%] px-2'>
                <i class="fa-solid fa-paper-plane text-white"></i>
            </button>
        </div>

        <div className='my-5'>
            {users && comments.map(comment => 
            {
                return (
                    <Comment key={comment.id} comment={comment} comments={comments} users={users} />
                )
            }
            )}
        </div>
        
    </div>
  )
}

export default ForumDetails