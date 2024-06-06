import { Link } from 'react-router-dom';
export default function Navbar({search,setSearch}){
    return(
        <nav className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-24 w-full">
        <div className='flex flex-col items-start gap-3'> 
          <label className='text-2xl  font-bold'>Enter your Bookname</label>
          <input  
            className="w-full px-6 py-2 text-[18px] text-black border border-black rounded-lg"
            type="text" 
            placeholder='Enter your Bookname' 
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-center'><Link to="/self"><button className='bg-black text-white px-4 py-2 rounded-lg'>My Bookshelf</button></Link></div>
      </nav>
    )
}