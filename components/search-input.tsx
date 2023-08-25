"use client"
import { Search } from 'lucide-react'
import qs from 'query-string'
import React, { ChangeEventHandler, useEffect, useState } from 'react'
import { Input } from './ui/input'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from './ui/button'


const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");
  const name = searchParams.get("name");
  const [value, setValue] = useState(name || "");


  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  }

  // useEffect(() => {
  // const query = {
  //   name: debounceValue,
  //   categoryId: categoryId
  // }

  // const url = qs.stringifyUrl({
  //   url: window.location.href,
  //   query,
  // },{ skipEmptyString: true, skipNull: true});

  // router.push(url);

  // }, [debounceValue,router,categoryId])


  return (

    <div className=' flex items-center justify-center gap-x-2 '>
      <Input
        onChange={onChange}
        value={value}
        placeholder='Search...' className='pl-3 bg-purple-200 text-black ' />
      <Button className=' bg-purple-200' size='sm'>
        <Search className=' h-4 w-4  text-black' />
      </Button>
    </div>


  )
}

export default SearchInput