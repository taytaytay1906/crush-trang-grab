const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

noBtn.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random() * 300) + 50;
  const j = Math.floor(Math.random() * 300) + 50;
  noBtn.style.position = "absolute";
  noBtn.style.left = `${i}px`;
  noBtn.style.top = `${j}px`;
});

yesBtn.addEventListener('click', () => {
  document.body.innerHTML = `
    <div class="container">
      <h1>🥰 Công chúa Trang đã tha lỗi rồi! 🥰</h1>
      <p>Grab hứa sẽ không làm công chúa buồn nữa!</p>
    </div>
  `;
});
