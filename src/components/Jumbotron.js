// import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import './Jumbotron.css'
import React, {useState} from 'react'
import Collapse from 'react-bootstrap/Collapse'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'




const Jumbo = () => {
    const readMore = "Read More"
    const readLess = "Read Less"
    
      const [open, setOpen] = useState(false)
        return( 
            <Jumbotron>
              <OverlayTrigger
                key='top'
                placement='top'
                overlay={
                   <Popover id={`popover-positioned-$placement`}>
                                    <Popover.Title as="h3"></Popover.Title>
                                    <Popover.Content>
                                        <strong>What are we about?</strong>
                                    </Popover.Content>
                                    </Popover>
                }
              >
                      <h1 className="jumbotron-header">What is Shoe Shack?</h1>
              </OverlayTrigger>
            
            <p className="jumbotron-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque in ante ac sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean blandit ullamcorper erat, ac egestas nulla imperdiet et. Phasellus vel interdum nibh. Quisque venenatis magna urna, eget mollis orci ornare vehicula. Vivamus eu nulla eget dui sollicitudin cursus ac nec ante. Phasellus vitae ultrices nulla, sit amet sodales mauris. Vivamus elementum eleifend iaculis. Phasellus suscipit egestas tortor, id aliquam risus consectetur sit amet.
    
    Morbi rhoncus enim vel felis dignissim pharetra. Donec in neque ut leo blandit tempor. Quisque ligula elit, aliquam mattis porta ac, tempus quis nisi. Nam molestie, purus non posuere consectetur, magna erat egestas nisi, nec interdum urna elit id justo. Nullam at elementum urna, ut porta est. Sed egestas augue ac dui vehicula facilisis. Vestibulum rhoncus lacinia nunc non varius.
    
    Praesent eget quam vitae sem tempus sodales. Donec nec ante nibh. Nulla varius sit amet neque a dignissim. Ut mattis dolor vel sodales malesuada. Curabitur bibendum felis in lectus tempus, eu consequat libero cursus. Etiam dui mi, congue vitae nibh vel, convallis auctor est. Phasellus commodo dignissim mi in varius. Ut elementum faucibus lectus. Etiam ut odio non purus euismod egestas non ut massa. In dictum lacus non quam egestas hendrerit. Phasellus sodales id lectus et fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pellentesque sapien a dolor volutpat venenatis sed sit amet nulla. Sed congue erat nisl, eget sodales ligula semper in. Aliquam erat volutpat.
            </p>
            <Collapse in={open}>
                <div className="collapse-content">
                Aliquam tincidunt lacinia orci, sit amet consequat dolor vulputate vitae. Pellentesque finibus risus neque, ultricies egestas sem facilisis id. Sed auctor tellus in molestie rhoncus. Donec vulputate id ex ac eleifend. Donec ullamcorper, quam vel tempor sollicitudin, mi elit scelerisque lacus, a mattis risus erat at felis. Nunc condimentum odio et sapien ullamcorper, et porttitor nulla pharetra. Nulla vestibulum felis at metus sagittis commodo. Vivamus tempus nibh et lorem cursus auctor. Donec volutpat neque et sem rutrum faucibus eget ut leo. Nunc sagittis turpis ut nulla ultricies, eget condimentum odio condimentum. Proin ullamcorper, mauris dapibus dictum feugiat, mauris magna interdum nunc, et interdum tellus lectus et enim. Vestibulum hendrerit feugiat ligula, sit amet pulvinar metus blandit vel. Fusce neque arcu, euismod vel sem a, pretium egestas nisi. Vivamus blandit est neque, non tincidunt metus imperdiet venenatis. Proin at auctor tellus, at scelerisque justo.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla luctus sapien vel sapien finibus varius. Pellentesque a velit ac elit maximus laoreet quis ac ex. Sed ut magna libero. Etiam lorem neque, scelerisque nec imperdiet vitae, euismod in turpis. Donec nec justo ornare, accumsan lacus a, molestie mi. Sed eu condimentum ante. In non porta odio, eget sagittis risus. Morbi ornare nisi eget lectus ultrices, ac faucibus ligula mattis. Fusce euismod ligula nec ipsum hendrerit, vel consequat magna rhoncus. Quisque nec lacinia nisl. Suspendisse sollicitudin turpis sed velit aliquet, commodo accumsan dolor blandit.

Mauris arcu ipsum, pretium et tempor non, ultrices non est. Nullam tempor, nisi vitae accumsan dapibus, ligula sem volutpat metus, luctus rutrum augue turpis rhoncus neque. Nulla accumsan iaculis metus in dictum. Sed volutpat odio enim, et ornare turpis aliquam a. Nullam vulputate auctor velit non faucibus. Nulla orci nibh, sagittis sed ante suscipit, vestibulum sodales quam. Sed in ultricies nunc. Quisque sed nisi quam. Proin auctor aliquet urna eget sodales.
Nam nec fermentum est. In ullamcorper risus at ex tempor, eget venenatis ipsum volutpat. Aenean sed commodo dui. In ultricies tristique libero, sed dictum leo luctus eget. In porttitor purus a hendrerit gravida. Ut non arcu erat. Aliquam id tincidunt dolor. Phasellus venenatis ante et nunc ultrices fermentum. Duis pharetra suscipit sapien, quis accumsan nisl. Vestibulum eleifend dapibus nunc, nec convallis est sodales vitae.

Nam sit amet ex id ipsum scelerisque sagittis. Aliquam id est id libero volutpat efficitur non et enim. Fusce et sagittis lacus, in accumsan nulla. Quisque placerat, erat vitae aliquet viverra, elit eros imperdiet dolor, blandit maximus nisi metus eget nisi. Proin tempor nisl pharetra, vestibulum erat eu, ultricies nulla. Donec sit amet dui ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc nec sodales diam, quis rutrum sapien. Curabitur dignissim massa vitae velit congue faucibus.
                </div>
            </Collapse>
            <Button aria-controls="collapse-content" className="button-indent"  onClick={() => setOpen(!open)} aria-expanded={open} variant="dark" size="lg">{readMore}</Button>
            
            
            
            </Jumbotron>
        )
}
export default Jumbo