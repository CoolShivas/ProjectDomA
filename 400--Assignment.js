console.log('Assignment 04');
/**
 * 
 *  Using QuerySelectorALL change the font color to green for 2nd item in
 *  the item list;
 
 *  Choose all the odd elements and make their background green using 
 *  QuerySelectorALL;
 * 
 * 
 */


let arr = document.querySelectorAll('li');
console.log(arr);
arr[1].style.color = 'red';
arr[1].style.backgroundColor = 'green';
arr[1].style.fontWeight = 'bold';
arr[2].style.borderBottom = 'solid 4px black';
arr[2].style.color = 'white';



let brr = document.querySelectorAll(".list-group-item:nth-child(odd)");
for(let i = 0; i < brr.length; i++)
{
    brr[i].style.backgroundColor = '#ccc';
}