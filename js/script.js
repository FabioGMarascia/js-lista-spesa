const shop_list = [`Salumi`, `Pasta`, `Carne`, `Pesce`, `Uova`, `Legumi`];

// M1
// for (let i = 0; i < shop_list.length; i++) {
// 	const shop_item = shop_list[i];
// 	console.log(i, shop_item);
// }

// M2
// let i = 0;
// while (i < shop_list.length) {
// 	const shop_item = shop_list[i];
// 	console.log(i, shop_item);
// 	i++;
// }
// console.log(i);

// M3 - B1 1/2
const list = document.querySelector(`ul`);

let i = 0;
while (i < shop_list.length) {
	const shop_item = shop_list[i];
	let list_element = document.createElement(`li`);
	list_element.append(shop_item);
	list.append(list_element);
	i++;
}
