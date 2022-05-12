window.addEventListener("load", (event) => {
   
   //   DELETE COMMENTS BUTTON

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
            if (data.message === 'Success') {
                const container = document.getElementById(`comments-container-${commentId}`)
                container.remove()
            }
        })
    }


    //  EDIT COMMENTS BUTTON

    const editButtons = document.querySelectorAll('.editButton')

    for (let i = 0; i < editButtons.length; i++) {
        const edButton = editButtons[i];
        edButton.addEventListener('click', (e) => {
            const postId = e.target.id.split('-')[2]
            const form = document.getElementById(`edit-form-${postId}`)
            if (form.classList.contains('hidden')) {
                form.classList.remove('hidden')
            } else {
                form.classList.add('hidden')
            }

            const submitBtn = document.getElementById(`edit-submit-${postId}`)
            submitBtn.addEventListener('click', async (submitEvent) => {
                submitEvent.preventDefault()
                const title = document.getElementById(`${postId}-edit-title`).value
                const content = document.getElementById(`${postId}-edit-content`).value


                const res = await fetch(`/posts/${postId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        title,
                        content
                    })
                })

                const data = await res.json()
                if (data.message === 'Success') {
                    const titleEle = document.getElementById(`${postId}-title`)
                    const contentEle = document.getElementById(`${postId}-content`)
                    titleEle.innerHTML = data.post.title
                    contentEle.innerHTML = data.post.content
                    form.classList.add('hidden')
                } 
            })

        })
    }
})


//load the pug file
//import delete script in pug file
// delete comment should have id's on them
//add event listeners to delete buttons
// on click get id of the comment and send a fetch request to delete it from the database 
//when it matches the route deleted from database respond with message of success
//if i have the message on my script file delete the comment div