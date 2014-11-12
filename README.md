Depends on jQuery and [enquire.js](http://wicky.nillia.ms/enquire.js/).

```
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