import { Component } from "react";

import css from './modal.module.css'

export class Modal extends Component {
	render() {
		const {currentImage: {alt, src}, closeModal } = this.props
		return (
			<div className={css.backdrop}>
			<div className={css.modal}>
				<img src={`https://image.tmdb.org/t/p/w300`${src}} alt={alt} width="300"/>
				<button className={css.modal-button}>Close</button>
			</div>
		</div>

		)
	}
}