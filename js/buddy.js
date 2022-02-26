
const buddies = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayBuddies(data))

}

buddies()

 const displayBuddies = data => {
     const buddies = data.results;
     const buddiesDiv = document.getElementById('buddies');
     for(const buddy of buddies){
     //console.log(buddy)
     const p = document.createElement('p');
     p.innerHTML = `
      Name: ${buddy.name.title}, ${buddy.name.first}, ${buddy.name.last}, ${buddy.email}
     `;
     buddiesDiv.appendChild(p);
     }
 }







