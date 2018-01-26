import React from 'react';
import SvgIcon from '../svgIcon';
import {NavLink, Router} from 'react-router-dom';

export default class MenuBar extends React.Component {

	render() {
		const links = [
			{ title: 'jQuery->JS', path: 'home' },
			{ title: 'Learn JQuery', path: 'home' },
			{ title: 'Try it out', path: 'engine' },
			{ title: 'Blog', path: 'sample' },
			{ title: 'FAQ', path: 'readme' },
			{ title: 'Team', path: 'team' },
			{ title: 'Forum', path: 'chat', params: { room: 'home'}, customStyle: {marginLeft: '20%'}}
		]
		var navLinks = [];
		for (var i = 0; i < links.length; i++) {
			navLinks.push(
					<NavLink style={links[i].customStyle}
								key={links[i].title}
								to={links[i].path}
								target={links[i].target} 
								params={links[i].params}
								activeStyle={{
									fontWeight: 'bold',
									color: 'red'
								   }}
								> {links[i].title} </NavLink>);
		}
		return <div className="topBar">
			{navLinks}
			<a href="https://slack.babeljs.io/" title="Join us on Slack">
				<SvgIcon name="slack" />
			</a>
			<a href="https://twitter.com/babeljs" title="Follow us on Twitter">
				<SvgIcon name="twitter" />
			</a>
			<a href="https://github.com/babel/babel" title="Contribute on GitHub">
				<SvgIcon name="git" />
			</a>
		</div>;
	}
}
