import '../style_sheets/index.css'
import '../style_sheets/mainComponents.css'

const React = require('react')

class MainBody extends React.Component{
    render() {
        return (
            <div className='text span_all absolute inline-block'>
                <h1 className='top_heading'>Search page wassup</h1>
            </div>
        )
    }
}


export {MainBody}
