#########################################################
# Breakpoint Manager
# Author: matt@wintr.us @ WINTR
#
# This class will broadcast an event whenever a breakpoint
# is matched or unmatched. Depends on enquire.js and jQuery
#########################################################

$ = jQuery

class BreakpointManager
  # Breakpoint events will be triggered on this scope
  scope: null

  # Array of breakpoints objects, each with min/max properties
  # Example:
  #
  # mobile: 
  #   min: null
  #   max: 759
  # tablet:
  #   min: 760
  #   max: 1059
  # desktop:
  #   min: 1060
  #   max: null

  breakpoints: []

  constructor: (options) ->
    @scope = options.scope
    @breakpoints = options.breakpoints

    $.each @breakpoints, (breakpoint, boundries) =>

      if boundries.min is null
        query = "screen and (min-width:0px) and (max-width:#{boundries.max}px)"
      else if boundries.max is null
        query = "screen and (min-width:#{boundries.min}px)"
      else
        query = "screen and (min-width:#{boundries.min}px) and (max-width:#{boundries.max}px)"

      enquire.register(query,
        match: =>
          @scope.trigger("breakpoint:match", breakpoint)
        unmatch: =>
          @scope.trigger("breakpoint:unmatch", breakpoint)
      )

#--------------------------------------------------------

module.exports = BreakpointManager