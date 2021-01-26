import './Login.css'

function Login(){

   return(

      <dev className="Login" style={{display: "none"}}>
         <div class="container col-sm-12">
            <form className="LoginForm rounded">

               <div className="LoginForm-header pb-4">
                  <h2>Sign In</h2>
               </div>

               <div class="form-group">
                  <div class="col-sm-1-12">
                     <input type="text" class="form-control" name="email" id="email" placeholder="Email" />
                  </div>
               </div>
               
               <div class="form-group">
                  <div class="col-sm-1-12">
                     <input type="text" class="form-control" name="email" id="email" placeholder="Email" />
                  </div>
               </div>

               <div class="form-group">
                  <div class="tombol-login">
                     <button type="submit" class="btn btn-danger">Sign In</button>
                  </div>
               </div>

               <div className="form-group">
                  <div className="signupnow">
                     Don't have an account? Click <a href="#">Here</a>
                  </div>
               </div>

            </form>
         </div>
      </dev>

   )

}

export default Login