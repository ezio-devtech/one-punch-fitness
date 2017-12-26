// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
"use strict";

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Reductive = require("reductive/src/reductive.js");
var Js_boolean = require("bs-platform/lib/js/js_boolean.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Json_decode = require("bs-json/src/Json_decode.js");
var Json_encode = require("bs-json/src/Json_encode.js");
var AsyncStorage$BsReactNative = require("bs-react-native/src/asyncStorage.js");

function dateString(date) {
  return (
    Pervasives.string_of_int(date.getFullYear() | 0) +
    ("-" +
      (Pervasives.string_of_int(((date.getMonth() | 0) + 1) | 0) +
        ("-" + Pervasives.string_of_int(date.getDate() | 0))))
  );
}

function timeUsedPerSet(tps) {
  return Json_encode.object_(
    /* :: */ [
      /* tuple */ ["pushUps", tps[/* pushUps */ 0]],
      /* :: */ [
        /* tuple */ ["sitUps", tps[/* sitUps */ 1]],
        /* :: */ [
          /* tuple */ ["squats", tps[/* squats */ 2]],
          /* :: */ [/* tuple */ ["run", tps[/* run */ 3]], /* [] */ 0],
        ],
      ],
    ]
  );
}

function setsCompleted(sc) {
  return Json_encode.object_(
    /* :: */ [
      /* tuple */ ["pushUps", sc[/* pushUps */ 0]],
      /* :: */ [
        /* tuple */ ["sitUps", sc[/* sitUps */ 1]],
        /* :: */ [
          /* tuple */ ["squats", sc[/* squats */ 2]],
          /* :: */ [
            /* tuple */ ["run", Js_boolean.to_js_boolean(sc[/* run */ 3])],
            /* [] */ 0,
          ],
        ],
      ],
    ]
  );
}

function workout(w) {
  return Json_encode.object_(
    /* :: */ [
      /* tuple */ ["level", w[/* level */ 0]],
      /* :: */ [
        /* tuple */ ["date", w[/* date */ 1]],
        /* :: */ [
          /* tuple */ ["started", Js_boolean.to_js_boolean(w[/* started */ 2])],
          /* :: */ [
            /* tuple */ [
              "completed",
              Js_boolean.to_js_boolean(w[/* completed */ 3]),
            ],
            /* :: */ [
              /* tuple */ [
                "setsCompleted",
                setsCompleted(w[/* setsCompleted */ 4]),
              ],
              /* :: */ [
                /* tuple */ [
                  "timeUsedPerSet",
                  timeUsedPerSet(w[/* timeUsedPerSet */ 5]),
                ],
                /* [] */ 0,
              ],
            ],
          ],
        ],
      ],
    ]
  );
}

function history(param) {
  return Json_encode.arrayOf(workout, param);
}

function state(s) {
  return Json_encode.object_(
    /* :: */ [
      /* tuple */ ["currentWorkout", workout(s[/* currentWorkout */ 0])],
      /* :: */ [
        /* tuple */ [
          "history",
          Json_encode.arrayOf(workout, s[/* history */ 1]),
        ],
        /* [] */ 0,
      ],
    ]
  );
}

var Encode = /* module */ [
  /* timeUsedPerSet */ timeUsedPerSet,
  /* setsCompleted */ setsCompleted,
  /* workout */ workout,
  /* history */ history,
  /* state */ state,
];

function timeUsedPerSet$1(json) {
  return /* record */ [
    /* pushUps */ Json_decode.field(
      "pushUps",
      function(param) {
        return Json_decode.array(Json_decode.$$float, param);
      },
      json
    ),
    /* sitUps */ Json_decode.field(
      "sitUps",
      function(param) {
        return Json_decode.array(Json_decode.$$float, param);
      },
      json
    ),
    /* squats */ Json_decode.field(
      "squats",
      function(param) {
        return Json_decode.array(Json_decode.$$float, param);
      },
      json
    ),
    /* run */ Json_decode.field("run", Json_decode.$$float, json),
  ];
}

function setsCompleted$1(json) {
  return /* record */ [
    /* pushUps */ Json_decode.field("pushUps", Json_decode.$$int, json),
    /* sitUps */ Json_decode.field("sitUps", Json_decode.$$int, json),
    /* squats */ Json_decode.field("squats", Json_decode.$$int, json),
    /* run */ Json_decode.field("run", Json_decode.bool, json),
  ];
}

function workout$1(json) {
  return /* record */ [
    /* level */ Json_decode.field("level", Json_decode.$$int, json),
    /* date */ Json_decode.field("date", Json_decode.string, json),
    /* started */ Json_decode.field("started", Json_decode.bool, json),
    /* completed */ Json_decode.field("completed", Json_decode.bool, json),
    /* setsCompleted */ Json_decode.field(
      "setsCompleted",
      setsCompleted$1,
      json
    ),
    /* timeUsedPerSet */ Json_decode.field(
      "timeUsedPerSet",
      timeUsedPerSet$1,
      json
    ),
  ];
}

function history$1(param) {
  return Json_decode.array(workout$1, param);
}

function state$1(json) {
  return /* record */ [
    /* currentWorkout */ Json_decode.field("currentWorkout", workout$1, json),
    /* history */ Json_decode.field("history", history$1, json),
  ];
}

var Decode = /* module */ [
  /* timeUsedPerSet */ timeUsedPerSet$1,
  /* setsCompleted */ setsCompleted$1,
  /* workout */ workout$1,
  /* history */ history$1,
  /* state */ state$1,
];

function persist(store, next, action) {
  var returnValue = Curry._1(next, action);
  var stateAsJson = JSON.stringify(
    state(Reductive.Store[/* getState */ 5](store))
  );
  AsyncStorage$BsReactNative.setItem(
    "@state",
    stateAsJson,
    /* Some */ [
      function(e) {
        if (e) {
          console.log(e[0]);
          return /* () */ 0;
        } else {
          return /* () */ 0;
        }
      },
    ],
    /* () */ 0
  );
  return returnValue;
}

function hydrate(dispatch) {
  AsyncStorage$BsReactNative.getItem("@state", /* None */ 0, /* () */ 0).then(
    function(json) {
      var tmp;
      if (json) {
        var state$2 = state$1(JSON.parse(json[0]));
        tmp = Curry._1(dispatch, /* Rehydrate */ Block.__(0, [state$2]));
      } else {
        tmp = /* () */ 0;
      }
      return Promise.resolve(tmp);
    }
  );
  return /* () */ 0;
}

function genNewWorkout() {
  return /* record */ [
    /* level */ 0,
    /* date */ dateString(new Date()),
    /* started : false */ 0,
    /* completed : false */ 0,
    /* setsCompleted : record */ [
      /* pushUps */ 0,
      /* sitUps */ 0,
      /* squats */ 0,
      /* run : false */ 0,
    ],
    /* timeUsedPerSet : record */ [
      /* pushUps : float array */ [],
      /* sitUps : float array */ [],
      /* squats : float array */ [],
      /* run */ 0,
    ],
  ];
}

function reducer(state, action) {
  if (typeof action === "number") {
    switch (action) {
      case 0:
        var newrecord = state[/* currentWorkout */ 0].slice();
        return /* record */ [
          /* currentWorkout */ ((newrecord[/* level */ 0] =
            (state[/* currentWorkout */ 0][/* level */ 0] + 1) | 0),
          newrecord),
          /* history */ state[/* history */ 1],
        ];
      case 1:
        var newrecord$1 = state[/* currentWorkout */ 0].slice();
        return /* record */ [
          /* currentWorkout */ ((newrecord$1[/* level */ 0] =
            (state[/* currentWorkout */ 0][/* level */ 0] - 1) | 0),
          newrecord$1),
          /* history */ state[/* history */ 1],
        ];
      case 2:
        var newrecord$2 = state[/* currentWorkout */ 0].slice();
        return /* record */ [
          /* currentWorkout */ ((newrecord$2[/* started */ 2] = /* true */ 1),
          newrecord$2),
          /* history */ state[/* history */ 1],
        ];
      case 3:
        var newrecord$3 = state[/* currentWorkout */ 0].slice();
        return /* record */ [
          /* currentWorkout */ ((newrecord$3[/* completed */ 3] = /* true */ 1),
          newrecord$3),
          /* history */ state[/* history */ 1],
        ];
    }
  } else if (action.tag) {
    var t = action[1];
    switch (action[0]) {
      case 0:
        var init = state[/* currentWorkout */ 0];
        var init$1 = state[/* currentWorkout */ 0][/* setsCompleted */ 4];
        var init$2 = state[/* currentWorkout */ 0][/* timeUsedPerSet */ 5];
        return /* record */ [
          /* currentWorkout : record */ [
            /* level */ init[/* level */ 0],
            /* date */ init[/* date */ 1],
            /* started */ init[/* started */ 2],
            /* completed */ init[/* completed */ 3],
            /* setsCompleted : record */ [
              /* pushUps */ (state[/* currentWorkout */ 0][/* setsCompleted */ 4][/* pushUps */ 0] +
                1) |
                0,
              /* sitUps */ init$1[/* sitUps */ 1],
              /* squats */ init$1[/* squats */ 2],
              /* run */ init$1[/* run */ 3],
            ],
            /* timeUsedPerSet : record */ [
              /* pushUps */ state[/* currentWorkout */ 0][/* timeUsedPerSet */ 5][/* pushUps */ 0].concat(
                t
              ),
              /* sitUps */ init$2[/* sitUps */ 1],
              /* squats */ init$2[/* squats */ 2],
              /* run */ init$2[/* run */ 3],
            ],
          ],
          /* history */ state[/* history */ 1],
        ];
      case 1:
        var init$3 = state[/* currentWorkout */ 0];
        var init$4 = state[/* currentWorkout */ 0][/* setsCompleted */ 4];
        var init$5 = state[/* currentWorkout */ 0][/* timeUsedPerSet */ 5];
        return /* record */ [
          /* currentWorkout : record */ [
            /* level */ init$3[/* level */ 0],
            /* date */ init$3[/* date */ 1],
            /* started */ init$3[/* started */ 2],
            /* completed */ init$3[/* completed */ 3],
            /* setsCompleted : record */ [
              /* pushUps */ init$4[/* pushUps */ 0],
              /* sitUps */ (state[/* currentWorkout */ 0][/* setsCompleted */ 4][/* sitUps */ 1] +
                1) |
                0,
              /* squats */ init$4[/* squats */ 2],
              /* run */ init$4[/* run */ 3],
            ],
            /* timeUsedPerSet : record */ [
              /* pushUps */ init$5[/* pushUps */ 0],
              /* sitUps */ state[/* currentWorkout */ 0][/* timeUsedPerSet */ 5][/* sitUps */ 1].concat(
                t
              ),
              /* squats */ init$5[/* squats */ 2],
              /* run */ init$5[/* run */ 3],
            ],
          ],
          /* history */ state[/* history */ 1],
        ];
      case 2:
        var init$6 = state[/* currentWorkout */ 0];
        var init$7 = state[/* currentWorkout */ 0][/* setsCompleted */ 4];
        var init$8 = state[/* currentWorkout */ 0][/* timeUsedPerSet */ 5];
        return /* record */ [
          /* currentWorkout : record */ [
            /* level */ init$6[/* level */ 0],
            /* date */ init$6[/* date */ 1],
            /* started */ init$6[/* started */ 2],
            /* completed */ init$6[/* completed */ 3],
            /* setsCompleted : record */ [
              /* pushUps */ init$7[/* pushUps */ 0],
              /* sitUps */ init$7[/* sitUps */ 1],
              /* squats */ (state[/* currentWorkout */ 0][/* setsCompleted */ 4][/* squats */ 2] +
                1) |
                0,
              /* run */ init$7[/* run */ 3],
            ],
            /* timeUsedPerSet : record */ [
              /* pushUps */ init$8[/* pushUps */ 0],
              /* sitUps */ init$8[/* sitUps */ 1],
              /* squats */ state[/* currentWorkout */ 0][/* timeUsedPerSet */ 5][/* squats */ 2].concat(
                t
              ),
              /* run */ init$8[/* run */ 3],
            ],
          ],
          /* history */ state[/* history */ 1],
        ];
      case 3:
        var init$9 = state[/* currentWorkout */ 0];
        var init$10 = state[/* currentWorkout */ 0][/* setsCompleted */ 4];
        var init$11 = state[/* currentWorkout */ 0][/* timeUsedPerSet */ 5];
        return /* record */ [
          /* currentWorkout : record */ [
            /* level */ init$9[/* level */ 0],
            /* date */ init$9[/* date */ 1],
            /* started */ init$9[/* started */ 2],
            /* completed */ init$9[/* completed */ 3],
            /* setsCompleted : record */ [
              /* pushUps */ init$10[/* pushUps */ 0],
              /* sitUps */ init$10[/* sitUps */ 1],
              /* squats */ init$10[/* squats */ 2],
              /* run : true */ 1,
            ],
            /* timeUsedPerSet : record */ [
              /* pushUps */ init$11[/* pushUps */ 0],
              /* sitUps */ init$11[/* sitUps */ 1],
              /* squats */ init$11[/* squats */ 2],
              /* run */ t,
            ],
          ],
          /* history */ state[/* history */ 1],
        ];
    }
  } else {
    var state$1 = action[0];
    if (
      state$1[/* currentWorkout */ 0][/* date */ 1] !== dateString(new Date())
    ) {
      return /* record */ [
        /* currentWorkout */ genNewWorkout(/* () */ 0),
        /* history */ state$1[/* history */ 1].concat(
          state$1[/* currentWorkout */ 0]
        ),
      ];
    } else {
      return state$1;
    }
  }
}

var store = Reductive.Store[/* create */ 0](
  reducer,
  /* record */ [
    /* currentWorkout */ genNewWorkout(/* () */ 0),
    /* history : array */ [],
  ],
  /* Some */ [persist],
  /* () */ 0
);

var partial_arg = Reductive.Store[/* dispatch */ 4];

hydrate(function(param) {
  return partial_arg(store, param);
});

exports.dateString = dateString;
exports.Encode = Encode;
exports.Decode = Decode;
exports.persist = persist;
exports.hydrate = hydrate;
exports.genNewWorkout = genNewWorkout;
exports.reducer = reducer;
exports.store = store;
/* store Not a pure module */