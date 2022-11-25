// 01.for loop:
var res =
{
    "name":"sathappan",
    "age":"25",
    "region":"hindu",
    "gender":"male", 
};
for (var i=0;i<res.length;i++) {
     console.log(`NAME:${res[i].name},AGE:${res[i].age}`);
};

// 02.for in:
var res1 =
    {"name":"sathappan",
    "age":"25",
    "region":"hindu",
    "gender":"male", 
};
for (var key in res1 ) {
    console.log(`${key}:${res1[key]}`);
};

//03.for of:
var res2 =
    {"name":"sathappan",
    "age":"25",
    "region":"hindu",
    "gender":"male", 
};
for (var [key,value] of Object.entries(res2)) {
  console.log(`${key}:${res2[key]}`)
};

//04.for each:
var res3 =[
    {"name":"sathappan",
    "age":"25",
    "region":"hindu",
    "gender":"male", 
}];
res3.forEach((key) => {
console.log(key)
});






