import React, {Component} from 'react';
import "../style/main.css";
import {Redirect} from 'react-router-dom';
import Header from './Header';
import {connect} from "react-redux";

 class Error extends Component {
     constructor(props) {
         super(props);
         this.state={
             redirect:false
         };
        this.retry = this.retry.bind(this);
     }
     retry(){
         this.props.dispatch({text: true, type: 'ADD_REDIRECT'});
         this.setState({redirect:true})
     }
    render() {
        if (this.state.redirect) {
            return <Redirect to='/'/>
        }
        return (
            <div>
                <Header />
                <div className={'content'}>
                    <div className={'titleWithError'}>
                        <img alt='idscango' className={'icon'}
                             src={require('../assets/images/icon_attention@2x.png')}/>
                        <p className={'title'}>Unable to detect ID.</p>
                    </div>
                    <div className={'instructions'}>
                        <ul className={'rectangleList'}>
                            <li>Place ID close to device.</li>
                            <li>Ensure sufficient light.</li>
                            <li>Hold device steady.</li>
                            <li>Make sure all edges of the ID are visible.</li>
                            <li>Make sure there are no glare and shadows on the ID.</li>
                        </ul>
                        <div className={'imageExample'}>
                            <div className={'imageType'}>
                                <img alt='idscango' className={'image'}
                                     src={require('../assets/images/image_correct.jpg')}/>
                                <div className="imageMessage">
                                    <img alt='idscango' className={'icon'}
                                         src={require('../assets/images/icon_checked@2x.png')}/>
                                    <p>correct</p>
                                </div>
                            </div>
                            <div className={'imageType'}>
                                <img alt='idscango' className={'image'}
                                     src={require('../assets/images/image_incorrect.jpg')}/>
                                <div className="imageMessage">
                                    <img alt='idscango' className={'icon'}
                                         src={require('../assets/images/icon_attention@2x.png')}/>
                                    <p>incorrect</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'buttonBd'} onClick={this.retry} >
                        <p className={'buttonBdText'}>Retry</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    retry: state.retry,
});
export default connect(mapStateToProps)(Error);