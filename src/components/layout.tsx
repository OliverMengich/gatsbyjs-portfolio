import * as React from 'react';
const headerStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center'
}
type PageData = {
    children: React.ReactNode
}
const Layout =({children}: PageData )=>{
    return(
        <body style={{boxSizing:'border-box'}}>
            <header style={headerStyles}>
                <h1>
                    Oliver Kipkemei
                </h1>
                <nav >
                    <ul style={{listStyle: 'none', display:'flex'}}>
                        <li style={{marginRight:'10px'}}>Home</li>
                        <li style={{marginRight:'10px'}}>About</li>
                        <li style={{marginRight:'10px'}}>Blogs</li>
                        <li style={{marginRight:'10px'}}>Contact</li>
                        <button style={{marginRight:'10px'}}>Hire Me</button>
                        <button  style={{marginRight:'10px'}}>Light Mode</button>
                    </ul>
                </nav>
            </header>
            {children}
        </body>
    )
}
export default Layout;