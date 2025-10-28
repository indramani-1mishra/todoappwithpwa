
import { addtodo, removeTodo } from "../../redux/todoslice";
import { buttondetails, inputdetails } from "../helpercode/helpercode";
import Button from "../reuseblelogic/Button/Button";
import Input from "../reuseblelogic/InputBox/Input";
import { useDispatch, useSelector } from "react-redux";
import Showtodo from "../reuseblelogic/showtodo/Showtodo";
import Useshowtodo from "../../customhook/useshowtodo";
import { setnullvalue } from "../../redux/inputslice";

export default function TodoApp() {
   const inputvalue = useSelector((state)=>state.input);
   const dispatch =useDispatch();
   const todos = Useshowtodo();
   
  return (
  <div className="w-full md:flex flex-col items-center md:h-[100vh] border border-gray-300">
  <div  className="flex justify-around items-center w-full p-1 border border-gray-300 rounded-lg shadow-sm md:w-[70%] md:mt-4">
    <Input type={inputdetails?.type} placeholder={inputdetails.placeholder} className={inputdetails.className}/>
   <Button
  text={buttondetails.text}
  onclickHandler={() =>
    buttondetails.onclickHandler(inputvalue, dispatch, addtodo,setnullvalue)
  }
  classname={buttondetails.className}
/>

  </div>
  <div className="md:w-[70%]">
    <Showtodo todos={todos} dispatch={dispatch} removeTodo={removeTodo}/>
  </div>
  </div>
  )
}
