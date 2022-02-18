const url = 'https://dev.to/api/articles?username=ivinoop';

let rootElm = document.querySelector('.blog-container');
let displayBlogs = document.querySelector('.display-blogs');

function createUI(blogs) {
  rootElm.innerHTML = '';
  blogs.forEach((blog) => {

    let blogContent = document.createElement('li');

    let blogImg = document.createElement('img');
    blogImg.src = blog.social_image;

    let blogText = document.createElement('div');
    blogText.classList.add('.blog-text');

    let blogTitle = document.createElement('h2');
    blogTitle.innerText = blog.title;

    let blogDescription = document.createElement('p');
    blogDescription.innerText = blog.description;

    let readMore = document.createElement('a');
    readMore.href = blog.url;
    readMore.target = '_blank';
    readMore.innerText = 'Read Article →';

    blogText.append(blogTitle, blogDescription, readMore);

    blogContent.append(blogImg, blogText);

    rootElm.append(blogContent);
    displayBlogs.append(rootElm);
  });
} 

function fetchData() {
  fetch(url)
  .then((res) => res.json())
  .then((blogData) => {
    createUI(blogData);
  }) 
}

fetchData();