import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Board from '../components/common/Board'


const HomePage = () => {
    return (
        <div className=' w-full h-screen flex'>
            <Sidebar />
            <Board />
        </div>
    )
}

export default HomePage