import React, { useState } from 'react';
import NavabarAdmin from '../AdminNavbar/NavbarAdmin';
import AdminLeftSidebar from '../AdminLeftsidebar/AdminLeftSidebar';
import AdminRightJobs from '../AdminRightSidebarJobs/AdminRightJobs';
import AdminLeftIcons from '../AdminLeftsidebar/AdminLeftIcons';
import AdminRightJobsReport from '../AdminRightSidebarReports/AdminRightJobsReport';

const Admindashboard = () => {
  const [expanded, setExpanded] = useState(false);
  const [tag, setTag] = useState(1); // Toggle state

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const changeToggle = (id) => {
    setTag(id);
  };
  const changeToggleIconCh = (id) => {
    setTag(id);
  };

  return (
    <div>
      <div>
        <NavabarAdmin clickevent={handleExpand} />
      </div>
      <div className='flex'>
        <div className={`${expanded ? 'w-[290px]' : 'w-[80px]'}`}>
          {expanded ? <AdminLeftSidebar tagId={tag}  changeToggle={changeToggle} /> : <AdminLeftIcons tagId={tag} changeToggleIcon={changeToggleIconCh}/>}
        </div>

        {/* Conditional Rendering of Right-Side Components */}
        {tag === 1 ? (
          <div className='bg-gray w-full p-8 h-[90vh]'>
            <AdminRightJobs />
          </div>
        ) : tag === 3 ? (
          <div className='bg-gray w-full p-8 h-[90vh]'>
            <AdminRightJobsReport />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Admindashboard;
