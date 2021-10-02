import { useState } from "react";
import { Nav } from "./components";
import { Login, Contact, Locations, Services, Home } from "./pages"

export type Page = 'login' | 'contact' | 'services' | 'locations' | 'home' | ''

const App = () => {

  const [page, setPage] = useState<Page>('home' /* valor por defecto del state */)

  const renderPage = () => {

    switch(page) {
      case 'home' : 
        return <Home />

      case 'contact' : 
        return <Contact />
        
      case 'services' : 
        return <Services />

      case 'locations' : 
        return <Locations />

      default : 
        return <Login />
    }

  }

  return (
    <div className="App">

      <Nav page={page} onChangePage={setPage} />
      
      {renderPage()}
      
    </div>
  );
}

export default App;
