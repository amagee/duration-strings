import { formatDuration, formatRelativeDuration, getUnitSingular, getUnitPlural } from "./index";
import en_AU from "./en_AU";
import en_AU_narrow from "./en_AU_narrow";
import pl from "./pl";

test("get unit singular", () => {
  expect(getUnitSingular('week', en_AU!)).toEqual("week");
  expect(getUnitSingular('week', pl!)).toEqual("tydzień");
})

test("get unit singular narrow", () => {
  expect(getUnitSingular('week', en_AU_narrow!)).toEqual("wk");
})

test("get unit plural", () => {
  expect(getUnitPlural('week', en_AU!)).toEqual("weeks");
  expect(getUnitPlural('week', pl!)).toEqual("tygodnie");
})

test("absolute duration", () => {
  expect(formatDuration(3, 'week', en_AU!)).toEqual("3 weeks");
  expect(formatDuration(3, 'week', pl!)).toEqual("3 tygodnie");
})

test("relative duration normal cases", () => {
  expect(formatRelativeDuration(13, 'month', en_AU!)).toEqual("in 13 months");
  expect(formatRelativeDuration(-17, 'day', en_AU!)).toEqual("17 days ago");
})

test("relative duration special cases", () => {
  expect(formatRelativeDuration(-1, 'day', en_AU!)).toEqual("yesterday");
  expect(formatRelativeDuration(1, 'day', en_AU!)).toEqual("tomorrow");
  expect(formatRelativeDuration(-1, 'week', en_AU!)).toEqual("last week");
  expect(formatRelativeDuration(1, 'year', pl!)).toEqual("w przyszłym roku");
  expect(formatRelativeDuration(0, 'week', en_AU!)).toEqual("this week");
  expect(formatRelativeDuration(0, 'week', pl!)).toEqual("w tym tygodniu");
})

test("relative duration special cases with alwaysNumeric = false", () => {
  const options = {alwaysNumeric: true};
  expect(formatRelativeDuration(-1, 'day', en_AU!, options)).toEqual("1 day ago");
  expect(formatRelativeDuration(1, 'day', en_AU!, options)).toEqual("in 1 day");
  expect(formatRelativeDuration(-1, 'week', en_AU!, options)).toEqual("1 week ago");
  expect(formatRelativeDuration(1, 'year', pl!, options)).toEqual("za 1 rok");
})
