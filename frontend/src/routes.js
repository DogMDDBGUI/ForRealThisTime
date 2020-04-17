import { LoginPage } from './Components/Login'
import { Home } from './Components/HomePage'
import { VetProfile } from './Components/Vet'
import { UserProfile } from './Components/Profile/UserProfile'
export const ROUTES = [
  {path: '/vet/profile/:id', component: VetProfile},
  {path: '/usr/profile/:id', component: UserProfile},
  {path:'/home', component: Home},
  {path: '/login', component: LoginPage},
  {path: '/', component: LoginPage},
]