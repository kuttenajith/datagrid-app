import React, { useState } from 'react';
import Datagrid from './components/Datagrid';
import './App.css';

const App = () => {
  const sampleData = [
    { name: 'smss.exe', device: 'Stark', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: 'Scheduled' },
    { name: 'netsh.exe', device: 'Targaryen', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'Available' },
    { name: 'uxtheme.dll', device: 'Lanniester', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll', status: 'Available' },
    { name: 'cryptbase.dll', device: 'Martell', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll', status: 'Scheduled' },
    { name: '7za.exe', device: 'Baratheon', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'Scheduled' },
  ];

  const [data, setData] = useState(sampleData);
  const [selected, setSelected] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(data.map((item) => item.name));
    } else {
      setSelected([]);
    }
  };

  const handleSelectRow = (name) => {
    setSelected((prevSelected) =>
      prevSelected.includes(name)
        ? prevSelected?.filter((item) => item !== name)
        : [...prevSelected, name]
    );
  };

  const isAllSelected = selected.length === data.length;
  const isPartialSelected = selected.length > 0 && !isAllSelected;

  const handleDownload = () => {
    const downloadedItems = data?.filter((item) => selected.includes(item.name));
    alert(`Downloaded Items:\n${downloadedItems.map((item) => `Name: ${item.name} Device: ${item.device} Path: ${item.path}`).join('\n')}`);
  };

  return (
    <div className="app-container">
      <h2>Datagrid</h2>
      <Datagrid
        data={data}
        selected={selected}
        onSelectAll={handleSelectAll}
        onSelectRow={handleSelectRow}
        isAllSelected={isAllSelected}
        isPartialSelected={isPartialSelected}
        onDownload={handleDownload}
      />
    </div>
  );
};

export default App;