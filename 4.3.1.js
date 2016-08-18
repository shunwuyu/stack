"use strict";

function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.clear = clear;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function pop(element) {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[this.top-1];
}

function length() {
  return this.top;
}

function clear() {
  this.top = 0;
}

function mulBase(num, base) {
  var s = new Stack();
  do{
    s.push(num % base);
    num = Math.floor(num /= base);
  } while(num > 0);

  var converted = "";
  while(s.length() > 0) {
    converted += s.pop();
  }

  return converted;
}

var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + " converted to " + base + "进制 is " + newNum);
base = 8;
newNum = mulBase(num, base);
console.log(num + " converted to " + base + "进制 is " + newNum);
