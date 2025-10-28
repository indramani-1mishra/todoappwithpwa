


export const inputdetails={type:"text",placeholder:"enter todo to save ",className:" flex-[3] px-3 py-2  rounded outline-none", }

export  const buttondetails ={text:"add todo",onclickHandler:(value,dispatch,addtodo,setnullvalue)=>{HandleClick(value,dispatch,addtodo,setnullvalue)},className:"flex-[1] px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"}



export const HandleClick = (value, dispatch, addtodo, setnullvalue) => {
  if (value.trim() === "") return alert("Please enter a todo!");
  
  dispatch(addtodo({ todo: value }));  
  dispatch(setnullvalue());             

}