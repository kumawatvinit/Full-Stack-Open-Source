/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
/*
  Sample Input:
  [
    { itemName: 'item1', category: 'fruit', price: 10, timestamp: 1578034738935 },
    { itemName: 'item2', category: 'vegetable', price: 20, timestamp: 1578034738935 },
    { itemName: 'item3', category: 'fruit', price: 5, timestamp: 1578034738935 },
    { itemName: 'item4', category: 'vegetable', price: 15, timestamp: 1578034738935 },
    { itemName: 'item5', category: 'fruit', price: 20, timestamp: 1578034738935 },
    { itemName: 'item6', category: 'utensil', price: 10, timestamp: 1578034738935 },
    { itemName: 'item7', category: 'utensil', price: 5, timestamp: 1578034738935 },
    { itemName: 'item8', category: 'vegetable', price: 10, timestamp: 1578034738935 },
    { itemName: 'item9', category: 'fruit', price: 15, timestamp: 1578034738935 },
    { itemName: 'item10', category: 'utensil', price: 5, timestamp: 1578034738935 },
  ]

  Sample Output:
  [
    {category: 'fruit', totalSpent: 50},
    {category: 'utensil', totalSpent: 20},
    {category: 'vegetable', totalSpent: 45}
  ]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/


function calculateTotalSpentByCategory(transactions) {
  let ans = [];

  for(let i=0; i<transactions.length; i++)
  {
    var found = false;

    for(let j=0; j<ans.length; j++)
    {
      if(ans[j].category == [transactions[i].category]) {
        ans[j].totalSpent+= transactions[i].price;
        found = true;
        break;
      }
    }

    if(!found) {
      let obj = {
        category: transactions[i].category,
        totalSpent: transactions[i].price
      };
      ans.push(obj);
    }
  }

  return ans;
}

var transactions = [
  { itemName: 'item1', category: 'fruit', price: 10, timestamp: 1578034738935 },
  { itemName: 'item2', category: 'vegetable', price: 20, timestamp: 1578034738935 },
  { itemName: 'item3', category: 'fruit', price: 5, timestamp: 1578034738935 },
  { itemName: 'item4', category: 'vegetable', price: 15, timestamp: 1578034738935 },
  { itemName: 'item5', category: 'fruit', price: 20, timestamp: 1578034738935 },
  { itemName: 'item6', category: 'utensil', price: 10, timestamp: 1578034738935 },
  { itemName: 'item7', category: 'utensil', price: 5, timestamp: 1578034738935 },
  { itemName: 'item8', category: 'vegetable', price: 10, timestamp: 1578034738935 },
  { itemName: 'item9', category: 'fruit', price: 15, timestamp: 1578034738935 },
  { itemName: 'item10', category: 'utensil', price: 5, timestamp: 1578034738935 },
];

console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
