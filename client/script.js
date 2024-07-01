//creating array that stores the projects 
const projects = [
    {
        emoji:'🏩', 
        title: 'React Encryption Form', 
        description: 'This is the first sample project.', 
        link: 'https://github.com/DaniAbdulm/react-medical-form-encryption'
    }, 
    {
        emoji:'💻', 
        title: 'Web Development Project', 
        description: 'This is the second sample project.', 
        link: 'https://github.com/DaniAbdulm/Minigames-Website'
    }, 
    {
        emoji:'📦', 
        title: 'Security Enhancement', 
        description: 'This is the third sample project.', 
        link: 'https://github.com/DaniAbdulm/Pixeon'
    }
    
    //add more projects here
]; 

//color palette array 
const colorPalette = [
    '#f368e0', 
    '#ff9f43',
    '#ee5253',
    '#0abde3',
    '#10ac84',
    '#2e86de',
    '#341f97'
];

const initialColor = '#78E08F'; //setting initial color

let currentIndex = 0; 

function updateProject(index, isInitial = false) {
    const project = projects[index]; 
    const randomColor = isInitial ? initialColor : colorPalette[Math.floor(Math.random() * colorPalette.length)];

    // Apply the animation
    const projectCard = document.querySelector('.project-card');
    const cardText = document.querySelector('.card-text');
    const cardEmoji = document.querySelector('.card-emoji');

    if (!isInitial) {
        projectCard.style.transform = 'scale(0.9)';
        cardText.style.opacity = '0';
        cardEmoji.style.opacity = '0';
    }

    setTimeout(() => {
        document.querySelector('.card-emoji').textContent = project.emoji;
        document.querySelector('.card-title').textContent = project.title;
        document.querySelector('.card-desc').textContent = project.description;
        projectCard.style.backgroundColor = randomColor;

        projectCard.style.transform = 'scale(1)';
        cardText.style.opacity = '1';
        cardEmoji.style.opacity = '1';
    }, isInitial ? 0 : 250); // No delay on initial load
}

document.getElementById('arrow-down').addEventListener('click', () => {
    currentIndex = (currentIndex < projects.length - 1) ? currentIndex + 1 : 0;
    updateProject(currentIndex);
}); 

document.getElementById('arrow-up').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : projects.length - 1;
    updateProject(currentIndex);
}); 

//initialize with the first project by default 
updateProject(currentIndex, true);