import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import cn from "clsx"

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex touch-none select-none items-center group",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-background">
      <SliderPrimitive.Range className="absolute h-full bg-[#6985C0] group-hover:bg-[#98AED5]" />
    </SliderPrimitive.Track>

    {/* <SliderPrimitive.Thumb className="hidden group-hover:block h-3 w-3 bg-white rounded-full border-2 border-primary bg-background ring-offset-background transition-colors outline-none   disabled:pointer-events-none disabled:opacity-50" /> */}
  </SliderPrimitive.Root>
))

Slider.displayName = SliderPrimitive.Root.displayName