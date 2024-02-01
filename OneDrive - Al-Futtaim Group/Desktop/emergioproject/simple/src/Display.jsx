


const Display = ({ input }) => {
  return (
    <div> <h2>Submitted Data</h2>
    <p>Username: {input.username}</p>
    <p>Email: {input.email}</p>
    <p>Password: {input.password}</p>
    <p>Confirm: {input.confirm}</p></div>
    
  )
}

export default Display