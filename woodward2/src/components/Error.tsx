import { Link } from "react-router-dom"
import greenbg from "../assets/greenbg.jpg";

function Error() {
  return (
    <div className="w-[calc(100vw)] h-[calc(100vh)] flex flex-col justify-center items-center font-NBI text-dkkbrown"
    style={{ backgroundImage: `url(${greenbg})` }}>
        <p className="text-9xl">404 Error</p>
        <p className="text-2xl">The URL that you entered is wrong...</p>
        <p className="text-2xl">Try <Link className="underline" to="/">Home</Link></p>
    </div>
  )
}

export default Error