import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ccard = ({data}) => {
  return (
    <div>
    <div className='cd'>
    {data.map((item,index)=>(
     
  
 
    <Card style={{ width: '18rem' }} key={index}>
    <Card.Img variant="top" src={item.strMealThumb} />
    <Card.Body>
      <Card.Title>{item.strMeal}</Card.Title>
     
      <Button variant="primary">{item.idMeal} Submit</Button>
      
         
     
    </Card.Body>
  </Card>
   )
   )}
   </div>
   </div>
  )
}

export default Ccard