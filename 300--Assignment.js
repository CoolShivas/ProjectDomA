console.log("Assignment-3");

/**
 * 
    Add a new li element without the same class Name;

    And try editing it with getelementsbyclassname and then by 
    getelementbytagname;


 */



let arr = document.getElementsByClassName("listing-group");
// console.log(arr);
arr[0].textContent = 'Exclusive';
arr[0].style.color = 'purple';
arr[0].style.fontWeight = 'bold';
arr[0].style.backgroundColor = 'yellow';
for(let i = 2; i < arr.length; i++)
{
    arr[i].style.backgroundColor = '#ccc';
}




let brr = document.getElementsByTagName('li');
brr[0].textContent = 'latest';
brr[0].style.color = 'purple';
brr[0].style.fontWeight = 'bold';
brr[0].style.backgroundColor = 'orange';
console.log(brr);