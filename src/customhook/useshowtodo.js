import  { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export default function Useshowtodo() {
    const todoValue = useSelector((state)=>state.todo);
    const [todos,settodos]=useState([]);
     useEffect(()=>{
        settodos(todoValue)
     },[todoValue])
  return todos;
}
