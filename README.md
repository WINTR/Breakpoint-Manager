Simplify your Javascript breakpoints with a simple breakpoint definition and callback syntax

```
BreakpointManager = require "breakpoint-manager"

$(document).bind "breakpoint:match", (e, breakpoint) =>
  if breakpoint is "desktop"
    @onDesktop()
  else
    @onMobile()

breakpointManager = new BreakpointManager
  scope: $(document)
  breakpoints:
    mobile:
      min: null
      max: 799
    desktop:
      min: 800
      max: null
```
