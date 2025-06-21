const products = [
  { name: 'Laptop', price: 1000, category: 'Electronics' },
  { name: 'Phones', price: 500, category: 'Electronics' },
  { name: 'Book', price: 20, category: 'Education' },
  { name: 'Headphones', price: 100, category: 'Electronics' }
];
function filterunder600(items) {
  return items.filter(p => p.price < 600);
}

console.log(filterunder600(products));

function gettotalprice(items) {
  return items.reduce((total, p) => total + p.price, 0);
}

console.log(gettotalprice(products));


function groupbycategory(items) {
  return items.reduce((groups, p) => {
    const key = p.category;
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(p);
    return groups;
  }, {});
}

console.log(groupbycategory(products));

