"use strict";

const titleClickHandler = function (event) {
  const clickedElement = this;
  event.preventDefault();
  console.log("Link was clicked!");

  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll(".titles a.active");

  for (let activeLink of activeLinks) {
    activeLink.classList.remove("a.active");
  }

  /* add class 'active' to the clicked link */
  clickedElement.classList.add("active");
  console.log("clickedElement:", clickedElement);

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll(".post.active");

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove("active");
  }

  /* get 'href' attribute from the clicked link */
  const href = clickedElement.getAttribute("href");

  /* find the correct article using the selector (value of 'href' attribute) */
  const article = document.querySelector(href);

  /* add class 'active' to the correct article */
  article.classList.add("active");
};

const links = document.querySelectorAll(".titles a");

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}
