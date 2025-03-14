document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("profile-container");
    const loadingMsg = document.getElementById("loading-msg");

    // Fetch LeetCode Stats
    fetch('https://leetcode-stats-api.herokuapp.com/divyanshojha99')
        .then(response => {
            if (!response.ok) {
                throw new Error(`LeetCode API error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const leetCodeCard = `
                <div class="bg-gray-800 p-6 rounded-lg shadow-xl hover:transform hover:scale-105 transition-transform">
                    <h3 class="text-xl font-semibold text-yellow-400 mb-4">🔥 LeetCode Profile</h3>
                    <p class="text-gray-300 mb-2"><strong>Total Solved:</strong> ${data.totalSolved}</p>
                    <p class="text-gray-300 mb-2"><strong>Ranking:</strong> ${data.ranking}</p>
                    <p class="text-gray-300 mb-2"><strong>Acceptance Rate:</strong> ${data.acceptanceRate}%</p>
                    <p class="text-gray-300 mb-2"><strong>Easy/Medium/Hard:</strong> ${data.easySolved}/${data.mediumSolved}/${data.hardSolved}</p>
                    <a href="https://leetcode.com/divyanshojha99/" target="_blank"
                        class="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-transform">
                        Visit LeetCode Profile 🚀
                    </a>
                </div>`;
            container.innerHTML += leetCodeCard;
            loadingMsg.style.display = 'none';
        })
        .catch(error => {
            console.error('Error fetching LeetCode stats:', error);
            loadingMsg.textContent = 'Failed to load LeetCode profile.';
        });

    // Fetch GFG Stats (JSON response)
    fetch('https://geeks-for-geeks-stats-api.vercel.app/?raw=y&userName=divyanshojha2003')
        .then(response => {
            if (!response.ok) {
                throw new Error(`GFG API error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const gfgCard = `
                <div class="bg-gray-800 p-6 rounded-lg shadow-xl hover:transform hover:scale-105 transition-transform">
                    <h3 class="text-xl font-semibold text-green-400 mb-4">💻 GeeksforGeeks Profile</h3>
                    <p class="text-gray-300 mb-2"><strong>Total Solved:</strong> ${data.totalProblemsSolved}</p>
                    <p class="text-gray-300 mb-2"><strong>School/Basic:</strong> ${data.School}/${data.Basic}</p>
                    <p class="text-gray-300 mb-2"><strong>Easy/Medium/Hard:</strong> ${data.Easy}/${data.Medium}/${data.Hard}</p>
                    <a href="https://auth.geeksforgeeks.org/user/divyanshojha2003" target="_blank"
                        class="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-transform">
                        Visit GFG Profile 🚀
                    </a>
                </div>`;
            container.innerHTML += gfgCard;
            loadingMsg.style.display = 'none';
        })
        
        .catch(error => {
            console.error('Error fetching GFG stats:', error);
            loadingMsg.textContent = 'Failed to load GFG profile.';
        });
});

// Coding Ninjas Dynamic Card Generator
function loadCodingNinjasCard() {
    // You can replace these static values later with dynamic fetch/scraped API data
    const stats = {
        problemsSolved: 623,
        easy: 393,
        moderate: 165,
        hard: 37,
        ninja: 28,
        rating: 4587,
        rankTitle: "Grand Master",
        rankPercent: "Top 1%",
        submissions: 104,
        contestsAttended: 41,
        lastContest: "Weekly Contest 124",
        solvedInLastContest: 2,
        rankInLastContest: "88/720",
        profileUrl: "https://www.codingninjas.com/codestudio/profile/astro"
    };

    const cardHtml = `
    <div class="bg-gray-800 p-6 rounded-2xl shadow-xl hover:transform hover:scale-105 transition-transform w-full max-w-lg mx-auto">
        <h3 class="text-2xl font-semibold text-red-400 mb-4">👨‍💻Coding Ninjas Stats</h3>

        <div class="text-center mb-4">
            <p class="text-white text-3xl font-bold">${stats.problemsSolved}</p>
            <p class="text-gray-400">Problems Solved</p>
            <p class="text-sm text-gray-400 mt-2">${stats.easy} Easy • ${stats.moderate} Moderate • ${stats.hard} Hard • ${stats.ninja} Ninja</p>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="bg-gray-700 p-4 rounded-xl text-center">
                <p class="text-orange-400 text-2xl font-bold">${stats.rating}</p>
                <p class="text-gray-300 text-sm">Current Rating</p>
            </div>
            <div class="bg-gray-700 p-4 rounded-xl text-center">
                <p class="text-yellow-400 text-xl font-bold">${stats.rankTitle}</p>
                <p class="text-gray-300 text-xs">${stats.rankPercent}</p>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="bg-gray-700 p-4 rounded-xl text-center">
                <p class="text-green-400 text-2xl font-bold">${stats.submissions}</p>
                <p class="text-gray-300 text-sm">Contest Submissions</p>
            </div>
            <div class="bg-gray-700 p-4 rounded-xl text-center">
                <p class="text-purple-400 text-2xl font-bold">${stats.contestsAttended}</p>
                <p class="text-gray-300 text-sm">Contests Attended</p>
            </div>
        </div>
    
        <a href="${stats.profileUrl}" target="_blank"
            class="inline-block mt-6 w-full px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition-transform text-center font-semibold">
            Visit Profile 🚀
        </a>
    </div>
    `;

    // Inject the card into the placeholder div
    document.getElementById('codingNinjasCard').innerHTML = cardHtml;
}

document.addEventListener('DOMContentLoaded', function () {
    loadCodingNinjasCard();
});

