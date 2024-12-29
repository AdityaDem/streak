// Get the streak count from localStorage or set to 0 if it doesn't exist
let streakCount = localStorage.getItem('streakCount') ? parseInt(localStorage.getItem('streakCount')) : 0;

// Display the current streak
document.getElementById('streak-count').textContent = streakCount;

// Handle the "Watch Ad" button click
document.getElementById('watch-ad-btn').addEventListener('click', function() {
    // Simulate watching an ad (e.g., waiting 5 seconds for an ad)
    setTimeout(function() {
        // When the ad is "watched", increase the streak by 1
        streakCount += 1;
        // Update the streak count in localStorage
        localStorage.setItem('streakCount', streakCount);
        // Update the streak count displayed on the page
        document.getElementById('streak-count').textContent = streakCount;
        alert('Ad watched successfully! Your streak has been updated.');
    }, 5000); // Simulate a 5-second ad watch time
});
