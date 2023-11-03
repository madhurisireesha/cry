import {Component} from 'react'
import  Loader from 'react-loader-spinner'
import Currencyitem from './Currencyitem'
import Currencylist from './Currencylist'
import '../styles/tracker.css'
class Currencytracker extends Component{
    state={
        crylist:[],
        isLoading:true
    }
    componentDidMount(){
        this.getDetails()
    }
    getDetails=async()=>{
        const response=await fetch("https://apis.ccbp.in/crypto-currency-converter")
        //console.log(response)
        const data=await response.json()
       console.log(data)
        const updatedlist=data.map((item)=>({
            id:item.id,
            currencyName:item.currency_name,
            usdValue:item.usd_value,
            euroValue:item.euro_value,
            
            currencyLogo:item.currency_logo
        }))
            this.setState({
            crylist:updatedlist,
            isLoading:false
        })
    }
    render(){
        const{crylist,isLoading}=this.state
        console.log(crylist)
        console.log(isLoading)
        return(
            <div className='trackcontainer'>
              
                {isLoading?<Loader type="Rings" color="#ffffff" width={50} height={50}/>:
                <div className="innercontainer">
                    <h1 style={{color:"#00e7ff"}}>Cryptocurrency Tracker</h1>
                    <Currencylist/>
                    <div className='itemcontainer'>
                    
                    <div className="one">
                
                <div className="one1">
                    <li>Coin</li>
                    <li>Type</li>
                </div>
                <div className="one2">
                    <li>USD</li>
                    <li>Euro</li>
                </div>
                
            
        </div>
                    { crylist.map((details)=>(
                        <Currencyitem details={details} key={details.id}/>
                    ))}
                    </div>
                </div>
                }
                
            </div>
        )
    }
}
export default Currencytracker