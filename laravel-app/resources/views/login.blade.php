<!DOCTYPE html>
<html lang="en">
<!--Login Page-->
<body>
  <div class="page-content">
    <div class="login-container"> <!--Login Content Container-->
      <div class="card">
        <div class="card-body d-flex flex-column">
          <div class="login-content">
            <div class="logo">
              <div class="media">
                <img src="/src/assets/img/colimaGobiernoDelEstado.png" alt="logo">
              </div>
            </div>
            <h1 class="card-title">Sign In</h1>
            <div class="login-form">
              <form id="login">
                  <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" aria-label="Username" placeholder="Username">
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" aria-label="Password" placeholder="Password">
                  </div>
                  <button type="submit" class="btn btn-primary">Sign In</button>
                  <div class="signUp-container">
                    <p>
                      Need an account?
                      <a id="signUp-btn" class="btn-signUp" href="/src/components/patient_user/sign_up.html" data-page="/src/components/patient_user/sign_up.html">Create one here</a>
                    </p>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <script src="/src/loadLogin.js"></script>
    <script type="module" src="/src/main.js"></script>
</body>
<style>
  .page-content {
    background:#F9F9F9;
  }
  .login-container {
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height: 100vh;
  }
  .card {
    width: 500px;
    height: 540px;
    flex-shrink: 0;
    border-radius: 14px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    background: #FAFAFA;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px;
  }
  .logo{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom: 20px;
  }
  .login-content{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
  }
  .card-title{
    text-align: center;
    color: #000;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 10px;
  }
  .login-form{
    display:flex;
    max-width: 336px;
    width:100%;
    flex-direction: column;
    justify-content:center;
    align-items:center;
  }
  .form-group{
    margin-top: 10px;
    display: flex;
    width: 100%;
    flex-direction: column;
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .form-control{
    border-radius: 8px;
    border: 1px solid #000;
    background: #FFF;
    width: 336px;
    height: 60px;
    margin-bottom: 10px;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .btn{
    margin-top: 20px;
    width: 336px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #6F1A34;
    --bs-btn-border-color: #6F1A34;
    --bs-btn-bg-color: #6F1A34;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .btn:hover{
    background: #808080;
    --bs-btn-hover-border-color: #808080;
    --bs-btn-hover-bg-color: #808080;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  }
  .logo img {
    margin: 0 auto;
    display:block;
    width:25vw;
    max-width: 25%;
    height: auto;
}
  .signUp-container {
    margin-top:1rem;
    display:flex;
    flex-direction:column;
    align-items: center;
}
</style>
</html>