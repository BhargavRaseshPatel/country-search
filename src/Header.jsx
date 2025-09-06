
const Header = ({handlingSearch}) => {
  return (
    <div className='header'>
        <input type='text' placeholder='Search for countries...' onChange={(e) => handlingSearch(e.target.value)}/>
    </div>
  )
}

export default Header