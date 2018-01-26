import React from "react";

export default class SvgIcon extends React.Component {
	render() {
		var { name } = this.props;
		var url = {
			"logo": require("../assets/icons/logo.svg"),
			"slack": require("../assets/icons/slack.svg"),
			"twitter": require("../assets/icons/twitter.svg"),
			"git": require("../assets/icons/git.svg"),
		}[name];
		return <img src={url} height="25" width="25" />;
	}
}
