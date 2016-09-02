import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import ByeComp from "./imports/ByeComp.jsx"
import './bye.html';

Template.bye.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.bye.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  ByeComp(){
    return ByeComp;
  }
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});