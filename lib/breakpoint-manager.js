var BreakpointManager, enquire,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

enquire = require("enquire.js");

BreakpointManager = (function() {
  BreakpointManager.prototype.scope = null;

  BreakpointManager.prototype.breakpoints = [];

  function BreakpointManager(options) {
    this.register = __bind(this.register, this);
    var boundaries, breakpoint, _ref;
    this.scope = options.scope;
    this.breakpoints = options.breakpoints;
    _ref = this.breakpoints;
    for (breakpoint in _ref) {
      boundaries = _ref[breakpoint];
      this.register(breakpoint, boundaries);
    }
  }

  BreakpointManager.prototype.register = function(breakpoint, boundaries) {
    var query;
    if (boundaries.min === null) {
      query = "screen and (min-width:0px) and (max-width:" + boundaries.max + "px)";
    } else if (boundaries.max === null) {
      query = "screen and (min-width:" + boundaries.min + "px)";
    } else {
      query = "screen and (min-width:" + boundaries.min + "px) and (max-width:" + boundaries.max + "px)";
    }
    return enquire.register(query, {
      match: (function(_this) {
        return function() {
          return _this.scope.trigger("breakpoint:match", breakpoint);
        };
      })(this),
      unmatch: (function(_this) {
        return function() {
          return _this.scope.trigger("breakpoint:unmatch", breakpoint);
        };
      })(this)
    });
  };

  return BreakpointManager;

})();

module.exports = BreakpointManager;
