"use client"
import { Search } from 'lucide-react'
import qs from 'query-string'
import React, { ChangeEventHandler, useCallback, useEffect, useState } from 'react'
import { Input } from './ui/input'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from './ui/button'
import { useDebounce } from '@/hooks/use-debounce'
import axios from "axios"
import useStoreProducts from '@/hooks/use-products'


const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");
  const name = searchParams.get("name");
  const [value, setValue] = useState(name || "");
  const debounceValue = useDebounce<string>(value, 500)

  const addProduct = useStoreProducts();


  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  }


  const searchProduct = useCallback(async () => {
    const response = await axios.get(`https://dummyjson.com/products/search?q=${debounceValue}`);
    addProduct.addItem(response.data["products"]);
    return;
  }, [debounceValue])


  useEffect(() => {
    searchProduct();

  }, [searchProduct]);


  return (

    <div className=' relative'>
      <Search className='absolute h-4 w-4 top-3 right-4 text-muted-foreground' />
      <Input
        onChange={onChange}
        value={value}
        placeholder='Search...' className='pl-10 bg-white' />
    </div>


  )
}

export default SearchInput