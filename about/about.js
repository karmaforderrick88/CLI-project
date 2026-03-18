const memberInfo = [// holds info for each member
    {
    Name:'Derrick Ngeru',
    role:'Lead developer',
    description:'Specializes in architecting scalable Node.js environments and bridging the gap between legacy VB.NET systems and modern web interfaces.',
    imageUrl:'pics/final_pfp.jpeg',
    portfolio:'https://ricky.gamer.gd'
    },
    {
     Name:'Michelle Kigen',
     role:'UI/UX Designer',
    description:'Expert in crafting intuitive user interfaces and seamless user experiences, ensuring that the transition from VB.NET to web is smooth and visually appealing.',
    imageUrl:'pics/kigen.jpg',
    portfolio:'https://myportfolio-l8ey.onrender.com/'
    },
    {
    Name:'Dennis Munene',
    role:'Full Stack Developer',
    description:'Skilled in both front-end and back-end development, Dennis is adept at integrating VB.NET functionalities into modern web applications using frameworks like React and Express.',
    imageUrl:''
    },
    {
    Name:'Nancy Mwara',
    role:'QA Engineer',
    description:'Nancy is responsible for testing the web application to ensure that all features work correctly and that the transition from VB.NET does not introduce any bugs or issues.',
    imageUrl:''
    }

]
const members = [] // fully built member class objects
const $container = $('.members-container')
class Member{
    constructor(name,role,description,imageUrl,portfolio){
        this.name= name
        this.role= role
        this.description = description
        this.imageUrl = imageUrl
        this.portfolio = portfolio
    }

buildTemplate(){
const {name, role,description,imageUrl,portfolio} = this

if(typeof portfolio !== 'undefined'){
    return  `
    <div class="member-card">
    <div class="member-image-card">
    <img src="${imageUrl}" alt="${name}" class="member-photo">
    </div>
    <h3><a href="${portfolio}" target="_blank" class="portfolio-link" title="View Portfolio">${name}</a></h3>
    <span class="member-role">${role}</span>
    <p>${description}</p>
    </div>

`
}
return `
    <div class="member-card">
    <div class="member-image-card">
    <img src="${imageUrl}" alt="${name}" class="member-photo">
    </div>
    <h3>${name}</h3>
    <span class="member-role">${role}</span>
    <p>${description}</p>
    </div>

`
}
}

function createMember(){
   memberInfo.forEach((member)=>{
    const newMember = new Member(member.Name,member.role,member.description,member.imageUrl, member.portfolio)
    members.push(newMember)
   })

}



function render(){

    members.forEach(member => {
        $container.append(member.buildTemplate())
        
    });

}
createMember()
render()