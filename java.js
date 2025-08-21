// This is use to show result
let main_display = document.getElementById("show")
let show_user_img = document.getElementById("show-user-output")
let display_i = document.getElementById("get-i")
let show_comp_img = document.getElementById("show-comp-output")
// This is use when user choose 
let hide_element = document.getElementById("hide")

hide_element.hidden = true

// this is use to show result in text when the user is win or loss
let show_result = document.createElement('div')
show_result.classList.add("show-result")

// it store the three image 
let pics_arr = ["game_pic/hand.png", "game_pic/stone.png", "game_pic/scissor.png"]
let user_value = ""

function random_val() {
    let random = Math.floor(Math.random() * 3)
    return random
}


document.getElementById("rock").addEventListener("click", () => {
    
    // this element show result show
    hide_element.hidden = false
    let comp_value = pics_arr[random_val()]
    user_value = "game_pic/stone.png"

    // this is use to add class or flex or add image to show on screen
    main_display.classList.add("show") 
    show_user_img.classList.add("user-img")
    show_comp_img.classList.add("comp-img")

    show_user_img.src = user_value
    show_comp_img.src = comp_value
    
    if(user_value == comp_value) {

        display_i.setAttribute("class", "fa-solid fa-equals")

        show_result.innerHTML = "Draw! Play Again"

    } else {

        if (comp_value === "game_pic/scissor.png") {
            show_result.innerHTML = "You Win! Rock crushes Scissor";
        } else if (comp_value === "game_pic/hand.png") {
            show_result.innerHTML = "You Lose! Paper cover Rock";
        }

        display_i.setAttribute("class", "fa-solid fa-not-equal")

    }
    
    main_display.insertAdjacentElement("beforebegin", show_result);
    
})

document.getElementById("paper").addEventListener("click", () => {
    
    // this element show result show
    hide_element.hidden = false
    let comp_value = pics_arr[random_val()]
    user_value = "game_pic/hand.png"

    // this is use to add class or flex or add image to show on screen
    main_display.classList.add("show") 
    show_user_img.classList.add("user-img")
    show_comp_img.classList.add("comp-img")

    show_user_img.src = user_value
    show_comp_img.src = comp_value
    
    if(user_value == comp_value) {
        
        display_i.setAttribute("class", "fa-solid fa-equals")

        show_result.innerHTML = "Draw! Play Again"

    } else {

        if (comp_value === "game_pic/stone.png") {
            show_result.innerHTML = "You Win! Paper cover Rock";
        } else if (comp_value === "game_pic/scissor.png") {
            show_result.innerHTML = "You Lose! Scissor cut Paper";
        }

        display_i.setAttribute("class", "fa-solid fa-not-equal")

    }
   
    main_display.insertAdjacentElement("beforebegin", show_result);
   
})

document.getElementById("scissor").addEventListener("click", () => {
    
    // this element show result show
    hide_element.hidden = false
    let comp_value = pics_arr[random_val()]
    user_value = "game_pic/scissor.png"

    // this is use to add class or flex or add image to show on screen
    main_display.classList.add("show") 
    show_user_img.classList.add("user-img")
    show_comp_img.classList.add("comp-img")

    show_user_img.src = user_value
    show_comp_img.src = comp_value

    if(user_value == comp_value) {
        
        display_i.setAttribute("class", "fa-solid fa-equals")

        show_result.innerHTML = "Draw! Play Again"

    } else {

        if (comp_value === "game_pic/hand.png") {
            show_result.innerHTML = "You Win! Scissor cut Paper";
        } else if (comp_value === "game_pic/stone.png") {
            show_result.innerHTML = "You Lose! Rock crushe Scissors";
        }
        
        display_i.setAttribute("class", "fa-solid fa-not-equal")
        
    }

    main_display.insertAdjacentElement("beforebegin", show_result);
    
})