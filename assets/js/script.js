:root{
  --bg:#fff8f1;
  --text:#2b1d14;
  --muted:#6b4a3a;
  --red:#b51e1e;
  --red-dark:#8f1717;
  --card:#ffffff;
  --shadow:0 8px 24px rgba(0,0,0,.12);
}

*{margin:0;padding:0;box-sizing:border-box}

body{
  font-family:system-ui,-apple-system,Segoe UI,sans-serif;
  background:var(--bg);
  color:var(--text);
  line-height:1.6;
}

img{max-width:100%;display:block}
a{text-decoration:none;color:inherit}

/* HEADER */
.site-header{
  background:#fff;
  border-bottom:1px solid #eee;
  position:sticky;
  top:0;
  z-index:999;
}
.header-inner{
  max-width:1200px;
  margin:auto;
  padding:14px 18px;
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.brand{display:flex;align-items:center;gap:10px}
.brand-logo{width:42px}
.brand-text{font-weight:800}

.main-nav{display:flex;gap:20px}
.main-nav a{font-weight:600;font-size:14px}
.full-menu-link{
  background:var(--red);
  color:#fff;
  padding:8px 14px;
  border-radius:20px;
}

/* MOBILE NAV */
.menu-btn{display:none;cursor:pointer}
.menu-btn div{
  width:26px;height:3px;background:#333;margin:5px 0;
}

/* HERO */
.hero-carousel{
  position:relative;
  height:60vh;
  overflow:hidden;
}
.hero-carousel img{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
  opacity:0;
  transition:opacity .8s ease;
}
.hero-carousel img.active{opacity:1}

.hero{
  margin-top:-120px;
}
.hero-overlay{
  max-width:1100px;
  margin:auto;
  background:rgba(255,255,255,.95);
  border-radius:24px;
  padding:40px;
  box-shadow:var(--shadow);
}
.hero h1{font-size:36px}
.hero-actions{display:flex;gap:12px;margin:18px 0}

.btn{
  padding:12px 22px;
  border-radius:30px;
  border:2px solid var(--red);
  font-weight:700;
}
.btn-red{
  background:var(--red);
  color:#fff;
}
.btn-red:hover{background:var(--red-dark)}

/* SECTIONS */
.section{padding:80px 20px}
.section-alt{background:#f3ece6}
.container{max-width:1200px;margin:auto}
.section-title{font-size:32px;margin-bottom:30px}

/* CARDS */
.card{
  background:#fff;
  border-radius:18px;
  padding:22px;
  box-shadow:var(--shadow);
  margin-bottom:22px;
}

/* DEALS */
.deal{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:24px;
  align-items:center;
}
.deal img{border-radius:18px}

/* GIFTCARD */
.giftcard-wrapper{display:flex;justify-content:center;margin:30px 0}
.giftcard-img{max-width:460px;border-radius:18px;box-shadow:var(--shadow)}

/* FOOTER */
.site-footer{
  background:#1f140e;
  color:#f2e9e1;
  padding:50px 20px;
}
.footer-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:30px;
}
.footer-bottom{
  margin-top:30px;
  text-align:center;
  font-size:14px;
  opacity:.7;
}

/* MOBILE */
@media(max-width:900px){
  .main-nav{
    position:absolute;
    top:70px;
    right:20px;
    background:#fff;
    flex-direction:column;
    padding:20px;
    border-radius:18px;
    box-shadow:var(--shadow);
    display:none;
  }
  .main-nav.open{display:flex}
  .menu-btn{display:block}
  .hero-carousel{height:45vh}
  .hero-overlay{padding:24px}
  .hero h1{font-size:26px}
  .deal{grid-template-columns:1fr}
}
