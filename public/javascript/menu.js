console.log("Menu code runnning");

const openVotingButton = document.getElementById("openVoting");
const closeVotingButton = document.getElementById("closeVoting");

openVotingButton.addEventListener("click", function(e) {
    console.log("Open voting clicked");
});

closeVotingButton.addEventListener("click", function(e) {
    console.log("Close voting clicked");
});
