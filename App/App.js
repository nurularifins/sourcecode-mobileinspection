import './Config'
import DebugConfig from './Config/DebugConfig'
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import createSore from './Redux';
import RootNavigation from './Navigation/RootNavigation'

const store = createSore();
class AppMain extends Component{

    render(){
        return(
            <Provider store={store}>
                <RootNavigation/>
            </Provider>
        )
    }
}

// allow reactotron overlay for fast design in dev mode
export default (DebugConfig.useReactotron ? console.tron.overlay(AppMain) : AppMain);