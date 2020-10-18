import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanegesMap';
import CreateOrphanage from './pages/CreateOrphanage';
import Orphanage from './pages/Orphanage';

function Routes() {
    return (
        <BrowserRouter>
            <AnimatePresence exitBeforeEnter>
                <Switch>
                    <Route path='/' exact component={Landing} />
                    <Route path='/app' component={OrphanagesMap} />
                    <Route path='/orphanage/create' component={CreateOrphanage} />
                    <Route path='/orphanage/:id' component={Orphanage} />
                </Switch>
            </AnimatePresence>
        </BrowserRouter>
    )
}

export default Routes;