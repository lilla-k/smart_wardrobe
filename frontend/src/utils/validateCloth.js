function isValid(cloth) {
  return (isValidString(cloth.category)&&
    isValidString(cloth.subCategory)&& 
    isValidString(cloth.name)&&
    isValidString (cloth.brand)&& 
    isValidString(cloth.color)&& 
    isValidString(cloth.material) &&
    isValidYear(cloth.purchaseYear) &&
    isValidMonth(cloth.purchaseMonth) &&
    isValidPrice(cloth.price)
  )
}

export function isValidString(property){
  return (typeof property ==='string' && property.length> 0 && property.length < 100);
}

function isValidNumber(property){
  return typeof property ==='number';
}

function isValidYear(year){
 return (isValidNumber(year) && year > 1900 && year <= new Date().getFullYear());
}

function isValidMonth(month){
  return (isValidNumber(month) && month >0 && month <= 12);
}

function isValidPrice(price){
  return (isValidNumber(price) && price >= 0 && price < 1000000);
}

export default isValid;

