let customerOrders = []; //array for storing all customer orders
let orderIndex = 0; //for indexing orders
let orderX = 100; //all orders will be displayed at x = 100
let initialY = 20; //first order will be displayed at y = 40

class Customer //customer class for assigning an order to a customer
{
  constructor(order)
  {
    this.order = order;
  }
  getOrder() {
    return this.order;
  }
}

function setup()
{
  createCanvas(400, 400);
  background(220);
  frameRate(60); // sets the frame rate for customer generation
  //var orderButton = createButton("Make Order");
  //orderButton.position(10, 10);
  //orderButton.size(70, 50);
  //orderButton.mousePressed(generateOrder); // Generate order when button is pressed
}

function draw()
{
  if (frameCount % 600 == true) {generateOrder();}
}

function generateOrder()
{
  //background(220); //used for removing old order text
  ingredients = ['Lettuce', 'Cheese', 'Tomato', "Sour Cream"]; // List of possible added ingredients to an order
  shuffle(ingredients, true); // Shuffle the order of ingredients in array to allow for proper randomization
  
  let order = [];
  order[0] = 'Shell'; order[1] = 'Beef'; // Every order must at minimum have a shell and beef
  
  for(let i = 0; i < random(0,4); i++) {
      order[i + 2] = ingredients[i];
  }
  customerOrders[orderIndex] = new Customer(order); //adds this order into our order array
  text(customerOrders[orderIndex].getOrder(), orderX, initialY); //displays order onto screen
  orderIndex++; //increments to next spot in order array
  initialY += 20; //moves next order's display down 20 units
}