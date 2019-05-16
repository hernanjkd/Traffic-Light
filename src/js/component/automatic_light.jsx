import React from "react";

let timer = 0;
let light = 0;
let arr = ["red", "green", "yellow"];

export class AutomaticLight extends React.Component {
	constructor() {
		super();
		this.state = {
			SelectedLight: arr[light]
		};
	}

	render() {
		setTimeout(() => {
			this.setState({ SelectedLight: arr[light] });
			timer++;
			if (timer === 3 || timer === 7 || timer === 8) {
				light++;
			}
			if (timer === 8) {
				light = 0;
				timer = 0;
			}
		}, 1000);

		let redExtraClass =
			this.state.SelectedLight === "red" ? "selected" : "";
		let greenExtraClass =
			this.state.SelectedLight === "green" ? "selected" : "";
		let yellowExtraClass =
			this.state.SelectedLight === "yellow" ? "selected" : "";

		return (
			<div>
				<div id="trafficTop" />
				<div id="container">
					<div className={"red light " + redExtraClass} />
					<div className={"yellow light " + yellowExtraClass} />
					<div className={"green light " + greenExtraClass} />
				</div>
			</div>
		);
	}
}
