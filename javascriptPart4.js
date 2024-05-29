//Object Literals
const student ={
    name:"Ashish",
    age:19,
    marks:86,
    cgp:8.5
};
console.log(student);

//creating object for a post
const post= {
    username:"@AshishPrajapat",
    content: "This is myu first post",
    likes: 150,
    reposts: 199,
    tags:["@abhi", "@Vishal", "@Vishanu"],

};
console.log(post);

//get values
console.log(post.username);
console.log(post.likes);
//get value by string
console.log(post["reposts"]);
console.log(post["tags"]);
//get values by variable
let lik="likes";
let rpost="reposts";
console.log(post[rpost]);
console.log(post[lik]);

//add value in object
let vies=["Vewis"];//through variable
post[vies]=1000;
post.vies=90;
post.date=11052005;// add date property
post["comment"]="good quality";//add comment property
console.log(post);

//update values in object literals
post.username="@KingPrajapat";
post["reposts"]=1234;
post.likes=1000;
console.log(post);

//nested objexct
const Student={
    student1:{
        name:"Ashish",
        age:19,
        city:"Jipur"
    },
    student2:{
        name:"Abhi",
        age:20,
        city:"Up"
    },
    student3:{
        name:"Anuj",
        age:21,
        city:"UP "
    }
};
console.log(s=Student.student1);    
Student.student1.name="Freen";//update values 
console.log(Student.student2.age);//get valu
Student.student1.cgpa=8.5;//add property
console.log(Student);

//array of object
let arr=[{
    name:'Ashish',
    age:18,
    cgpa:8.5,
    marks:[90, 98, 92]
},{
    name:"Abhi",
    age:19,
    cgpa:7.5,
    marks:[13,46,89]
},{
    name:"anuj",
    age:22,
    cgpa:-2,
    maeks:[12,34,56]
}];
arr[0].name="Vishal";//get values
arr[2].cgpa=25;//update value
arr[2].back="Yes";

console.log(arr);