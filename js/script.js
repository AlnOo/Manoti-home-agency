// ===========================
// MENU TOGGLE
// ===========================

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

const profileImage = document.getElementById("profileImage");
const profileName = document.getElementById("profileName");
const profileTown = document.getElementById("profileTown");
const profileAge = document.getElementById("profileAge");
const profileSalary = document.getElementById("profileSalary");
const profileDaily = document.getElementById("profileDaily");
const profileExperience = document.getElementById("profileExperience");
const profileBadge = document.getElementById("profileBadge");
const profileSkillTag = document.getElementById("profileSkillTag");
const profileTribe = document.getElementById("profileTribe");
const profileReligion = document.getElementById("profileReligion");
const profileEducation = document.getElementById("profileEducation");
const profileCourse = document.getElementById("profileCourse");

// Optional if you add it to your HTML
const profileType = document.getElementById("profileType");

document.querySelectorAll(".profile-btn").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".nanny-card");

        profileImage.src = card.dataset.image;
        profileImage.alt = card.dataset.name;

        profileName.textContent = card.dataset.name;
        profileTown.textContent = card.dataset.town;
        profileAge.textContent = card.dataset.age;
        profileSalary.textContent = card.dataset.salary;
        profileDaily.textContent = card.dataset.daily;
        profileExperience.textContent = card.dataset.experience;

        profileBadge.textContent = card.dataset.type;

        if(profileType){
            profileType.textContent = card.dataset.type;
        }

        profileSkillTag.textContent = card.dataset.skill;
        profileTribe.textContent = card.dataset.tribe;
        profileReligion.textContent = card.dataset.religion;
        profileEducation.textContent = card.dataset.education;
        profileCourse.textContent = card.dataset.course;

        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    });

});


// ===========================
// CLOSE MODAL
// ===========================

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}