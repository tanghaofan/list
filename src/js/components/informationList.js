import React from 'react';
import InformationItem from './informationItem';
import InformationList from '../../scss/informationList.scss';
// import ajax from '../common/ajax.js'

const data = [
    {
        "title": "magasa",
        "avatarUrl": "1.jpg",
        "time": "2017.11.1",
        "id": 1,
    },
    {
        "title": "程毅南",
        "avatarUrl": "2.jpg",
        "time": "2017.11.1",
        "id": 2,
    },
    {
        "title": "田吉顺",
        "avatarUrl": "3.jpg",
        "time": "2017.11.1",
        "id": 3,
    },
    {
        "title": "周源",
        "avatarUrl": "4.jpg",
        "time": "2017.11.1",
        "id": 4,
    },
    {
        "title": "科比",
        "avatarUrl": "5.jpg",
        "time": "2017.11.1",
        "id": 5,
    },
    {
        "title": "李申申",
        "avatarUrl": "6.jpg",
        "time": "2017.11.1",
        "id": 6,
    },
    {
        "title": "Raymond Wang",
        "avatarUrl": "7.jpg",
        "time": "2017.11.1",
        "id": 7,
    },
    {
        "title": "内马尔",
        "avatarUrl": "8.jpg",
        "time": "2017.11.1",
        "id": 8,
    },
    {
        "title": "c罗",
        "avatarUrl": "9.jpg",
        "time": "2017.11.1",
        "id": 9,
    },
    {
        "title": "梅西",
        "avatarUrl": "10.jpg",
        "time": "2017.11.1",
        "id": 10,
    }
]

// const data = Ajax()
class informationList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            list: [...data],
            id: null
        }
        console.log(this.getId)
        this.getId = this.getId.bind(this);
        this.addContent = this.addContent.bind(this);
	}
    componentWillMount() {
        let newList = [];
        data.forEach( (ele, index) => {
            ele.canInvited = true;
            newList.push(ele);
        });
        this.setState({
            list: newList
        });
        let list = newList;
        for (let i = list.length / 2; i < list.length; i ++) {
            list[i].canInvited = false;
        }
        this.onDealData();
    }
    shouldComponentUpdate(nextProps, newState) {
        this.props = nextProps;
        this.onDealData();
        return true;
    }
    getId(id) {
        this.setState({
            id
        })
        let newList = this.state.list;
        newList[id-1].canInvited = false;
        this.setState({
            list: newList
        })

        this.onDealData()

    }
    addContent() {
        let newList = this.state.list;
        console.log(newList)
        for(let i = 0; i < newList.length; i ++) {
            if (!newList[i].canInvited) {
                newList[i].canInvited = true;
                break;
            } 
        }
        console.log(newList)
        this.setState({
            list: newList
        })
        this.onDealData();
    }
	onDealData () {
		var row = [];
        let { changeId, setInformation } = this.props;
		this.state.list.forEach((ele, index) => {
            if (ele.canInvited === true) {
                row.push(
                    <InformationItem getId={this.getId} canInvited={ele.canInvited} key={ele.id} id={ele.id} title={ele.title} time={ele.time} avatarUrl={ele.avatarUrl} setInformation={setInformation} changeId={changeId}/>
                )
            }
		})
        this.row = row;
    }
	render() {
		const { changeId, setInformation } = this.props;
		
		const { className } = this.props;
		return(
            <div className={className} >
                <ul>
                    {
						this.row
					}
                </ul>
                <div onClick={this.addContent} className="addContent">增添新内容</div>
            </div>
        )
	}
}
export default informationList