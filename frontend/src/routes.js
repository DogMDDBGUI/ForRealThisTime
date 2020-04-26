import { LoginPage } from './Components/Login'
import { Home, MyProfile, Profile, Editor } from './Components/HomePage'
import { VetDashboard } from './Components/Vet'
import { AppointmentEditor, AppointmentDashboard } from './Components/Appointment'
import { DogTable, DogEditor } from './Components/Dog'

export const ROUTES = [
  {path: '/dogs/edit/:id', component: DogEditor},
  {path: '/dogs/:id', component: DogTable},
  {path: '/user/:id', component: Profile},
  {path: '/user', component: MyProfile},
  {path: '/edit', component: Editor},
  {path: '/book/:id', component: AppointmentEditor},
  {path: '/vet/appointments/:id', component: AppointmentDashboard},
  {path: '/vets', component: VetDashboard},
  {path: '/home', component: Home},
  {path: '/login', component: LoginPage},
  {path: '/appointments', component: AppointmentDashboard},
  {path: '/', component: LoginPage},
]