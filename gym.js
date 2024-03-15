function home(){
    document.getElementById("homes").style.color="rgb(20, 251, 20)";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("abouts").style.color="white";
    document.getElementById("workouts").style.color="white";
    document.getElementById("diets").style.color="white";
    document.getElementById("trainers").style.color="white";
}
function plan(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="rgb(20, 251, 20)";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("abouts").style.color="white";
    document.getElementById("workouts").style.color="white";
    document.getElementById("diets").style.color="white";
    document.getElementById("trainers").style.color="white";
}
function blog(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="rgb(20, 251, 20)";
    document.getElementById("abouts").style.color="white";
    document.getElementById("workouts").style.color="white";
    document.getElementById("diets").style.color="white";
    document.getElementById("trainers").style.color="white";
}
function about(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("abouts").style.color="rgb(20, 251, 20)";
    document.getElementById("workouts").style.color="white";
    document.getElementById("diets").style.color="white";
    document.getElementById("trainers").style.color="white";
}
function workout(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("abouts").style.color="white";
    document.getElementById("workouts").style.color="rgb(20, 251, 20)";
    document.getElementById("diets").style.color="white";
    document.getElementById("trainers").style.color="white";
}
function trainer(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("abouts").style.color="white";
    document.getElementById("workouts").style.color="white";
    document.getElementById("diets").style.color="white";
    document.getElementById("trainers").style.color="rgb(20, 251, 20)";
}
function diet(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("abouts").style.color="white";
    document.getElementById("workouts").style.color="white";
    document.getElementById("diets").style.color="rgb(20, 251, 20)";
    document.getElementById("trainers").style.color="white";
}
function contact(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="rgb(20, 251, 20)";
    document.getElementById("blogs").style.color="white";
    document.getElementById("abouts").style.color="white";
    document.getElementById("workouts").style.color="white";
    document.getElementById("diets").style.color="white";
    document.getElementById("trainers").style.color="white";
}

document.addEventListener('DOMContentLoaded', function () {
    // Function to change the displayed section
    function changeSection(section) {
        const mainContent = document.getElementById('mainContent');
        mainContent.innerHTML = ''; // Clear previous content

        switch (section) {
            case 'home':
                mainContent.innerHTML = '<h2>Welcome to our Gym!</h2><p>This is the home section.</p>';
                break;
            case 'about':
                mainContent.innerHTML = '<h2>About Us</h2><p>Learn about our gym and mission.</p>';
                break;
            case 'workouts':
                mainContent.innerHTML = '<h2>Workouts</h2><p>Check out our featured workouts.</p>';
                break;
            case 'plans':
                mainContent.innerHTML = '<h2>Membership Plans</h2><p>Explore our membership options.</p>';
                break;
            case 'contact':
                mainContent.innerHTML = '<h2>Contact Us</h2><p>Get in touch with us.</p>';
                break;
            case 'trainers':
                mainContent.innerHTML = '<h2>Our Trainers</h2><p>Meet our experienced trainers.</p>';
                break;
            default:
                mainContent.innerHTML = '<p>Section not found.</p>';
        }
    }

    // Initial load - default to the Home section
    changeSection('home');
});

