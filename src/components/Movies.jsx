import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/movie';
const Movies = ()=>{



    const value = useSelector(state => state.movie);
const dispatch =useDispatch();

const buy = () => {dispatch(actions.addtoshopkart());
    
console.log('the action fired')
}
const pay = () => dispatch(actions.checkout());
    


    const [content, setcontent] = useState(null);


    useEffect(() => {
        // Körs när komponenten har renderats första gången
        // Här passar det att starta ett asyncroint API-anrop
       console.log('useEffect []');
       const apiUrl = 'http://www.omdbapi.com/?apikey=72d7fe9&s=taken&page=2';
       fetch(apiUrl)
       .then((response)=>{
           return response.json();
       })
       .then((data)=>{
        
           //console.log(data.Poster)
           console.log(data.totalResults)
          
           /*setcontent(<img src={data.Poster} 
            alt='a'></img>)*/
           setcontent(data.Search.map(movie=>
             
       
                     
                   <div className='three-columns'>
                   
                   <img src={movie.Poster} 
                    alt='a'></img>
                   
                           
                           
                           
                           
                           
                           <button className='readmorebuttons' onClick=
                           
                           {
                               //nextScreen(hund)
                               buy 
                             
                             }
                           
                           >Buy</button>
                      
                   
                   </div>
                   
                   
               
               ))
               
       


       })
       .catch((err)=>{
           console.log(err)
       })
      
   }, [])

   

  


   
   return (
    <div className='gallery'>
       <h1>The shopcart contains {value} item</h1>
     
       <button onClick={buy}>buy</button>
       <button onClick={pay}>check out</button>
        
        {content}
        </div>

   
)











}

export default Movies;