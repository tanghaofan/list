import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/action/mainAction';
import fetchdata from '../common/fetch';
import Content from '../containers/content';
import '../../scss/main.scss';

// fetchdata(//地址字符串).then(data => {
//    data 获取的数据
// });
class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			information: false
		}
	}
	render() {
		return (
            <div className="bodyer">  
				<Content className="content"/>	
            </div>
		);
	}
}
Main = connect((state) => state.MainReducer, (dispatch) => {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
})(Main);
export default Main