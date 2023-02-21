import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const  Navbar2 = () => { 

  return (
    <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
              <a class="navbar-brand" href="/">Przybornik&trade;</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    
                  <li class="nav-item">
                  <a class="nav-link" href="/login">Login</a>
                  </li>    
                  <li class="nav-item">
                  <a class="nav-link" href="/calc/calc">Calculator</a>
                  </li>    
                  <li class="nav-item">
                  <a class="nav-link" href="/history">History</a>
                  </li>    
                  <li class="nav-item">
                  <a class="nav-link" href="/main/src/main">Dashboard</a>
                  </li>    
                
                </ul>
              </div>
          </div>
        </nav>
    </>
)
}