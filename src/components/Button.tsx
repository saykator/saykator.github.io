import { ReactNode, ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode
}

export default function Button({ className = "", children, ...props }: ButtonProps) {
  return (
    <button
      className={`${className} select-none rounded px-3 py-1 flex gap-1 items-center self-center hover:outline-dashed outline-offset-2 outline-1 active:translate-y-0.5`}
      {...props}
    >
      {children}
    </button>
  )
}
