import { useEffect, useState } from "react"

const useFatch = (url) => {

    const [data, setData] = useState([]);
    // const [loading, setLoading] = useRef('')
    // const [error, setError] = useRef('')


    useEffect(()=>{
      const  loadData = async() => {
            const res = await fetch(url)
            const x = await res.json()
            setData(x)
        }
        loadData()
    }, [url])

    return {data}
}

export default useFatch;
