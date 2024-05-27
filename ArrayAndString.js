# java-script-array-and-string-method
all methods of string and array
//stirng 
let name="  Ashish Prajapat   " ;
console.log(name);

//trim method
let newName=name.trim();
console.log(newName); 

//string mwthod 
//toupperCase Mathod
let ucname=newName.toUpperCase();
console.log(ucname);
//Lower case
let lcname=newName.toLowerCase();
console.log(lcname);

//indexOf method 
console.log(newName.indexOf("Prajapat"));
console.log(ucname.indexOf("PRAJAPAT"));

//slice method 
let sentence="My name is Ashish Prajapat";
let noArg=sentence.slice();
console.log(noArg);  //No Argument as index 
let sl=sentence.slice(3); //starting index is 3
console.log(sl);
let arg=sentence.slice(3, 9);//argument as index and last index is not include in slice
console.log(arg);
let lgth=sentence.slice(11, sentence.length+1); // argument as length of string
console.log(lgth);

//Replace  and peat method 
let job="I am a web developer ";
console.log(job);
console.log(job.replace("developer", "disginer")); //replace to developer by disgning
console.log(job.repeat(2));//reprat 2 time

//Array in java script
//creating array as string type
let names=["Ashish", "Abhishek", "Anuj", "Ankit"];
console.log(names);
for(let i=0; i<names.length; i++){//print the all element of array
    console.log(names[i]);
}
names[2]="Vishal";// Array is mutable 
for(let i=0; i<names.length; i++){//print the all element of array after updation   
    console.log(names[i]);
}

//array method 
names.push("Vishanu");//add at last index values
console.log(names); 
let deleted=names.pop();//remove last element of array
console.log(deleted);
console.log(names);
let first=names.unshift("Akasha");
console.log(names);
let  deletefirst=names.shift();
console.log(deletefirst);
console.log(names);

//index of array
for(let i=0; i<names.length; i++){
    console.log(names[i]);
}
//include method
console.log(names.includes("Ashish"));
console.log(names.includes("Ankit"));
console.log(names.includes("Anuj"));

//concatenation method
let name1=["Ashish", "Abhi"];
let name2=["Anuj", "Ankit"];
console.log(name1);
console.log(name2);
console.log(name1.concat(name2));
console.log(name2.concat(name1));
console.log(name1.concat(name1));


//revers method
console.log(name1.reverse());

//slice  method in array
let cars=["alto", "thar", "wagnar","maruti"];
console.log(cars);
console.log(cars.slice(1));//start index with argument
console.log(cars.slice(1, cars.length+1));//start index  and ending index 
console.log(cars.slice());//not index
console.log(cars.slice(-2));
