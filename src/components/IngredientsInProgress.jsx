import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { RecipeContext } from '../context/RecipeContext';
import '../pages/RecipeDetails.css';

function IngredientsInProgress() {
  const { recipe } = useContext(RecipeContext);

  const parameter = 1;
  const recipeArray = Object.entries(recipe[0]);
  const ingredients = recipeArray
    .filter((item) => (
      item[1] && item[0].includes('Ingredient') && item[1].length > parameter));

  const ingredientsWithMeasures = [];

  ingredients.forEach((item, index) => {
    const igrdNumber = index + 1;
    const igrd = {
      name: item[1],
      measure: recipe[0][`strMeasure${igrdNumber}`],
    };
    ingredientsWithMeasures.push(igrd);
  });

  const renderIngredient = (igrd) => {
    const { name, measure } = igrd;
    if (measure.length <= parameter) {
      const newMeasure = parseInt(measure, 10);
      if (newMeasure < parameter) return `- ${name}`;
    }
    return `- ${name} | ${measure}`;
  };

  console.log('Fui chamado!');

  return (
    <Card className="instructions">
      <ListGroup variant="flush">
        { ingredientsWithMeasures.map((igrd, index) => (
          <ListGroup.Item
            data-testid={ `${index}-ingredient-name-and-measure` }
            className="ingredient"
            key={ igrd.name }
          >
            { igrd.measure ? renderIngredient(igrd) : `- ${igrd.name}` }
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default IngredientsInProgress;
