/* 共用 app-header 帳號選單:點擊姓名/頭像展開「案件總覽／登出」,點選單外側自動關閉 */
function toggleAccountMenu(){
  document.getElementById('accountMenu').classList.toggle('open');
}
document.addEventListener('click', function(e){
  const menu = document.getElementById('accountMenu');
  const trigger = document.querySelector('.user-trigger');
  if(!menu || !trigger) return;
  if(!trigger.contains(e.target) && !menu.contains(e.target)){
    menu.classList.remove('open');
  }
});
