import React from 'react';
import {NavLink, Router} from 'react-router-dom';
import SvgIcon from '../svgIcon';
import styles from './menu.scss';

export default class MenuBar extends React.Component {

	render() {
		const links = [
			{ title: 'jQuery->JS', path: '/home' },
			{ title: 'Learn JQuery', path: '/learn' },
			{ title: 'Try it out', path: '/engine' },
			{ title: 'Blog', path: '/sample' },
			{ title: 'FAQ', path: '/readme' },
			{ title: 'Team', path: '/team' },
			{ title: 'Forum', path: '/chat', params: { room: 'home'}, customStyle: {marginLeft: '20%'}}
		]
		var navLinks = [];
		for (var i = 0; i < links.length; i++) {
			navLinks.push(
					<NavLink
						exact
						style={links[i].customStyle}
						className="link px1"
						activeClassName="selected"
						key={links[i].title}
						to={links[i].path}>
						{links[i].title}
					</NavLink>);
		}
		return <div className="topBar">
			{navLinks}
			<a href="https://slack.babeljs.io/" className="line-height-1 px1" title="Join us on Slack">
				<SvgIcon name="slack" width="20" height="20" />
			</a>
			<a href="https://twitter.com/babeljs" className="line-height-1 px1" title="Follow us on Twitter">
				<SvgIcon name="twitter" width="20" height="20" />
			</a>
			<a href="https://github.com/babel/babel" className="line-height-1 px1" title="Contribute on GitHub">
				<SvgIcon name="git" width="20" height="20" />
			</a>
		</div>;
	}
}
