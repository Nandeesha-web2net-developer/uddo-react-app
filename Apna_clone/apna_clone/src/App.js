import React from 'react'
import './App.css'
import Home from './components/Pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Admin_login from './components/AdminPanel/Admin_login';
import Postjob from './components/AdminPanel/Postjob';
import JobDetails from './components/AdminPanel/JobDetails';
import JobDetailSection from './components/JobDetail_section/JobDetailSection';
import Admindashboard from './components/AdminPanel/AdminDashboard/Admindashboard';
import Jobsearch from './components/JobSearch/Jobsearch';
import FreshersJobList from './components/Pages/FreshersJobs/FreshersJobList';
import WorkfromhomeJobList from './components/Pages/WorkFromHome/WorkfromhomeJobList';
import PartTimeJobList from './components/Pages/PartTimeJobs/PartTimeJobList';
import CityJobsList from './components/Pages/CityJobs/CityJobsList';
import ScrollTop from './components/ScrollTopComp/ScrollTop';
import ContactUs from './components/Pages/ContactUs';
import Careers from './components/Pages/Careers';
import InternationalJobList from './components/Pages/International_jobs/InternationalJobList';
import DownLoadApp from './components/Pages/DownLoadApp';
import SearchResultJobsList from './components/Pages/HomeSeachResultsPage/SearchResultJobsList';
import SearchResultJobs from './components/Pages/HomeSeachResultsPage/SearchResultJobs';
import MultiLevelMainForm from './components/MultiLevelForm/MultiLevelMainForm';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/adminlogin' element={<Admin_login />} />
          <Route path='/postJob' element={<Postjob />} />
          <Route path='/jobDetails' element={<JobDetails />} />
          <Route path='/jobdetail/:id' element={<JobDetailSection />} />
          <Route path='/admindashboard' element={<Admindashboard />} />
          <Route path='/job-search' element={<Jobsearch />} />
          <Route path='/freshers-job-list' element={<FreshersJobList />} />
          <Route path='/workfromhome-job-list' element={<WorkfromhomeJobList />} />
          <Route path='/part-time-job-list' element={<PartTimeJobList />} />
          <Route path='/city-job-list' element={<CityJobsList />} />
          <Route path='/international-job-list' element={<InternationalJobList />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/download-uddo-app' element={<DownLoadApp />} />
          <Route path='/serch-results' element={<SearchResultJobs />} />
          <Route path='/search-filter-jobs-list' element={<SearchResultJobsList />} />
          <Route path='/posting-new-job' element={<MultiLevelMainForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;