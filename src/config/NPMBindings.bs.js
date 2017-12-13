// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
"use strict";

var Expo = require("expo");
var ReasonReact = require("reason-react/src/reasonReact.js");
var Js_null_undefined = require("bs-platform/lib/js/js_null_undefined.js");
var ReactNativeCalendars = require("react-native-calendars");

function make(
  minDate,
  onDayPress,
  hideArrows,
  monthFormat,
  onMonthChange,
  hideExtraDays,
  disableMonthChange,
  firstDay,
  hideDayNames,
  markedDates,
  style,
  markingType,
  children
) {
  return ReasonReact.wrapJsForReason(
    ReactNativeCalendars.Calendar,
    {
      minDate: Js_null_undefined.from_opt(minDate),
      onDayPress: Js_null_undefined.from_opt(onDayPress),
      hideArrows: Js_null_undefined.from_opt(hideArrows),
      monthFormat: Js_null_undefined.from_opt(monthFormat),
      onMonthChange: Js_null_undefined.from_opt(onMonthChange),
      hideExtraDays: Js_null_undefined.from_opt(hideExtraDays),
      disableMonthChange: Js_null_undefined.from_opt(disableMonthChange),
      firstDay: Js_null_undefined.from_opt(firstDay),
      hideDayNames: Js_null_undefined.from_opt(hideDayNames),
      markedDates: Js_null_undefined.from_opt(markedDates),
      markingType: Js_null_undefined.from_opt(markingType),
      style: Js_null_undefined.from_opt(style),
    },
    children
  );
}

var Calendar = /* module */ [/* make */ make];

var RNCalendars = /* module */ [/* Calendar */ Calendar];

var Font = /* module */ [];

function make$1(children) {
  return ReasonReact.wrapJsForReason(Expo.AppLoading, {}, children);
}

var AppLoading = /* module */ [/* make */ make$1];

var Expo$1 = /* module */ [/* Font */ Font, /* AppLoading */ AppLoading];

exports.RNCalendars = RNCalendars;
exports.Expo = Expo$1;
/* expo Not a pure module */
