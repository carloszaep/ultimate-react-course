'use client'
import { useState } from 'react';
import Button from '../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useRouter } from 'next/navigation';
import { useSelector } from "react-redux";

function CreateUser() {
  const [usernameToSet, setUsernameToSet] = useState('');
  const dispatch = useDispatch()
  const userName = useSelector(state => state.user.username)
  const router = useRouter()


  function handleSubmit(e) {
    e.preventDefault();

    if (!usernameToSet) return

    dispatch(updateName(usernameToSet))

    router.push(`/menu`)


  }

  if (userName) return (
    <div>
      <p className='mb-4 text-sm text-stone-600 md:text-base'>👋 Welcome! {userName}</p>
      <Button to='menu' type='primary'>Continue ordering</Button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit}>
      <p className='mb-4 text-sm text-stone-600 md:text-base'>👋 Welcome! Please start by telling us your name:</p>


      <input
        type="text"
        placeholder="Your full name"
        value={usernameToSet}
        onChange={(e) => setUsernameToSet(e.target.value)}
        className='input w-72 mb-8 text-center'
      />

      {usernameToSet !== '' && (
        <div>
          <Button type='primary'>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
