let categories = [
    {
        img_src :"https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100",
        title : "Grocery",
        href : "#",
    },
    {
        img_src : "	https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
        title : "Mobile",
        href : "#",
    },
    {
        img_src : "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100",
        title : "Fashion",
        href : "#",
    },
    {
        img_src :"https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
        title : "Electronic",
        href : "#",
    },
    {
        img_src : "https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
        title : "Home & Furniture",
        href : "#",
    },
    {
        img_src :"https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100",
        title : "Appliance",
        href : "#",
    },
    {
        img_src : "https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100",
        title : "Travel",
        href : "#",
    },
    {
        img_src :"https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100",
        title : "Beauty, Toys & More",
        href : "#",
    },
    {
        img_src :"https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100",
        title : "Two Wheelers",
        href : "#",
    },
];


// let arr = [1,2,3,4,5,6,7,8,9];
// for(let i = 0; i <arr.length; i++){
//     console.log(arr[i])
// };


categories.map((element) =>{
    let image = document.createElement("img");
    image.src = element.img_src;
    let title  = document.createElement("p");
    title.innerHTML = element.title;
    let box = document.createElement("div");
    box.append(image, title);
    document.getElementById("categories").append(box);

});




