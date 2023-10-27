// // There are two ways or many But how much I know is that;

// // Firstly, I have completed by using .getElementsByTagName('li');

// let brr = document.getElementsByTagName('li');
// brr[2].style.color = 'red';
// brr[2].style.backgroundColor = 'green';
// brr[2].style.fontWeight = 'bold';

// for(let i = 0; i < brr.length; i++)
// {
//     brr[i].style.fontWeight = 'bold';
//     brr[i].style.color = 'red';
// }


//********************************************************************** */


// // Secondly, I have completed by using .querySelectorAll('li');


// let crr = document.querySelectorAll('li');
// crr[2].style.backgroundColor = 'green';

// for(let i = 0 ; i < crr.length; i++)
// {
//     crr[i].style.fontWeight = 'bold';
//     crr[i].style.color = 'blue';
// }
// crr[2].style.color = 'red';


//********************************************************************** */

// // Thirdly, I have completed by using .getElementsByClassName("list-group-item");


let drr = document.getElementsByClassName("list-group-item");

drr[2].style.backgroundColor = 'green';

for(let i = 0; i < drr.length; i++)
{
    drr[i].style.fontWeight = 'bold';
    drr[i].style.color = 'purple';
}
drr[2].style.color = 'red';
