const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
})

function openProfile(
    name,
    image,
    age,
    town,
    type,
    salary,
    experience,
    skills
){

    document.getElementById("profileImage").src = image;
    document.getElementById("profileName").innerHTML = name;
    document.getElementById("profileAge").innerHTML = age;
    document.getElementById("profileTown").innerHTML = town;
    document.getElementById("profileType").innerHTML = type;
    document.getElementById("profileSalary").innerHTML = salary;
    document.getElementById("profileExperience").innerHTML = experience;
    document.getElementById("profileSkills").innerHTML = skills;

    document.getElementById("profileModal").style.display = "flex";
}

function closeProfile(){
    document.getElementById("profileModal").style.display = "none";
}

window.onclick = function(event){
    let modal = document.getElementById("profileModal");

    if(event.target == modal){
        modal.style.display = "none";
    }
}
