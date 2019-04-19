import React from 'react'
import PropTypes from 'prop-types'

// TODO: Você deve verificar se a receita existe
const RecipePage = ({ recipe }) => (
	<div>
		{recipe && (
			<React.Fragment>
				<img
					className="card-img-top img-fluid"
					src={recipe.thumbnail}
					alt=""
				/>
				<div className="card-body">
					<h5 className="card-title">{recipe.title}</h5>
					<p className="card-text">
						<strong>Ingredients: </strong>
						{recipe.ingredients}
					</p>
				</div>
			</React.Fragment>
		)}
		{!recipe && (
			<React.Fragment>
				<div className="card-body">
					<h5 className="card-title">Error</h5>
					<p className="card-text">
						<strong>Recipe not found</strong>
					</p>
				</div>
			</React.Fragment>
		)}
	</div>
)

RecipePage.propTypes = {
	recipe: PropTypes.object,
}

export default RecipePage
