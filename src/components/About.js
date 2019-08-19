import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'


class About extends Component {
    render(){
        const popover = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Need help?</Popover.Title>
              <Popover.Content>
                This Page is the <strong>About</strong> content. All you need to know are here.
              </Popover.Content>
            </Popover>
          );
        return(
            <div>
                <Jumbotron>
                    <Container>
                    <OverlayTrigger trigger="hover" placement="top" overlay={popover}>
                        <h1 className='text-center jumbotron-header'>About Us</h1>
                    </OverlayTrigger>
                            <Container>
                                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo bibendum egestas. Duis ullamcorper velit id sem posuere porta. Donec vel massa velit. Integer libero eros, tempor eget suscipit convallis, scelerisque vel enim. Donec convallis risus sit amet massa dapibus, ac tristique lacus vehicula. Vestibulum vehicula mauris at vehicula bibendum. Etiam sed mattis neque. Integer et mauris lorem. Sed arcu felis, tincidunt quis quam quis, posuere lobortis ante. Phasellus sit amet fringilla enim, vel ultricies purus. Ut non vestibulum risus. Nulla non eros massa. Morbi tempus ac neque ut gravida. Fusce et justo et dui mollis egestas id eu quam. Cras vitae ante consequat, suscipit velit eget, faucibus mauris. Quisque hendrerit sit amet nisi a congue.

Sed porttitor urna at libero posuere dapibus. Maecenas eget finibus erat, nec porttitor lorem. Vivamus nec congue sem. Integer at laoreet diam. Maecenas accumsan arcu ut lectus vestibulum scelerisque. Integer vehicula congue viverra. Aenean scelerisque eu erat et tincidunt. Etiam porta luctus massa ut porta. In quis urna velit. Sed aliquet odio arcu, sed dapibus erat pharetra at. Donec id enim ullamcorper nisi feugiat posuere eu ac est. Vestibulum molestie varius sagittis. Aenean at eros justo. Etiam vitae viverra libero. Praesent accumsan mollis justo eget posuere.

Proin malesuada, tortor non eleifend viverra, quam elit pharetra turpis, a sollicitudin nibh ligula et nunc. Vivamus ultricies magna id eros consequat, et scelerisque felis semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vulputate imperdiet eros, vitae malesuada ipsum blandit eu. Suspendisse venenatis, ex non viverra tempus, massa libero tincidunt lectus, eu ornare eros ante id tortor. Vivamus porta est sit amet cursus porta. Maecenas iaculis dolor metus, eu feugiat felis malesuada sed. Duis nec fermentum tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed turpis pellentesque ante posuere mattis nec et odio. Aenean dictum efficitur ex sed placerat.

Phasellus tincidunt mi non tincidunt volutpat. Curabitur gravida lacus vitae consequat euismod. Mauris libero ante, volutpat a dolor a, fermentum bibendum felis. Maecenas vehicula dolor eget justo tristique accumsan. Nunc non cursus nulla, non faucibus ligula. Curabitur ultricies mi at lectus porta, sit amet placerat mi lobortis. Maecenas ac dignissim massa, non faucibus orci. Ut malesuada elit ut eros condimentum ultricies. Aliquam nibh enim, interdum ut massa non, hendrerit maximus turpis. Duis at lacinia arcu. Aliquam erat volutpat. Nulla vulputate imperdiet blandit. Pellentesque vitae sapien nec ex dictum imperdiet. Praesent imperdiet, nisl nec fringilla congue, orci libero congue ex, gravida commodo nunc dui ut turpis. Vivamus sodales, est et placerat rhoncus, sapien erat gravida sem, sollicitudin blandit massa risus vitae mi. Donec in ultrices orci.

Ut sollicitudin bibendum hendrerit. Suspendisse tempus neque nunc, sit amet dapibus libero dictum quis. Quisque diam erat, mollis vel tincidunt ac, auctor vel diam. Praesent consequat pulvinar laoreet. Pellentesque vestibulum ultricies tellus, et pulvinar ipsum iaculis a. Pellentesque ut quam id sem ullamcorper viverra quis eget metus. Donec volutpat, turpis eu semper porta, libero nisi ultrices urna, vitae accumsan nulla neque in arcu. Proin sodales purus vel ante consequat, quis pellentesque nisl pretium. In interdum ut purus id iaculis.</p>
                                <p className="text-justify">
                                Donec ornare blandit feugiat. Nulla iaculis est sed leo condimentum, tincidunt efficitur velit auctor. Fusce blandit aliquam aliquet. Nullam vitae porttitor nunc. Nam ullamcorper posuere magna in malesuada. Pellentesque in mollis dolor. Cras ac malesuada sem. Donec sodales nulla ut augue ornare congue. Aliquam dignissim turpis id mauris faucibus, sed mollis sapien posuere.

In ac semper erat, sit amet dignissim neque. Nulla viverra, neque laoreet tincidunt tincidunt, ex mi tristique urna, a maximus lacus sapien sed nisi. Mauris fringilla lorem sit amet efficitur facilisis. Donec orci quam, euismod ullamcorper dui bibendum, venenatis efficitur lorem. In eget dictum quam. Donec convallis pulvinar fringilla. Duis lobortis lacus velit, a tempor lectus varius maximus. Aliquam posuere eget risus id facilisis. Mauris sit amet justo tempor, semper sapien ut, laoreet lorem. Suspendisse consectetur hendrerit consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque maximus sit amet mauris non feugiat. Phasellus vehicula, dolor sit amet eleifend volutpat, dolor erat aliquam tortor, eu pulvinar ex turpis sed massa.

In finibus purus iaculis eros fermentum pretium. Donec ut dictum augue, ultricies accumsan elit. Mauris id sem eget ligula fermentum efficitur quis vel mauris. Etiam eu congue nisi, ut laoreet erat. Phasellus pulvinar sit amet neque at dignissim. Sed id interdum urna, eu varius erat. Vivamus fermentum metus leo, eu bibendum tellus finibus sit amet. Mauris mollis enim felis, eu interdum ligula tincidunt id. Nam dictum nibh ut ipsum maximus fermentum. Donec ac tellus vel justo sodales aliquam. Etiam sed urna ultrices, dapibus turpis sed, dapibus mi. Praesent bibendum, lectus non accumsan placerat, ligula magna pharetra dui, vitae commodo ex turpis vel nunc.

In at justo eget libero efficitur venenatis. Curabitur euismod nisl vitae felis fermentum iaculis. Pellentesque sagittis, metus in fringilla tristique, massa nulla fringilla eros, at tempor massa nunc ut arcu. Vestibulum leo elit, tincidunt vitae iaculis in, laoreet vitae enim. Proin eleifend eros eu nulla bibendum, et facilisis sapien molestie. Etiam fermentum tincidunt faucibus. Vestibulum aliquet ligula dui, tristique finibus libero gravida convallis. Phasellus magna orci, aliquet non feugiat sit amet, ullamcorper in arcu. Phasellus justo quam, vulputate in dictum a, congue id tellus. Quisque sagittis luctus sapien vel fringilla. Praesent vel ipsum at leo dapibus imperdiet at ut diam. Aenean euismod eros sem. Proin ac quam nec sapien dictum condimentum. Suspendisse vitae venenatis risus. Etiam scelerisque erat a velit faucibus elementum. Quisque auctor pellentesque lectus nec tempor.

Donec at dui vitae justo ultrices ornare. Morbi maximus eleifend est, non sollicitudin velit elementum sed. Maecenas dapibus, est nec feugiat rutrum, velit ante accumsan risus, et ullamcorper neque dolor vitae nulla. Aenean faucibus, orci non bibendum feugiat, arcu justo varius magna, nec accumsan metus arcu non lorem. Aenean porttitor consectetur sapien elementum ornare. Nullam cursus eget nulla eget gravida. Sed risus dolor, mollis a gravida vel, aliquet eu dolor. Nunc in egestas odio. Fusce eget orci erat.
                                </p>
                            </Container>
                    </Container>
                </Jumbotron>
     
            </div>
        )
    }
}
export default About