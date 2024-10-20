import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import ClassList from './components/ClassList';


const App = () => {
  const [activePage, setActivePage] = useState('users');

  useEffect(() => {
    // Initialize LayUI components
    if (window.layui) {
      window.layui.use('element', function () {
        const element = window.layui.element;
        // Any additional configuration if needed
      });
    }
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'users':
        return <UserList />;
      case 'classes':
        return <ClassList />;
      default:
        return <UserList />;
    }
  };

  return (
    <div className="layui-layout layui-layout-admin">
      <Navbar setActivePage={setActivePage} />

      <div className="layui-body">
        <div style={{ padding: '15px' }}>{renderPage()}</div>
      </div>
    </div>
  );
};

export default App;
