import React from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

type ButtonVariant = 'default' | 'cta' | 'inverse'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[`button--${variant}`],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button