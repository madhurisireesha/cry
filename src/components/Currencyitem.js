import '../styles/item.css'
const Currencyitem=(props)=>{
    const{details}=props
    const{id,currencyName,usdValue,euroValue,currencyLogo}=details
      
    return(
        <div className="itemcontainer">
            
            <div className="two">
            
                    <div className="two1">
                        <li><img src={currencyLogo} className='logo' alt="logo"/></li>
                        <li>{currencyName}</li>
                    </div>
                    <div className="two2">
                        <li>{usdValue}</li>
                        <li>{euroValue}</li>
                    </div>
                    
                
            </div>
        </div>
    )
}
export default Currencyitem