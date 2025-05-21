import { useEffect, useState } from "react"

export function useWindowSize(){
       const [windowSize , setWindowSize] = useState(
      {
        width:window.innerWidth,
        height:window.innerHeight
      }
    )
    // console.log(ThemeContext)
    // console.log(isDark)
    useEffect(()=>{
      window.addEventListener('resize',()=>{
        setWindowSize(
      {
        width:window.innerWidth,
        height:window.innerHeight
      }
        )
      })
      
      
    },[])
    return windowSize
}