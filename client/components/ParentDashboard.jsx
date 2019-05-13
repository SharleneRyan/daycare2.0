import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};




class ParentDashboard  extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
componentWillMount(){
  this.setState({value: this.props.childList()})
}
  render (){ console.log(this.state)
  return(
    <div>
            <div className="padding"></div>
            <br/>
            <br/>
            <br/>

            <div>
            <h2 className='DashHeader'>PARENT DASHBOARD</h2>
            </div>
{/*             

            <div>
            <h2 className='DashHeader'>Children Signed Up</h2>
            <p className='DashText'>{this.state.value.payload[0].first_name}</p>
            <br/>
            <Link to='/parent/registerchild'><button clasName="DashButton">add child</button></Link> <br/>
             <br/>
       </div>
       */}
     <div>

      <h2 className='DashHeader'>Waitlist</h2>
      <p className='DashText'>{this.state.value.payload[0].first_name}</p>
      {this.state.value.payload.map(item =>
              <div>
            <p className='DashSubText'>Day Care Center: {item.center_name}</p>
            <p className='DashSubText'>Status: {item.status}</p>
             <p className='DashSubText'>Position: {item.rank_ecc}</p>
            </div>
        )}

        <br/>
      <Link to='/parent/filter'><button className="DashButton">search early childhood centers</button></Link>
      
      </div>
      
 
  </div>
  )
}

}
const mapStateToProps = (state) => {
  return {
    data : state.Child
  }
}

// export const styles1 = withStyles(styles)(MediaCard)
export default connect (mapStateToProps,actions)(ParentDashboard);

