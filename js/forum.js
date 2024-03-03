// let readCount = 0;

const loadPost = async (category='Comedy') => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`);
    const data = await res.json();

    const postContainer = document.getElementById('post-container');
    console.log(data.posts[0].category);

    postContainer.innerHTML = '';

    data.posts.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="hero min-h-0 bg-base-200 rounded-3xl my-4 ">
                        <div class="hero-content flex-col lg:flex-row ">
                            <div class="indicator">
                                <span class="indicator-item badge badge-secondary"></span>
                                <img src="${element?.image}"
                                    class="max-w-sm rounded-full shadow-2xl w-20 h-20  mb-28" />
                            </div>
                            <div>
                                <div class="flex gap-4">
                                    <p># <span>${element?.category}</span></p>
                                    <p>Author : <span>${element?.author?.name}</span></p>

                                </div>
                                <h1 class=" text-lg lg:text-xl font-bold">${element?.title}
                                </h1>
                                <p class="py-6">${element?.description}</p>
                                <hr class="my-5">
                                <div class="flex flex-col lg:flex-row gap-7 justify-between">
                                    <div class="flex gap-3">
                                        <div class="flex gap-3">
                                            <img class="h-7 w-7" src="images/comment.png" alt="">
                                            <p id="comment">${element?.comment_count}</p>
                                        </div>
                                        <div class="flex gap-3">
                                            <img class="h-7 w-7" src="images/view.png" alt="">
                                            <p>${element?.view_count}</p>
                                        </div>
                                        <div class="flex gap-3">
                                            <img class="h-7 w-7" src="images/tabler-icon-clock-hour-9.png" alt="">
                                            <p>${element.posted_time}</p>
                                        </div>
                                    </div>
                                    <div class=""><button onclick="clickReadMark('${element?.title}', '${element?.view_count}')" class="btn rounded-full bg-transparent"><img
                                                src="images/read-mark.png" alt=""></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
        `
        postContainer.appendChild(div);
    });
}

loadPost();

const clickReadMark = (title, view_count) => {
    const readMark = document.getElementById('read-mark');

    const readCount = document.getElementById('read-count').innerText;
    const convertReadCount = parseInt(readCount);
    document.getElementById('read-count').innerText = convertReadCount + 1;


    const div = document.createElement('div');
    div.innerHTML = `
    <div class="flex justify-between">
                        <div>
                            <p>${title}</p>
                        </div>
                        <div class="flex items-center gap-1">
                            <img src="images/view.png" alt="">
                            <p>${view_count}</p>
                        </div>
                    </div>
                    
    `
    readMark.appendChild(div);


}

// handel search
const handelSearch = async() => {

const searchField = document.getElementById('search-field');
const searchText = searchField.value;
loadPost(searchText);

}