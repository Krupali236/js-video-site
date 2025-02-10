let displayAllContent = document.getElementById("Videos");
let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");
let Content = [{
    id: GenerateRandomId(5),
    category: "javascript",
    img: "/images/img1.jpg",
    logo: "/images/logo1.jpg",
    bagde: "10:03",
    title: " Top 10 Easy To Create JavaScript Games For Beginners",
    channel: "CodingNepal",
    detail: "27K Views • 4 months ago"
},
{
    id: GenerateRandomId(5),
    category: "css",
    img: "/images/img2.jpg",
    logo: "/images/logo1.jpg",
    bagde: "23:45",
    title: " How to make Responsive Card Slider in HTML CSS & JavaScript",
    channel: "CodingLab",
    detail: "42K Views • 1 year ago"
},
{
    id: GenerateRandomId(5),
    category: "html",
    img: "/images/img3.jpg",
    logo: "/images/logo1.jpg",
    bagde: "29:43",
    title: " Create A Responsive Website with Login & Registration Form in HTML CSS and JavaScript",
    channel: "CodingNepal",
    detail: "68K Views • 9 months ago"
},
{
    id: GenerateRandomId(5),
    category: "game",
    img: "/images/img4.jpg",
    logo: "/images/logo1.jpg",
    bagde: "38:45",
    title: " Build Hangman Game in HTML CSS and JavaScript",
    channel: "CodingNepal",
    detail: "57K Views • 11 months ago"
},
{
    id: GenerateRandomId(5),
    category: "javascript",
    img: "/images/img5.jpg",
    logo: "/images/logo1.jpg",
    bagde: "19:27",
    title: "How to Make Chrome Extension in HTML CSS & JavaScript",
    channel: "CodingNepal",
    detail: "24K Views • 1 year ago"
},
{
    id: GenerateRandomId(5),
    category: "css",
    img: "/images/img6.jpg",
    logo: "/images/logo1.jpg",
    bagde: "16:24",
    title: "Create A Draggable Card Slider in HTML CSS and Vanilla JavaScript",
    channel: "CodingNepal",
    detail: "14.2K Views • 4 days ago"
},
{
    id: GenerateRandomId(5),
    category: "css",
    img: "/images/img7.jpg",
    logo: "/images/logo1.jpg",
    bagde: "37:13",
    title: "How to make Responsive Image Slider in HTML CSS and JavaScript",
    channel: "CodingLab",
    detail: "1M Views • 1 year ago"
},
{
    id: GenerateRandomId(5),
    category: "html",
    img: "/images/img8.jpg",
    logo: "/images/logo1.jpg",
    bagde: "9:27",
    title: "Create Text Typing Effect in HTML CSS & Vanilla JavaScript",
    channel: "CodingNepal",
    detail: "17K Views • 10 months ago"
},
{
    id: GenerateRandomId(5),
    category: "javascript",
    img: "/images/img9.jpg",
    logo: "/images/logo1.jpg",
    bagde: "25:27",
    title: "Create Responsive Image Slider in HTML CSS and JavaScript",
    channel: "CodingNepal",
    detail: "157K Views • 9 months ago"
},
{
    id: GenerateRandomId(5),
    category: "css",
    img: "/images/img10.jpg",
    logo: "/images/logo1.jpg",
    bagde: "12:24",
    title: "Make A Flipping Card UI Design in HTML & CSS",
    channel: "CodingLab",
    detail: "85K Views • 2 months ago"
},
{
    id: GenerateRandomId(5),
    category: "html",
    img: "/images/img11.jpg",
    logo: "/images/logo1.jpg",
    bagde: "30:20",
    title: "Easy way to do Multiple File Uploading using HTML CSS and JavaScript",
    channel: "CodingNepal",
    detail: "7.4K Views • 3 weeks ago"
},
{
    id: GenerateRandomId(5),
    category: "javascript",
    img: "/images/img12.jpg",
    logo: "/images/logo1.jpg",
    bagde: "11:33",
    title: "Build A Responsive Calculator in HTML CSS & JavaScript",
    channel: "CodingLab",
    detail: "30K Views • 2 years ago"
},
{
    id: GenerateRandomId(5),
    category: "react",
    img: "/images/img13.jpg",
    logo: "/images/logo1.jpg",
    bagde: "39:43",
    title: "Build A Currency Converter using ReactJS",
    channel: "CodingLab",
    detail: "161K Views • 1 year ago"
},
{
    id: GenerateRandomId(5),
    category: "css",
    img: "/images/img14.jpg",
    logo: "/images/logo1.jpg",
    bagde: "1:37:13",
    title: "Responsive Admin Dashboard Panel in HTML CSS and JavaScript",
    channel: "CodingNepal",
    detail: "27K Views • 4 months ago"
}];
function handleContent(data) {
    if (!displayAllContent) {
        console.error("Element with ID 'Videos' not found");
        return;
    }

    let displayVideos = data.map((key) => {
        // console.log("key", key);
        return `
        <div class="col">
            <div class="card border-0 h-75">
                <div class="thumbnail-container">
                    <img src="${key.img}" class="card-img-top rounded-4 h-100" alt="img1">
                    <span class="fs-5 badge fw-normal p-2 rounded-2 bg-black">${key.bagde}</span>
                </div>               
                <div class="card-body">
                    <div class="row">
                        <div class="col-2">
                            <img src="${key.logo}" class="rounded-5 w-100" alt="logo">
                        </div>
                        <div class="col-10">
                            <h5 class="card-title fw-medium fs-4">${key.title}</h5>
                            <p class="card-text text-secondary m-0">${key.channel}</p>
                            <p class="card-text text-secondary">${key.detail}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }).join('');

    displayAllContent.innerHTML = displayVideos || '<p>No videos found.</p>';
}

function GenerateRandomId(length) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
}

function handleSearch() {
    const searchQuery = searchInput.value.trim().toLowerCase();
    console.log("Search Query:", searchQuery);

    if (!searchQuery || searchQuery == "") {
        // console.log("Empty search query. Displaying all content.");
        console.error("Empty search query. Displaying all content.");
        handleContent(Content);
        return;
    }

    const filteredContent = Content.filter((item) => {
        return item.title.toLowerCase().includes(searchQuery) ||
            item.channel.toLowerCase().includes(searchQuery);
    });
    console.log("Filtered Content:", filteredContent);

    // Handle no match case
    if (filteredContent.length === 0) {
        console.log("No matches found.");
        displayAllContent.innerHTML = '<p>No videos found matching your search.</p>';
    } else {
        handleContent(filteredContent);
    }
}

// function handleCategory(){
//     const filterData = Content.filter((item)=>{
//         console.log(item);
//     })
//    displayAllContent.innerHTML=filterData;
// }
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Loaded. Rendering all content.");
    handleContent(Content);
});
