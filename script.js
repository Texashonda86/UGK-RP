document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentList = document.getElementById("comment-list");

    // コメントの追加
    commentForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const commentText = commentInput.value;
        const commentItem = document.createElement("li");
        commentItem.textContent = commentText;

        // 削除ボタンの作成
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "削除";
        deleteButton.classList.add("delete-button");
        
        // 削除機能の実装
        deleteButton.addEventListener("click", () => {
            commentList.removeChild(commentItem);
        });

        commentItem.appendChild(deleteButton);
        commentList.appendChild(commentItem);
        
        // 入力フィールドをクリア
        commentInput.value = "";
    });
});
