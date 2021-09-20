const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Nice", "Great", "Awesome"]), "Amazing");
assertEqual(head([7,8,9]), 10);
assertEqual(head([]), 10);
assertEqual(head([10]), 10);
assertEqual(head(["Great"]), "Nope");