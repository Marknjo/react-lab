import logo from '../../assets/logo.svg'

const Layout:React.FC = function({children}) {
    return (
      <div className="App-header">
        <header >
          <img src={logo} className="App-logo" alt="logo" />
        </header>
  
        <main>
          {children}
        </main>
      </div>
    )
  }


  export default Layout;