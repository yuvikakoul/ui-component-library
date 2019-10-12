import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faTh } from '@fortawesome/free-solid-svg-icons'

import Page from './components/layout/page'

import './App.css';

library.add(fab, faHome, faTh)

function App() {
  return (
    <>
     <Page/>
     </>
  );
}

export default App;
