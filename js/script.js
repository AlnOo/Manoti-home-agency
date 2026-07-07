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

//==========================
// PREMIUM FILTER
//==========================

const searchFilter = document.getElementById("searchFilter");
const townFilter = document.getElementById("townFilter");
const salaryFilter = document.getElementById("salaryFilter");
const ageFilter = document.getElementById("ageFilter");
const typeFilter = document.getElementById("typeFilter");
const experienceFilter = document.getElementById("experienceFilter");

const resetFilters = document.getElementById("resetFilters");

const cards = document.querySelectorAll(".nanny-card");

const noResults = document.getElementById("noResults");

function filterCards(){

let visible = 0;

cards.forEach(card=>{

let show = true;

const name = card.dataset.name.toLowerCase();
const town = card.dataset.town;
const salary = Number(card.dataset.salary);
const age = Number(card.dataset.age);
const type = card.dataset.type;
const experience = Number(card.dataset.experience);

// Search

if(searchFilter.value!=""){

if(!name.includes(searchFilter.value.toLowerCase()))
show=false;

}

// Town

if(townFilter.value!="" && town!=townFilter.value)
show=false;

// Employment

if(typeFilter.value!="" && type!=typeFilter.value)
show=false;

// Salary

if(salaryFilter.value=="15000" && salary>=15000)
show=false;

if(salaryFilter.value=="20000" && (salary<15000 || salary>20000))
show=false;

if(salaryFilter.value=="99999" && salary<=20000)
show=false;

// Age

if(ageFilter.value=="30" && (age<20 || age>30))
show=false;

if(ageFilter.value=="40" && (age<31 || age>40))
show=false;

if(ageFilter.value=="41" && age<41)
show=false;

// Experience

if(experienceFilter.value!=""){

if(experience<Number(experienceFilter.value))
show=false;

}

card.style.display = show ? "" : "none";

if(show) visible++;

});

noResults.style.display = visible ? "none" : "block";

}

// Events

searchFilter.addEventListener("keyup",filterCards);

townFilter.addEventListener("change",filterCards);

salaryFilter.addEventListener("change",filterCards);

ageFilter.addEventListener("change",filterCards);

typeFilter.addEventListener("change",filterCards);

experienceFilter.addEventListener("change",filterCards);

// Reset

resetFilters.addEventListener("click",()=>{

searchFilter.value="";
townFilter.value="";
salaryFilter.value="";
ageFilter.value="";
typeFilter.value="";
experienceFilter.value="";

filterCards();

});