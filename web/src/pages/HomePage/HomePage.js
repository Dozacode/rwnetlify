import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
    
      <p>
        
        <Link to={routes.signup()}>Signup!</Link>`
      </p>
    </>
  )
}

export default HomePage
