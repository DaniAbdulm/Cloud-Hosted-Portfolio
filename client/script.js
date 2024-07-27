//creating array that stores the projects 
const projects = [
    {
        emoji:'🔍', 
        title: 'Pathfinding Algorithm Visualizer', 
        description: 'A react based web application that visualizes different pathfinding algorithms (currently breadth-first search and depth-first search). The user can create walls and see how the algorithms find the shortest path.', 
        link: 'https://github.com/DaniAbdulm/pathfinding-visualizer'
    },
    {
        emoji:'🧍', 
        title: 'Full Stack Patient Encryption System', 
        description: 'CipherMD is a secure React-based web application designed to manage patient data efficiently. The app leverages Firebase for backend operations, ensuring data is encrypted both at rest and in transit. Key features include user authentication, data encryption/decryption, and a comprehensive dashboard for managing patient records.', 
        link: 'https://github.com/DaniAbdulm/react-medical-form-encryption'
    }, 
    {
        emoji:'📡', 
        title: 'Vultus: Network Analyzer Using Python', 
        description: 'Vultus is an advanced network analysis tool designed to deliver comprehensive insights into network activity and infrastructure. It combines real-time data visualization with deep analysis capabilities to help network administrators optimize performance, enhance security, and ensure efficient network management.', 
        link: 'https://github.com/DaniAbdulm/python-network-analyzer'
    }
    //add more projects here
]; 

//color palette array 
const colorPalette = [
    '#8c7ae6', 
    '#ff9f43',
    '#ee5253',
    '#0abde3',
    '#10ac84',
    '#2e86de',
    '#5f27cd'
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
    const cardButton = document.querySelector('.learn-more-button');

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

        cardButton.setAttribute('onclick', `window.open('${project.link}', '_blank')`);

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

//implementing email form submission
document.getElementById('input-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    emailjs.sendForm('service_bnc8vji', 'template_bcvlpko', this)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         alert('Your message has been sent successfully!');
      }, function(error) {
         console.log('FAILED...', error);
         alert('There was an error sending your message. Please try again.');
      });
  });
  