// load pug file
// import delete script in pug pule
// like button should have ids
// add event listener to like button
// on click get id of like and if it exist send fetch request to delete from db and message that like deleted
// when it matches the route delete from db and responds with success message
// if like does not exist then send fetch request to create like and message that like was created

console.log("this is running")
const likeButton = document.querySelectorAll(".like-button")

for (let i = 0; i < likeButton.length; i++) {
    const like = likeButton[i];
    like.addEventListener("click", async (e) => {
        e.preventDefault()
        const likeId = e.target.id.split("-")[2]
        const res = await fetch(`/likes`, {
            method: "POST",
            
        })
        const data = await res.json()
        console.log(data.message, "TEST 2 **************************************")

        if (data.message === "CreatedLike") {
            const likesNum = document.querySelector(".likes-number")
            console.log(likesNum.value, "--------------------------------")
        } else {

        }
    })
}
