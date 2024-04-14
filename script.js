const app = {
    init: () => {
        document.querySelectorAll(".shareImg").forEach(button =>
            button.addEventListener("click", () => {
                document.querySelector(".links").classList.toggle("hidden")
                document.querySelector(".overlay").classList.toggle("hidden")
            })
        )
        document.querySelector(".overlay").addEventListener("click",()=>{
            document.querySelector(".links").classList.toggle("hidden")
            document.querySelector(".overlay").classList.toggle("hidden")
        })
    }
}

document.addEventListener("DOMContentLoaded", app.init);