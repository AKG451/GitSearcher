//Setting up global variable for easy use
const userName = document.getElementById("user-name");
const userProfile = document.getElementById("profile");
const btnSearch = document.getElementById("btn-search");
const inputForm = document.getElementById("input-form");

//setting up an event listener for calling the fetchUser function
inputForm.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(userName.value);
    fetchUser(userName.value)
});

//async function where everything will be executed
async function fetchUser(username){
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    if (data.message === "Not Found") {
     userProfile.innerHTML = `<h3>User Not Found</h3>`;
     return;
    }
    const { avatar_url, name, bio, html_url, public_repos, followers, following, company, email, created_at, location, twitter_username } = data;
    console.log(data);
    
        const date = new Date(data.created_at).toLocaleDateString('en-GB', {

             day: 'numeric', month: 'short', year: 'numeric' 

        });



        userProfile.innerHTML = `
        <div class="card">
            <div class="profile-header">
                <img src="${avatar_url}" alt="user avatar" />
                <div class="profile-info">
                    <h2>${name || username}</h2>
                    <a href="${html_url}" target="_blank">@${username}</a>
                    <p class="joined-date">Joined ${date}</p>
                </div>
            </div>

            <p class="bio">${bio || "This profile has no bio"}</p>

            <div class="stats-box">
                <div class="stat-item">
                    <h4>Repos</h4>
                    <p>${public_repos}</p>
                </div>
                <div class="stat-item">
                    <h4>Followers</h4>
                    <p>${followers}</p>
                </div>
                <div class="stat-item">
                    <h4>Following</h4>
                    <p>${following}</p>
                </div>
            </div>

            <div class="links-grid">
                <p>📍 ${data.location || "Not Available"}</p>
                <p>🐦 ${twitter_username || "Not Available"}</p>
                <p>📧 ${email || "Not Available"}</p>
                <p>🏢 ${company || "Not Available"}</p>
            </div>
        </div> 
        `;
}
