let shareCount = 0;
const maxShares = 5;

const shareBtn = document.getElementById('shareBtn');
const shareCountText = document.getElementById('shareCount');
const shareMessage = document.getElementById('shareMessage');
const form = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');

shareBtn.addEventListener('click', () => {
  if (shareCount < maxShares) {
    const message = encodeURIComponent("Hello Everyone, Join Tech For Girls Community");
    const url = `https://wa.me/?text=${message}`;
    window.open(url, '_blank');

    shareCount++
    shareCountText.textContent = `Click count: ${shareCount}/${maxShares}`;

    if (shareCount === maxShares) {
      shareMessage.textContent = "✅ Sharing complete. Please continue.";
    }
  } else {
    shareMessage.textContent = "✅ You've already completed the sharing.";
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (shareCount < maxShares) {
    alert("Please complete WhatsApp sharing (5 times) before submitting.");
    return;
  }

  form.classList.add('hidden');
  successMessage.classList.remove('hidden');
});


