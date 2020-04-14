import { LoginPage } from './Components/Login'
import { Home } from './Components/HomePage'
import { VetProfile } from './Components/Vet'

export const ROUTES = [
  {path: '/vet/profile/:id', component: VetProfile},
  {path: '/login', component: LoginPage},
  {path: '/', component: Home},
]