import './App.css'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer } from 'react';




const initialvalue = {
  get: '',
  got: []
}
const TYPE = 'type'
const PLY = 'play'
const DEL = 'dele'


const reducer = (state, action) => {

  let arr
  switch (action.case) {

    case 'type':
      arr = {
        ...state,
        get: action.payload
      }
      break

    case 'play':
      arr = {
        ...state,
        got: [...state.got, action.payload]
      }
      break

    case 'dele':
     const arr3=action.arr2.filter((x,i)=>{ return i!=action.payload})

      arr={
        ...state,
        got:arr3
        }


       break;



      









    default: console.log("invalid")
      break
  }


  return arr



}






function App() {
  const [state, dispatch] = useReducer(reducer, initialvalue)
  const { get, got } = state




  const type = (payload) => {
    return {
      case: TYPE,
      payload
    }
  }

  const ooo = (payload) => {
    return {
      case: PLY,
      payload


    }
  }
  const del = (payload) => {
    return {
      case: DEL,
      arr2: got,
      payload
      



    }
  


  }

  const click = () => {
    dispatch(ooo(get))
    dispatch(type(''))

  }


  const typing = (event) => {
    dispatch(type(event.target.value));

  }







  return (

    <div>
      <h1>TO DO LIST</h1>
      <br />

      <input type="text" name="" value={get} id="inp" onChange={typing} ></input>
      &nbsp;
      <Button variant="primary" onClick={click} >ADD TO DO</Button> <br />

      {got.map((x, i) => <div className='s'><h3>{x} </h3> <button onClick={()=>dispatch(del(i))}>delete</button></div>)}
    </div>


  )

}

export default App
