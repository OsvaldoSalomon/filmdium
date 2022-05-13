window.addEventListener("load", (event) => {

    //   DELETE COMMENTS BUTTONS

    const deleteButtons = document.querySelectorAll('.deleteButton')
    for (let i = 0; i < deleteButtons.length; i++) {
        const delButton = deleteButtons[i];
        delButton.addEventListener('click', async (e) => {
            e.preventDefault()
            const commentId = e.target.id.split('-')[2]
            const res = await fetch(`/comments/${commentId}`, {
                method: 'DELETE'
            })
            const data = await res.json()
            if (data.message === 'Comment successfully deleted') {
                const container = document.querySelector(`#comments-container-${commentId}`)
                container.remove()
            }
        })
    }

    // EDIT COMMENT BUTTONS
    const editBtns = document.querySelectorAll('.editButton')
    for (let i = 0; i < editBtns.length; i++) {
        const btn = editBtns[i];
        btn.addEventListener('click', (e) => {
            const commentId = e.target.id.split('-')[2]
            const form = document.getElementById(`edit-form-${commentId}`)
            if (form.classList.contains('hidden')) {
                form.classList.remove('hidden')
            } else {
                form.classList.add('hidden')
            }

            const submitBtn = document.getElementById(`edit-submit-${commentId}`)
            submitBtn.addEventListener('click', async (submitEvent) => {
                submitEvent.preventDefault()
                const content = document.getElementById(`${commentId}-edit-content`).value

                const res = await fetch(`/comments/${commentId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        content
                    })
                })
                const errorDiv = document.querySelector(`.error-div-${commentId}`)
                const data = await res.json()
                if (data.message === 'Success') {
                    errorDiv.innerHTML = ''
                    const contentEle = document.getElementById(`comments-content-${commentId}`)
                    contentEle.innerHTML = data.commentContent
                    form.classList.add('hidden')
                } else {
                    errorDiv.innerHTML = data.error
                    form.classList.add('hidden')
                }
            })

        })
    }
})

//  LIKE BUTTON

const likeButton = document.querySelectorAll(".like-button")

for (let i = 0; i < likeButton.length; i++) {
    const like = likeButton[i];
    like.addEventListener("click", async (e) => {
        e.preventDefault()
        const storyId = document.querySelector("#storyId").value

        const res = await fetch(`/likes`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                storyId
            })
        })
        const data = await res.json()
        const likesNum = document.querySelector("#likes-number")
        const icon = document.querySelector("#like-icon-button")

        if (data.message === "CreatedLike") {
            likesNum.innerHTML = data.likesCount + 1
            icon.name = "happy"
        } else {
            likesNum.innerHTML = data.likesCount - 1
            icon.name = "heart-dislike"
        }
    })
}
