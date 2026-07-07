const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggle.addEventListener("click", () => {

    toggle.classList.toggle("active");
    navigation.classList.toggle("active");

});



// ===========================
// PROFILE MODAL
// ===========================

const modal = document.getElementById("profileModal");

const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".profile-btn").forEach(button=>{

    button.addEventListener("click",function(){

        const card=this.closest(".nanny-card");

        document.getElementById("profileImage").src=card.dataset.image;

        document.getElementById("profileName").textContent=card.dataset.name;

        document.getElementById("profileTown").textContent=card.dataset.town;

        document.getElementById("profileAge").textContent=card.dataset.age;

        document.getElementById("profileSalary").textContent=card.dataset.salary;

        document.getElementById("profileDaily").textContent=card.dataset.daily;

        document.getElementById("profileExperience").textContent=card.dataset.experience;

        document.getElementById("profileBadge").textContent=card.dataset.type;

        document.getElementById("profileSkillTag").textContent=card.dataset.skill;

        document.getElementById("profileTribe").textContent=card.dataset.tribe;

        document.getElementById("profileReligion").textContent=card.dataset.religion;

        document.getElementById("profileEducation").textContent=card.dataset.education;

        document.getElementById("profileCourse").textContent=card.dataset.course;

        modal.style.display="flex";

    });

});



// Close button

closeBtn.addEventListener("click",()=>{

    modal.style.display="none";

});



// Click outside modal

window.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

});