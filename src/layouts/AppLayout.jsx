import { Outlet } from 'react-router-dom'
import AppHeader from '../components/Header'
import AppFooter from '../components/Footer'

export default function AppLayout() {


    return (
        <>

            <AppHeader />

            <main>
                <Outlet />
            </main>

            <AppFooter />

        </>

    )
}