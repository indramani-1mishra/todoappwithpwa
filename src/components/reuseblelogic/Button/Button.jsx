import React from 'react'

export default function Button({text,onclickHandler,classname}) {
  return (
    <>
      <button onClick={onclickHandler} className={classname}>{text}</button>
    </>
  )
}
