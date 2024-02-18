const videos = Array.from(document.querySelectorAll("[data-duration]"));

let videosFiltered = videos
  .filter((e) => {
    return e.textContent.includes("JAVASCRIPT LANJUTAN");
  })
  .map((item) => item.dataset.duration)
  .map((time) => {
    const parts = time.split(":");
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
  })
  .reduce((acc, cur) => {
    return acc + cur;
  });

  let videosCount = videos
  .filter((e) => {
    return e.textContent.includes("JAVASCRIPT LANJUTAN");
  }).length;

const jam = Math.floor(videosFiltered/3600);
const menit = Math.floor((videosFiltered - jam * 3600) / 60);
const detik = Math.floor((videosFiltered - ((jam * 3600) + (menit * 60))));

console.log(videosFiltered);
console.log(jam);
console.log(menit);
console.log(detik);

const countVideos = document.getElementsByClassName('jumlah-video');
countVideos[0].innerHTML = `${videosCount}`;
const countDuration = document.getElementsByClassName('total-durasi');
countDuration[0].innerHTML = `${jam}:${menit}:${detik}`;