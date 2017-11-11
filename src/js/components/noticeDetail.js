import React from 'react';
import '../../scss/noticeDetail.scss';

const data = [
	{
        "title": "magasa",
		"content": "可以看到箭头函数在定义之后,this 就不会发生改变了，无论用什么样的方式调用它，this 都不会改变原因：箭头函数不会自动绑定局部变量，如this，arguments，super(ES6)，new.target(ES6)等所以箭头函数没有它自己的this值，箭头函数内的this值继承自外围作用域。在箭头函数中调用 this 时，仅仅是简单的沿着作用域链向上寻找，找到最近的一个 this 拿来使用[javascript] view plain copy。就不会发生改变了，无论用什么样的方式调用它，this 都不会改变原因：箭头函数不会自动绑定局部变量，如this，arguments，super(ES6)，new.target(ES6)等所以箭头函数没有。举例来说，React 不使用 HTML，而使用 JSX 。它打算抛弃 DOM，要求开发者不要使用任何 DOM 方法。它甚至还抛弃了 SQL ，自己发明了一套查询语言 GraphQL 。当然，这些你都可以不用，React 照样运行，但是就发挥不出它的最大威力。本文介绍 React 体系的一个重要部分：路由库React-Router。它是官方维护的，事实上也是唯一可选的路由库。它通过管理 URL，实现组件的切换和状态的变化，开发复杂的应用几乎肯定会用到。"
	}, {
		"title": "程毅南",
		"content": "我2012年下半年来知乎的时候，知乎的心理学基本是一片荒原，加“心理学”标签的，要么是个人情感困惑，要么是问 抖腿/挤痘痘/摸鼻子 什么的体现了什么性格。当时我也闲，大三，虽然在学术圈浸淫不久，但一直学习比较努力，所以专业素养还可以。在这片荒原之上，矬子里拔高个，居然也让我闯出了一片天地。在这个过程中，也结识了很多心理学方面非常专业、文笔很好、又热心的知友，比如 @动机在杭州， @王怡蕊， @清流， @丁若水， @采铜， @外星菜鸟  等等。"
	},
	{
		"title": "田吉顺",
		"content": "读综艺的诺兰封面故事，第一印象是肖像照都这么胶片感；然后采访时照例保温杯不离手，竟然还手戴佛珠，中年男形象更丰满了... 只可惜后边说到，去敦刻尔克勘景怕人认出放弃三大件行头，改穿汗衫短裤棒球帽，多年美好公共形象毁于一旦 ​​​​"
	},
	{
		"title": "周源",
		"content": "7月，在北京、上海的地铁、地下通道和写字楼里，知乎开始了第一次广告投放。相比请明星代言、醒目大号字体、直截了当的二维码，知乎的广告艰涩而模糊：海报上字数非常多，且不好读。「薛定谔，46岁，诺贝尔奖获得者合影中。距离回答『如何通俗地说明哥本哈根诠释存在哪些问题？』，还要再养两年的猫。」在人流量极大的地铁站，如果只是一眼扫过，很难理解广告内容。"
	},
	{
		"title": "科比",
		"content": "科比是NBA最好的得分手之一，生涯赢得无数奖项[1]  ，突破、投篮、罚球、三分球他都驾轻就熟，几乎没有进攻盲区，单场比赛81分的个人纪录就有力地证明了这一点。除了疯狂的得分外，科比的组织能力也很出众，经常担任球队进攻的第一发起人。另外科比还是联盟中最好的防守人之一，贴身防守非常具有压迫性。"
	},
	{
		"title": "李申申",
		"content": "李申申，女，1948年出生，1982年1月毕业于河南大学历史系，获学士学位。现为河南大学教育科学学院教授，教育学原理专业博士生导师，教育史专业硕士学位点牵头导师，全国比较教育研究会理事，河南省比较教育专业委员会理事长。俄罗斯国家赫尔岑师范大学高级访问学者."
	},
	{
		"title": "Raymond Wang",
		"content": "Raymond Wang律师了解不多，全都是在知乎上面根据他对于问题的回答方才有所了解，深为Wang律师的精准业务水平所折服，Wang律师所回答的问题均非常准确到位。"
	},
	{
		"title": "内马尔",
		"content": "2013年6月，转会至巴塞罗那足球俱乐部。[6-7]  7月，获得2013年联合会杯金球奖。[8-9]  2014年7月，内马尔以4球1助攻获得2014巴西世界杯铜靴奖。2015年6月，14-15赛季巴塞罗那夺得三冠王，内马尔成为欧洲冠军联赛和西班牙国王杯最佳射手。[10-11]  2016年8月21日，2016年里约热内卢奥运会男足决赛，巴西队6-5战胜德国队，首次夺得奥运男足金牌。内马尔破门+点球致胜，终圆奥运金牌梦。"
	},
	{
		"title": "c罗",
		"content": "克里斯蒂亚诺·罗纳尔多（Cristiano Ronaldo），1985年2月5日出生于葡萄牙马德拉岛丰沙尔，葡萄牙足球运动员，司职边锋/中锋，简称C罗，效力于西甲皇家马德里足球俱乐部，并身兼葡萄牙国家队队长"
	},
	{
		"title": "梅西",
		"content": "里奥·梅西（Lionel Messi），1987年6月24日出生于阿根廷圣菲省罗萨里奥市，阿根廷足球运动员，司职前锋，现效力于巴塞罗那足球俱乐部。"
	}
]
class NoticeDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	onClick() {
		const { setInformation } = this.props;
		setInformation(false);
	}
	render() {
		console.log(this.props)
		const { setInformation, id } = this.props;
        return(
            <div className="noticeDetal">
				<h1 className="noticeDetal-title">{data[id-1].title}</h1>
				<div className="noticeDetal-content">
					<div className="noticeDetal-content-detal">{data[id-1].content}</div>
				</div>
				<div className="noticeDetal-back" onClick={this.onClick.bind(this)}>返回上一页</div>
            </div>
        )
	}
}
export default NoticeDetail