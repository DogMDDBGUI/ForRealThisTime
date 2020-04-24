import { LoginPage } from './Components/Login'
import { Home, MyProfile, Profile, Editor } from './Components/HomePage'
import { VetProfile, AppointmentDashboard, VetDashboard } from './Components/Vet'
import { UserProfile } from './Components/Profile/UserProfile'

export const ROUTES = [
  {path: '/user/:id', component: Profile},
  {path: '/user', component: MyProfile},
  {path: '/edit', component: Editor},
  {path: '/vet/appointments/:id', component: AppointmentDashboard},
  {path: '/vets', component: VetDashboard},
  {path: '/home', component: Home},
  {path: '/login', component: LoginPage},
  {path: '/appointments', component: AppointmentDashboard},
  {path: '/', component: LoginPage},
]