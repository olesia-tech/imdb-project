'use client'
import { useRouter } from 'next/navigation';
//when having a hooks its a client-side rendering
import { useState } from 'react'


export default function SearchBox() {
const [search, setSearch] = useState(''); 
const router = useRouter();

function handleSubmit(e) {
  e.preventDefault();
  if(!search) return;
  // Navigate to the /search/[search] route using Next.js router
  // Redirects the user to the URL corresponding to the movie
  router.push(`/search/${search}`);
}

  return (
    <form 
    onSubmit={handleSubmit}
    className='flex max-w-6xl mx-auto justify-between items-center px-5'>
      <input type='text'
       value={search}
       onChange={(e) => setSearch(e.target.value)}
       placeholder='Search keywords...'
       className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1'
       />
      <button
      disabled={!search}
      type='submit'
      className='text-amber-600 disabled:text-gray-400'
      >
      Search
      </button>
    </form>
  );
}
