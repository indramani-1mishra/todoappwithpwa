
import { useDispatch, useSelector } from "react-redux";
import { setvalue } from "../../../redux/inputslice";

export default function Input({ type, placeholder, className,onchangehandler }) {
  const value = useSelector((state)=>state.input)
  const dispatch = useDispatch();

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={(e) =>  dispatch(setvalue(e.target.value))}
    />
  );
}
