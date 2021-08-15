import React, { useState,useEffect} from 'react';
import 'antd/dist/antd.css';
import {  Table, Input, Card} from 'antd';

function App() {
	const columns = [
		{
		  title: 'সিরিয়াল',
		  dataIndex: 'সিরিয়াল',
		  key: 'সিরিয়াল',
		  render: text => <a>{text}</a>
		},
		{
		  title: 'অ্যাকাউন্ট নং',
		  dataIndex: 'অ্যাকাউন্ট নং',
		  key: 'অ্যাকাউন্ট নং',
		},
		{
			title: 'ছবি',
			dataIndex: 'ছবি',
			key: 'ছবি',
		  },
     {
        title: 'গ্রুপ',
        dataIndex: 'গ্রুপ',
        key: 'গ্রুপ',
    },
    {
		  title:'ফোন' ,
		  dataIndex: 'ফোন',
		  key: 'ফোন',
		},
    {
      title: 'বর্তমান ঠিকানা',
      dataIndex: 'বর্তমান ঠিকানা',
      key: 'বর্তমান ঠিকানা',
    },
    {
      title: 'জয়েন তারিখ',
      dataIndex: 'জয়েন তারিখ',
      key: 'জয়েন তারিখ',
    },
    {
      title: 'স্ট্যাটাস',
      dataIndex: 'স্ট্যাটাস',
      key: 'স্ট্যাটাস',
    },
		{
		  title: 'অ্যাকশন',
		  key: 'অ্যাকশন',
      dataIndex: 'অ্যাকশন',
	 
    }
		
	
	  ];

    
    const [data, setData] = useState();
	  useEffect(() => {
		  setData()
	  }, []);

	  function onChangeHandler(event) {
		  let text = String(event.target.value).toLowerCase();

		  if (text === "") {
			  setData();
		  } else {
			  const filteredData = (
				  (x) => String(x.name).toLowerCase().indexOf(text) > -1
			  );
			  setData(filteredData);
		  }
	  }
	 
		  
	  

	 

	  return (
		<div className="App">
		<Card title="সদস্য তালিকা">
		<Input onChange={onChangeHandler} placeholoder="Search" />
				<Table dataSource={data} columns={columns} />
		
				</Card>
		</div>
	  
	);
};
	

	 

	  
		
	  


export default App;