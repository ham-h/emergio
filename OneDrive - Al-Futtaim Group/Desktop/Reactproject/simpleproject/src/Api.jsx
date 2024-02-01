import './App.css'
import'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"
import Ccard from './CCard';
import axios from 'axios'
const Api = () => {
    const[data,setData]=useState([]);
    const[searchQuery,setsearchQuery]=useState('');
    const[filterData,setFilteredData]=useState([]);
    const[pageSize,setpageSize]=useState(15);

    const fetchData=async()=>{
        try{

const response=await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
setData(response.data.meals)
        }
        catch(error){
            console.log('error fetching data:',error);
                }
    };
    useEffect(() => {
fetchData();
    
     
    }, [pageSize]);


    const handle=(e)=>{
        setsearchQuery(e.target.value);
    }
    const display=()=>{
      const filterData=data.filter((item)=>item.strMeal.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilteredData(filterData.slice(0,pageSize));
      console.log('search clicked');
    };
       
     
    const handleselect=(e)=>{
        setpageSize(parseInt(e.target.value,15));
        };
  return (
    <div className='main'>
     <div >
    <input style={{margin:"20px"}} type="text" placeholder="click on submit" value={searchQuery} onChange={handle}/>
    <button onClick={display}>submit</button>
    <select onChange={handleselect} value={pageSize}>
<option value='1'>1</option>
<option value='2'>
2
</option>
<option value='3'>3</option>
<option value='4'>4</option>
<option value='5'>5</option>
<option value='6'>6</option>
<option value='7'>7</option>
<option value='8'>8</option>
<option value='9'>9</option>
<option value='10'>10</option>
<option value='11'>11</option>
<option value='12'>12</option>
<option value='13'>13</option>
<option value='14'>14</option>
<option value='15'>15</option>

</select>
<Ccard data={filterData}/>
</div>
</div>
  )
}

export default Api