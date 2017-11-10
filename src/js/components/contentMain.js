import React from 'react';
import '../../scss/contentMain.scss';
import InformationList from './informationList';
// import ConfirmModel from './confirmModal';

class ContentMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		}
		// this.onHidden = this.onHidden.bind(this);
		// this.onShow = this.onShow.bind(this);
	}
	onShow() {
		this.setState({
			visible: true
		})
	}
	render() {
		const { setInformation, changeId } = this.props;
        return(
            <div className="contnet-main-body">
				<div className="first-row">
					<InformationList className="information-list" setInformation={setInformation} changeId={changeId}/>
				</div>
            </div>
        )

	}
}
export default ContentMain