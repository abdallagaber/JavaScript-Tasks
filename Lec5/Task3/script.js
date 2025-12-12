const openAdWindowBtn = document.getElementById("openAdWindowBtn");

openAdWindowBtn.addEventListener("click", () => {
  const adWindow = window.open("", "", "width=600,height=400");

  adWindow.document.head.innerHTML += `<style>html { scroll-behavior: smooth; }</style>`;

  for (let i = 0; i < 10; i++) {
    adWindow.document.body.innerHTML += `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
      <h1>Special Offer [${i + 1}]!</h1>
      <p>Get 50% off on all products. Limited time offer!</p>
      <button id="closeAdBtn" style="padding: 10px 20px; font-size: 16px;">Close Ad</button>
    </div>
  `;
  }

  adWindow.scrollTo({
    top: adWindow.document.body.scrollHeight,
    behavior: "smooth",
  });

  adWindow.onscroll = () => {
    if (
      adWindow.innerHeight + adWindow.scrollY >=
      adWindow.document.body.offsetHeight
    ) {
      adWindow.close();
    }
  };
});
