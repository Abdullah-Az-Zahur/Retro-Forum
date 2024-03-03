const loadPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json();

    const postContainer = document.getElementById('post-container');

    data.posts.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="hero min-h-0 bg-base-200 rounded-3xl my-4">
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
                                            <p id="comment">comment</p>
                                        </div>
                                        <div class="flex gap-3">
                                            <img class="h-7 w-7" src="images/view.png" alt="">
                                            <p>view</p>
                                        </div>
                                        <div class="flex gap-3">
                                            <img class="h-7 w-7" src="images/tabler-icon-clock-hour-9.png" alt="">
                                            <p>clock</p>
                                        </div>
                                    </div>
                                    <div class=""><button class="btn rounded-full bg-transparent"><img
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