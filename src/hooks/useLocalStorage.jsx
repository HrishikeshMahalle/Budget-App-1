import { useEffect,useState } from "react"

export default function useLocalStorage(key, defaultValue) {
  const[value, setValue] = useState(()=>{
      /* getting value(more like default value) from localStorge */
      const jsonValue = localStorage.getItem(key)
      if(jsonValue != null) return JSON.parse(jsonValue)

      if(typeof defaultValue === "function"){
          return defaultValue()
      }else{
          return defaultValue
      }
  })
  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value))
  },[key, value])

  return [value,setValue]
}
