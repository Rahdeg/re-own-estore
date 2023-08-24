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
      {/* <Search className='absolute h-4 w-4 top-3 left-4 text-muted-foreground' /> */}
      <Input
        onChange={onChange}
        value={value}
        placeholder='Search...' className='pl-3 bg-primary/10' />
      <Button variant='default' size='sm'>
        <Search className=' h-4 w-4  text-muted-foreground' />
      </Button>
    </div>


  )
}

export default SearchInput