import React from 'react';
import InformationList from '../../scss/informationItem.scss';

class informationItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
                }
                this.onClick = this.onClick.bind(this);
                this.deleteClick = this.deleteClick.bind(this);
                this.inpShow = this.inpShow.bind(this);
                this.inpHide = this.inpHide.bind(this)
        }
        // 显示详细文章
        onClick() {
                let { changeId, id, setInformation } = this.props;
                changeId(id);
                setInformation(true);
        }
        // 删除列表
        deleteClick() {
                let { getId, id } = this.props;
                console.log(id)
                getId(id);
        }
        // 显示编辑框
        inpShow() {
                const id = this.props.id;
                let inp = document.getElementsByTagName('input')[id-1];
                let h3 = document.getElementsByTagName('h3')[id-1];
                h3.style.display = 'none';
                inp.style.display = "inline-block";
                inp.value = h3.innerHTML;
        }
        // 隐藏编辑框
        inpHide() {
                const id = this.props.id;
                let inp = document.getElementsByTagName('input')[id-1];
                let h3 = document.getElementsByTagName('h3')[id-1];
                h3.style.display = 'inline-block';
                inp.style.display = "none";
                h3.innerHTML = inp.value;
        }
	render() {
                const {  title, changeId, avatarUrl, time, id } = this.props;
                // const { className } = this.props;
                return(
                        <li>
                                <div className="inner">
                                        <div className="img_box">
                                                <img src={"src/img/" + avatarUrl} alt=""/>
                                        </div>
                                        <div className="intro">
                                                <h3 onClick={this.onClick} id="h3">{title}</h3>
                                                <input onBlur={this.inpHide} className="inp" type="text" id={"title" + id}/>
                                                <label onClick={this.inpShow} className="label" htmlFor={"title" + id}>编辑标题</label>

                                        </div>
                                        <div className="info">{time}</div>
                                        <div className="delete" onClick={this.deleteClick}>删除该内容</div>
                                </div>
                        </li>
                )
	}
}
export default informationItem