import { useContext, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import 'flowbite'; 
import './App.css';

import NavBarT from './components/NavBar/NavBarT';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import LogList from './components/LogList/LogList';
import * as logService from './services/logService';
import LogDetails from './components/LogDetails/LogDetails';
import LogForm from './components/LogForm/LogForm';

import { UserContext } from './contexts/UserContext';

const App = () => {
  const { user } = useContext(UserContext);

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchAllLogs = async () => {
      const logsData = await logService.index();
  
      // console log to verify
      console.log('logsData:', logsData);
    };
    if (user) fetchAllLogs();
  }, [user]);
  
  const navigate = useNavigate();

  const handleAddLog = async (logFormData) => {
    console.log('logFormData', logFormData);
    navigate('/logs');
  };

  const handleDeleteLog = async (logId) => {
    const deletedLog = await logService.deleteLog(logId);
    console.log('logId', logId);
    setLogs(logs.filter((log) => log._id !== deletedLog._id));
    navigate('/logs');
  };

  const handleUpdateLog = async (logId, logFormData) => {
    const updatedLog = await logService.update(logId, logFormData);
    setLogs(logs.map((log) => (logId === log._id ? updatedLog : log)));
    navigate(`/logs/${logId}`);
  };

  return (
    <>
      <NavBarT/>
      <div className="pt-20">
        <Routes>
          <Route path='/' element={user ? <Dashboard /> : <Landing />} />
          <Route path='/logs' element={<LogList logs={logs}/>} /> 
          <Route path='/logs/:logId' element={<LogDetails />} handleDeleteLog={handleDeleteLog} />
          <Route path='/logs/new' element={<LogForm />} handleAddLog={handleAddLog} />
          <Route path='/logs/:logId/edit' element={<LogForm />} handleUpdateLog={handleUpdateLog}/>
          {user ? (
          <>
            {/* Protected routes (available only to signed-in users) */}
            <Route path='/logs' element={<LogList logs={logs}/>} />
          </>
        ) : (
          <>
            {/* Non-user routes (available only to guests) */}
            <Route path='/sign-up' element={<SignUpForm />} />
            <Route path='/sign-in' element={<SignInForm />} />
          </>
        )}
        </Routes>
      </div>
    </>
  );
};

export default App;
