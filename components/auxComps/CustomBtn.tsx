'use client'
import React from 'react'
import { Button } from '../ui/button'

const CustomBtn = ({onClickFun, addClass, title}: {
    onClickFun?: () => void,
    addClass: string,
    title: string
}) => {
  return (
    <Button
    onClick={onClickFun}
    className={`${addClass}`}
    >{title}</Button>
  )
}

export default CustomBtn