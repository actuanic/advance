let student = [
{
    name: "Duong",
    age:19,
    hobbies: ["videogame","sleep","learn"]
},
{
    name: "Dong",
    age:12,
    hobbies: ["videogame","sleep","learn"]
},
{
    name: "Minh",
    age:13,
    hobbies: ["videogame","sleep","learn"]
},
{
    name: "Thanh",
    age:14,
    hobbies: ["videogame","sleep","learn"]
},
{
    name: "Hung", 
    age:12,
    hobbies: ["videogame","sleep","learn"]
}


]
;
 
let bai2 = prompt("Câu 2: Nhập sở thích")
console.log("----Câu 2: Tên và toàn bộ sở thích của người có sở thích " + ask2 + " là:");
let result2 = 0
for (let i of student){
    for (let j of i.hobbies){
        if (j==bai2){
            console.log(i.name + " và sở thích là: " + i.hobbies.join(","))
            result2++
        }

    }
}