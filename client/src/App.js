import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Pornlist from './Pornlist'



function App() {
  const [ porn, setPorn ] = useState([]);
  const [currentUrl,setCurrentUrl] =useState(`http://localhost:4040/search?q=asian`);
  const [preview,setPreview]=useState()


  useEffect(() => {
    fetchAsianPorn();
  }, [currentUrl]);

  const fetchAsianPorn = async() => {
    await Axios({
      method: 'GET',
      url: currentUrl,
    }).then(res => {
      console.log(res)
      //console.log(res.data.map(p => p.title))
      setPorn(res.data.map(pornTitle => pornTitle.title))
      setPreview(res.data.map(pornPreview =>pornPreview.Preview))
    
      
    }).catch(err => {
      console.error(err);
    })
  }

  return (
          
          <Pornlist porn={porn} />
  );
}

export default App;
