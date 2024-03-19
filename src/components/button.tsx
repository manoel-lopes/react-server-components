'use client'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

// Custom Button Component
export function Button({ className, ...rest }: ButtonProps) {
  return <button className={className} {...rest} />
}
