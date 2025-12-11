import { cn } from '@/lib/utils'
import React from 'react'
export type SpacingYProps = {
  size?: 'sm' | 'md' | 'lg'
}

function SpacingY( { size = "md"}) {
  return (
    <div className={cn({
      "h-8 lg:h-16": size === "sm",
      "h-16 lg:h-32": size === "md",
      "h-24 lg:h-48": size === "lg",
    })}></div>
  )
}

export default SpacingY