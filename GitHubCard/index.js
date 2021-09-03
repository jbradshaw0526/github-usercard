axios.get(`https://api.github.com/users/jbradshaw0526`)
      .then(response => {
        let card = githubCard(response.data)
        let dom = document.querySelector('.cards')
        dom.appendChild(card);
      })
      .catch(err => {
        console.log(err)
      })

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
followersArray.forEach(userName => {
  axios.get(`https://api.github.com/users/${userName}`)
        .then(response => {
          let card = githubCard(response.data)
          let dom = document.querySelector(`.cards`)
          dom.appendChild(card)
        })
        .catch(error => {
          console.log(error)
        })
})


function githubCard (user){
  const profileCard = document.createElement('div');
  const cardImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardName = document.createElement('h3');
  const cardUsername = document.createElement('p');
  const location = document.createElement('p');
  const cardProfile = document.createElement('p');
  const pageUrl = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  profileCard.classList.add('card');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name');
  cardUsername.classList.add('username');
  cardImage.src = user.avatar_url;

  cardName.textContent = `${user.name}`;
  cardUsername.textContent = `${user.login}`;
  location.textContent = `Location: ${user.location}`;
  cardProfile.textContent = `Profile: ${user.html_url}`;
  followers.textContent = `Followers: ${user.followers}`;
  following.textContent = `Following: ${user.following}`;
  bio.textContent = `Bio: ${user.bio}`;

  profileCard.appendChild(cardImage);
  profileCard.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUsername);
  cardInfo.appendChild(location);
  cardInfo.appendChild(cardProfile);
  cardInfo.appendChild(pageUrl);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);


  return profileCard;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
