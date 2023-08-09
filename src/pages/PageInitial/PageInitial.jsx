import React from 'react'
import ApresentationPage from '../../components/ApresentationPage/ApresentationPage'
import FaleConosco from '../../components/FaleConosco/FaleConosco'
import InitialPage from '../../components/InitialPage/InitialPage'
import PageInterfaceAmigavel from '../../components/PageInterfaceAmigavel/PageInterfaceAmigavel'
import PlanosPage from '../../components/PlanosPage/PlanosPage'

const PageInitial = () => {
    return (
        <>
            <InitialPage />
            <ApresentationPage />
            <PageInterfaceAmigavel />
            <PlanosPage />
            <FaleConosco />
        </>
    )
}

export default PageInitial