// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
"use strict";

var ReasonReact = require("reason-react/src/ReasonReact.js");
var Base = require("./styled/Base");
var Label = require("./styled/Label");
var Touchable = require("./styled/Touchable");

function make(color, children) {
  return ReasonReact.wrapJsForReason(
    Label.default,
    {
      color: color,
    },
    children
  );
}

var Label$1 = /* module */ [/* make */ make];

function make$1(children) {
  return ReasonReact.wrapJsForReason(Base.default, {}, children);
}

var Base$1 = /* module */ [/* make */ make$1];

function make$2(onPress, activeOpacity, children) {
  return ReasonReact.wrapJsForReason(
    Touchable.default,
    {
      onPress: onPress,
      activeOpacity: activeOpacity,
    },
    children
  );
}

var Touchable$1 = /* module */ [/* make */ make$2];

var Styled = /* module */ [
  /* Label */ Label$1,
  /* Base */ Base$1,
  /* Touchable */ Touchable$1,
];

var component = ReasonReact.statelessComponent("SessionControl");

function make$3(onPress, label, color, _) {
  var newrecord = component.slice();
  newrecord[/* render */ 9] = function() {
    return ReasonReact.element(
      /* None */ 0,
      /* None */ 0,
      make$2(
        onPress,
        0.75,
        /* array */ [
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            make$1(
              /* array */ [
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  make(color, /* array */ [label])
                ),
              ]
            )
          ),
        ]
      )
    );
  };
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, function(jsProps) {
  return make$3(jsProps.onPress, jsProps.label, jsProps.color, /* array */ []);
});

exports.Styled = Styled;
exports.component = component;
exports.make = make$3;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* component Not a pure module */
