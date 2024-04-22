import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseFetch = (url) => {
    const [Data, setData] = useState()
  useEffect(() => {
    axios.get(url).then((res)=>{
        setData(res)
    })
    
  }, [url])
  
   return {Data}
}

export default UseFetch
