import React, {Component} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import './Jumbotron.css'
// import Collapse from 'react-bootstrap/Collapse'


class Jumbo extends Component{
    render(){
        function readMore(){
            return 
        }
        return( 
            <Jumbotron>
            <h1 className="jumbotron-header">What is Shoe Shack?</h1>
            <p className="jumbotron-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque in ante ac sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean blandit ullamcorper erat, ac egestas nulla imperdiet et. Phasellus vel interdum nibh. Quisque venenatis magna urna, eget mollis orci ornare vehicula. Vivamus eu nulla eget dui sollicitudin cursus ac nec ante. Phasellus vitae ultrices nulla, sit amet sodales mauris. Vivamus elementum eleifend iaculis. Phasellus suscipit egestas tortor, id aliquam risus consectetur sit amet.
    
    Morbi rhoncus enim vel felis dignissim pharetra. Donec in neque ut leo blandit tempor. Quisque ligula elit, aliquam mattis porta ac, tempus quis nisi. Nam molestie, purus non posuere consectetur, magna erat egestas nisi, nec interdum urna elit id justo. Nullam at elementum urna, ut porta est. Sed egestas augue ac dui vehicula facilisis. Vestibulum rhoncus lacinia nunc non varius.
    
    Praesent eget quam vitae sem tempus sodales. Donec nec ante nibh. Nulla varius sit amet neque a dignissim. Ut mattis dolor vel sodales malesuada. Curabitur bibendum felis in lectus tempus, eu consequat libero cursus. Etiam dui mi, congue vitae nibh vel, convallis auctor est. Phasellus commodo dignissim mi in varius. Ut elementum faucibus lectus. Etiam ut odio non purus euismod egestas non ut massa. In dictum lacus non quam egestas hendrerit. Phasellus sodales id lectus et fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pellentesque sapien a dolor volutpat venenatis sed sit amet nulla. Sed congue erat nisl, eget sodales ligula semper in. Aliquam erat volutpat.
            </p>
            <Button style={{'margin-left':'47%'}} onClick={readMore} variant="dark" size="lg">Read More</Button>
    
            <p className="jumbotron-content-hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque in ante ac sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean blandit ullamcorper erat, ac egestas nulla imperdiet et. Phasellus vel interdum nibh. Quisque venenatis magna urna, eget mollis orci ornare vehicula. Vivamus eu nulla eget dui sollicitudin cursus ac nec ante. Phasellus vitae ultrices nulla, sit amet sodales mauris. Vivamus elementum eleifend iaculis. Phasellus suscipit egestas tortor, id aliquam risus consectetur sit amet.
    
    Morbi rhoncus enim vel felis dignissim pharetra. Donec in neque ut leo blandit tempor. Quisque ligula elit, aliquam mattis porta ac, tempus quis nisi. Nam molestie, purus non posuere consectetur, magna erat egestas nisi, nec interdum urna elit id justo. Nullam at elementum urna, ut porta est. Sed egestas augue ac dui vehicula facilisis. Vestibulum rhoncus lacinia nunc non varius.
    
    Praesent eget quam vitae sem tempus sodales. Donec nec ante nibh. Nulla varius sit amet neque a dignissim. Ut mattis dolor vel sodales malesuada. Curabitur bibendum felis in lectus tempus, eu consequat libero cursus. Etiam dui mi, congue vitae nibh vel, convallis auctor est. Phasellus commodo dignissim mi in varius. Ut elementum faucibus lectus. Etiam ut odio non purus euismod egestas non ut massa. In dictum lacus non quam egestas hendrerit. Phasellus sodales id lectus et fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pellentesque sapien a dolor volutpat venenatis sed sit amet nulla. Sed congue erat nisl, eget sodales ligula semper in. Aliquam erat volutpat.
            </p>
    
            <p className="jumbotron-content-hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque in ante ac sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean blandit ullamcorper erat, ac egestas nulla imperdiet et. Phasellus vel interdum nibh. Quisque venenatis magna urna, eget mollis orci ornare vehicula. Vivamus eu nulla eget dui sollicitudin cursus ac nec ante. Phasellus vitae ultrices nulla, sit amet sodales mauris. Vivamus elementum eleifend iaculis. Phasellus suscipit egestas tortor, id aliquam risus consectetur sit amet.
            </p>
            
            </Jumbotron>
        )
    }
    
}
export default Jumbo