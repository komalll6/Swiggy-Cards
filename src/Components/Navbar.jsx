import react from 'react';
function Navbar() {
    return (
        <>
        <h3 className="cursor-pointer">Swiggyyy</h3>
            <ul className='list-disc pl-5'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </>
    );
}
export default Navbar;