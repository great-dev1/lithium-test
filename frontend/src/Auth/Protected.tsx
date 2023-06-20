import React, { FC } from 'react'
import { Navigate } from 'react-router-dom'

type Props = {
  children: JSX.Element
}
const Protected: FC<Props> = ({ children }) => {
  const token = localStorage.getItem("auth");
  if (!token) {
    return <Navigate to="/login" replace />
  }
  return children;
}
export default Protected