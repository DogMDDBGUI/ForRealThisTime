import { LoginPage } from './Components/Login'
import { Home } from './Components/HomePage'
import { VetProfile, AppointmentDashboard, VetDashboard } from './Components/Vet'
import { UserProfile } from './Components/Profile/UserProfile'

export const ROUTES = [
  {path: '/vet/profile/:id', component: VetProfile},
  {path: '/vet/appointments/:id', component: AppointmentDashboard},
  {path: '/vets', component: VetDashboard},
  {path: '/usr/profile/:id', component: UserProfile},
  {path: '/home', component: Home},
  {path: '/login', component: LoginPage},
  {path: '/appointments', component: AppointmentDashboard},
  {path: '/', component: LoginPage},
]