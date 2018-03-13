commentList = null;

function addComment(text, commentList) {

    const comment = document.createElement('div');
    comment.classList.add('comment-list__element');

    const commentText = document.createElement('div');
    commentText.classList.add('comment-list__element--text');
    commentText.innerText = text;

    const commentDelete = document.createElement('button');
    commentDelete.classList.add('btn');
    commentDelete.classList.add('comment-list__element--delete');
    commentDelete.innerHTML = '<i class="fa fa-times"></i>';

    comment.appendChild(commentText);
    comment.appendChild(commentDelete);

    commentList.append(comment);

}

document.addEventListener('DOMContentLoaded', function () {
    timelineCard = document.querySelectorAll('.timeline-card');
    commentCnt = document.querySelectorAll(".comment-cnt");
    commentBtn = document.querySelectorAll(".btn--text");
    addCommentBtn = document.querySelectorAll('.comment-input__button');

    for (let i = 0; i < commentCnt.length; i++) {
        commentBtn[i].addEventListener("click", function () {
            commentCnt[i].classList.toggle("hidden");
        });
        timelineCard[i].addEventListener('click', function (e) {
            if (e.target.closest('.comment-list__element--delete') !== null) {
                e.target.closest('.comment-list__element').remove();
            }
        });
        addCommentBtn[i].addEventListener('click', function (e) {
            e.preventDefault();
            const textarea = this.previousElementSibling;
            const commentList = this.parentNode.previousElementSibling;
            if (textarea.value !== '') {
                addComment(textarea.value, commentList);
                textarea.value = '';
            }
        });
    }

});