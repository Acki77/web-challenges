console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const article = document.createElement("article");
const content = document.createElement("p");
const footer = document.createElement("footer");
const username = document.createElement("span");
const addedLikeButton = document.createElement("button");

article.classList.add("post");
content.classList.add("post__content");
footer.classList.add("post__footer");
username.classList.add("post__username");
addedLikeButton.classList.add("post__button");

content.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
username.textContent = "@username";
addedLikeButton.textContent = "♥ Like";

addedLikeButton.addEventListener("click", handleLikeButtonClick);

article.append(content, footer);
footer.append(username, addedLikeButton);
document.body.append(article);
