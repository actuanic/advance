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
 
let age = +prompt("Nhập độ tuổi cần tìm?");

let matched = student
    .filter(học_sinh => học_sinh.age === age)
    .map(học_sinh => học_sinh.name);

document.body.innerHTML = matched.length ? `
<ul>
    ${matched.map(tên_học_sinh => `<li>${tên_học_sinh}</li>`).join("")}
</ul>
` : "Không có học sinh có độ tuổi theo yêu cầu!"
// Cau 1: nhap tuoi va in ra name cua nhung ai co so tuoi da nhap
// cau 2: Nhap so thich, và in ra toàn bộ sở thích và name của những ai có chứa sở thích đó.
// Câu 3: Lọc ra những ai có sở thich là study và in ra nó.
// Cau 4: thay doi toan bo nhung ai co tuoi == 11 thành 15. (sử dụng map nhé).


