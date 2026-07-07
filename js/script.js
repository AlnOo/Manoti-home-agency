// ===========================
// MENU TOGGLE
// ===========================

const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
});

function setValue(id, value) {

    const element = document.getElementById(id);

    if (!element) return;

    element.textContent = value || "";

}

// ===========================
// UNIVERSAL PROFILE MODAL
// ===========================

const modal = document.getElementById("profileModal");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".profile-btn").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".nanny-card");

        if (!card) return;

        // Image

        const profileImage = document.getElementById("profileImage");

        if (profileImage) {

            profileImage.src = card.dataset.image || "";
            profileImage.alt = card.dataset.name || "";

        }

        // Basic Information

        setValue("profileName", card.dataset.name);
        setValue("profileTown", card.dataset.town);

        // ---------- NANNY ----------

        setValue("profileAge", card.dataset.age);

        setValue("profileSalary", card.dataset.salary);

        setValue("profileDaily", card.dataset.daily);

        setValue("profileSkillTag", card.dataset.skill);

        setValue("profileTribe", card.dataset.tribe);

        setValue("profileReligion", card.dataset.religion);

        setValue("profileEducation", card.dataset.education);

        setValue("profileCourse", card.dataset.course);

        setValue(
            "profileExperience",
            card.dataset.experience
                ? card.dataset.experience + " Years"
                : ""
        );

        // ---------- PROFESSIONAL ----------

        setValue("profileService", card.dataset.service);

        setValue(
            "profileRate",
            card.dataset.rate
                ? "KES " + card.dataset.rate + " / Day"
                : ""
        );

        setValue("profileJobs", card.dataset.jobs);

        setValue(
            "profileRating",
            card.dataset.rating
                ? card.dataset.rating + " ★"
                : ""
        );

        setValue(
            "profileRatingValue",
            card.dataset.rating
                ? card.dataset.rating + " / 5"
                : ""
        );

        setValue("profileProject", card.dataset.project);

        setValue("profileAvailability", card.dataset.availability);

        setValue("profileEmergency", card.dataset.emergency);

        setValue("profileTools", card.dataset.tools);

        // Badge

        const badge = document.getElementById("profileBadge");

        if (badge) {

            badge.textContent =
                card.dataset.type ||
                card.dataset.availability ||
                "";

        }

        modal.style.display = "flex";

        document.body.style.overflow = "hidden";

    });

});


// ===========================
// CLOSE MODAL
// ===========================

function closeModal() {

    if (!modal) return;

    modal.style.display = "none";

    document.body.style.overflow = "auto";

}

if (closeBtn) {

    closeBtn.addEventListener("click", closeModal);

}

window.addEventListener("click", e => {

    if (e.target === modal) {

        closeModal();

    }

});

//==========================
// PREMIUM FILTER
//==========================

const searchFilter = document.getElementById("searchFilter");

const serviceFilter = document.getElementById("serviceFilter");

const townFilter = document.getElementById("townFilter");

const rateFilter = document.getElementById("rateFilter");

const experienceFilter = document.getElementById("experienceFilter");

const availabilityFilter = document.getElementById("availabilityFilter");

const ratingFilter = document.getElementById("ratingFilter");

const verifiedFilter = document.getElementById("verifiedFilter");

const serviceTypeFilter = document.getElementById("serviceTypeFilter");

const emergencyFilter = document.getElementById("emergencyFilter");

const toolsFilter = document.getElementById("toolsFilter");

const resetFilters = document.getElementById("resetFilters");

const cards = document.querySelectorAll(".nanny-card");

const noResults = document.getElementById("noResults");

const salaryFilter = document.getElementById("salaryFilter");

const ageFilter = document.getElementById("ageFilter");

const typeFilter = document.getElementById("typeFilter");

function filterCards(){

    let visible = 0;

    cards.forEach(card=>{

        let show = true;

        const name = card.dataset.name.toLowerCase();

        const service = card.dataset.service || "";

        const town = card.dataset.town || "";

        const rate = Number(card.dataset.rate || "");

        const experience = Number(card.dataset.experience || "");

        const rating = Number(card.dataset.rating || "");

        const verified = card.dataset.verified || "";

        const availability = card.dataset.availability || "";

        const project = card.dataset.project || "";

        const tools = card.dataset.tools || "";

        // Search

        if(searchFilter.value !== ""){

            const search = searchFilter.value.toLowerCase();

            if(
                !name.includes(search) &&
                !service.toLowerCase().includes(search)
            ){
                show = false;
            }

        }

        // Profession

        if(serviceFilter.value !== "" && service !== serviceFilter.value)
            show = false;

        // Town

        if(townFilter.value !== "" && town !== townFilter.value)
            show = false;

        // Budget

        if(rateFilter.value === "2000" && rate >= 2000)
            show = false;

        if(rateFilter.value === "5000" && (rate < 2000 || rate > 5000))
            show = false;

        if(rateFilter.value === "99999" && rate <= 5000)
            show = false;

        // Experience

        if(experienceFilter.value !== ""){

            if(experience < Number(experienceFilter.value))
                show = false;

        }

        // Availability

        if(
            availabilityFilter.value !== "" &&
            availability !== availabilityFilter.value
        ){
            show = false;
        }

        // Rating

        if(ratingFilter.value !== ""){

            let minimum = 3;

            if(ratingFilter.value.includes("5"))
                minimum = 5;

            else if(ratingFilter.value.includes("4"))
                minimum = 4;

            if(rating < minimum)
                show = false;

        }

        // Verified

        if(
            verifiedFilter.value === "Verified Professionals" &&
            verified !== "yes"
        ){
            show = false;
        }

        // Project Type

        if(
            serviceTypeFilter.value !== "" &&
            project !== serviceTypeFilter.value &&
            project !== "Both"
        ){
            show = false;
        }

        // Emergency

        if(
            emergencyFilter.value === "Available 24/7" &&
            availability !== "Available Today"
        ){
            show = false;
        }

        // Own Tools

        if(
            toolsFilter.value === "Owns Professional Tools" &&
            tools !== "Own Tools"
        ){
            show = false;
        }

        card.style.display = show ? "" : "none";

        if(show) visible++;

    });

    noResults.style.display = visible ? "none" : "block";

}

// Events

[
searchFilter,
serviceFilter,
townFilter,
rateFilter,
experienceFilter,
availabilityFilter,
ratingFilter,
verifiedFilter,
serviceTypeFilter,
emergencyFilter,
toolsFilter,
salaryFilter,
ageFilter,
typeFilter
].forEach(filter => {

    if (!filter) return;

    filter.addEventListener(
        filter.tagName === "INPUT" ? "keyup" : "change",
        filterCards
    );

});

// Reset

if(resetFilters){

    resetFilters.addEventListener("click",()=>{

        if(searchFilter) searchFilter.value="";
        if(serviceFilter) serviceFilter.value="";
        if(townFilter) townFilter.value="";
        if(rateFilter) rateFilter.value="";
        if(experienceFilter) experienceFilter.value="";
        if(availabilityFilter) availabilityFilter.value="";
        if(ratingFilter) ratingFilter.value="";
        if(verifiedFilter) verifiedFilter.value="";
        if(serviceTypeFilter) serviceTypeFilter.value="";
        if(emergencyFilter) emergencyFilter.value="";
        if(toolsFilter) toolsFilter.value="";

        filterCards();

    });

}