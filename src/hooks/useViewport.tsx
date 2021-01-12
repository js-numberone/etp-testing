import {useState, useEffect} from 'react'
// import {useContext} from 'react'
// import {viewportContext} from '../context/viewport-provider'

// interface IViewport {
//     // width: number;
//     // height:number;
//     bp: boolean
// }

// const useViewport = () => {
// //   const { width, height } = useContext<IViewport>(viewportContext);
// //   return { width, height };
//     const { bp } = useContext<IViewport>(viewportContext);
//     return { bp };
// };

const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    // Return the width so we can use it in our components
    return { width };
  }

export default useViewport