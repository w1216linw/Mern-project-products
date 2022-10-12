import { useNavContext } from '../contexts/navContext';
import { BsArrowsAngleContract } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {

  const { isSidebarOpen, closeSidebar } = useNavContext();

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show' : 'sidebar'}`}>
      <div className={`${isSidebarOpen ? 'sidebar-container show' : 'sidebar-container'}`}>
        <div className='sb-c-header'>
          <h3>Hello, User</h3>
          <button className='close-btn sb-btn' onClick={closeSidebar}>
            <BsArrowsAngleContract />
          </button>
        </div>
        <div className='sb-links-container'>
          <ul className="sb-links">
            <li><Link to='item/create' className="sb-link" onClick={closeSidebar}>List a new item</Link></li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;