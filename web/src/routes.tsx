import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanegesMap';

function Routes() {
    return (
        <BrowserRouter>
            <AnimatePresence exitBeforeEnter>
                <Switch>
                    <Route path='/' exact component={Landing} />
                    <Route path='/app' component={OrphanagesMap} />
                </Switch>
            </AnimatePresence>
        </BrowserRouter>
    )
}

export default Routes;