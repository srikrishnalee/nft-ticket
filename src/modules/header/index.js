import Header from "./header";
import BaseComponent from "../baseComponent";


class HeaderBar extends BaseComponent{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <Header/>
        )
    }
}


export default  HeaderBar