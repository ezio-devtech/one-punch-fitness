// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
"use strict";

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Timer = require("./components/Timer/Timer.bs.js");
var Assets = require("Assets");
var Colors = require("../../config/Colors.bs.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var ActionButton = require("./components/ActionButton/ActionButton.bs.js");
var SessionControl = require("./components/SessionControl/SessionControl.bs.js");
var Style$BsReactNative = require("bs-react-native/src/style.js");
var ScrollView$BsReactNative = require("bs-react-native/src/components/scrollView.js");
var Image = require("./components/styled/Image");
var SetReps = require("./components/styled/SetReps");
var SetType = require("./components/styled/SetType");
var Progress = require("./components/styled/Progress");
var Container = require("./components/styled/Container");
var Background = require("./components/styled/Background");
var Group = require("./components/SessionControl/styled/Group");

function make(children) {
  return ReasonReact.wrapJsForReason(Background.default, {}, children);
}

var Background$1 = /* module */ [/* make */ make];

function make$1(children) {
  return ReasonReact.wrapJsForReason(Container.default, {}, children);
}

var Container$1 = /* module */ [/* make */ make$1];

function make$2(children) {
  return ReasonReact.wrapJsForReason(Progress.default, {}, children);
}

var Progress$1 = /* module */ [/* make */ make$2];

function make$3(children) {
  return ReasonReact.wrapJsForReason(SetType.default, {}, children);
}

var SetType$1 = /* module */ [/* make */ make$3];

function make$4(children) {
  return ReasonReact.wrapJsForReason(SetReps.default, {}, children);
}

var SetReps$1 = /* module */ [/* make */ make$4];

function make$5(children) {
  return ReasonReact.wrapJsForReason(Group.default, {}, children);
}

var SessionControlGroup = /* module */ [/* make */ make$5];

function make$6(source, resizeMode, children) {
  return ReasonReact.wrapJsForReason(
    Image.default,
    {
      source: source,
      resizeMode: resizeMode,
    },
    children
  );
}

var Image$1 = /* module */ [/* make */ make$6];

var Styled = /* module */ [
  /* Background */ Background$1,
  /* Container */ Container$1,
  /* Progress */ Progress$1,
  /* SetType */ SetType$1,
  /* SetReps */ SetReps$1,
  /* SessionControlGroup */ SessionControlGroup,
  /* Image */ Image$1,
];

var transitionLayout = /* int array */ [
  /* Image */ 0,
  /* Progress */ 1,
  /* SetInfo */ 2,
];

var sessionLayout = /* int array */ [
  /* SetInfo */ 2,
  /* Timer */ 4,
  /* Progress */ 1,
  /* SessionControls */ 3,
];

function startTimer(self) {
  return setInterval(
    Curry._1(self[/* reduce */ 1], function() {
      return /* Tick */ 0;
    }),
    1000
  );
}

var component = ReasonReact.reducerComponent("WorkoutScreen");

function make$7() {
  var newrecord = component.slice();
  newrecord[/* willUnmount */ 6] = function(self) {
    var match = self[/* state */ 2][/* timerHandle */ 2];
    if (match) {
      clearInterval(match[0]);
      return /* () */ 0;
    } else {
      return /* () */ 0;
    }
  };
  newrecord[/* render */ 9] = function(self) {
    var match = self[/* state */ 2][/* inSession */ 0];
    var layout = match !== 0 ? sessionLayout : transitionLayout;
    var match$1 = self[/* state */ 2][/* inSession */ 0];
    return ReasonReact.element(
      /* None */ 0,
      /* None */ 0,
      make(
        /* array */ [
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            ScrollView$BsReactNative.make(
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* Some */ [
                Style$BsReactNative.style(
                  /* :: */ [Style$BsReactNative.flexGrow(1), /* [] */ 0]
                ),
              ],
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* Some */ [/* false */ 0],
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* Some */ [/* false */ 0],
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0
            )(
              /* array */ [
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  make$1(
                    /* array */ [
                      $$Array.mapi(function(i, it) {
                        switch (it) {
                          case 0:
                            return ReasonReact.element(
                              /* Some */ [Pervasives.string_of_int(i)],
                              /* None */ 0,
                              make$6(
                                Assets.Illustrations.workoutPrep,
                                "cover",
                                /* array */ []
                              )
                            );
                          case 1:
                            return ReasonReact.element(
                              /* Some */ [Pervasives.string_of_int(i)],
                              /* None */ 0,
                              make$2(/* array */ ["set 1 of 10"])
                            );
                          case 2:
                            return ReasonReact.element(
                              /* Some */ [Pervasives.string_of_int(i)],
                              /* None */ 0,
                              make$3(
                                /* array */ [
                                  ReasonReact.element(
                                    /* None */ 0,
                                    /* None */ 0,
                                    make$4(
                                      /* array */ [Pervasives.string_of_int(10)]
                                    )
                                  ),
                                  " push-ups",
                                ]
                              )
                            );
                          case 3:
                            var match = self[/* state */ 2][/* status */ 3];
                            var match$1 = self[/* state */ 2][/* status */ 3];
                            return ReasonReact.element(
                              /* Some */ [Pervasives.string_of_int(i)],
                              /* None */ 0,
                              make$5(
                                /* array */ [
                                  ReasonReact.element(
                                    /* None */ 0,
                                    /* None */ 0,
                                    SessionControl.make(
                                      match !== -276545362
                                        ? match >= 373703110
                                          ? Curry._1(
                                              self[/* reduce */ 1],
                                              function() {
                                                return /* PauseTimer */ 2;
                                              }
                                            )
                                          : Curry._1(
                                              self[/* reduce */ 1],
                                              function() {
                                                return /* StartTimer */ Block.__(
                                                  0,
                                                  [
                                                    /* Some */ [
                                                      startTimer(self),
                                                    ],
                                                  ]
                                                );
                                              }
                                            )
                                        : Curry._1(
                                            self[/* reduce */ 1],
                                            function() {
                                              return /* ResumeTimer */ 3;
                                            }
                                          ),
                                      match$1 !== -276545362
                                        ? match$1 >= 373703110
                                          ? "PAUSE"
                                          : "START"
                                        : "RESUME",
                                      Colors.blueLeftUsTooSoon,
                                      /* array */ []
                                    )
                                  ),
                                  ReasonReact.element(
                                    /* None */ 0,
                                    /* None */ 0,
                                    SessionControl.make(
                                      Curry._1(
                                        self[/* reduce */ 1],
                                        function() {
                                          var match =
                                            self[/* state */ 2][/* timerHandle */ 2];
                                          if (match) {
                                            clearInterval(match[0]);
                                          }
                                          return /* StopTimer */ Block.__(1, [
                                            /* None */ 0,
                                          ]);
                                        }
                                      ),
                                      "STOP",
                                      Colors.bRED,
                                      /* array */ []
                                    )
                                  ),
                                ]
                              )
                            );
                          case 4:
                            return ReasonReact.element(
                              /* Some */ [Pervasives.string_of_int(i)],
                              /* None */ 0,
                              Timer.make(
                                self[/* state */ 2][/* timeUsed */ 1],
                                /* array */ []
                              )
                            );
                        }
                      }, layout),
                      ReasonReact.element(
                        /* None */ 0,
                        /* None */ 0,
                        ActionButton.make(
                          Curry._1(self[/* reduce */ 1], function() {
                            if (self[/* state */ 2][/* inSession */ 0]) {
                              var match =
                                self[/* state */ 2][/* timerHandle */ 2];
                              if (match) {
                                clearInterval(match[0]);
                              } else {
                                Curry._2(
                                  self[/* reduce */ 1],
                                  function() {
                                    return /* StopTimer */ Block.__(1, [
                                      /* None */ 0,
                                    ]);
                                  },
                                  /* () */ 0
                                );
                              }
                            } else {
                              Curry._2(
                                self[/* reduce */ 1],
                                function() {
                                  return /* StartTimer */ Block.__(0, [
                                    /* Some */ [startTimer(self)],
                                  ]);
                                },
                                /* () */ 0
                              );
                            }
                            return /* ToggleSession */ 1;
                          }),
                          match$1 !== 0 ? "COMPLETE" : "GO",
                          /* array */ []
                        )
                      ),
                    ]
                  )
                ),
              ]
            )
          ),
        ]
      )
    );
  };
  newrecord[/* initialState */ 10] = function() {
    return /* record */ [
      /* inSession : false */ 0,
      /* timeUsed */ 0,
      /* timerHandle : None */ 0,
      /* status : active */ 373703110,
    ];
  };
  newrecord[/* reducer */ 12] = function(action, state) {
    if (typeof action === "number") {
      switch (action) {
        case 0:
          if (state[/* status */ 3] !== /* paused */ -276545362) {
            return /* Update */ Block.__(0, [
              /* record */ [
                /* inSession */ state[/* inSession */ 0],
                /* timeUsed */ (state[/* timeUsed */ 1] + 1) | 0,
                /* timerHandle */ state[/* timerHandle */ 2],
                /* status */ state[/* status */ 3],
              ],
            ]);
          } else {
            return /* Update */ Block.__(0, [
              /* record */ [
                /* inSession */ state[/* inSession */ 0],
                /* timeUsed */ state[/* timeUsed */ 1],
                /* timerHandle */ state[/* timerHandle */ 2],
                /* status */ state[/* status */ 3],
              ],
            ]);
          }
        case 1:
          return /* Update */ Block.__(0, [
            /* record */ [
              /* inSession */ 1 - state[/* inSession */ 0],
              /* timeUsed */ state[/* timeUsed */ 1],
              /* timerHandle */ state[/* timerHandle */ 2],
              /* status */ state[/* status */ 3],
            ],
          ]);
        case 2:
          return /* Update */ Block.__(0, [
            /* record */ [
              /* inSession */ state[/* inSession */ 0],
              /* timeUsed */ state[/* timeUsed */ 1],
              /* timerHandle */ state[/* timerHandle */ 2],
              /* status : paused */ -276545362,
            ],
          ]);
        case 3:
          return /* Update */ Block.__(0, [
            /* record */ [
              /* inSession */ state[/* inSession */ 0],
              /* timeUsed */ state[/* timeUsed */ 1],
              /* timerHandle */ state[/* timerHandle */ 2],
              /* status : active */ 373703110,
            ],
          ]);
      }
    } else if (action.tag) {
      return /* Update */ Block.__(0, [
        /* record */ [
          /* inSession */ state[/* inSession */ 0],
          /* timeUsed */ state[/* timeUsed */ 1],
          /* timerHandle */ action[0],
          /* status : stopped */ -1016999411,
        ],
      ]);
    } else {
      return /* Update */ Block.__(0, [
        /* record */ [
          /* inSession */ state[/* inSession */ 0],
          /* timeUsed */ 0,
          /* timerHandle */ action[0],
          /* status : active */ 373703110,
        ],
      ]);
    }
  };
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, function() {
  return make$7(/* array */ []);
});

exports.Styled = Styled;
exports.transitionLayout = transitionLayout;
exports.sessionLayout = sessionLayout;
exports.startTimer = startTimer;
exports.component = component;
exports.make = make$7;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* component Not a pure module */
