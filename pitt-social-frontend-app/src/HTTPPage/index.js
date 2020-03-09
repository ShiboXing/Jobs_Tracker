const React = require('react');
const PropTypes = require('prop-types')
import styles from '../style_sheets/http.module.css'

console.log(styles)

class Mainbody extends React.Component {
    render() {
        return (
            <div>
                <h3>http demo</h3>
                <div id='Etch_Container' style={{width: '70vw', height: '40vw'}} className={styles.trans_x_center, styles.show_urself} >
                    <table className='ispan_w span_h'>
                        <tbody>
                            <tr>
                                <td>
                                    <Etch_A></Etch_A>
                                </td> 
                            </tr>
                            <tr> 
                                <td>
                                
                                </td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        )
    }
}



class Etch_A extends React.Component {
    
    static propTypes = {
        title: PropTypes.string
    }
    
    static defaultProps = {
        title: '[etch_a_sketch]'
    }


    render() {
        return (
            <div id='etch_a' >
                <h4 color='white'>{this.props.title}</h4>
            </div>
        )
    }
}


export {Mainbody}
